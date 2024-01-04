import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazam";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams(); // retrieve song id from url

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: isFetchingSongRelated,
    error,
  } = useGetSongRelatedQuery(songid);

  console.log(data);

  let lyrics = [];
  if (songData?.resources?.lyrics) {
    const firstKey = Object.keys(songData.resources.lyrics)[0];
    lyrics = songData.resources.lyrics[firstKey].attributes.text;
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingSongRelated)
    return <Loader title="Searching song details..." />;

  if (error) return <Error />;
  // console.log(songData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songid={songid} songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {lyrics ? (
            lyrics.map((line, i) => (
              <p key={i} className="text-gray-300 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-300 text-base my-1">
              Sorry, no lyrics found...
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};
export default SongDetails;
