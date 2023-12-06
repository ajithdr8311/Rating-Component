import StarIcon from './StarIcon';

function CardHeader() {
  return (
    <>
      {<StarIcon />}

      <h1 className="text-lg text-white mt-2 font-bold">How did we do?</h1>

      <p className="text-xs text-medium-grey mt-2">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
}

export default CardHeader;
