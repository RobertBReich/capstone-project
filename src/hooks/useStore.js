import create from 'zustand';
import {persist} from 'zustand/middleware';

// export const useActiveShoppingItemsStore = create(
// 	persist(
// 	  (set) => {
// 		return {

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
				// check if id is already used,
				if (!state.arrMovieBookmarks.find(item => item.id === ele.id)) {
					state.arrMovieBookmarks = [...state.arrMovieBookmarks, ele];
				}
				//localStorage.setItem('bookmarks.movies', JSON.stringify(state.arrMovieBookmarks));
				return {arrMovieBookmarks: state.arrMovieBookmarks};
			});
		},
		setTvBookmarks: ele => {
			set(state => {
				// check if id is already used
				if (!state.arrTvBookmarks.find(item => item.id === ele.id)) {
					state.arrTvBookmarks = [...state.arrTvBookmarks, ele];
				}
				//localStorage.setItem('bookmarks.tv', JSON.stringify(state.arrTvBookmarks));
				return {arrTvBookmarks: state.arrTvBookmarks};
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
