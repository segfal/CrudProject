// import React from "react";

// const Students = () => {
//     return(
//         <div>
//             <h1> Welcome to the Students page</h1>
//         </div>
//     )
// }

// export default Students;
import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchStudentsThunk from "../redux/Students.actions";

const Students = ({ allStudents, fetchStudents }) => {
  useEffect(() => {
    // Fetch students data when the component mounts
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      <h1>Students</h1>
      {allStudents ? (
        <ul>
          {allStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  allStudents: state.studentReducer.allStudents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(fetchStudentsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
