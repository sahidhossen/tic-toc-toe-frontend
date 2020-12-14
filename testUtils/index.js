import configureMockStore from "redux-mock-store";
import { middlewares } from "../src/store";

export const testStore = (initialState) => {
	const mockStore = configureMockStore(middlewares);
	const store = mockStore(initialState);
	return store;
};

export const findByTestAttr = (component, attr) => {
	return component.find(`[data-test='${attr}']`);
};
