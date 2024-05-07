import React from "react";

function SearchBox(props) {
  return (
    <form onSubmit={props.onSubmit} className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search for movie"
      />
    </form>
  );
}

export default SearchBox;
