import React from 'react';

const Menu = ({ items }) => {
  return (
    <>
      <main className='section-center'>
        {items.map((item) => {
          const { id, title, img, desc, price } = item;
          return (
            <>
              <article className='menu-item' key={id}>
                <img src={img} alt={title} className='photo'></img>
                <div className='item-info'>
                  <header>
                    <h3>{title}</h3>
                    <h4 className='price'>${price}</h4>
                  </header>
                  <p className='item-text'>{desc}</p>
                </div>
              </article>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Menu;
