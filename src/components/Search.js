import { useState, useEffect } from "react";



const Search = (props) => {

  const [term,setTerm]=useState([""])

  const handleonSubmit=(e)=>{
    setTerm(e.preventDefault())
    props.searchMovie(term)
  }

  const handleOnChange=(e)=>{
    setTerm(e.target.value)
  
    
  }

  

  return (
    <form onSubmit={handleonSubmit} className="row g-3 mb-5">
      <div className="col-8">

        <input onChange={handleOnChange} type="text" className="form-control" placeholder="search.." value={term}/>
      </div>
      <div className="col-4">
        <input
          type="submit"
       
          className="form-control btn-block btn btn-danger text-white"
        />
      </div>
    </form>
  );
};

export default Search;
