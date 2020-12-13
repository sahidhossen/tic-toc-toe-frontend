import styled from "styled-components";

const primaryColor = "#15BDAC";
const borderColor = "#0FA192";

export const HeaderContainer = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.player-section {
		width: 100%;
	}
`;

export const PlayerTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 5px;
	border-bottom: 2px solid transparent;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
	margin-right: 10px;
	flex: 1;
	&.active {
		border-bottom-color: ${borderColor};
		box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16);
	}
	&.winner {
		background: ${primaryColor};
		color: white;
	}
	&:last-child {
		margin-right: 0;
	}
	.player-name {
		font-size: 1.4em;
	}
`;

export const PlayerState = styled.div`
	font-size: 18px;
	text-align: center;
	margin: 10px 0;
`;

export const Container = styled.div`
	width: 450px;
	margin: 120px auto;
	background: #ffffff;
	border: 1px solid #dfdfdf;
	position: relative;
`;

export const GameCanvas = styled.div`
	background: ${primaryColor};
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 80px 0;
	.board {
		flex-wrap: wrap;
		position: relative;
		z-index: 2;
		width: 250px;
		align-items: center;
		justify-content: center;
	}
	.slot {
		cursor: pointer;
		height: 68px;
		width: 68px;
		align-items: center;
		justify-content: center;
	}
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction || "row"};
`;

export const DashSvg = styled.svg`
	width: 216px;
	opacity: 1;
	height: 100%;
	position: absolute;
	top: 177px;
	z-index: 1;
	path {
		stroke: ${borderColor};
		stroke-width: 6px;
		stroke-dasharray: 102;
		stroke-dashoffset: 0;
	}
`;

export const PlayerSvg = styled.svg`
	height: 48px;
	width: 48px;
	path {
		stroke: rgb(84, 84, 84);
		stroke-dasharray: 135.764;
		stroke-dashoffset: 0;
		stroke-width: 16px;
		fill: none;
		&.oval-path {
			stroke: rgb(242, 235, 211);
			stroke-dasharray: 301.635;
		}
	}
`;

export const LoaderDiv = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, 0.1);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

export const ResetBtn = styled.button`
	border: 1px solid #efefef;
	background: white;
	color: ${primaryColor};
	padding: 10px 20px;
	position: absolute;
	bottom: 20px;
	cursor: pointer;
	border-radius: 3px;
	z-index: 1;
`;
