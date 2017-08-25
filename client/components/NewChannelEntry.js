import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store';

/** Write your `connect` component below! **/
const mapStateToProps = function (state, ownProps) {
  return {
    newChannelEntry: state.newChannelEntry
  };
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      // console.log(evt.target.value + "--------------------")
      dispatch(writeChannelName(evt.target.value));
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const name = evt.target.channelName.value;
      // console.log(ownProps, evt.target.value + '-----------------------------------')     
      console.log(ownProps);
      dispatch(postChannel( {name} , ownProps.history ));  // this is ES6 object destructuring! It's equivalent to { name: name }
    }
  };
}


export function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input 
          onChange={props.handleChange}
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name"
          value={props.newChannelEntry}
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