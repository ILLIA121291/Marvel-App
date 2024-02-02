import './ComicsListCard.scss';

const ComicsListCard = ({image}) => {
  return (
    <div className="comics_list_card">
      <img src={image} alt="" />
      <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
      <p>9.99$</p>
    </div>
  );
};

export default ComicsListCard;
