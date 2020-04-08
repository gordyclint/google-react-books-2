import React, { Component } from "react";
import SavedCard from "../components/SavedCard/saved-card.js";
import API from "../utils/API.js";

class Saved extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        API.getSavedBooks().then((res) => {
            this.setState({ books: res.data });

            console.log(this.state.books);
        });
    }

    handleDeleteBtn = (id) => {
        console.log(id);
        API.deleteBook(id).then((res) => {
            console.log(res);
            window.location.reload();
        });

    };

    render() {
        return (
            <div>
                <div style={{ margin: "50px" }} className="border">
                    <h2 style={{ padding: "20px" }}>Saved Books</h2>
                    <SavedCard
                        results={this.state.books}
                        handleDeleteBtn={this.handleDeleteBtn}
                    />
                </div>
            </div>
        );
    }
}

export default Saved;
