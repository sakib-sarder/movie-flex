import { useQuery } from "@tanstack/react-query";

const useMovies = () => {
  const {
    data: movies = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      return res.json();
    },
  });
  return [movies, refetch, isLoading];
};

export default useMovies;
