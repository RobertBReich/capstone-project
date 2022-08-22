import create from 'zustand';

export const useStore = create(set => ({
	arrData: [],
	arrConfiguration: [],

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
}));
export default useStore;
