import Logo from '../Logo'
import Nav from '../Nav'
import style from './style.module.scss'

const Header = () => {

	return (
		<div className={style.header}> 
		<Logo layout="header" />
		<Nav layout="header" />
		</div>
	);
};

export default Header;
