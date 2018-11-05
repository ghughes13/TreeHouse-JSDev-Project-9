import React, { Component } from 'react';


class NoResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      };
    }

    render() {
      return (
        <li class="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li> 
      )
    }
  };

export default NoResults
