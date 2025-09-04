/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
export default function App() {
  const [selectedShow, setSelectedShows] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={tvShows} setSelectedShows={setSelectedShows} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
