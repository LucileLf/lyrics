import { useEffect, useRef } from "react";
import { Link, useHref } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper.react';
import { Freemode } from 'swiper';

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazam";

import 'swiper/css';
import 'swiper/css/free-mode';

// const TopPlay = () => {
//   const dispatch = useDispatch();
//   const { setActiveSong, isPlaying } = useSelector((state) => state.palyer);
//   const { data, isFetching } = useGetTopChartsQuery();
//   const divRef = useHref(null)
// };

export default TopPlay;
