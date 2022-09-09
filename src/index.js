import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'theme';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider {...{theme}}>          
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


