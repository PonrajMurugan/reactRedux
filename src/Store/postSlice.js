import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchdata",async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    }
)

export const addNewPost = createAsyncThunk(
    "posts/newpost",async (initialState)=>{
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", initialState)
        return response.data
    }
)

const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[
            // {
            // id:"1",
            // title:"Post 1",
            // body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            // userId:"1"
            // },
            // {
            //     id:"2",
            //     title:"Post 2",
            //     body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            //     userId:"2"
            // }
        ],
        status:"idle"
    },
    reducers:{
        addPost(state,action){
            state.posts.push(action.payload);

        },

        removePost(state , action){
            let updatePost = state.posts.filter(item => item.id !== action.payload)
            state.posts = updatePost;
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state, action)=>{
            state.status = "loading";
        })

        .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.status = "succeed";
            state.posts = action.payload
        })

        .addCase(fetchPosts.rejected, (state, action)=>{
            state.status = "failed";
        })
        .addCase(addNewPost.fulfilled,(state,action)=>{
            state.posts.push(action.payload);
        })

    }
})

export const { addPost , removePost } = postSlice.actions;
export const getAllPosts = (state) => state.post.posts;
export const getStatus = (state) => state.post.status;
export default postSlice.reducer;