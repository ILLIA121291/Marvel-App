import './ComicsHeader.scss';

const ComicsHeader = () => {
  return (
    <div className="comics_main_header">
      <div className='comics_main_header_container'>
        <img src="/Comics/avengers.svg" alt="" />
        <div className='comics_main_header_text'>
        <p>New comics every week!</p>
        <p>Stay tuned!</p>
        </div>
      </div>
      <img src="/Comics/avengers logo.svg" alt="" />
    </div>
  );
};

export default ComicsHeader;
