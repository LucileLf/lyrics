import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazam';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams(); // retrieve song id from url

  const { activeSong, idPlaying } = useSelector((state) => state.player);
  console.log(useGetSongDetailsQuery(songid))
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);

  console.log(songData);

  if (isFetchingSongDetails) return <Loader title="Loading lyrics..." />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData}/>
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {/* loop over songData  */}
          {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => (<p className="text-gray-300 text-base my-1">{line}</p>)) : <p className="text-gray-300 text-base my-1">Sorry, no lyrics found...</p> }
        </div>
      </div>
    </div>
  );
};
export default SongDetails;
