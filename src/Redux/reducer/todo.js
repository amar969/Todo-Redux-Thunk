import {v4 as uuid} from "uuid"; 
import { ADD_TODO, 
    IN_PROGRESS_PERSONAL_COUNT,
    TODO_PERSONAL_COUNT,
    DONE_PERSONAL_COUNT,
    TODODATA,
    INPROGRESSDATA,
    DONEDATA, } from "../actionType";

const initialState = {
    todos: [],
    inProgressPersonalCount: 0, 
    todoPersonalCount: 0, 
    donePersonalCount: 0,
    todoData: [], 
    inProgressData: [], 
    doneData: []
}

export const todos = (store = initialState, action) => {
    const { type, payload } = action

    switch (type){
        case ADD_TODO: 
            return{
                ...store, 
                todos: {
                    id: store.id = uuid(), 
                    title: store.title + payload, 
                    status: store.status = false
                }
            }
        
            case IN_PROGRESS_PERSONAL_COUNT: 
            return{
                ...store,
                isLoading: false, 
                isError: false, 
                inProgressPersonalCount: store.inProgressPersonalCount + action.payload   
            }
        
        case TODO_PERSONAL_COUNT: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                todoPersonalCount: store.todoPersonalCount + action.payload
            }
        
        case DONE_PERSONAL_COUNT: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                donePersonalCount: store.donePersonalCount + action.payload
            }
        
        case TODODATA: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                todoData:[...action.payload]
            }
        
        case INPROGRESSDATA:
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                inProgressData:[...action.payload]
            }
        
        case DONEDATA: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                doneData: [...action.payload]
            }
        
        default: 
            return store;
    }
}