import React from 'react';
import Project from './projecttemplate';

function WeatherProject() {
  const description = 
    "A simple weather forecast dashboard utilizing the OpenWeather API to show current weather and a five-day forecast for your location. Allows users to search for other cities. Very simple app with barebones visual design, but provided early practice with utilizing third-party APIs and promises in a browser environment."

  return(
    <Project 
      name={"OpenWeatherAPI Dashboard"}
      techs={"JQuery, OpenWeather API"}
      description={description}
      github={"https://github.com/njohnerwin/weathercast-NJE"}
      deploy={"https://njohnerwin.github.io/weathercast-NJE/"}
      deploytype={"Web"}
      iid={"weather-bg"}
    />
  )
}

export default WeatherProject;