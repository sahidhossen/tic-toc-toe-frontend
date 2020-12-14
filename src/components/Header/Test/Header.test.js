import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import { initialState } from "../../../reducers/gameReducer";
import { HeaderContainer, PlayerState } from "../../../styled";
import { testStore } from "../../../../testUtils";
import Header from "../index";

const setUp = (initialState = {}) => {
	const store = testStore(initialState);

	const wrapper = mount(
		<Provider store={store}>
			<Header />
		</Provider>,
	);
	return wrapper;
};

describe("Header Component", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUp({ game: initialState });
	});

	it("Should render without errors", () => {
		const component = wrapper.find(HeaderContainer);
		expect(component.length).toBe(1);
	});

	it("Should render player state", () => {
		const component = wrapper.find(PlayerState);
		expect(component.text()).toContain("Start Game");
	});
});
