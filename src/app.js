import React from 'react';
//
import Checklist from 'components/Checklist';
import TripTypePicker from 'components/TripTypePicker';
import DayToggle from 'components/DayToggle';
import AddItem from 'components/AddItem';

const App = () => (
    <div className="app">
        <h1>Travel Checklist</h1>
        <TripTypePicker />
        <DayToggle />
        <AddItem />
        <Checklist />
    </div>
);

export default App;
