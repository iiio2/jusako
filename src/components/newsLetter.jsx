const formSubmit = (e) => {
  e.preventDefault();
  alert('Submitted');
};

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <div className='sign-up container'>
        <span className='news-heading'>
          <h2>Sign Up for Newsletter</h2>
        </span>
        <form onSubmit={formSubmit} className='d-flex'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your email address'
          />
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
