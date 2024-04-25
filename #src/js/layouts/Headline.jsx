import React from "react";
import { forwardRef } from "react";
function Headline({ text }, ref) {
	return <h2 ref={ref}>{text}</h2>;

}
export default forwardRef(Headline); 
