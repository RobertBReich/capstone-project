import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useStore = create(
	persist(set => ({
		arrMovieBookmarks: [],
		arrTvBookmarks: [],
		arrData: [],
		objConfiguration: {
			base_url: 'http://image.tmdb.org/t/p/',
			secure_base_url: 'https://image.tmdb.org/t/p/',
			backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
			logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
			poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
			profile_sizes: ['w45', 'w185', 'h632', 'original'],
			still_sizes: ['w92', 'w185', 'w300', 'original'],
		},
		strLanguage: 'en-us',
		isConfigurationLoaded: false,
		hasLoadingErrorOccured: false,

		setMovieBookmarks: ele => {
			set(state => {
				if (!state.arrMovieBookmarks.find(item => item.id === ele.id)) {
					state.arrMovieBookmarks = [...state.arrMovieBookmarks, ele];
				}

				return {arrMovieBookmarks: state.arrMovieBookmarks};
			});
		},
		removeMovieBookmarks: _id => {
			set(state => {
				state.arrMovieBookmarks = state.arrMovieBookmarks.filter(item => item.id != _id);
			});
		},
		setTvBookmarks: ele => {
			set(state => {
				if (!state.arrTvBookmarks.find(item => item.id === ele.id)) {
					state.arrTvBookmarks = [...state.arrTvBookmarks, ele];
				}

				return {arrTvBookmarks: state.arrTvBookmarks};
			});
		},
		removeTvBookmarks: _id => {
			set(state => {
				state.arrTvBookmarks = state.arrTvBookmarks.filter(item => item.id != _id);
			});
		},
		setData: item => {
			// eslint-disable-next-line no-unused-vars
			set(state => {
				return {
					arrData: item,
				};
			});
		},
		setConfiguration: item => {
			// eslint-disable-next-line no-unused-vars
			set(state => {
				return {objConfiguration: item};
			});
		},
		setConfigurationLoaded: bool => {
			// eslint-disable-next-line no-unused-vars
			set(state => {
				return {
					isConfigurationLoaded: bool,
				};
			});
		},
		setLoadingErrorOccured: bool => {
			// eslint-disable-next-line no-unused-vars
			set(state => {
				return {
					hasLoadingErrorOccured: bool,
				};
			});
		},
	}))
);
export default useStore;
