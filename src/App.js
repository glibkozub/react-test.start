import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Vova', age: 29},
      {name: 'Petro', age: 28},
    ],
    showPersons: false,
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 29},
        {name: 'Petro', age: 28},
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} years={this.state.persons[0].age}
                  change={this.nameChangeHandler}/>
          <Person name={this.state.persons[1].name} years={this.state.persons[1].age}/>
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
