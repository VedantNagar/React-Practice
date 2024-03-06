import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((i) => checkIndex(i + 1));
  };
  const prevPerson = () => {
    setIndex((i) => checkIndex(i - 1));
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h5 className='job'>{job}</h5>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
