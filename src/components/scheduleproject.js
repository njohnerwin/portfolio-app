import React from 'react';
import Project from './projecttemplate';

function ScheduleProject() {
  const description = 
    "A barebones time management app. This was before we learned any backend technologies, so it's using local storage for everything. Fun! Needless to say, there are better alternatives out there - the focus here is really on design and function, rather than commercial viability. I mostly just think this one looks nice."

  return(
    <Project 
      name={"Work Day Scheduler"}
      techs={"HTML, JS, Moment.js"}
      description={description}
      github={"https://github.com/njohnerwin/Scheduler-NJE"}
      deploy={"https://njohnerwin.github.io/Scheduler-NJE/"}
      deploytype={"Web"}
      iid={"schedule-bg"}
    />
  )
}

export default ScheduleProject;