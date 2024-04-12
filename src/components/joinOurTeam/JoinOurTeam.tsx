import style from './JoinOurTeam.module.scss';
import illustration from '../../assets/images/Illustration.png';
import {ContactForm} from "../contactForm/ContactForm";

export const JoinOurTeam = () => {
    return (
        <div className={style.Wrapper} >
            <div className={style.Container}>
                <div className={style.GreetingBlock}>
                    <img src={illustration} alt=""/>
                    <div className={style.DescBlock}>
                        <h3>Join Our Team<span>.</span></h3>
                        <p className={style.Desc}>Be Part of Our Innovation. We're looking for creative minds eager to
                            shape the future of
                            technology.</p>
                        <button className={style.Btn}>More Info</button>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    )
}