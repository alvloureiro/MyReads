import React from "react";
import { Link } from "react-router-dom";

const ShelfButtonSearch = ({ label }) => (
  <div className="open-search">
    <Link to="/search">{label}</Link>
  </div>
);

export default ShelfButtonSearch;
