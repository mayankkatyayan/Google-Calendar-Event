import './App.css';
import { use, useEffect, useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';


function App() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [events, setEvents] = useState([]);
  const [filterDate, setFilterDate] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();



  useEffect(() => {
    if (session) {
      fetchCalendarEvents();
    }
  }, [session]);

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar.readonly',
      },
    });
    if (error) {
      console.error('Error signing in: with supabase', error);
      alert('Error signing in with Google.');
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function fetchCalendarEvents() {
    if (!session || !session.provider_token) {
      console.error('Session or token missing');
      return;
    }
    try {
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session.provider_token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.items) {
        setEvents(data.items);
      } else {
        console.error('No events found', data);
      }
    } catch (error) {
      console.error('Error fetching Calendar events:', error);
    }
  }

  return (
    <div className="App">
      <div style={{ width: '400px', margin: '30px auto' }}>
        {session ? (
          <>
          <div className='header'>
            <h2>Hey there, {session.user.email}</h2>
            
            </div>
            <hr />
            <div className="filter-container">
            <label htmlFor="filter-date">Filter Events by Date: </label>
            <input
              id="filter-date"
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            </div>
            <div className="events-container">
            <h3>Google Calendar Events</h3>
            <table border="1" style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {events
                  .filter((event) => {
                    if (!filterDate) return true;
                    const eventDate = new Date(event.start.dateTime || event.start.date)
                      .toISOString()
                      .split('T')[0];
                    return eventDate === filterDate;
                  })
                  .map((event) => (
                    <tr key={event.id}>
                      <td>{event.summary}</td>
                      <td>{new Date(event.start.dateTime || event.start.date).toLocaleString()}</td>
                      <td>{new Date(event.end.dateTime || event.end.date).toLocaleString()}</td>
                    </tr>
                  ))}
                {events.filter((event) => {
                  if (!filterDate) return true;
                  const eventDate = new Date(event.start.dateTime || event.start.date)
                    .toISOString()
                    .split('T')[0];
                  return eventDate === filterDate;
                }).length === 0 && (
                    <tr>
                      <td colSpan="3">No events available for the selected date.</td>
                    </tr>
                  )}
              </tbody>
            </table>
            </div>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <div className="login-container">
            <h2>Sign in with Google</h2>
          <button onClick={googleSignIn}>Sign in with Google</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
