import React from 'react';

function ConfirmationScreen({ responses, onConfirm }) {
  const handleConfirm = () => {
    localStorage.setItem('surveyResponses', JSON.stringify(responses));
    localStorage.setItem('surveyStatus', 'COMPLETED');
    onConfirm();
  };

  return (
    <div>
      <h2>Confirm Submission</h2>
      <button onClick={handleConfirm}>Submit</button>
    </div>
  );
}

export default ConfirmationScreen;
