import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store';

/** Write your `connect` component below! **/
const mapStateToProps = function (state) {
  return {
    newChannelEntry: state.newChannelEntry
  };
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      dispatch(writeChannelName(evt.target.value));
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const name = evt.target.newChannelEntry.value;
      dispatch(postChannel({ name }));  // this is ES6 object destructuring! It's equivalent to { name: name }
    }
  };
}


export function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry}
          onChange={props.handleChange}
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter channel name"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);

export default Container;