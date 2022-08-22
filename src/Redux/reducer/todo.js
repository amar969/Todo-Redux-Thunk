import {v4 as uuid} from "uuid"; 
import { ADD_TODO } from "../actionType";

const initialState = {
    todos: [
        {
            id: 0,
            title: "Subtask 1", 
            status: false 
        }
    ]
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
        
        default: 
            return store;
    }
}