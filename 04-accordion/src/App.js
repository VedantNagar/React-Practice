import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {
  const [ques, setQues] = useState(data);
  return (
    <>
      <div className='container'>
        <h3>Questions and Answers</h3>
        <section className='info'>
          {ques.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
