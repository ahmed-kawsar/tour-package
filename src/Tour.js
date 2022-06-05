import React, { useState } from 'react';

const Tour = ({ tour, deleteItem }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <article className="single-tour" key={tour.id}>
        <img src={tour.image} alt={tour.name} />
        <footer>
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <h4 className="tour-price">${tour.price}</h4>
          </div>
          <p>
            {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button onClick={() => deleteItem(tour.id)} className="delete-btn">
            not interested
          </button>
        </footer>
      </article>
    </div>
  );
};

export default Tour;
