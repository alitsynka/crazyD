import style from './Main.module.scss';
import gif from '../../assets/images/IMG_9899-ezgif.com-crop1.gif';
import {Link} from "react-scroll";
import {ReactComponent as ScrollDown} from "../../assets/images/scrollDown.svg";
import {ReactComponent as Swither} from "../../assets/images/Swither.svg";

export const Main = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.DescBlock}>
                    <h1 className={style.Title}>Turning Ideas into Reality<span>.</span></h1>
                    <p className={style.Desc}>Delivering high-quality IT solutions powered by advanced technologies and
                        innovative
                        approaches</p>
                    <div className={style.BtnsBlock}>
                        <button className={style.ContactBtn}>
                            <Link
                                to="ContactUs"
                                spy={true}
                                smooth={true}
                                duration={900}>
                                Contact Us
                            </Link>
                        </button>
                        <button className={style.ProjectBtn}>
                            <Link
                                to="Projects"
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={900}>
                                Projects
                            </Link>
                        </button>
                    </div>
                </div>
                <img src={gif} alt="" className={style.Circle}/>
                <div className={style.WrSvgs}>
                    <ScrollDown className={style.ScrollDown}/>
                    <Link
                        to="ContactUs"
                        spy={true}
                        smooth={true}
                        className={style.Switcher}
                        duration={900}>
                        <Swither/>
                    </Link>

                </div>

            </div>
        </div>
    )
}