import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";


const GetingData = (props) => {
    const [itemsToShow, setItemsToShow] = useState(10);

    const showmore = () => {
        setItemsToShow(itemsToShow * 2)
    }

    return (
        <div className="Api">
            <ul>
                {props.data && props.data.length && props.data.slice(0, itemsToShow).map((r, i) => (
                    <li key={i}>
                        <div className="img_box">
                            <img src={r.url} alt="img" />
                        </div>
                    </li>
                ))}
            </ul>
            {props.data && props.data.length > 10 && <button onClick={showmore}>Show More</button>}
        </div>
    );
}
export default GetingData;