import style from './OurProjects.module.scss';
import payFlow from "../../assets/images/payFlow.png";
import payFlow2 from "../../assets/images/PayFlow3.png";
import b2b from "../../assets/images/b2b.png";
import p2p from "../../assets/images/p2p2.png";
import p2pSec from "../../assets/images/p2pSec.png";
import b2bSec from "../../assets/images/b2bSec.png";
import android from "../../assets/images/android.png";
import android2 from "../../assets/images/andrid2.png";

export const OurProjects = () => {
    return (
        <div className={style.Wrapper} id={'Projects'}>
            <div className={style.Container}>
                <h2 className={style.Title}>Our Projects<span>.</span></h2>
                <div className={style.ProjectsBlock}>
                    <div className={style.Project}>
                        <div className={style.ImgBlock}>
                            <img src={payFlow} alt=""/>
                            <img src={payFlow2} alt="" className={style.MobImg}/>
                        </div>
                        <div className={style.DescBlock}>
                            <p className={style.Title}>PayFlow<span>.</span></p>
                            <p className={style.Desc}>An integrated payment processing system that ensures high
                                transaction speed and security.</p>
                        </div>
                    </div>
                    <div className={style.Project}>
                        <div className={style.ImgBlock}>
                            <img src={p2p} alt=""/>
                            <img src={p2pSec} alt="" className={style.MobImg}/>
                        </div>
                        <div className={style.DescBlock}>
                            <p className={style.Title}>P2P Broker<span>.</span></p>
                            <p className={style.Desc}>A revolutionary cryptocurrency arbitrage platform that allows
                                participants to maximize profitability.</p>
                        </div>
                    </div>
                    <div className={style.Project}>
                        <div className={style.ImgBlock}>
                            <img src={b2b} alt=""/>
                            <img src={b2bSec} alt="" className={style.MobImg}/>
                        </div>
                        <div className={style.DescBlock}>
                            <p className={style.Title}>B2B Crypto<span>.</span></p>
                            <p className={style.Desc}>A reliable B2B platform for cryptocurrency transactions, designed
                                for maximum efficiency and security.</p>
                        </div>
                    </div>
                    <div className={style.Project}>
                        <div className={style.ImgBlock}>
                            <img src={android} alt=""/>
                            <img src={android2} alt="" className={style.MobImg}/>
                        </div>
                        <div className={style.DescBlock}>
                            <p className={style.Title}>Android MultiAccounter<span>.</span></p>
                            <p className={style.Desc}>A unique product for managing multiple accounts on Android,
                                offering an unprecedented level of customization and security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}