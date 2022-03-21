import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './routes/Template';
import store from './redux/store';
import { Provider } from 'react-redux';
import '../src/common/interceptor';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Template />
      </Provider>
    </div>
  );
}

export default App;
