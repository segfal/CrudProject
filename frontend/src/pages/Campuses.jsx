import React from "react";
import SingleCampus from "./SingleCampus";
import dummyData from "./schools.json";

const Campuses = () => {
    return (
        <div>
            <h1>Welcome to the Campuses page</h1>
            <button type="button" class="btn btn-primary">Add Campus</button>
            {dummyData.map}
            <SingleCampus/>
        </div>
    )
}

export default Campuses;