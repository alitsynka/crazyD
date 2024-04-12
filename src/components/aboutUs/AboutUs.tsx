import style from './AboutUs.module.scss';

export const AboutUs = () => {
    return (
        <div className={style.Wrapper} >
            <div className={style.Container} id={'AboutUs'}>
                <h2 className={style.Title} >Founded by technology enthusiasts, we're committed to pushing the boundaries
                    of IT solutions to not
                    just meet, but exceed client expectations<span>.</span></h2>
                <p className={style.Desc}>Our dedication to innovation keeps us at the forefront of technology, always
                    exploring new ways to
                    deliver efficient, scalable, and future-proof solutions. </p>
                <div className={style.OurStacks}>
                    <div className={style.Stack}>
                        <p className={style.StackTitle}>UX/UI Design<span>.</span></p>
                        <p className={style.DescTitle}>Crafting intuitive, engaging interfaces, focusing on user
                            satisfaction. Involves research, prototyping, and testing for optimal outcomes.</p>
                    </div>
                    <div className={style.Stack}>
                        <p className={style.StackTitle}>Project Management<span>.</span></p>
                        <p className={style.DescTitle}>Ensuring timely, within-budget delivery through strategic
                            management and agile methodologies. Enhances focus and collaboration.</p>
                    </div>
                    <div className={style.Stack}>
                        <p className={style.StackTitle}>QA Testing<span>.</span></p>
                        <p className={style.DescTitle}>Upholding the highest quality standards with automated/manual
                            testing. Covers all aspects to ensure products are market-ready.</p>
                    </div>
                    <div className={style.Stack}>
                        <p className={style.StackTitle}>Frontend<span>.</span></p>
                        <p className={style.DescTitle}>Developing responsive web interfaces using React and Vue.js,
                            optimized for performance and cross-platform compatibility.</p>
                    </div>
                    <div className={style.Stack}>
                        <p className={style.StackTitle}>Backend<span>.</span></p>
                        <p className={style.DescTitle}>Creating scalable, secure server solutions with Node.js and
                            Python, focusing on RESTful APIs and data security.</p>
                    </div>
                    <div className={style.Stack}>
                        <p className={style.StackTitle}>DevOps<span>.</span></p>
                        <p className={style.DescTitle}>Automating deployment and operations with modern tools for
                            continuous integration/delivery, enhancing development and reliability.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}