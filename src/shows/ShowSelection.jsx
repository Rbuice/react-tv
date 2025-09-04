import "./shows.css";
/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShows }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          onClick={() => setSelectedShows(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
