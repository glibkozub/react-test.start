import React from 'react';
import Person from './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>I'm a {props.name} and I'm {props.years} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;