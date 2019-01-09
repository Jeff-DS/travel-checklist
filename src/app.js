import React from 'react';
import { connect } from 'react-redux';
//
import Checklist from './components/Checklist';
import DayToggle from './components/DayToggle';

const App = () => (
    <div className="app">
        <h1>Travel Checklist</h1>
        <DayToggle />
        <Checklist />
    </div>
);

export default App;
