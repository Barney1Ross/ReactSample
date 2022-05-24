import React from "react";

function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log("A link has been clicked upon");
    }
    return(
        <a href="#" onClick={handleClick} >
            Click here 
            </a>
    );
}

export default ActionLink;