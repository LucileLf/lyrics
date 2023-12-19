import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => { // used for both artist details and song details
  // console.log("songData", songData);

  // GET DETAILS FROM SONG DATA
  const coverArt = songData?.resources['shazam-songs']['594265720'].attributes.images.coverArt;
  const artistNameFromSongData = songData?.resources.artists['577261450'].attributes.name;
  // console.log("artistNameFromSongData", artistNameFromSongData);
  const artistIdFromSongData = songData?.resources.artists['577261450'].id;
  // console.log(artistIdFromSongData);
  const songTitleFromSongData = songData?.resources['shazam-songs']['594265720'].attributes.title;
  // console.log(songTitleFromSongData);

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
          {/* <p className="text-base text-gray-400 mt-2">{artistId ? artist?.genreNames[0] : songData?.resources.artists['577261450'].attributes.name}</p> */}
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
