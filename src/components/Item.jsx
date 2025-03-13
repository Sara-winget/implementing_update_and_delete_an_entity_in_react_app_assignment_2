import { useState } from "react";
import axios from "axios";

const Item = ({ item}) => {
const [value,setValue]=useState(item.name)
    // Render a single item
    // Add a Delete and Edit button
  const handleDelete=async()=>{
    const del= window.prompt(`Type "yes" to delete ${item.name}`);
    if(del==='yes')
        try{
await axios.delete(`http://localhost:8000/doors/${item.id}`)
alert('deleted successfully')}
catch(e){
    alert(e.message)
}
  }  
    return (
        <div>
        <input type="text" value={value}/>
<button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default Item;
