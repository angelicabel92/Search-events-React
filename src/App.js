import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';
import ListEventsComponent from './components/ListEventsComponent';

import CategoryProvider from './context/CategoryContext';
import EventsProvider from './context/EventsContext';

function App() {
  return (
    <EventsProvider>
      <CategoryProvider>
        <HeaderComponent/>
        <div className="uk-container">
          <FormComponent/>
          <ListEventsComponent/>
        </div>
      </CategoryProvider>
    </EventsProvider>
  );
}

export default App;
