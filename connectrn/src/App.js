import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayShifts from './components/DisplayShifts/DisplayShifts';
import SetShifts from './components/SetShift/SetShifts';
import Table from 'react-bootstrap/Table';

import './App.css';

function App() {
  const [shifts, setAllShifts] = useState();
  const [nurses, setAllNurses] = useState();

  useEffect(() => {
    const getShifts = async() => {
      try {
        let response = await axios.get('/shifts');
        console.log(response.data);
        setAllShifts(response.data);
      } catch (error) {
        console.log('Error with Getting All the Shifts!')
      }
    };
    const getNurses = async() => {
      try {
        let response = await axios.get('/nurses');
        console.log(response.data);
        setAllNurses(response.data);
      } catch (error) {
        console.log('Error with Getting All the Nurses!')
      }
    };
    getShifts(); 
    getNurses();
  }, [])

  return (
    <div className="App">
      <header>
        <h1>connectRN</h1>
      </header>
      <div>
       <SetShifts getAllShiftsProperty={shifts} getAllNursesProperty={nurses} />
      </div>
      <div>

        <Table size='sm'>
          <thead>
            <tr>
              <th>Shift</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Certification Required</th>
              <th>Assigned Nurse</th>
            </tr>
          </thead>
          <tbody>
            <DisplayShifts getAllShiftsProperty={shifts} getAllNursesProperty={nurses}/>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
