import {  useParams } from "react-router-dom";
import useMovies from "../../Hooks/useMovies";
import "./ShowSummary.css";
import ShowModal from "../Home/Modal/Modal";

const ShowSummary = () => {
  const { id } = useParams();
  const [movies, ,isLoading] = useMovies();
  const movie = movies.find((movie) => movie?.show?.id == id);
  console.log(movie);
  console.log(movies);
  if (isLoading) {
    return <h1 className="text-center my-5 py-5">Loading...</h1>
  }
  const { name, genres, image, runtime, language } = movie.show || {};

  return (
    <div className="py-5 mb-3 bg-info-subtle">
      <div className="row g-0 container mx-auto px-4">
        <div className="col-md-4">
          <img
            src={image.original}
            className="img-fluid h-100 rounded-start"
            alt="..."
          />
        </div>
        <div className="ps-5 my-auto col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Genres: {genres.join(", ")}</p>
            <p className="card-text">
              Run-time: {runtime ? runtime : "Not Available"} minutes
            </p>
            <p className="card-text">
              Language: {language ? language : "Not Available"} 
            </p>
          </div>
          <div className="text-end pe-1 pb-2">
            <ShowModal movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
