import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/_Aux';
import withClass from '../../../hoc/withClass2';

class Person extends Component {
  constructor (props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount () {
    console.log('[Person.js] Inside componentWillMount')
  }

  componentDidMount () {
    if (this.props.position === 0) {
      this.textInput.focus();
    }
    console.log('[Person.js] Inside componentDidMount');
  }

  render () {
    console.log('[Person.js] Inside render');

    return (
      <Aux classes={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input ref={(input) => {this.textInput = input}} type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);