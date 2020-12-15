import React from 'react';
import html5 from '../badges/html5.png';
import css from '../badges/css3.png';
import js from '../badges/JS.png';
import jq from '../badges/jQuery.png';
import github from '../badges/github-logo.png';
import express from '../badges/express.png';
import mern from '../badges/mern.jpg';
import mongoDB from '../badges/mongodb.png';
import mysql from '../badges/MySQL.jpg';
import nodeJS from '../badges/nodeJS.png';
import npm from '../badges/npm_logo.png';

function SkillsList() {
  return (
    <div id="skills-list">
      <img src={html5} className="badge" alt="HTML5"></img>
      <img src={css} className="badge" alt="CSS"></img>
      <img src={js} className="badge" alt="JavaScript"></img>
      <img src={jq} className="badge" alt="jQuery"></img>
      <img src={github} className="badge" alt="GitHub"></img>
      <img src={express} className="badge" alt="Express"></img>
      <img src={mern} className="badge" alt="MERN Stack"></img>
      <img src={mongoDB} className="badge" alt="MongoDB"></img>
      <img src={mysql} className="badge" alt="MySQL"></img>
      <img src={nodeJS} className="badge" alt="Node.js"></img>
      <img src={npm} className="badge" alt="NPM"></img>
    </div>
  );
}

export default SkillsList;