import React, { useState } from "react";
import StyledFoodMenu from "./StyledFoodMenu";

function Search({ foods }) {
  const [searchField, setSearchField] = useState("");
  const [cafeFilter, setCafeFilter] = useState(false);

  const filtered = foods.filter((entry) => {
    const matchesSearch = entry.name.toLowerCase().includes(searchField.toLowerCase()) || 
                          entry.description.toLowerCase().includes(searchField.toLowerCase());
    const matchesCafe = !cafeFilter || entry.cafe; // If cafeFilter is true, only return entries with a cafe
    return matchesSearch && matchesCafe;
  });

  return (
    <div>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchField(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={cafeFilter}
            onChange={(e) => setCafeFilter(e.target.checked)}
          />
          <b>Only show hostels with cafe</b>
        </label>
      </div>
      <StyledFoodMenu foods={filtered} />
    </div>
  );
}

export default Search;
