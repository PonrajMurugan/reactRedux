
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../Store/userSlice';
import { getAllPosts } from '../Store/postSlice';
import 'bootstrap/dist/css/bootstrap.min.css';


const Postedby = ({userId}) => {
    const users = useSelector(getAllUsers);
    const userName = users.filter(item => item.id == userId)[0]?.name
    // console.log(userName);

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked , setIsDisLiked] = useState(false);

    const handleLike = () => { 
        setLikes(likes + 1);
        setIsLiked(true);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
        setIsDisLiked(true);
    };

    
    return (
        <div>
             <i className="bi bi-hand-thumbs-up" style={{fontSize:"25px" , color: isLiked ? "white" : "black"}} onClick={handleLike}></i> {likes}
            <i className="bi bi-hand-thumbs-down" style={{fontSize:"25px" , color: isDisLiked ? "white" : "black"}} onClick={handleDislike}></i> {dislikes}
            <br />
        <div className='userName'>
            By { userId ? userName:"unknown User" }
        </div>
        </div>
    );
};

export default Postedby;


