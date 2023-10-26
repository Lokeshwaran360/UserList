import React, { useState } from "react";
import Adduser from "./Adduser";
import OutputList from "./OutputList";


function App(props) {
  const [UseList, SetUseList] = useState([]);
  const addtoOutputHandler = (uname, uage, ucollege, ukey) => {
       SetUseList((prevList) => {
          return [...prevList, {name: uname, age: uage, college: ucollege, id: ukey}];
       });
  };

return(
 <div>
  <Adduser addUserOutput={addtoOutputHandler}/>
  <OutputList users={UseList}/>
  
 </div>
) 
}

export default App;
