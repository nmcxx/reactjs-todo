import React from "react";

export default function TodoListItem(props){
    const { item } = props;

    return(
                <li className="list-group-item" id={item.id}>
                    <div className="input-group mb-3">
                        
                        <div className="input-group-text form-control">
                            
                            <div classNames="input-group-prepend">
                                <div classNames="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input" defaultChecked={item.isCheck ? "checked":""}/>
                                </div>
                            </div>
                            <span className="input-group-text form-control" style={{textDecoration: item.isCheck ? "line-through" : "none"}}>{item.todo}</span>
                            
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </li>
    );
}