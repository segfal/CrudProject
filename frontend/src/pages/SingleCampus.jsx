// import React, { useState } from "react";

// const SingleCampus = () => {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [description, setDescription] = useState("");

// //   const handleNameChange = (event) => {
// //     setName(event.target.value);
// //   };

// //   const handleLocationChange = (event) => {
// //     setLocation(event.target.value);
// //   };

// //   const handleImageUrlChange = (event) => {
// //     setImageUrl(event.target.value);
// //   };

// //   const handleDescriptionChange = (event) => {
// //     setDescription(event.target.value);
// //   };
// // const handleSubmit = (event) =>{
// //     e.preventDefault(event);
// // }

//   const handleForm = (event) => {
//     event.preventDefault(event);
//     setName(event.target.value);
//     setLocation(event.target.value);
//     setImageUrl(event.target.value);
//     setDescription(event.target.value);

//   };

//   return (
//     <div>
//       <h1>Welcome to the Single Campus View</h1>
//       <button type="button" className="btn btn-danger">
//         Delete
//       </button>
//       <form>
//         <label htmlFor="name">Campus Name:</label>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={setName(event.target.value)}
//         />
//         <label htmlFor="address">Campus Location:</label>
//         <input
//           type="text"
//           placeholder="100 Campus Rd"
//           value={location}
//           onChange={setLocation(event.target.value)}
//         />
//         <label htmlFor="imageUrl">Campus Image URL:</label>
//         <input
//           type="url"
//           placeholder="http://www.image.com/"
//           value={imageUrl}
//           onChange={setImageUrl(event.target.value)}
//         />
//         <label htmlFor="description">Description:</label>
//         <input
//           type="text"
//           placeholder="Describe this campus"
//           value={description}
//           onChange={setDescription(event.target.value)}
//         />
//         <submit onSubmit={handleForm}></submit>
//       </form>
//     </div>
//   ); 
// };

// export default SingleCampus;

import React, { useState } from "react";

const SingleCampus = () => {
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
      <h1>Welcome to the Single Campus View</h1>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Campus Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="address">Campus Location:</label>
        <input
          type="text"
          placeholder="100 Campus Rd"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label htmlFor="imageUrl">Campus Image URL:</label>
        <input
          type="url"
          placeholder="http://www.image.com/"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          placeholder="Describe this campus"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleCampus;
