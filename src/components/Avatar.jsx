import React from "react";

function Avatar({url, name}){

    const Style = {
        borderRadius:'50%',
        border:'3px solid blue',
        background:'green'
    }
    return(
        <>
            <img style={Style} src={url} alt={name} />
        </>
    )
}

export default Avatar;