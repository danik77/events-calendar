import Logo from "../Logo";
import Nav from "../Nav";
import style from "./style.module.scss";

const Footer = () => {
	return (
		<div className={style.footer}>
			<Logo layout="footer" />
			<Nav layout="footer" />
			<p className={style.footer__copyright}>© 2022 All rights reserved</p>
		</div>
	);
};

export default Footer;
