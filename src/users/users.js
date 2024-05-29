import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, getAllUsers, getUserStatus } from '../Store/userSlice';
import { addUser } from '../Store/userSlice';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Users = () => {
    const users = useSelector(getAllUsers);
    const userStatus = useSelector(getUserStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(userStatus === "idle"){
            dispatch(fetchUserData());
        }
    },[userStatus, dispatch])

    const onAddUser = async() => {
        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {id: 11, name:"Ponraj", phone:"8681857753"})
            dispatch(addUser(response.data))

        }catch(err){
            console.log(err)

        }
        
    }

        return (
        <div>
            <Button variant='primary' style={{margin:"10px 0px 10px 0px"}}  type="button" onClick={onAddUser}>Add New User</Button>
        </div>
    );
};

export default Users;