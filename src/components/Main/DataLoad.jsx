import React, { useEffect } from 'react';

const DataLoad = (props) => {
  const city = props.city;
  console.log(city);
  const API_KEY = `a2e4c7cd38a486ada4c0e5ef34ce1073`;
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url);
    // console.log(city + 1);
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default DataLoad;
