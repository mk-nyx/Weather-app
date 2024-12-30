# Weather Application 🌦️
---
https://weather-app-7et9.onrender.com
---
This project is a weather application built using **Node.js**, **Express.js**, **EJS**, and the **OpenWeather API**. It allows users to search for real-time weather conditions in any city worldwide and presents the information in a simple yet elegant UI.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation and Setup](#installation-and-setup)
6. [Application Overview](#application-overview)
7. [How It Works](#how-it-works)
8. [Future Enhancements](#future-enhancements)
9. [Acknowledgments](#acknowledgments)

---

# Introduction

Weather affects every aspect of our lives, from what we wear to how we plan our day. Having access to real-time weather information can significantly improve decision-making and enhance daily convenience.

This weather application is a simple yet powerful tool designed to make weather data accessible and easy to understand. Users can search for any city's current weather conditions, and the application fetches real-time data from the OpenWeather API.

This project serves as a learning experience to understand backend development, working with APIs, and creating dynamic user interfaces with templating engines like EJS.

---

## Features

### 1. **City-based Weather Search**
   Users can input any city name to receive real-time weather data, regardless of the location.

### 2. **Real-Time Weather Data**
   The application leverages the OpenWeather API to fetch accurate and up-to-date weather information.

### 3. **Dynamic UI with EJS**
   The user interface is dynamically rendered using the EJS templating engine, ensuring a smooth and interactive experience.

### 4. **Weather Metrics**
   The application displays:
   - Current temperature (in both Celsius and Fahrenheit).
   - "Feels like" temperature.
   - Humidity levels.
   - Atmospheric pressure.
   - Wind speed.

### 5. **Responsive Design**
   The application is accessible across desktops, tablets, and mobile devices.

---

## Tech Stack

This application is built using the following technologies:

### Backend
- **Node.js**: A powerful JavaScript runtime for building server-side applications.
- **Express.js**: A lightweight framework for creating robust web servers and managing routes.

### Frontend
- **EJS**: A templating engine for dynamically rendering HTML pages with embedded JavaScript.

### APIs
- **OpenWeather API**: Provides real-time weather data, including temperature, humidity, and wind speed.

---

## Prerequisites

To run this project, ensure you have the following installed on your system:
1. **Node.js** (version 16 or later)
2. **npm** (Node Package Manager)

Additionally, you will need to obtain an API key from [OpenWeather API](https://openweathermap.org/api).

---

## Installation and Setup

Follow these steps to set up and run the application locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
### 2. Install Dependencies
Once you have cloned the repository, navigate to the project directory and install the required dependencies using npm:

```bash
npm install
```
### 3. Configure Environment Variables
The application requires an API key from the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. You need to set up this key in an environment variable.

1. Create a file named `.env` in the root directory of the project.
2. Add the following line to the `.env` file:

```bash
API_KEY=your_openweather_api_key
```
### 4. Run the Application
After configuring the environment variables, you can start the application by running the following command:

```bash
node app.js
```
## Application Overview
This weather application provides an intuitive and user-friendly interface for checking current weather conditions in any city. The following features are implemented:

- **City Search**: Enter the name of any city to get real-time weather data.
- **Weather Details**: Displays temperature, humidity, atmospheric pressure, and a "feels like" temperature.
- **Units**: Temperature is shown in both Celsius and Fahrenheit.
- **Dynamic Interface**: The app uses EJS templates to render weather data dynamically.

The project uses the following technologies and tools:

- **Node.js & Express**: To build the backend server and handle API requests.
- **OpenWeather API**: For fetching real-time weather data.
- **EJS**: To dynamically render data on the front end.
- **dotenv**: To securely manage sensitive environment variables.
---
### How It Works
1. **User Input**: The user enters a city name in the search form.
2. **API Request**: The backend sends a request to the OpenWeather API using the city name and API key.
3. **Fetch Data**: Weather data (temperature, humidity, etc.) is fetched from the API.
4. **Render Data**: The backend sends the weather data to the frontend, which is displayed on the webpage using EJS templates.
5. **Error Handling**: If the city is not found, an error message is shown to the user.

The application uses Express for the server, Axios for API requests, and EJS for rendering dynamic content on the frontend.

---

### Future Enhancements
While the current version of the application provides basic weather data, several enhancements can be made to improve functionality and user experience:

1. **Multiple City Support**: Allow users to search for weather data for multiple cities simultaneously.
2. **Weather Forecast**: Implement a 7-day weather forecast feature to show future weather conditions.
3. **Location-based Weather**: Integrate geolocation to fetch weather data based on the user's current location.
4. **User Interface Improvements**: Improve the UI with better styling, animations, and interactive elements.
5. **Historical Data**: Provide historical weather data for the past few days or weeks.
6. **Weather Alerts**: Add notifications for severe weather conditions, such as storms or floods.

These enhancements will make the application more feature-rich and user-friendly.

---
### Acknowledgments
We would like to thank the following resources and tools that contributed to the development of this application:

1. **OpenWeather API**: For providing the weather data used in the application. [OpenWeather API](https://openweathermap.org/api)
2. **Node.js**: For providing a powerful and scalable backend framework. [Node.js](https://nodejs.org/)
3. **Express**: For simplifying the creation of the web server. [Express](https://expressjs.com/)
4. **EJS**: For enabling dynamic HTML templating. [EJS](https://www.npmjs.com/package/ejs)
5. **Axios**: For making API requests. [Axios](https://axios-http.com/)

Special thanks to all the open-source developers and communities that have made these tools available and helped shape the project.

---
