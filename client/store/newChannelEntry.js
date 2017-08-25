import axios from 'axios';
import socket from '../socket';

// ACTION TYPES

const WRITE_CHANNEL_NAME = 'WRITE_CHANNEL_NAME';

// ACTION CREATORS

export function writeChannelName (channelName) {
    const action = { type: WRITE_CHANNEL_NAME, channelName };
    return action;
  }

// THUNK CREATORS

// export function postChannel (channel, history) { // expecting channel to an object like: 
    
//     return function thunk (dispatch) {
//       return axios.post('/api/channels', channel)
//         .then(function (res) { return res.data })
//         .then(function (newChannel) {
//           dispatch(getChannel(newChannel));
//           console.log('at postChannel Dispatch -0-000000')
//           history.push(`/channels/${newChannel.id}`);
//           socket.emit('new-channel', newChannel);
//         });
//     };
// }

// REDUCER

export default function newChannelEntryReducer (state = [], action) {

  switch (action.type) {

    case WRITE_CHANNEL_NAME:
    return {
      ...state,
      newChannelEntry: action.channelName
    };

    default:
      return state;
  }

}
