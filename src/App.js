
import React, { useState, useReducer } from "react";
import reducer, { initialState, ADD, DEL, COMP, UNCOMPLETE} from "./reducer";

/* */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}> <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        /></form>
        <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={()=>dispatch({type: DEL, tagetid: toDo.id})}>DELETE</button>
            <span>{toDo.text}</span>
            <button onClick={()=>dispatch({type: COMP, tagetid: toDo.id})}>COMPLETE</button>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Completes</h2>
        {state.completed.map((complete) => (
          <li key={complete.id}>
            <span>{complete.text}</span>
            <button onClick={()=>dispatch({type: UNCOMPLETE, tagetid: complete.id})}>UNCOMPLETE</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;