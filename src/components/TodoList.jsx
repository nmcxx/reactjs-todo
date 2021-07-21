import { useCallback, useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

const STORAGE_KEY = "React_Todo_App";

function TodoList(){
    const [items, setTodoList] = useState([]);
    const [todoName, setTodoName] = useState("");

    useEffect(() => {
        const storagedTodoList = localStorage.getItem(STORAGE_KEY);
        if (storagedTodoList) {
          setTodoList(JSON.parse(storagedTodoList));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      }, [items]);

    const onAddBtnClick = (e) =>{
        if(todoName==='') return;
        setTodoList([
            { id: Date.now(), todo: todoName, isCheck: false },
            ...items,
          ]);
          console.log(items);
    };

    const onStatusCheck = useCallback((id) => {
        setTodoList((prevState) =>
          prevState.map((todo) =>
            todo.id === id ? ( todo.isCheck===true ? { ...todo, isCheck: false } : { ...todo, isCheck: true } ): todo
            )
        );
    }, []);

    const onDeleteBtnClick = useCallback((id) => {
        setTodoList((prevState) =>
            prevState.filter(item => item.id !== id)
        );
    }, []);
    
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
                    
                    <TodoListItem key={item.id} item={item} onStatusCheck={onStatusCheck} onDeleteBtnClick={onDeleteBtnClick}/>
                    ))}
                </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;