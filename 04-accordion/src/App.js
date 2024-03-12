import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <>
      <div className='container'>
        <h3>Questions and Answers</h3>
        <section className='info'>
          {questions.map((question) => {
            <SingleQuestion key={id} {...question} />;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
