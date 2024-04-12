import {animateScroll as scroll} from "react-scroll/modules";

export const scrollToTop = () => {
    const options = {
        duration: 700,
        spy: true,
        smooth: true,
    };

    scroll.scrollToTop(options);
};
