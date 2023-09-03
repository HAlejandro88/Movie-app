import { CSSProperties, FC, useEffect, useState } from "react";

const movieItemStyle = (selected?: boolean): CSSProperties => {
  return {
    backgroundColor: selected ? "#a9b3c4" : "#ececec",
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "##1a1a1a"
  };
};

export type MovieItemProps = {
  id: string;
  title: string;
  selected?: boolean;
  setSelectedMovieId?: any;
};

const MovieItem: FC<MovieItemProps> = ({
  title,
  selected,
  id,
  setSelectedMovieId
}) => {
  const [selectedMovie, setSelectedMovie] = useState(selected);

  const changeMovie = (event: any): void => {
    event.preventDefault();
    setSelectedMovieId(event.target.id);
  };

  useEffect(() => {
    setSelectedMovie(selected);
  }, [selected]);

  return (
    <div
      style={movieItemStyle(selectedMovie)}
      onClick={changeMovie}
      data-movie={title}
      id={id}
    >
      {title}
    </div>
  );
};

export default MovieItem;
