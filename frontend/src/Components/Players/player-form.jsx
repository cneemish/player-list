import React, { Component } from 'react';
import axios from 'axios';

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      age: '',
      currentTeam: '',
      message: '', // To display success/error messages
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Submit form data
  submitPlayer = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/players', this.state)
      .then((response) => {
        this.setState({ message: 'Player added successfully!' });

        // Reset form fields after submission
        this.setState({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          age: '',
          currentTeam: '',
        });

        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ message: 'Error adding player. Try again.' });
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div className='row'>
        <h1 className='center'>Add a New Player</h1>

        {this.state.message && (
          <div className="alert">
            <p>{this.state.message}</p>
          </div>
        )}

        <form className='col s12' onSubmit={this.submitPlayer}>
          <div className='row'>
            <div className='input-field col s6'>
              <input 
                placeholder='First Name' 
                id='first_name' 
                type='text' 
                className='validate'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='first_name'>First Name</label>
            </div>
            <div className='input-field col s6'>
              <input 
                placeholder='Last Name' 
                id='last_name' 
                type='text' 
                className='validate'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='last_name'>Last Name</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s6'>
              <input 
                placeholder='Phone' 
                id='phone' 
                type='text' 
                className='validate'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <label htmlFor='phone'>Phone</label>
            </div>
            <div className='input-field col s6'>
              <input 
                placeholder='Email' 
                id='email' 
                type='email' 
                className='validate'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s6'>
              <input 
                placeholder='Age' 
                id='age' 
                type='number' 
                className='validate'
                name='age'
                value={this.state.age}
                onChange={this.handleChange}
              />
              <label htmlFor='age'>Age</label>
            </div>
            <div className='input-field col s6'>
              <input 
                placeholder='Current Team' 
                id='current_team' 
                type='text' 
                className='validate'
                name='currentTeam'
                value={this.state.currentTeam}
                onChange={this.handleChange}
              />
              <label htmlFor='current_team'>Current Team</label>
            </div>
          </div>

          <button className='btn waves-effect waves-light' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
