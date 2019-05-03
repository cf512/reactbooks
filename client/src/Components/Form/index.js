import React from "react"
import Label from "../Label/index"
import Input from "../Input/index"
import Button from '../Buttons/index'
const Form = (props) => {
    const style = {
        margin: "30px auto",
        border: "1px solid black",
        padding: "25px"
    }
    return(
        <form {...props} style = {style}>
            <h4>Book Search</h4>
             <Label for="search">Book</Label><br/>
            <Input type="text" name="search" placeholder=""/><br/>
            <Button><i className="material-icon"></i>Search</Button>

        </form>
    )

}

export default Form