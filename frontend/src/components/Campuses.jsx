// import React from "react";

// const Campuses = () => {
//     return(
//         <div>
//             <h1>Welcome to the Campuse page </h1>
//         </div>
//     )
// }

// export default Campuses;
import React, { useState } from "react";

const Campuses = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <h1>Welcome to the Campuses page</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Campuses;
