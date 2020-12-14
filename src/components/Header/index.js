import React from "react";
import { useSelector } from "react-redux";
import Player from "./Player";
import { HeaderContainer, Flex, PlayerState } from "../../styled";

const Header = () => {
	const game = useSelector((state) => state.game);
	const { players, player_state, winner, logs, tie } = game;
	return (
		<HeaderContainer>
			<Flex className="player-section">
				{Object.keys(players).map((key) => {
					const _player = players[key];
					return <Player key={key} active={player_state === key} player={_player} winner={winner === key} tie={tie} />;
				})}
			</Flex>
			<PlayerState>{logs[0] || "Start Game"}</PlayerState>
		</HeaderContainer>
	);
};

export default Header;
