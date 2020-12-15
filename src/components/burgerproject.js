import React from 'react';
import Project from './projecttemplate';

function BurgerProject() {
  const description = 
    "Mostly just intended as a goofy practice assignment, the Burger Time app used Handlebars' templating engine and a SQL database to allow users to add burgers to an active list and 'devour' them, changing their state. It's not beautiful and it serves no practical purpose, but I have a soft spot for this assignment anyway. It was the first time we ever had to deploy a live database app, so it was a fun experiment that taught me a lot."

  return(
    <Project 
      name={"Burger Time"}
      techs={"Handlebars, MySQL, Express"}
      description={description}
      github={"https://github.com/njohnerwin/burger-NJE"}
      deploy={"https://burgertime-nje.herokuapp.com/"}
      deploytype={"Heroku"}
      iid={"burger-bg"}
    />
  )
}

export default BurgerProject;