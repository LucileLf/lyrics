import { useSelector } from 'react-redux';
// useDispatch hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
// dispatch() dispatches an action. This is the only way to trigger a state change.
// useSelector allows you to extract data from the Redux store state for use in this component, using a selector function.

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/shazam';

const Discover = () => {
  // const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player); // Redux has a global state, split into slices for functionalities (chose which slice with useSelector)
  // cf initialState in playerSlice
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = 'Pop';
  // if (data && data.tracks) {
  //   // Now you can safely access data.tracks
  //   console.log(data.tracks);
  // }
  // console.log(data)

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-rox flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* fetch songs from API
            song card for each */}
        {data?.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} activeSong={activeSong} isPlaying={isPlaying} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Discover;
