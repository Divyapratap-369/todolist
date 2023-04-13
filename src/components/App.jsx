import React from "react";

function App(){
    const[inputList, setInputList] = React.useState(""); // [state, setState]
    const[items, setItems] = React.useState([]);

    function handleChange(event){
        setInputList(event.target.value);
    }
    function addItem(){
        if(inputList !== ""){
            setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        }
        setInputList("");
    }
    function handleEditItem(index, editedValue) {
        if (editedValue === "") {
            setItems((oldItems) => {
                return oldItems.filter((arrElem, arrIndex) => {
                    return arrIndex !== index;
                });
            });
        }else{
            setItems((oldItems) => {
                return oldItems.map((arrElem, arrIndex) => {
                    if (arrIndex === index) {
                        return editedValue;
                    }
                    return arrElem;
                });
            });
        }
  }
    function removeItem(id){
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" autocomplete="off" value={inputList}/>
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div> 
                <ul>
                    {items.map((item, index) => {
                        return <div className="list" key={index}>
                            <input type="text" value={item}  className = "input-field" autocomplete="off" onChange={(event) => 
                            handleEditItem(index, event.target.value)
                            }
                         />
                         
                            <button onClick={() => removeItem(index)}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default App;