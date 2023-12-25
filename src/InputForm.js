import React, {useState} from "react";
import OutputList from "./OutpulList";

const InputForm = () => {
    const [item, setItem] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [quantityAvailable, setQunatityAvailable] = useState('');
    //const [medicineItem, setMedicineItem] = useState([]);

    const itemHandler = (e) => {
      setItem(e.target.value)
    }

    const descHandler = (e) => {
      setDesc(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    
   const quantityAvailableHanlder = (e) => {
         setQunatityAvailable(e.target.value)
   }

   const getValueHandler = (e) => {
        e.preventDefault();
        
        <OutputList 
           item = {item}
           desc = {desc}
           price = {price}
           quantityAvailable = {quantityAvailable}

           />


        

            setItem('');
            setDesc('');
            setPrice('');
            setQunatityAvailable('');
           
        
      
   }

    return(
        <form action="" onSubmit={getValueHandler}>
            
                <label htmlFor="" >Medicine Item</label>
                <input type="text" onChange={itemHandler} value={item}/>
                {"  "}
                <label htmlFor="" >Description</label>
                <input type="text" onChange={descHandler} value={desc}/>
                 {"  "}
                <label htmlFor="" >Price</label>
                <input type="text" onChange={priceHandler} value={price}/>
                 {"  "}
                <label htmlFor="" >Quantity Available</label>
                <input type="text" onChange={quantityAvailableHanlder} value={quantityAvailable}/>
                {"  "}
            <button>Add Item</button>
        </form>
    )
}

export default InputForm;