import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axiosInstance from '../../axios configuration/axiosInstace'
const MovieDetails = (props) => {
  const params = useParams();

  const [Movie, setMovie] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`${params.id}?api_key=697f28803e3d94bbfbe4de0428a119f5`)
      .then((res) => {
        console.log(res.data.original_title);
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>{Movie.original_title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`} />
    </div>
  );
};

export default MovieDetails;
