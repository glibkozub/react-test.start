import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ')
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
};

export default cockpit