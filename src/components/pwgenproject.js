import React from 'react';
import Project from './projecttemplate';

function PasswordProject() {
  const description = 
    "A super basic password generator that generates (probably insecure) randomized passwords. This isn't very useful or very complex, but it's the first thing I ever made where I was proud of the way that it looked and felt. Just don't try to make your next password with it." 

  return(
    <Project 
      name={"Password Generator"}
      techs={"JS, HTML"}
      description={description}
      github={"https://github.com/njohnerwin/JSPWgen-NJE"}
      deploy={"https://njohnerwin.github.io/JSPWgen-NJE/"}
      deploytype={"Web"}
      iid={"password-bg"}
    />
  )
}

export default PasswordProject;