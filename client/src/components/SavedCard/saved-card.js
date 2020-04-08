import React from "react";
import { Media } from "reactstrap";
import ViewBtn from "../ViewBtn/viewbtn.js";
import DeleteBtn from "../DeleteBtn/deletebtn.js";

const Card = (props) => {
    return (
        <div className="border" style={{ margin: "50px", padding: "50px" }}>
            {/* {console.log(props.results)} */}
            {props.results.map((result, index) => {
                return (
                    <div key={index} >
                        <div className="row postion-relative">
                            <div className="col-md-9">
                                <Media top heading>
                                    {result.volumeInfo !== undefined
                                        ? result.volumeInfo.title
                                        : result.title}
                                </Media>
                                <Media body>
                                    {result.volumeInfo !== undefined
                                        ? result.volumeInfo.authors.join(" ")
                                        : result.authors}
                                </Media>
                                <Media body>
                                    {result.volumeInfo !== undefined
                                        ? result.volumeInfo.publisher
                                        : " "}
                                </Media>
                            </div>
                            <div className="col-md-3">
                                <ViewBtn
                                    previewLinks={
                                        result.volumeInfo !== undefined
                                            ? result.volumeInfo.previewLinks
                                            : result.link
                                    }
                                />
                                <DeleteBtn
                                    handleDeleteBtn={props.handleDeleteBtn}
                                    id={result._id}
                                />
                            </div>
                        </div>
                        <div>
                            <Media style={{ margin: "25px" }}>
                                <Media
                                    style={{ marginRight: "25px" }}
                                    left
                                    href={
                                        result.volumeInfo !== undefined
                                            ? result.volumeInfo.previewLink
                                            : result.link
                                    }
                                >
                                    <Media
                                        object
                                        src={
                                            result.volumeInfo !== undefined
                                                ? result.volumeInfo !==
                                                  undefined
                                                    ? result.volumeInfo
                                                          .imageLinks.thumbnail
                                                    : "/assets/images/no-img.png"
                                                : result.image
                                        }
                                        alt="Book"
                                    />
                                </Media>
                                <Media body>
                                    {result.volumeInfo !== undefined
                                        ? result.volumeInfo.description
                                        : result.description}
                                </Media>
                            </Media>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
