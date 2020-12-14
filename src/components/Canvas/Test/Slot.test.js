import React from "react";
import { mount } from "enzyme";
import { Flex } from "../../../styled";
import { findByTestAttr } from "../../../../testUtils";
import Slog from "../Slot";

const setUp = (initialState = {}) => {
	const wrapper = mount(<Slog {...initialState} />);
	return wrapper;
};

describe("Board Slot Component", () => {
	let wrapper, mockFunction;
	beforeEach(() => {
		mockFunction = jest.fn();
		const initialProps = {
			player: "x",
			index: 0,
			onSelect: mockFunction,
		};
		wrapper = setUp(initialProps);
	});

	it("Should render without errors", () => {
		const component = wrapper.find(Flex);
		expect(component.length).toBe(1);
	});

	it("Should render Cross SVG", () => {
		const component = findByTestAttr(wrapper, "crossSvg");
		expect(component.length).toBe(1);
	});

	it("Should Not render Oval SVG", () => {
		const component = findByTestAttr(wrapper, "ovalSvg");
		expect(component.length).toBe(0);
	});

	it("Simulate the select event", () => {
		wrapper.simulate("click");
		const callback = mockFunction.mock.calls.length;
		expect(callback).toBe(1);
	});
});
