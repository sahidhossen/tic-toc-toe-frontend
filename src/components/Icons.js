import { DashSvg, PlayerSvg } from "../styled";

export const Cross = () => (
	<PlayerSvg aria-label="X" role="img" viewBox="0 0 128 128">
		<path d="M16,16L112,112"></path>
		<path d="M112,16L16,112"></path>
	</PlayerSvg>
);

export const Oval = () => (
	<PlayerSvg aria-label="O" role="img" viewBox="0 0 128 128">
		<path className="oval-path" d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
	</PlayerSvg>
);

export const Grid = () => (
	<DashSvg>
		<path d="M108,83L6,83"></path>
		<path d="M108,153L6,153"></path>
		<path d="M108,83L210,83"></path>
		<path d="M108,153L210,153"></path>
		<path d="M73,118L73,16"></path>
		<path d="M143,118L143,16"></path>
		<path d="M73,118L73,220"></path>
		<path d="M143,118L143,220"></path>
	</DashSvg>
);
