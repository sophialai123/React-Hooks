import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    // const name = target.name;
    // const value = target.value;
    /* destructuring to initialize name and value in a more concise way. */
    const { name, value } = target;

    /* We want to copy over all of the values from our previous profile object whenever we call our state setter function. Use prevProfile as the argument for our state setter callback function. */
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    /* call our handleSubmit() function when the user submits the form. */
    <form onSubmit={handleSubmit}>
      <h1>Form Input </h1>
      <input
        onChange={handleChange}
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input
        onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>

  );
}
