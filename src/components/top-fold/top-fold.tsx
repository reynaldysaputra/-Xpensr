import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./top-fold.css";
import { useDispatch } from "react-redux";
// import { searchExpense } from "../../redux/actions/expenses";

const TopFold: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  // const handleQuery = (e) => {
  //   setQuery(e.target.value);
  //   dispatch(searchExpense(e.target.value));
  // };

  return (
    <div className="topfold">
      {location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi-rr-search"></i>
            <input
              placeholder="Search for expenses"
              // value={query}
              // onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <i className="fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi-rr-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi-rr-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;