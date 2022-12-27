import React from "react"
const Card =({item})=>{
    return(
        <>
            <div>
                <div>{item.accessInfo}</div>
                <div>{item.id}</div>
                <p>from Card component</p>
            </div>
        </>
    )
}
export default Card