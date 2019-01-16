import React from 'react';
//
import Checklist from 'Components/Checklist';
import TripTypePicker from 'Components/TripTypePicker';
import DayToggle from 'Components/DayToggle';

const App = () => (
    <div className="app">
        <h1>Travel Checklist</h1>
        <TripTypePicker />
        <DayToggle />
        <Checklist />
    </div>
);

export default App;
