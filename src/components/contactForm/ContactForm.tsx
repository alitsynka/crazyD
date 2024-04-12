import style from './ContactForm.module.scss';
import {FormikValues, useFormik} from "formik";
import * as Yup from "yup";
import {ReactComponent as Logo} from "../../assets/images/CrazyDev.svg";
import emailjs from '@emailjs/browser';
import {ModalCommon} from "../modal/Modal";
import {useState} from "react";
import {boolean} from "yup";
import {scrollToTop} from "../../utils/utils";

const FORM_VALIDATION = Yup.object({
    from_name: Yup.string()
        .required('field cannot be empty'),
    Question: Yup.string()
        .required('field cannot be empty'),
    email: Yup.string().email()
        .required('field cannot be empty'),
})


export const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            from_name: '',
            Question: '',
            email: '',
        },
        validationSchema: FORM_VALIDATION,
        onSubmit: (values: any) => {
            // alert(JSON.stringify(values, null, 2));
            emailjs.send('service_pfkzrcl', 'template_mlvz9ra', values, 'FpBnegZB4QlHalVex')
                .then((res) => {
                    console.log(res.text);
                    setOpen(true)
                    setType('success')
                    formik.resetForm()
                }, (error) => {
                    console.log(error.text);
                    setOpen(true)
                    setType('error')
                });
        },
    });

    const errDesc = formik.errors.Question && formik.touched.Question
    const errName = formik.errors.from_name && formik.touched.from_name
    const errEmail = formik.errors.email && formik.touched.email

    const [open, setOpen] = useState<boolean>(false)
    const [type, setType] = useState<string>('success')

    return (
        <div className={style.Wrapper} id={'ContactUs'}>
            {
                open && <ModalCommon open={open} setOpen={setOpen} type={type}/>
            }

            <div className={style.Container}>
                <h3 onClick={() => setOpen(true)}>Contact Us<span>.</span></h3>
                <p className={style.Desc}>For further questions, including partnership opportunities, please email
                    hello@crazydev.team or contact using our contact form.</p>
                <form onSubmit={formik.handleSubmit} className={style.Form}>
                    <div className={style.InputsWr}>
                        <div className={style.InputWr}>
                            <label htmlFor="firstName">Full Name</label>
                            <input
                                id="from_name"
                                name="from_name"
                                type="text"
                                placeholder={'Full Name'}
                                className={`${errName ? style.ErrInput : ''} ${style.Input}`}
                                value={formik.values.from_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                errName ? <span className={style.Err}>{formik.errors.from_name}</span> : null
                            }
                        </div>
                        <div className={style.InputWr}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={'hello@crazydev.team'}
                                onChange={formik.handleChange}
                                className={`${errEmail && style.ErrInput} ${style.Input}`}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                            {
                                errEmail && <span className={style.Err}>{formik.errors.email}</span>
                            }
                        </div>

                    </div>
                    <div className={style.TextAreaWr}>
                        <label htmlFor="Question">How can we help you?</label>
                        <textarea
                            id="Question"
                            name="Question"
                            placeholder={'Question your question...'}
                            className={`${errDesc && style.ErrDesc} ${style.Desc}`}
                            onChange={formik.handleChange}
                            value={formik.values.Question}
                            onBlur={formik.handleBlur}
                        />
                        {
                            errDesc && <span className={style.Err}>{formik.errors.Question}</span>
                        }
                    </div>
                    <button type="submit" className={style.SubmitBtn}>Send Message</button>
                </form>
                <div className={style.Footer}>
                    <Logo onClick={scrollToTop}/>
                    <p className={style.Desc}>Suite C, Level 7, World Trust Tower, 50 Stanley Street, Central, Hong Kong<br/>
                        <span>
                            All rights reserved. Copyright © 2024 Crazy Dev Team Limited.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}