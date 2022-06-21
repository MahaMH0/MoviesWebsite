import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from '../../axios configuration/axiosInstace'
import { useSelector } from 'react-redux';
import ReactPaginate from "react-paginate";
const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);

  const MoviesPerPage =4;
  const numberOfMoviesVistited = page * MoviesPerPage;



  const LoaderState = useSelector((state) => state.loader.isLoading);
  useEffect(() => {
    axiosInstance
      .get("popular?api_key=697f28803e3d94bbfbe4de0428a119f5")
      .then((res) => {
        console.log(res.data.results);
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const totalPages = Math.ceil(Movies.length / MoviesPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">

        {LoaderState && <div className="d-flex justify-content-center">
          <div className="spinner-border " role="status"></div>
        </div>}


        {Movies.slice(
          numberOfMoviesVistited,
          numberOfMoviesVistited + MoviesPerPage
        ).map((Movie) => {
          return (
            <div className="col" key={Movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                  style={{ height: "200px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{Movie.original_title}</h5>
                  <p className="card-text">{Movie.overview}</p>
                  <Link to={`/details/${Movie.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        })}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={totalPages}
          onPageChange={changePage}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"navigationDisabled"}
          activeClassName={"navigationActive"}
        />;
      </div>
    </>
  );
};

export default Movies;
