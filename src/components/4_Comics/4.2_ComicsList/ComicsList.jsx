import ComicsListCard from './4.2.1_ComicsListCard/ComicsListCard';
import Button from '../../0_General/Button/Button'
import './ComicsList.scss';

const ComicsList = () => {
  return (
    <section >
      <div className='comics_main_comics_list'>
        <ComicsListCard image='/Comics/img_1.svg'/>
        <ComicsListCard image='/Comics/img_2.svg'/>
        <ComicsListCard image='/Comics/img_1.svg'/>
        <ComicsListCard image='/Comics/img_2.svg'/>
        <ComicsListCard image='/Comics/img_1.svg'/>
        <ComicsListCard image='/Comics/img_2.svg'/>
      </div>
      <div className='comics_main_comics_list_add'>
        <Button titel='LOAD MORE' className='btn-red'/>
      </div>
    </section>
  )
} 

export default ComicsList