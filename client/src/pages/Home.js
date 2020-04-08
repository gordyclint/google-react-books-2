import React, { Component } from "react";
import SearchCard from "../components/SearchCard/search-card";
import SearchForm from "../components/SearchForm/searchform";
import API from "../utils/API.js";

class Home extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: "",
    };

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleSaveBtn = (bookData) => {
        bookData = {
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors.join(" "),
            description: bookData.volumeInfo.description,
            image:
                bookData.volumeInfo.imageLinks !== undefined
                    ? bookData.volumeInfo.imageLinks.thumbnail
                    : "/assets/images/no-img.png",
            link: bookData.volumeInfo.previewLink,
        };
        API.saveBook(bookData).then((res) => {
            console.log(res);
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.getBooks(this.state.search)
            .then((res) => {
                if (res.data.status === "error") {
                    throw new Error(res.data.items);
                }
                this.setState({ results: res.data.items, error: "" });
            })
            .catch((err) => this.setState({ error: err.items }));
    };
    render() {
        return (
            <div>
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    books={this.state.books}
                />
                <div style={{ margin: "50px" }} className="border">
                    <h2 style={{ padding: "20px" }}>Results</h2>
                    <SearchCard
                        handleSaveBtn={this.handleSaveBtn}
                        results={this.state.results}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
