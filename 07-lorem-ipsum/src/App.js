import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    if (number <= 0) {
      alert('Enter correct number');
      setCount();
    }
    setText(data.slice(0, number));
  };

  return (
    <>
      <section className='section-center'>
        <h3>Generate Lorem Ipsum</h3>
        <form onSubmit={handleSubmit} className='lorem-form'>
          <label htmlFor='amount'>Paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn' type='submit'>
            Generate
          </button>
        </form>
        <article className='lorem-text'>
          {text.map((para, index) => {
            return (
              <>
                <p key={index}>{para}</p>
              </>
            );
          })}
        </article>
      </section>
    </>
  );
}

export default App;
