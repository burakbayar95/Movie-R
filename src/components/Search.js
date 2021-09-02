import React from "react";

const Search = () => {
  return (
    <form className="row g-3 mb-5">
      <div className="col-8">
        <input type="text" className="form-control" placeholder="search.." />
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
