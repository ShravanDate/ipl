import React from 'react';
import {Link} from "react-router-dom";

const Button = (props) => {
	return (
		 <Link className={props.buttonElement} to={props.linkTo} /*onClick={() => props.clicked()}*/>{props.buttonName}</Link> 
	)
}

export default Button;