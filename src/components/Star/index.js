import React from "react";
import { FaStar } from "react-icons/fa/index";

function Star({ selected= false, onSelect = f => f }) {
    return(
        <FaStar color={ selected ? "red" : "grey" } onClick={onSelect} />
    )
}

export default Star