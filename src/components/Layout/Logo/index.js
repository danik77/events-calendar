import style from './style.module.scss'

const Logo = ({layout}) => {

	console.log(style.logo)

	return (
		<div className={`${style.logo} ${style["logo-" + layout]}`}> 
		<h1>Logo</h1>
		</div>
	);
};

export default Logo;
