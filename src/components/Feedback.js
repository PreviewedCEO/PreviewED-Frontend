import React from 'react';

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      user: 'John Doe',
      rating: 4,
      comment: 'Great platform, very user-friendly!',
      date: '2022-06-15',
    },
    {
      id: 2,
      user: 'Jane Smith',
      rating: 3,
      comment: 'Could be better, some features are lacking.',
      date: '2022-06-20',
    },
    {
      id: 3,
      user: 'Bob Johnson',
      rating: 5,
      comment: 'Excellent customer support, they helped me find the perfect job!',
      date: '2022-06-25',
    },
  ];

  return (
    <div>
      <h2>User Feedback and Ratings</h2>
      {feedbackData.map((feedback) => (
        <div key={feedback.id}>
          <h3>{feedback.user} - {feedback.date}</h3>
          <p>Rating: {feedback.rating}/5</p>
          <p>{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
