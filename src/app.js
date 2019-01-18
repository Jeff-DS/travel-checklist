import React from 'react';
//
import Checklist from 'components/Checklist';
import TripTypePicker from 'components/TripTypePicker';
import DayToggle from 'components/DayToggle';

const App = () => (
    <div className="app">
        <h1>Travel Checklist</h1>
        <TripTypePicker />
        <DayToggle />
        <Checklist />
    </div>
);

export default App;
