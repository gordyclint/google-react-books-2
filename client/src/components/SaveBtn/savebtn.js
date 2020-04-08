import React from "react";
import { Button } from "reactstrap";

const SaveBtn = (props) => {
    return(<Button onClick={() => { props.handleSaveBtn(props.result)} }>Save</Button>)
};

export default SaveBtn;
