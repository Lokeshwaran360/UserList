import React from "react";

const OutputList = props => {

return(
    <>
        <ul>
            {props.users.map((user)=> (
                  <li key={user.id}>{user.name} {user.age} years old {user.college} college</li>
            ))}
        </ul>
       
        </>
)
}

export default OutputList