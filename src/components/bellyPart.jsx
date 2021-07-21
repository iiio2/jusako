import laptop from '../images/laptop.jpg';
import blender from '../images/blender.jpg';

const BellyPart = () => {
  return (
    <section className='container'>
      <div className='belly-part'>
        <div className='grid-1x2'>
          <div className='first'>
            <div className='belly-body'>
              <h2>Protective Sleeves</h2>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
              <button className='btn btn-primary'>show now</button>
            </div>
            <div className='belly-img'>
              <img src={laptop} className='img-fluid' alt='laptop' />
            </div>
          </div>

          <div className='second'>
            <div className='belly-body'>
              <h2>
                Nutrient Blender <br />
                <span> Combo. </span>
              </h2>

              <p>It is a long established fact that a reader will be...</p>
              <button className='btn btn-primary'>show now</button>
            </div>
            <div className='belly-img'>
              <img src={blender} className='img-fluid' alt='laptop' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BellyPart;
