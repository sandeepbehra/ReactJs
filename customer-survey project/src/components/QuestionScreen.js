import React from 'react';




const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" },
];

function QuestionScreen({ step, responses, onNext, onPrevious }) {
  const question = questions[step - 1];

  const handleAnswer = (answer) => {
    const newResponses = { [question.id]: answer };
    onNext(newResponses);
  };

  return (
    <div>
      <h2>Question {step}/{questions.length}</h2>
      <p>{question.text}</p>

      {question.type === "rating" ? (
        // <select onChange={(e) => handleAnswer(e.target.value)} value={responses[question.id] || ''}>
        //   <option value="">Select Rating</option>

        //   {[...Array(question.scale)].map((_, i) => (
        //     <option key={i + 1} value={i + 1}>{i + 1}</option>
        //   ))}
        // </select>
        <div className='quiz'></div>
       
      ) : (
        <input
          type="text"
          value={responses[question.id] || ''}
          onChange={(e) => handleAnswer(e.target.value)}
        />
      )}

      <div>
        {step > 1 && <button onClick={onPrevious}>Previous</button>}
        <button onClick={() => handleAnswer(responses[question.id] || '')}>Next</button>
        <button onClick={() => onNext({})}>Skip</button>
      </div>
    </div>
  );
}

export default QuestionScreen;
