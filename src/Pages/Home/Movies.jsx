import Card from "../../Components/Card";
import useMovies from "../../Hooks/useMovies";

const Movies = () => {
  const [movies] = useMovies();
  return (
    <div className="row row-cols-2 row-cols-lg-3 container mx-auto">
      {movies.map((movie) => (
        <div className="col mb-3" key={movie.show.id}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
