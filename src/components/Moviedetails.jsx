import React, { Component } from 'react';

class Moviedetails extends Component {
    constructor(props){
        super(props)
    }
    this.state={
        movieTitle:"",
        movieReleased:"",
        movieWriter:"",
    };


    }
    this.setState({
        movieTitle:Title,
        movieReleased:Released,
        movieWriter:Writer,
    })
    render() {
        return (
            <div className="App">
                <div className="container">
                <h1 className="title">You van see the movie details here!</h1>
                <Search searchMovie={this.renderMovies}/>
                <Title{this.state.movieTitle}
                Released{this.state.movieReleased}
                Writer{this.state.movieWriter}/>


                </div>
                
            </div>
        );
    }
}

export default Moviedetails;