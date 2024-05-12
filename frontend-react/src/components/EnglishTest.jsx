import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const EnglishTest = (data) => {

    const v=useParams()["l"]
    const questions=data.qData[v]

  const [visibleQuestions, setVisibleQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 5);
    setVisibleQuestions(randomQuestions);
  }, [questions]);

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer.toLowerCase(),
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    for (const question of visibleQuestions) {
      if ((userAnswers[question.id]) === (question.answer).toLowerCase()) {
        score++;
      }
    }
    setScore(score);
    setShowScore(true);
  };

  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {visibleQuestions.map((question) => (
          <div key={question.id} className="mb-4">
            <p className="text-lg font-semibold">{question.question}</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
              value={userAnswers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            />
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {showScore && (
          <p className="mt-4 text-lg font-semibold">
            Your score: {score} / {visibleQuestions.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default EnglishTest;
