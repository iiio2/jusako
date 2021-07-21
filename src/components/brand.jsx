import graphicriver from '../images/graphicriver.png';
import themeforest from '../images/themeforest.png';
import codecanyon from '../images/codecanyon.png';
import photodune from '../images/photodune.png';
import videohive from '../images/videohive.png';

const Brand = () => {
  return (
    <div className='brand container'>
      <div className='brand-name d-flex justify-content-evenly'>
        <img src={graphicriver} className='img-fluid' alt='' />
        <img src={themeforest} className='img-fluid' alt='' />
        <img src={codecanyon} className='img-fluid' alt='' />
        <img src={photodune} className='img-fluid' alt='' />
        <img src={videohive} className='img-fluid' alt='' />
      </div>
    </div>
  );
};

export default Brand;
