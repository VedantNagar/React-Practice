import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const removeData = () => {
    setPeople([]);
  };
  return (
    <>
      <main>
        <section className='container'>
          {people.length} birthdays today
          <List people={people} />
          <button onClick={removeData}>Clear</button>
        </section>
      </main>
    </>
  );
}

export default App;
