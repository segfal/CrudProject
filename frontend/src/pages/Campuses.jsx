import React from "react";
import SingleCampus from "./SingleCampus";
import dummyData from "./schools.json";
import CampusItems from "../components/CampusItems";

const Campuses = () => {
    return (
        <div>
            <h1>Welcome to the Campuses page</h1>
            <button type="button" class="btn btn-primary">Add Campus</button>
            <CampusItems list={dummyData}/>
            <SingleCampus/>
        </div>
    )
}

export default Campuses;