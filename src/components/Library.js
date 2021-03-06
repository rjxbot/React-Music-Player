import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrSong,
  audioRef,
  isPlaying,
  setSongs,
  setLibraryState,
  libraryState,
  setIsPlaying,
}) => {
  return (
    <div className={`library ${libraryState ? "selected" : ""}`}>
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            songs={songs}
            setCurrSong={setCurrSong}
            isPlaying={isPlaying}
            key={song.id}
            setSongs={setSongs}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
