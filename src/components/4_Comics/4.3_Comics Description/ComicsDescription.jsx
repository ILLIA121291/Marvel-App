import './ComicsDescription.scss';

const ComicsDescription = () => {
  return (
    <div className="comics_description">
      <img src="/Comics/x-men.svg" alt="" />
      <div className="comics_description_container">
        <header className="comics_description_container_header">
          <h2>X-Men: Days of Future Past</h2>
          <button type="button">Back to all</button>
        </header>
        <p className='comics_description_text'>
          Re-live the legendary first journey into the dystopian future of 2013
          - where Sentinels stalk the Earth, and the X-Men are humanity's only
          hope...until they die! Also featuring the first appearance of Alpha
          Flight, the return of the Wendigo, the history of the X-Men from
          Cyclops himself...and a demon for Christmas!?
        </p>
        <p>144 pages</p>
        <p>Language: en-us</p>
        <p>9.99$</p>
      </div>
    </div>
  );
};

export default ComicsDescription;
