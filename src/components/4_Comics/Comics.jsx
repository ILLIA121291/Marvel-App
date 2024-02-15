import ComicsHeader from './4.1_ComicsHeader/ComicsHeader'
import ComicsList from './4.2_ComicsList/ComicsList'
import ComicsDescription from './4.3_Comics Description/ComicsDescription'
import './Comics.scss'

const Comics = () => {
  return (
    <section className='comics_main'>
      <ComicsHeader/>
      <ComicsList/>
      {/* <ComicsDescription/> */}
    </section>
  )
}

export default Comics