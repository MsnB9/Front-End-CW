import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star( props) {
  return <FaStar 
        color={props.selected ? "orange" : "grey"}
        onClick={props.onSelect} 
        />;
}

