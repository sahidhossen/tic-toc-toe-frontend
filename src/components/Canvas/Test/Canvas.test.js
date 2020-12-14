import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { initialState } from "../../../reducers/gameReducer";
import { GameCanvas } from "../../../styled";
import { testStore, findByTestAttr } from "../../../../testUtils";
import Canvas from "../index";

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = mount(
		<Provider store={store}>
			<Canvas />
		</Provider>,
	);
	return wrapper;
};

describe("Canvas Component", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUp({ game: initialState });
	});

	it("Should render without errors", () => {
		const component = wrapper.find(GameCanvas);
		expect(component.length).toBe(1);
	});

	it("Should render grid background", () => {
		const component = findByTestAttr(wrapper, "gridBackground");
		expect(component.length).toBe(1);
	});
});
