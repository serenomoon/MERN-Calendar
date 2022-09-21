import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetACtiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();

    const {
        events, activeEvent
    } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetACtiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        
        if( calendarEvent._id ) {
            dispatch( onUpdateEvent({ ...calendarEvent }))
        } else {
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }


    const startDeletingEvent = () => {
        dispatch( onDeleteEvent() );
    }

    return {
        //*Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //*Metodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }

}
