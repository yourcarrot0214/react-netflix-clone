import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>Movie Data Loding...🕖</div>;

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
        className="modal__poster-img"
      />
    </section>
  );
}
