import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    //clearn up the effect
    return () => {
      clearInterval(intervalId);
    };
  }, []); //only run the first time

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Every Seconds: {time}</h1>
      <input value={name} onChange={handleChange} type='text' style={{ marginBottom: "30px" }} />
    </>
  );
}
