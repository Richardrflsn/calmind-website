import calmindLogo from './assets/calmindLogo.png';

const XSvg = (props) => (
	<img
		src={calmindLogo}
		alt="Calmind Logo"
		{...props}
		style={{ width: '100px', height: '100px', ...props.style }}
	/>
);


export default XSvg;