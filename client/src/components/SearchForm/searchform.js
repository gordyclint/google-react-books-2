import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SearchForm = ({ search, handleInputChange, handleFormSubmit }) => {
    return (
        <div>
            <Form>
                <FormGroup style={{ marginLeft: "50px" }}>
                    <Label for="book-search">Book Search</Label>
                    <div className="row">
                        <div className="col-md-10">
                            <Input
                                value={search}
                                onChange={handleInputChange}
                                type="book"
                                name="book"
                                id="book"
                                placeholder="eg: Harry Potter"
                            />
                        </div>
                        <div className="col-md-2">
                            <Button onClick={handleFormSubmit}>Search</Button>
                        </div>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
};

export default SearchForm;
