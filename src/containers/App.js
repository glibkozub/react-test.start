import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      persons: [
        {id: 'asfd', name: 'Vova', age: 29},
        {id: 'frew', name: 'Petro', age: 28},
        {id: 'asfw', name: 'Vakula', age: 38},
      ],
      showPersons: false,
    };

    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount () {
    console.log('[App.js] Inside componentWillMount')
  }

  componentDidMount () {
    console.log('[App.js] Inside componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     {id: 'asfd', name: 'Vova', age: 29},
  //     {id: 'frew', name: 'Petro', age: 28},
  //     {id: 'asfw', name: 'Vakula', age: 38},
  //   ],
  //   showPersons: false,
  // };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
