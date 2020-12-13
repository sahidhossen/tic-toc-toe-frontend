import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "./actions";
import { Container, LoaderDiv } from "./styled";
import Canvas from "./components/Canvas";
import Header from "./components/Header";

const Game = () => {
	const dispatch = useDispatch();
	const { fetch } = useSelector((store) => store.game);
	useEffect(() => {
		dispatch(getGame);
	}, []);
	return (
		<Container>
			{!fetch && <LoaderDiv>...Loading</LoaderDiv>}
			<Header />
			<Canvas />
		</Container>
	);
};

export default Game;
