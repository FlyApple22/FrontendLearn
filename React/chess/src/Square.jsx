function Square({ updateSquare, value }) {
  return (
    <>
      <button onClick={updateSquare} className='square'>
        {value}
      </button>
    </>
  );
}

export default Square;
