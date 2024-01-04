import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, songid, artistData, songData }) => { // used for both artist details and song details
  // console.log("songData", songData);

  // GET DETAILS FROM SongData and SongId
  const coverArt = songData?.resources['shazam-songs'][songid].attributes.images.coverArt;
  const songTitleFromSongData = songData?.resources['shazam-songs'][songid].attributes.title;

  const artistIdFromSongData = Object.keys(songData?.resources.artists)[0];
  const artistNameFromSongData = songData?.resources.artists[artistIdFromSongData].attributes.name;
  const genreFromSongData = songData?.resources['shazam-songs'][songid].attributes.genres.primary;
  // console.log(artistNameFromSongData);
  //console.log(artistIdFromSongData);

  // GET DETAILS FROM ARTISTDATA
  const artistFromArtistId = artistData?.artists[artistId]?.attributes;
  
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inest-0 flex items-center">
        <img src={artistId ? artistFromArtistId?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : coverArt} alt="art" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{ artistId ? artistFromArtistId?.name : songTitleFromSongData }</p>
          {!artistId && (
            <Link to={`/artists/${artistIdFromSongData}`}>
              <p className="text-base text-gray-400 mt-2">{artistNameFromSongData}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {genreFromSongData}
          </p>
          {/* <p className="text-base text-gray-400 mt-2">{artistId ? artist?.genreNames[0] : songData?.resources.artists['577261450'].attributes.name}</p> */}
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
