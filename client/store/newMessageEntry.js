import axios from 'axios';
import socket from '../socket';

// ACTION TYPES

const WRITE_MESSAGE = 'WRITE_MESSAGE';

// ACTION CREATORS

export function writeMessage (content) {
    const action = { type: WRITE_MESSAGE, content };
    return action;
  }

// THUNK CREATORS

export function postMessage (message) {
    
      return function thunk (dispatch) {
        return axios.post('/api/messages', message)
          .then(res => res.data)
          .then(newMessage => {
            const action = getMessage(newMessage);
            dispatch(action);
            socket.emit('new-message', newMessage);
          });
      }
    
    }

// REDUCER

export default function newMessageEntryReducer (state = [], action) {

  switch (action.type) {

    case WRITE_MESSAGE:
    return {
      ...state,
      newMessageEntry: action.content
    };

    default:
      return state;
  }

}
