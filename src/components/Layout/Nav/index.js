import style from "./style.module.scss";

const Nav = ({ layout }) => {
	return (
		<div className={`${style.nav} ${style["nav-" + layout]}`}>
			<ul className={style.nav__list}>
				<li className={style.nav__item}>
					<a href="#">Main</a>
				</li>
				<li className={style.nav__item}>
					<a href="#">Events</a>
				</li>
				<li className={`${style.nav__item} ${style.nav__item_active}`}>
					<a href="#">Calendar</a>
				</li>
				<li className={style.nav__item}>
					<a href="#">FAQ</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
