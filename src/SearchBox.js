/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";

function SearchBox() {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    console.log("Searching for:", value);
  };

  // debounce the function
  const debouncedSearch = useCallback(
    debounce((value) => handleSearch(value), 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}
export default SearchBox;