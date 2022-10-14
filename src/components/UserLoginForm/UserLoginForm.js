import React, {useState} from "react";
import {v4 as uuidV4} from "uuid"

const LoginForm = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    
const handleTitleChange = (event) => {
    setTitle(event.target.value) 
}

const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
}

const submitIdea = (event) => {
    event.preventDefault()
    let newIdea = {
        id: uuidV4(),
        title,
        description
    }
    props.addIdea(newIdea)
    clearInputs()
}

const clearInputs  = () => {
    setTitle("")
    setDescription("")
}
    
    return(
        <LoginForm>
            <input 
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                required
                onChange={handleTitleChange}
            />
            <input 
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                required
                onChange={handleDescriptionChange}
            />
            <button onClick={(event) => submitIdea(event)}>Submit</button>
        </LoginForm>
    )

}

export default LoginForm