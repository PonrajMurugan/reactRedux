// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewPost } from '../Store/postSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

// const Addpost = () => {

//     const dispatch = useDispatch();
//     const [stateRep, setStateRepo] = useState("idle")
//     const onAddPost = async  () => {
//         try{
//             setStateRepo("loading");
//             dispatch(addNewPost({id:101, userId:10, title:"New Post" ,body:"Dummy Content"}))
//             .unwrap();

//         }catch(err){
//             console.log("Unable To Create Post:", err)
            
//         }finally{
//             setStateRepo("idle")

//         }

//     }



//     return (
//         <div>
//             <Button variant='primary' style={{margin:"10px 0px 10px 0px"}} onClick={onAddPost}>Add Post</Button>
//         </div>
//     );
// };

// export default Addpost;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../Store/postSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Addpost = () => {
    const dispatch = useDispatch();
    const [stateRep, setStateRepo] = useState("idle");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onAddPost = async () => {
        try {
            setStateRepo("loading");
            await dispatch(addNewPost({ id: parseInt(id), userId: 10, title, body })).unwrap();
        } catch (err) {
            console.log("Unable To Create Post:", err);
        } finally {
            setStateRepo("idle");
        }
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formId">
                    <Form.Label><b>ID</b></Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formTitle">
                    <Form.Label><b>Title</b></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBody">
                    <Form.Label><b>Body</b></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Form.Group>
                <Button variant='primary' style={{ margin: "10px 0px 10px 0px" }} onClick={onAddPost} disabled={stateRep === "loading"}>
                    {stateRep === "loading" ? "Adding..." : "Add Post"}
                </Button>
            </Form>
        </div>
    );
};

export default Addpost;
