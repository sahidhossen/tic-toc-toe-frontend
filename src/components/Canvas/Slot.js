import React from "react";
import { Cross, Oval } from "../Icons";
import { Flex } from "../../styled";

const Slot = (props) => {
	const { player, index, onSelect } = props;

	const onClicHandler = () => {
		onSelect(index);
	};

	return (
		<Flex className="slot" onClick={onClicHandler}>
			{player === "x" && <Cross data-test="crossSvg" />}
			{player === "o" && <Oval data-test="ovalSvg" />}
		</Flex>
	);
};

export default Slot;
