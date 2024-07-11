import './Exercise10.css';
import { useState, useEffect } from 'react';
import Event from './Event';
import { v4 as uuidv4 } from 'uuid';

const BASE_EVENT_API = 'http://localhost:3000/events';

// Fetch all events from db
const fetchEvents = (setEvents) => {
  fetch(BASE_EVENT_API)
      .then((res) => res.json())
      .then((data) => {
        const events = data.map(event => ({ ...event, status: 'complete' }));
        setEvents(events);
      });
}

// Post an event
const postEvent = (newEvent, setEvents, events) => {
  fetch(BASE_EVENT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  })
  .then((res) => res.json())
  .then((data) => {
    setEvents(events.map((event) => {
      if (event.id === data.id) {
        return { ...newEvent, status: 'complete' }
      }
      return event;
    }));
  })
  .catch((err) => {
    console.log(err);
  });
}

// Delete an event
const deleteEvent = (id, setEvents, events) => {
  fetch(`${BASE_EVENT_API}/${id}`, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then((data) => {
    setEvents(events.filter((event) => event.id !== data.id));
  })
  .catch((err) => {
    console.log(err);
  });
}

// Put an event
const putEvent = (id, newEvent, setEvents, events) => {
  fetch(`${BASE_EVENT_API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  })
  .then((res) => res.json())
  .then((data) => {
    setEvents(events.map((event) => {
      if (event.id === data.id) {
        return { ...data, status: 'complete' };
      }
      return event;
    }));
  })
  .catch((err) => {
    console.log(err);
  });
}

export default function Exercise10() {
  const [events, setEvents] = useState([]);

  // Fetch all events from db initially
  useEffect(() => {
    fetchEvents(setEvents);
  }, [])

  // Add an empty event input component, will be in input state
  const handleAdd = () => {
    const newEvent = {
      eventName: '',
      startDate: '',
      endDate: '',
      id: uuidv4(),
      status: 'input',
    }

    setEvents([...events, newEvent]);
  }

  // Post an event, event becomes complete state
  const handlePost = (event) => {
    const newEvent = {
      eventName: event.eventName,
      startDate: event.startDate,
      id: event.id,
      endDate: event.endDate,
    }

    postEvent(newEvent, setEvents, events);
  }

  // Cancel an add or edit
  const handleCancel = (event) => {
    // If canceling an edit, restore old value
    if (event.status === 'edit') {
      setEvents(events.map((e) => {
        if (e.id === event.id) {
          const oldEvent = {
            id: event.save.id,
            eventName: event.save.eventName,
            startDate: event.save.startDate,
            endDate: event.save.endDate,
          }

          return { ...oldEvent, status: 'complete' };
        }
        return e;
      }))
    // Else remove the input component
    } else {
      setEvents(events.filter((e) => e.id !== event.id))
    }
  }

  // Delete an event
  const handleDelete = (event) => {
    deleteEvent(event.id, setEvents, events);
  }

  // Turn an event to edit state
  const handleEdit = (event, oldEvent) => {
    setEvents(events.map((e) => {
      // Find the event, change state to edit and save the value
      if (e.id === event.id) {
        return { ...e, status: 'edit', save: oldEvent };
      }
      return e;
    }));
  }

  // Updating an existing event
  const handleSave = (event) => {
    const newEvent = {
      eventName: event.eventName,
      startDate: event.startDate,
      id: event.id,
      endDate: event.endDate,
    }
    // Make a PUT request
    putEvent(event.id, newEvent, setEvents, events);
  }
  
  return (
    <div id="event-list-app">
      <div className="add-event-list">
        <button className="add-event-list-button" onClick={handleAdd}>
          Add New Event
        </button>
      </div>
      <div className="event-list">
        <table className="event-list-table">
          <thead className="event-list-table__header">
            <tr>
              <th>Event</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="event-list-table__body">
            {events.map((event) => {
              return <Event 
                        key={event.id}
                        handlePost={handlePost}
                        handleCancel={handleCancel}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleSave={handleSave}
                        event={event} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}