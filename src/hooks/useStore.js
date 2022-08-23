import create from 'zustand';

export const useStore = create(set => ({
	arrData: [],
	arrConfiguration: [],
	isConfigurationLoaded: false,
	hasLoadingErrorOccured: false,

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
			return {arrConfiguration: item};
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
}));
export default useStore;
