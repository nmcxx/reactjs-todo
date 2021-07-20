import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoListAdd()
{
    const [todoName, setTodoName] = useState("");

    const item = {
        id: 3,
        todo: "a",
        isCheck: true,
      };

    const onAddBtnClick = (e) =>{
            <TodoListItem key={item.id} item={item}/>

        // <TodoListItem item = {{
        //     id: Date.now(),
        //     todo: todoName,
        //     isCheck: false,}}/>
        //     console.log(todoName);
    };

    return(
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
    );
}