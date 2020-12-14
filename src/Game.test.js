import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import { initialState } from "./reducers/gameReducer";
import { Container, LoaderDiv } from "./styled";
import { testStore } from "../testUtils";
import Game from "./Game";

const setUp = (initialState = {}) => {
	const store = testStore(initialState);

	const wrapper = mount(
		<Provider store={store}>
			<Game />
		</Provider>,
	);
	return wrapper;
};

describe("Game Component", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUp({ game: initialState });
	});

	it("Should render without errors", () => {
		const component = wrapper.find(Container);
		expect(component.length).toBe(1);
		const loader = wrapper.find(LoaderDiv);
		expect(loader.length).toBe(1);
	});

	it("Loader should be remove after fetch", () => {
		wrapper = setUp({ game: { ...initialState, fetch: true } });
		const loader = wrapper.find(LoaderDiv);
		expect(loader.length).toBe(0);
	});
});
