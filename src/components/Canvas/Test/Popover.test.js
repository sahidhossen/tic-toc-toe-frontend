import React from "react";
import { mount } from "enzyme";
import { Popover } from "../../../styled";
import { findByTestAttr } from "../../../../testUtils";
import ResultPopover from "../ResultPopover";

const setUp = (initialState = {}) => {
	const wrapper = mount(<ResultPopover {...initialState} />);
	return wrapper;
};

describe("Result Popover Component", () => {
	let wrapper, mockFunction;
	beforeEach(() => {
		mockFunction = jest.fn();
		const initialProps = {
			players: { x: { name: "X", wins: 0 } },
			winner: "x",
			onReset: mockFunction,
		};
		wrapper = setUp(initialProps);
	});

	it("Should render without errors", () => {
		const component = wrapper.find(Popover);
		expect(component.length).toBe(1);
	});

	it("Should render player win message", () => {
		const component = findByTestAttr(wrapper, "message");
		expect(component.text()).toContain("X Win!");
	});

	it("Should render draw message if no one winner", () => {
		wrapper.setProps({ winner: null });
		const component = findByTestAttr(wrapper, "message");
		expect(component.text()).toContain("Draw!");
	});

	it("Simulate the reset event", () => {
		wrapper.simulate("click");
		const callback = mockFunction.mock.calls.length;
		expect(callback).toBe(1);
	});
});
