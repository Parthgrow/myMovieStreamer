import React from "react";
import MoviesContext from "./MoviesContext";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
