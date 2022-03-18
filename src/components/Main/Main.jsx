import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [inputVal, setInputVal] = useState('');
  const [catchData, setCatchData] = useState(false);
  // any function for state but use useEffect for api data load
  const updateVal = (val) => {
    setInputVal(val.target.value);
    console.log(catchData);
    if (catchData === true) document.getElementById('input__field').value = '';
  };
  return (
    <div className="container main__container mx-auto">
      {catchData ? <h1>{inputVal}</h1> : <h1>Not found</h1>}
      <h2>Hi there: {inputVal}</h2>
      <div className="d-flex">
        <input
          id="input__field"
          onChange={updateVal}
          className="form-control me-4 shadow-none p-3"
          type="text"
          placeholder="Enter the city name"
        />
        <button
          onClick={() => setCatchData(true)}
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
