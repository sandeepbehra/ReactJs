import React, { useState } from 'react';
import './App.css';

import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import ThankYouScreen from './components/QuestionScreen';

function App() {
  const [step, setStep] = useState(0); // Step to track screens
  const [responses, setResponses] = useState({}); // Store answers

  const handleStart = () => setStep(1);
  const handleNext = (newResponses) => {
    setResponses(prev => ({ ...prev, ...newResponses }));
    setStep(prev => prev + 1);
  };
  const handlePrevious = () => setStep(prev => prev - 1);

  const resetSurvey = () => {
    setStep(0);
    setResponses({});
  };

  return (
    <div className="App">
      {step === 0 && <WelcomeScreen onStart={handleStart} />}
      {step >= 1 && step <= 5 && (
        <QuestionScreen
          step={step}
          responses={responses}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {step === 6 && <ConfirmationScreen responses={responses} onConfirm={() => setStep(7)} />}
      {step === 7 && <ThankYouScreen onReset={resetSurvey} />}
      <div className='quiz'></div>
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
