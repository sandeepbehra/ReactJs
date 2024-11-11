import React, { useEffect } from 'react';

function ThankYouScreen({ onReset }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <div>
      <h2>Thank you for your time!</h2>
    </div>
  );
}

export default ThankYouScreen;
