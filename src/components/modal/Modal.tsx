import style from './Modal.module.scss';
import {Box, Modal, Typography} from "@mui/material";

type ModalType = {
    type: string
    open: boolean
    setOpen: (tr: boolean) => void
}

export const ModalCommon = (props: ModalType) => {

    const handleClose = () => props.setOpen(false);

    return (
        <div className={style.Wrapper}>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={style.Container}
            >
                <div>
                    <h4>
                        {props.type === 'success' ? 'Thank you' : 'Error'}<span>.</span>
                    </h4>
                    <p>
                        {props.type === 'success' ? 'The message has been successfully sent. We will respond to you shortly.'
                            : 'Oops, an error occurred. Please try again later.'}
                    </p>
                    <button onClick={handleClose}>Ok</button>
                </div>
            </Modal>
        </div>
    )
}