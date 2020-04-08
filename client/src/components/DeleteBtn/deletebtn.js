import React from "react";
import { Button } from "reactstrap";

const DeleteBtn = (props) => {
    return(<Button onClick={() => {props.handleDeleteBtn(props.id)}}>Delete</Button>);
};

export default DeleteBtn;
