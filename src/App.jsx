import { useState } from 'react';
import Rating from './Rating';
import CardHeader from './CardHeader';
import ThanksPage from './ThanksPage';

function App() {
  const [rating, setRating] = useState(0);

  function handleSubmitRating(rating) {
    if (rating > 0) {
      setRating(rating);
    }
  }

  return (
    <>
      <main className="bg-black text-white h-screen flex justify-center items-center">
        <section className="w-[270px] text-black rounded-lg bg-dark-blue p-4 font-overpass">
          {rating == 0 && (
            <>
              <CardHeader />
              <Rating handleSubmitRating={handleSubmitRating} />
            </>
          )}

          {rating > 0 && <ThanksPage selectedRating={rating} />}
        </section>
      </main>
    </>
  );
}

export default App;
