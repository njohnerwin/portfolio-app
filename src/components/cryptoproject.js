import React from 'react';
import Project from './projecttemplate';

function CryptoProject() {
  const description = 
    "A simple webpage designed to help users solve simple substitution ciphers - cryptograms where each letter in the English alphabet is mapped 1:1 to another. These are frequently used as lazy fictional languages and as a casual word/logic puzzle, similar to Sudoku or a crossword puzzle. This page automatically replaces letters as they're solved, eliminating the busywork from the process and helping you find the solution faster.";

  return(
    <Project 
      name={"crypto-solve"}
      techs={"JS, React"}
      description={description}
      github={"https://github.com/njohnerwin/crypto-solve"}
      deploy={"https://powerful-inlet-57986.herokuapp.com/"}
      deploytype={"Heroku"}
      iid={"crypto-bg"}
    />
  )
}

export default CryptoProject;