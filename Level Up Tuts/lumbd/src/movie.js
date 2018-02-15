import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    stock: PropTypes
    desc: PropTypes.string
  }

  // static defaultProps = {
  //   desc: 'Description not available'
  // }

  render() {
    return (
      <div>
        <h3>{ this.props.stock }</h3>
      </div>
    );
  }
}

export default Movie;
