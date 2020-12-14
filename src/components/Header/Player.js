import React from "react";
import { PlayerTitle } from "../../styled";

const Player = (props) => {
	const { player, active, winner, tie } = props;
	let classes = "";
	if (active) {
		classes = "active";
	}
	if (winner || tie) {
		classes += " winner";
	}
	return (
		<PlayerTitle className={classes}>
			<span className="player-name" data-test="playerName">
				{player.name}
			</span>
			<span className="player-name" data-test="playerWins">
				{player.wins}
			</span>
		</PlayerTitle>
	);
};

export default Player;
