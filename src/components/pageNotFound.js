import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Page not Found</h1>
    </div>
  );
}

export default PageNotFound;
