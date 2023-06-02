import Movies from "./Movies";

const Home = () => {
  return (
    <div className="bg-info-subtle py-4">
      <h1 className="text-center text-success">Latest Movies</h1>
      <Movies />
    </div>
  );
};

export default Home;
