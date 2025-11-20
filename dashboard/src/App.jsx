import { useState } from 'react';
import CalendarView from './components/CalendarView';
import './components/calendar.css';
import { Button } from './components/Button';
import GuildDropdown from './components/GuildDropdown';
import Header from './components/Header';
import { PersonalStatsCard } from './components/PersonalStatsCard';
import { RankingCard } from './components/RankingCard';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [attendanceDates, setAttendanceDates] = useState([
    '2025-11-17',
    '2025-11-19',
  ]);

  // 임시 데이터
  const personalStats = {
    attendanceCount: 5,
    streakDays: 3,
    studyTotal: 45,
  };

  const rankingData = [
    { username: '여빈', hours: 45 },
    { username: '희주', hours: 38 },
    { username: '돌쇠', hours: 32 },
    { username: '이슬', hours: 30 },
  ];

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
          {/* 통계 카드 */}
          <div className="flex justify-center gap-12 flex-wrap text-black">
            <PersonalStatsCard
              attendanceCount={personalStats.attendanceCount}
              streakDays={personalStats.streakDays}
              studyTotal={personalStats.studyTotal}
            />
            <RankingCard ranking={rankingData} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
