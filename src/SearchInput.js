import React, { Component } from 'react';

export default class SearchInput extends Component {
  onChange = (e) => {
    this.props.onChange(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  };

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          value={searchTerm}
          onChange={this.onChange}
          ref={node => this.input = node}
        />
        <button
          type='submit'
          disabled={searchTerm.length < 2}
        >
          Search
        </button>
      </form>
    )
  }
};
