import { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList(){
    const [items, setTodoList] = useState([]);
    const [todoName, setTodoName] = useState("");

    const onAddBtnClick = (e) =>{
        if(todoName==='') return;
        setTodoList([
            { id: Date.now(), todo: todoName, isCheck: false },
            ...items,
          ]);
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm ">
                {/* add  */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" 
                    placeholder="Nhập vào việc cần làm" 
                    aria-label="Việc cần làm" 
                    aria-describedby="basic-addon2"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={onAddBtnClick}>Add</button>
                    </div>
                </div>
                
                <div className="card">
                <ul className="list-group list-group-flush">
                    {items.map((item) => (
                    
                    <TodoListItem key={item.id} item={item} />
                    ))}
                </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;