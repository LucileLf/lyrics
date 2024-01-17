import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '81fbc7676fmsh2e55a9da1214b45p1d1bb1jsn1b5f976881f7',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Shazam API
export const shazamApi = createApi({
  reducerPath: 'shazamApi', // name of API to call it from the store
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '81fbc7676fmsh2e55a9da1214b45p1d1bb1jsn1b5f976881f7');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({ query: (songId) => `/shazam-songs/get-details?id=${songId}&locale=en-US` }),
    getSongRelated: builder.query({ query: (songId) => `/shazam-songs/list-similarities?id=track-similarities-id-${songId}&locale=en-US` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}&locale=en-US` }),
    getArtistTracks: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}&locale=en-US` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTracksQuery,
} = shazamApi;

// GENIUS API
// export const shazamApi = createApi({
//   reducerPath: 'shazamApi', // name of API to call it from the store
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
//     prepareHeaders: (headers) => {
//       headers.set('X-RapidAPI-Key', '81fbc7676fmsh2e55a9da1214b45p1d1bb1jsn1b5f976881f7');
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getTopCharts: builder.query({ query: () => '/chart/songs/' }),
//     getSongLyrics: builder.query({ query: (songid) => `/song/lyrics/?id=${songid}` }),
//   }),
// });

// export const {
//   useGetTopChartsQuery,
//   useGetSongLyricsQuery,
// } = shazamApi;
