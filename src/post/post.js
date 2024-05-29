import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, fetchPosts, getAllPosts, getStatus, removePost } from '../Store/postSlice';
import Addpost from './addPost';
import Postedby from './postedby';


const PostItems = () => {
    const posts = useSelector(getAllPosts);
    const postStatus = useSelector(getStatus);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(postStatus === "idle"){
            dispatch(fetchPosts());
        }
    },[postStatus, dispatch])

    const onAddPost = () => {
        dispatch(addPost({
            id:"3",
            title:"Post 3",
            body:"Dummy Content"

        }))
    }

    const onRemovePost = (id)  =>{
        dispatch(removePost(id));
    }

    console.log(posts);
    // console.log(postStatus);

    let postResponse = null;
    if(postStatus === "loading"){
        postResponse = <p style={{textAlign:"center"}}>Loading...</p>
    } 
    else if(postStatus === "succeed"){

        postResponse = posts.map((item,inx)=>(

            <div className='post-bx' key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {/* <button onClick={()=>onRemovePost(item.id)}>Delete Post</button> */}
                <Postedby userId={item.userId}/>
            </div>
        )).reverse();
    }
    else{
        postResponse = <p style={{textAlign:"center"}}>Something Went Wrong ...</p>

    }
    

    return (
        <div className='post-container'>
            <Addpost/>
            {/* <button type="button" onClick={onAddPost}>Add Post</button> */}
            {postResponse}   
        </div>
    );
};

export default PostItems;