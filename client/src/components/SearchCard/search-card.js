import React from "react";
import { Media } from "reactstrap";
import ViewBtn from "../ViewBtn/viewbtn.js";
import SaveBtn from "../SaveBtn/savebtn.js";

const Card = (props) => {
    return (
        <div className="border" style={{ margin: "50px", padding: "50px" }}>
            {/* {console.log(props.results)} */}
            {props.results.map((result) => {
                return (
                    <>
                        <div className="row postion-relative">
                            <div className="col-md-9">
                                <Media top heading>
                                    {result.volumeInfo.title}
                                </Media>
                                <Media body>
                                    {result.volumeInfo.authors.join(" ")}
                                </Media>
                                <Media body>
                                    {result.volumeInfo.publisher}
                                </Media>
                            </div>
                            <div className="col-md-3">
                                <ViewBtn previewLinks={result.volumeInfo.previewLink}/>
                                <SaveBtn handleSaveBtn={props.handleSaveBtn} result={result}/>
                            </div>
                        </div>
                        <div>
                            <Media style={{ margin: "25px" }}>
                                <Media
                                    style={{ marginRight: "25px" }}
                                    left
                                    href="#"
                                >
                                    <Media
                                        object
                                        src={
                                            result.volumeInfo.imageLinks !==
                                            undefined
                                                ? result.volumeInfo.imageLinks
                                                      .thumbnail
                                                : "/assets/images/no-img.png"
                                        }
                                        alt="Book"
                                    />
                                </Media>
                                <Media body>
                                    {result.volumeInfo.description}
                                </Media>
                            </Media>
                        </div>
                        <hr />
                    </>
                );
            })}
        </div>
    );
};

export default Card;
