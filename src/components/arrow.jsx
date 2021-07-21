const Arrow = () => {
  return (
    <section className='container mt-5 recent'>
      <div className='recent-top'>
        <button className='btn btn-primary'>recently viewed products</button>

        <div className='arrow'>
          <i className='bi bi-caret-left'></i>
          <i className='bi bi-caret-right'></i>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Arrow;
