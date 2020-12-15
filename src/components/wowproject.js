import React from 'react';
import Project from './projecttemplate';

function WowProject() {
  const description = 
    "A SQL-based website designed for users of the video game 'World of Warcraft' to help guild leaders manage 'raids': large coordinated dungeon runs where groups of 10-40 players work together to complete highly complex PvE (player vs. environment) combat challenges. The app has a working user system and a database for user and team information. It allows for role assignment, and communicates with Blizzard's WoW profile API to get information on the players in each team. This was a group project, so I had help from Drew Rarus, Hunter Gruszczynski, and Adsana Sayasith."

  return(
    <Project 
      name={"WoW Raidbuilder"}
      techs={"Express, JQuery, Handlebars, Sequelize"}
      description={description}
      github={"https://github.com/njohnerwin/project-2-uconn"}
      deploy={"https://wow-raidbuilder.herokuapp.com/"}
      deploytype={"Heroku"}
      iid={"wow-bg"}
    />
  )
}

export default WowProject;