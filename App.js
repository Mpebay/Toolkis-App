import React from 'react';
import Navigation from './navigation/navigation';
import { Provider } from 'react-redux';
import store from './redux/store.js';



export default function App() {
  return (

    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
