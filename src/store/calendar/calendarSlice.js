import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños Samus',
    notes: 'Hay que festejar',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Saulo'
    }
  
  };

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetACtiveEvent: (state,{payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state,{payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state,{payload}) => {
            state.events = state.events.map( event => {
                if ( event._id === payload._id ){
                    return payload;
                }

                return event;
            });
        },
        onDeleteEvent: (state) => {
            if(state.activeEvent){
                state.events = state.events.filter( event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        }
        
    }
});


export const { onSetACtiveEvent, onAddNewEvent,onUpdateEvent,onDeleteEvent } = calendarSlice.actions;