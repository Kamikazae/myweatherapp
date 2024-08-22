import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {id:Date.now(),
     text:'Water the plants?',
     completed:false,
    }
]
const todoSlice=createSlice({
    name:'todos',
    initialState:initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload,completed:false})
        },
        toggleTodo:(state,action)=>{
            const todo=state.find((todo)=>todo.id===action.payload)
            if(todo){
                todo.completed=!todo.completed
            }
        },
    deleteTodo:(state,action)=>{
        return state.filter((todo)=>todo.id!==action.payload)}
    },
},)
export const {addTodo, toggleTodo, deleteTodo}=todoSlice.actions;
export const todoSelector=(state)=>state.todos || [];
const todoReducer=todoSlice.reducer;
export default todoReducer;