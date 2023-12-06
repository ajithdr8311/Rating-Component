import { useState } from 'react';

function btnStates() {
  return Array(5)
    .fill()
    .map((_, i) => {
      return { key: i, value: i + 1, isActive: false };
    });
}

function Rating({ handleSubmitRating }) {
  const [ratings, setRatings] = useState(btnStates());
  const [selectedRating, setSelectedRating] = useState(0);

  function handleClick(index) {
    const newRatingsState = ratings.map((r, i) => {
      if (index !== i) {
        r.isActive = false;
      } else {
        r.isActive = true;
      }
      return r;
    });
    setRatings(newRatingsState);
    setSelectedRating(index + 1);
  }

  return (
    <>
      <div className="flex mt-4 justify-between">
        {ratings.map((rating, index) => {
          return (
            <button
              key={rating.key}
              className={
                'text-medium-grey rounded-full w-8 h-8 ' + (rating.isActive ? 'hover: bg-orange ' : 'hover:bg-very-dark-blue ') +
                (rating.isActive ? 'text-white bg-orange ' : 'bg-slate-700')
              }
              onClick={() => handleClick(index)}
            >
              {' '}
              {rating.value}{' '}
            </button>
          );
        })}
      </div>

      <button
        className="bg-orange w-full mt-6 p-2 text-xs text-white font-bold tracking-widest rounded-3xl hover:bg-white hover:text-orange"
        onClick={() => handleSubmitRating(selectedRating)}
      >
        SUBMIT
      </button>
    </>
  );
}

export default Rating;
