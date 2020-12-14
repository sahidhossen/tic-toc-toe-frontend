import React from "react";
import { Popover } from "../../styled";

const ResultPopover = (props) => {
	const { players, winner, onReset } = props;
	const message = winner ? players[winner].name + " Win!" : "Draw!";
	return (
		<Popover onClick={onReset}>
			<div className="message" data-test="message">
				{message}
			</div>
		</Popover>
	);
};

export default ResultPopover;
