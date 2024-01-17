import SongBar from './SongBar';
import { useGetSongDetailsQuery } from '../redux/services/shazam';

const RelatedSongs = ({
  tracks,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {Object.keys(tracks)
        .slice(0, 2)
        .map((key, i) => {
          const track = tracks[key];
          const trackId = track.id.split('-')[track.id.split('-').length - 1];
          const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(trackId);
          const song = songData?.resources['shazam-songs'][trackId].attributes;
          const artistId = '0'; // artists ? Object.keys(artists)[0] : '0';
          return (
            artistId && (
            <SongBar
              song={song}
              i={i}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
            )
          );
        })}
    </div>
  </div>
);

export default RelatedSongs;
