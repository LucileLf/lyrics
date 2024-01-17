import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import {
  useGetArtistDetailsQuery,
} from '../redux/services/shazam';

const ArtistDetails = () => {
  const { id: artistId } = useParams(); // retrieve song id from url
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, detailsError } = useGetArtistDetailsQuery(artistId);
  const { data: artistTracks, isFetching: isFetchingArtistTracks, tracksError } = useGetArtistDetailsQuery(artistId);

  // gettopsongs from artist
  // console.log(artistTracks.data);
  // console.log(artistData?.data[0].attributes);
  // console.log(Object.values(artistData.data, id));
  //  console.log(Object.values(artistData.data.id))

  // const array = artistData?.data?.map(item => item.id)

  // console.log(array);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (detailsError || tracksError) return <Error />;
  // console.log(songData);
  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        songId=""
        artistData={artistData}
        songData={null}
      />

      <RelatedSongs
        tracks={artistTracks.data} // songs of artists
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={null}
        handlePlayClick={null}
        artistId={artistId}
      />

    </div>
  );
};
export default ArtistDetails;
