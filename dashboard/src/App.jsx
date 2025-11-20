import { useState } from 'react';
import CalendarView from './components/CalendarView';
import './components/calendar.css';
import { Button } from './components/Button';
import GuildDropdown from './components/GuildDropdown';
import Header from './components/Header';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [attendanceDates, setAttendanceDates] = useState([
    '2025-11-17',
    '2025-11-19',
  ]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
      />

      <main className="px-4 pt-[120px] pb-6 md:px-8 lg:px-40">
        <div className="flex justify-end mb-4">
          <GuildDropdown />
        </div>

        <h1 className="text-2xl text-black mb-4">출석 캘린더</h1>
        <div className="space-y-4">
          <CalendarView attendanceDates={attendanceDates} />
        </div>
      </main>
    </>
  );
}

export default App;
