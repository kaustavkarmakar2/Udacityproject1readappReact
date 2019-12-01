import React from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from ".././BooksAPI";
import throttle from 'lodash/throttle';
import List from './list-books';
class Search extends React.Component{
  state = { 
   books:[],
   query:''

  }
  execSearched=(query)=>{
    const search = this.currentSearched = BooksAPI.search(query).then(books =>{
      //serState only for the current searched result
      if(this.currentSearched ===search)
      this.setState({books})
    })

  }
  updateQuery=(query)=>{
    this.currentSearched=null;
    if(query)
    {
      this.execSearched(query)
      this.setState({
        books:[],
        query
      })
    }


  }
  componentWillMount(){
     this.input.focus()
    this.execSearched=throttle(this.execSearched,1000,{
      loading:false,
      trailing:true
    })
    const {query}=this.state
    if(query)
    this.execSearched(query)
    
  }
  
    render(){
      const {books,query} = this.state
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" >
                <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                 

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query}
                 onChange={event=>this.updateQuery(event.target.value)} ref={node=>this.input=node}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              <List books={books.map((searchedBook)=>{
                const myBook = this.props.books((myBook)=>(myBook.id === searchedBook.id))[0]
                searchedBook.shelf=myBook ? myBook.shelf : "none"
                return searchedBook
              })}
              onBookShelfChange={this.props.onBookShelfChange}
              />
              {console.log(books)}
            </div>
          </div>
            
        )
            
        
    }
}
export default Search;