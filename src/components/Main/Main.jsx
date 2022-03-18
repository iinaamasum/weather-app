import React, { useState } from 'react';
import DataLoad from './DataLoad';
import './Main.css';

const Main = () => {
  const [inputVal, setInputVal] = useState('');
  const [city, setCity] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setCity(inputVal);
    setInputVal('');
  };

  return (
    <div className="container main__container mx-auto">
      {city ? <h1>{city}</h1> : <h1>Not found</h1>}
      <h2>Hi there: {inputVal}</h2>
      <div>
        <form className="d-flex" action="" onSubmit={handleInput}>
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            type="search"
            class="form-control me-4 shadow-none"
            aria-label="Search"
            placeholder="Enter the city name"
          />
          <button
            onClick={handleInput}
            className="btn btn-outline-dark shadow-none px-5 py-3"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <DataLoad city={city}></DataLoad>
    </div>
  );
};

export default Main;
