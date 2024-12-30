import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

const themeConfig = {
  light: { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' },
  darkGrey: { backgroundColor: 'rgb(46, 46, 46)', color: 'rgb(245, 245, 245)' },
  darkBlue: { backgroundColor: 'rgb(0, 31, 63)', color: 'rgb(209, 232, 255)' },
  darkGreen: { backgroundColor: 'rgb(1, 50, 32)', color: 'rgb(168, 213, 186)' },
  darkPurple: { backgroundColor: 'rgb(46, 0, 62)', color: 'rgb(224, 195, 252)' },
};

function App() {
  const [theme, setTheme] = useState('light'); // Default theme
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.style.backgroundColor = themeConfig[selectedTheme].backgroundColor;
    document.body.style.color = themeConfig[selectedTheme].color;
    showAlert(`${selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)} theme enabled`, 'success');
  };

  return (
    <>
      <Navbar title="TextEase" theme={theme} onThemeChange={handleThemeChange} themeConfig={themeConfig} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text below" theme={theme} themeConfig={themeConfig} />
        <About theme={theme} themeConfig={themeConfig}/>
      </div>
    </>
  );
}

export default App;