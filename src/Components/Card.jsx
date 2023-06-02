import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { image, name, genres, runtime, id } = movie.show;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image.original}
            className="img-fluid h-100 rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Genres: {genres.join(", ")}</p>
            <p className="card-text">
              Run-time: {runtime ? runtime : "Not Available"}
            </p>
          </div>
          <div className="text-end pe-1 pb-2">
            <Link to={`/movie/${id}`}>
              <button className="btn btn-success">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
