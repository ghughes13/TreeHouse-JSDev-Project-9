import React, { Component } from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

    render() {
      return (
        <nav class="main-nav">
          <ul>
            <li><a href='#'>Cats</a></li>
            <li><a href='#'>Dogs</a></li>
            <li><a href='#'>Computers</a></li>
          </ul>
        </nav>
      )
    }
  };


export default Quotes
