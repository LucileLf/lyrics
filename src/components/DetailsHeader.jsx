import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, songId, artistData, songData }) => { // used for both artist details and song details
  const coverArt = songData ? songData?.resources['shazam-songs'][songId].attributes.images.coverArt : artistData.data[0].attributes.artwork?.url;

  const songTitleFromSongData = songData?.resources['shazam-songs'][songId].attributes.title;
  const artistNameFromArtistData = artistData?.data[0].attributes.name;

  const genreFromArtistData = artistData?.data[0].attributes.genreNames[0];
  const genreFromSongData = songData?.resources['shazam-songs'][songId].attributes.genres.primary;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inest-0 flex items-center">
        <img src={coverArt.replace('{w}', '500').replace('{h}', '500')} alt="art" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{songData ? songTitleFromSongData : artistNameFromArtistData}</p>
          {!artistId && (
            <Link to={`/artists/${Object.keys(songData?.resources.artists)[0]}`}>
              <p className="text-base text-gray-400 mt-2">{artistNameFromArtistData}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {songData ? genreFromSongData : genreFromArtistData}
          </p>
          {/* <p className="text-base text-gray-400 mt-2">{artistId ? artist?.genreNames[0] : songData?.resources.artists['577261450'].attributes.name}</p> */}
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
