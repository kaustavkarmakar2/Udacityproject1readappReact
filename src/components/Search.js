import React from 'react';
import { Link } from "react-router-dom";
class Search extends React.Component{
 
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


  };
  // componentWillMount(){
  //   // this.input.focus()
  //   // this.execSearched=throttle(this.execSearched,1000,{
  //   //   loading:false,
  //   //   trailing:true
  //   // })
  //   const {query}=this.state
  //   if(query)
  //   this.execSearched(query)
    
  // }
  
    render(){
      const query = this.props.books;
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
            </div>
          </div>
            
        )
            
        
    }
}
export default Search;