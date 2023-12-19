import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazam';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams(); // retrieve song id from url
  const { activeSong, idPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);

  // console.log(songData);

  return (
    <div className="flex flex-col">
      {/* <DetailsHeader artistId={artistId} songData={songData}/> */}
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {/* loop over songData  */}
        </div>
      </div>
    </div>
  );
};
export default SongDetails;
