import MachineIcon from './MachineIcon';

function ThanksPage({ selectedRating }) {
  return (
    <article className="flex flex-col items-center justify-center gap-2 p-2">
      <MachineIcon />
      <b className="text-orange text-xs font-light p-2 bg-slate-700 rounded-3xl">
        {' '}
        You selected {selectedRating} out of 5
      </b>

      <h1 className="text-white text-lg font-bold">Thank you!</h1>

      <p className="text-xs text-medium-grey text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </article>
  );
}

export default ThanksPage;
