import axios from 'axios';
import socket from '../socket';

// ACTION TYPES

const GET_CHANNEL = 'GET_CHANNEL';
const GET_CHANNELS = 'GET_CHANNELS';

// ACTION CREATORS

export function getChannel (channel) {
    const action = { type: GET_CHANNEL, channel };
    return action;
  }

export function getChannels (channels) {
    return {
      type: GET_CHANNELS,
      channels: channels
    };
  }

// THUNK CREATORS

export function fetchChannels () {
    return function (dispatch) {
      axios.get('/api/channels')
        .then(res => res.data)
        .then(channels => dispatch(getChannels(channels)));
    }
  }
  
export function postChannel (channel, history) { // expecting channel to an object like: 
  
    return function thunk (dispatch) {
      return axios.post('/api/channels', channel)
        .then(function (res) { return res.data })
        .then(function (newChannel) {
          dispatch(getChannel(newChannel));
          console.log('at postChannel Dispatch -0-000000')
          history.push(`/channels/${newChannel.id}`);
          socket.emit('new-channel', newChannel);
        });
    };
}

// REDUCER

export default function channelsReducer (state = [], action) {

  switch (action.type) {

    case GET_CHANNELS:
      return { ...state, channels: action.channels };

    case GET_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.channel]
        };

    default:
      return state;
  }

}
