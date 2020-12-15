import React from 'react';
// import { Grid, Cell } from 'react-mdl';
// import ghLogo from '../pictures/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png'; 
// import hrLogo from '../pictures/PNG (Raster)/heroku-logotype-vertical-black.png';
// import webLogo from '../pictures/hyperlink.png';

function Project(props) {
  //props required: 
  //name (string) 
  //description (long string) 
  //github (href) 
  //deploy (href) 
  //deploytype (Heroku / Web / none)
  //iid (class name)

  // let deployLogo;
  // let logoClass;
  // let logoAlt;

  // switch(props.deploytype) {
  //   case 'Heroku':
  //     deployLogo = hrLogo;
  //     logoClass = 'hrlogo-link'
  //     logoAlt = 'live deployment link'
  //     break;
  //   case 'Web':
  //     deployLogo = webLogo;
  //     logoClass = 'weblogo-link';
  //     logoAlt = 'live deployment link'
  //     break;
  //   default:
  //     break;
  // }
  
  return(
    <div style={{margin: 'auto'}} className="project-wrapper">
      <div className="project-grid">
        <div className="image-div" id={props.iid}></div>
        <div className="project-text">
          <h3 className="project-header">{props.name} {"\n"}</h3>
          <p className="techs-tag">Uses: {props.techs}</p>
          <p className="profile-text">
          {props.description}
          </p>
          <a className="project-link" href={props.github}> {'>'} GitHub repository</a>
          <br></br>
          <a className="project-link" href={props.deploy}> {'>'} Live deployment</a>
        </div>
      </div>
      <div className="project-border">
        <a id="home-link" href="/">(back to top)</a>
      </div>
    </div>
  )
}

export default Project;