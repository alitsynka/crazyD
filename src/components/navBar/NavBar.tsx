import style from './Navbar.module.scss';
import {ReactComponent as Logo} from "../../assets/images/CrazyDev1.svg";
import {Link} from "react-scroll";
import {scrollToTop} from "../../utils/utils";

export const Navbar = () => {

    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                    <Logo  onClick={scrollToTop}/>
                <nav>
                    <li>
                        <Link
                            to="AboutUs"
                            spy={true}
                            smooth={true}
                            activeClass={style.ActiveLink}
                            className={style.Link}
                            duration={700}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            activeClass={style.ActiveLink}
                            className={style.Link}
                            duration={900}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="ContactUs"
                            spy={true}
                            smooth={true}
                            activeClass={style.ActiveLink}
                            className={style.Link}
                            duration={900}>
                            Contact Us
                        </Link>
                    </li>
                </nav>
                <Link
                    className={style.ContactBtn}
                    to="ContactUs"
                    spy={true}
                    smooth={true}
                    duration={900}>
                    Contact Us
                </Link>
            </div>
        </div>
    )
}