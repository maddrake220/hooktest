import {v4 as uuid} from "uuid"
export const initialState = {
    toDos : [],
    completed: []
  }
  
  export const ADD = "add";
  export const DEL = "del";
  export const COMP = "comp";
  export const UNCOMPLETE = "uncomp";

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD:
        return { ...state, toDos: [...state.toDos, { text: action.payload, id: uuid() }] }; // uuid : 각 toDo에 id 부여
      case DEL:
        return { ...state, toDos: state.toDos.filter(toDo=> toDo.id !== action.tagetid )};
      case COMP:
          const target = state.toDos.find(toDo => toDo.id === action.tagetid)
          return { ...state,
                 toDos: state.toDos.filter(toDo=> toDo.id !== action.tagetid ),
                 completed: [...state.completed, {...target }] };   
      case UNCOMPLETE:
         const targetC = state.completed.find(complete => complete.id === action.tagetid)
        return { ...state,
               completed: state.completed.filter(complete=> complete.id !== action.tagetid ),
               toDos: [...state.toDos, {...targetC }] };
      
      /* toDos  */
      default:
        return;
    }
  };

  export default reducer;