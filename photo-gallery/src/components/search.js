import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './normalize.css';
import morwStyles from './styles.css';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Every strike brings me closer to the next home run.",
      attribute: "-Babe Ruth"
    };
      this.getNewQuote = this.getNewQuote.bind(this);
  }

    getNewQuote() {
      let newstuff = quoteArray[Math.floor(Math.random()*quoteArray.length)];
      let newQuote = newstuff.quote;
      let newattribute = newstuff.source;
      document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];

      this.setState({
        quote: newQuote,
        attribute: newattribute
      });
    }

    render() {
      return (
        <form class="search-form">
          <input type="search" name="search" placeholder="Search" required/>
          <button type="submit" class="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>
      )
    }
  };


ReactDOM.render(<Quotes />, document.getElementById('root'));
