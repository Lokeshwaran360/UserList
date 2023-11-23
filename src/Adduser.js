import React, { useState} from 'react'

const Adduser = (props) => {
  const [addUserName, setAddUserName] = useState('');
  const [addUserAge, setAddUserAge ] = useState('');
  const [addCollegeName, setAddCollegeName] = useState('Table1');

 

  const addUserHandler = (event) => {
    event.preventDefault();
    
   
    props.addUserOutput(addUserName, addUserAge, addCollegeName, Math.random().toString());
    setAddUserName('');
    setAddUserAge('');

  }
  const userNameChangeHandler = (event) => {
    setAddUserName(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
     setAddUserAge(event.target.value)
  }
  const userCollegeHandler = (event) => {
    setAddCollegeName(event.target.value);
  }
    return (
    <>
     <form action="" onSubmit={addUserHandler}>
        <label htmlFor="">UserName</label>
        <br />
        <input type="text"  onChange={userNameChangeHandler} />
        <br />
        <label htmlFor="">UserAge</label>
        <br />
        <input type="text" name="" id="" onChange={userAgeChangeHandler} />
        <br /> 
        <label htmlFor="">College Name</label>
        <br />
        <input type="text" onChange={userCollegeHandler}/>
        <br />
        <button>Add User</button>
        </form>  
    </>
  )
}

export default Adduser