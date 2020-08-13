import React, {useState} from "react";
import Star from "../Star";

const createArray = length => [...Array(length)]

function StarRating({ style= {}, totalStar = 10, ...props }) {
    const [selectedStars, setSelectedStars] = useState(5)

    return (
        <div style={{ padding: "5px", ...style }}>
            {createArray(totalStar).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStar} stars
            </p>
        </div>

    )
}

export default StarRating