import React from "react";
import { mount } from "enzyme";
import { PlayerTitle } from "../../../styled";
import { findByTestAttr } from "../../../../testUtils";
import Player from "../Player";

const setUp = (initialState = {}) => {
	const wrapper = mount(<Player {...initialState} />);
	return wrapper;
};

describe("Header Player Component", () => {
	let wrapper;
	beforeEach(() => {
		const initialProps = {
			player: { name: "X", wins: 1 },
			active: false,
			winner: null,
			tie: false,
		};
		wrapper = setUp(initialProps);
	});

	it("Should render without errors", () => {
		const component = wrapper.find(PlayerTitle);
		expect(component.length).toBe(1);
	});

	it("Should render X player name", () => {
		const playerName = findByTestAttr(wrapper, "playerName");
		expect(playerName.text()).toContain("X");
	});

	it("Should render X player wins", () => {
		const playerName = findByTestAttr(wrapper, "playerWins");
		expect(playerName.text()).toContain("1");
	});
});

describe("Header Check Another Player", () => {
	let wrapper;
	beforeEach(() => {
		const initialProps = {
			player: { name: "O", wins: 0 },
			active: false,
			winner: null,
			tie: false,
		};
		wrapper = setUp(initialProps);
	});

	it("Should render O player name", () => {
		const playerName = findByTestAttr(wrapper, "playerName");
		expect(playerName.text()).toContain("O");
	});
});
