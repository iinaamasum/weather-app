import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [inputVal, setInputVal] = useState();
  // console.log(inputVal);
  return (
    <div className="container main__container mx-auto">
      <div className="d-flex">
        <input
          value={inputVal}
          className="form-control me-4 shadow-none p-3"
          type="search"
          placeholder="Enter the city name"
        />
        <button
          onClick={(event) => setInputVal(event.target.value)}
          className="btn btn-outline-dark shadow-none px-5 py-3"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Main;
