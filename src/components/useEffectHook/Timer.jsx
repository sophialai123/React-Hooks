import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [name, setName] = useState("");
  const date = new Date();
  const dayArr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  const monthArr = new Array("January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "Novermber", "December");
  const day = date.getDay();
  const month = date.getMonth()
  const year = date.getFullYear();
  const currentDate = date.getDate()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    //clearn up the effect
    return () => {
      clearInterval(intervalId);
    };
  }, []); //only run the first time

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Timer: {time}</h1>
      <h2>Date: {dayArr[day]} {currentDate} {monthArr[month]}</h2>
      <input value={name} onChange={handleChange} type='text' style={{ marginBottom: "30px" }} />
    </>
  );
}
