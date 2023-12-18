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
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamApi;
