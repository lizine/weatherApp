import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //[city,city,city] new array! Don't manipulate the state
      //this is nonES6 way: return state.concat([ action.payload.data ]);

  }
  return state;
}
