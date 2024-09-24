const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv=require('dotenv');
const app = express();
dotenv.config();

// To store the fetched weather data
let weatherResult = {};

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Route to display the result
app.get("/result", function (req, res) {
    if (Object.keys(weatherResult).length === 0) {
        res.redirect("/"); // Redirect to home if no data is available
    } else {
        res.render("index.ejs",{result:weatherResult});
    }
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "0fc2a84c42ce12ec041bacd1ac2474de";
    const unit = req.body.unit === "Celsius" ? "metric" : "imperial";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

    https.get(url, function (response) {
        if (response.statusCode === 200) {
            let data = "";

            response.on("data", function (chunk) {
                data += chunk;
            });

            response.on("end", function () {
                try {
                    const weatherData = JSON.parse(data);
                    const utc_ms = (parseInt(weatherData.dt, 10) + parseInt(weatherData.timezone, 10)) * 1000;
                    const timeString = new Date(utc_ms).toUTCString();
                    const icon = weatherData.weather[0].icon;

                    // Save the fetched data in the global object
                    weatherResult = {
                        temp: weatherData.main.temp,
                        weatherDescription: weatherData.weather[0].description,
                        imageURL: `https://openweathermap.org/img/wn/${icon}@2x.png`,
                        humidity: weatherData.main.humidity,
                        feelsLike: weatherData.main.feels_like,
                        city: weatherData.name,
                        country: weatherData.sys.country,
                        timeString: timeString,
                        pressure: weatherData.main.pressure,
                        unit: req.body.unit
                    };

                    // Redirect to the result page
                    res.redirect("/result");
                } catch (err) {
                    console.error("Error parsing weather data: ", err.message);
                    res.status(500).send("Internal Server Error");
                }
            });
        } else {
            console.error(`API request failed with status code: ${response.statusCode}`);
            if (response.statusCode === 404) {
                res.status(404).send("<h1>City not found</h1>");
            } else {
                res.status(response.statusCode).send("<h1>An error occurred while fetching weather data</h1>");
            }
        }
    }).on("error", function (e) {
        console.error("Error with the request: ", e.message);
        res.status(500).send("<h1>Failed to fetch weather data</h1>");
    });
});
const PORT =process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`The server is running on port ${PORT}`);
});