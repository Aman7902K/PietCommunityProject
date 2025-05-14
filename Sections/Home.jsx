import React, { useState } from 'react';
import { announcements } from '../Constants/Index';
import AnnouncementCard from '../Components/AnnouncementCard';
import EventsCalendar from "../Components/EventsCalendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const AnnouncmentsPerPage = 9;
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDept, setSelectedDept] = useState('All');

  const indexOfLastAnnouncement = currentPage * AnnouncmentsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - AnnouncmentsPerPage;
  const totalPages = Math.ceil(announcements.length / AnnouncmentsPerPage);

  const filteredAnnouncements = selectedDept === 'All'
    ? announcements
    : announcements.filter(a => a.department?.trim() === selectedDept);

  const currentAnnouncement = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);
  
  const departments = ['All', ...new Set(announcements.map(a => a.department))];

  return (
    <div className="min-h-screen bg-gray-50 p-16">
      <h1 className="text-4xl font-bold text-center py-5">College Announcements</h1>
      
      <div className="flex flex-row justify-between  mb-6">

        <div  className="flex flex-row justify-start  mb-6">
            <FontAwesomeIcon icon={faCalendarDays} size="2x"
            onClick={()=>navigate('/CalenderPage')}
             />        
          </div>

        
        <div className="flex flex-row justify-end  mb-6">
          <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          className="border w-12 h-10 px-1 py-1 rounded-md"
        >
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentAnnouncement.map((announcement, id) => (
          <AnnouncementCard key={id} announcement={announcement} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
