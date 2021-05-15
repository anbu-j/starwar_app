import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
    constructor(){
        super()
        this.state={
            keyword:'',
            movies:[] 

        };
    }
    keywordChanged= event=>
    this.setState({keyword:event.target.value})
    //console.log(event.target.value)

    searchMovie = ()=>
    fetch('http://www.omdbapi.com/?t=starwars&apikey=a571f5e7')
    .then(response=> response.json())
    .then(this.renderMovies)

    renderMovies =(search)=>
    this.setState({
       movies:search.movie
    })
    console.log(response)
    render() {
        return (
            <div>
                <h2>Search Movies</h2>
                <div className="input-group">
                    <input value={this.state.keyword}
                    onChange={this.keywordChanged}
                    className="form-control"
                    placeholder="keyword" />
                    <div className="input-group-append">
                        <button 
                        onClick={this.searchMovie}
                        className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                {
           //         this.state.movies.map(movie,index => 
            //        <li key={index}className="list-group-item">
            //            {movie.Title}</li>)
                }
                </ul>
                
            </div>
        );
    }
}

export default Search;

{/* const Search = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox; */}