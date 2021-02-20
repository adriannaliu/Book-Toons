import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchbar';
import './home.css';
import './main.css';

function Home() {

    const searchText = "start by searching for the title of your book..."

    return (
        <div>
            <Header/>
            <div className="intro">
                <h1>find the perfect soundtrack for your personal reading session.</h1>
                <div className="rectangle"></div>
            </div>
            <SearchBar text={searchText}/>
            <div className="homebutton-container">
                <button>search</button>
            </div>
        </div>
    );
}

export default Home;