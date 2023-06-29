import React, { useState } from "react";

const SingleStudent = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Welcome to the Single Students View</h1>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Student Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="address">Student Location:</label>
        <input
          type="text"
          placeholder="100 Campus Rd"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label htmlFor="imageUrl">Student Image URL:</label>
        <input
          type="url"
          placeholder="http://www.image.com/"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          placeholder="Describe this student"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleStudent;
