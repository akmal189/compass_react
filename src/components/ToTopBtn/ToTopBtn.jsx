import React, { useEffect } from "react";
import classes from "./ToTopBtn.module.scss";

const ToTopBtn = () => {
    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const scrollHeight = isMobile ? 500 : 800;

        const handleScroll = () => {
            const button = document.querySelector(`.${classes.toTopBtn} a`);
            if (document.scrollingElement.scrollTop > scrollHeight) {
                button?.classList.add(`${classes.active}`);
            } else {
                button?.classList.remove(`${classes.active}`);
            }
        };

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Добавляем обработчики событий
        window.addEventListener('scroll', handleScroll);
        const button = document.querySelector(`.${classes.toTopBtn} a`);
        button?.addEventListener('click', handleClick);

        // Удаляем обработчики событий при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
            button?.removeEventListener('click', handleClick);
        };
    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только при монтировании

    return (
        <div className={classes.toTopBtn}>
            <a href="#" onClick={(e) => e.preventDefault()}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.91582 0.290939C8.52529 -0.0995846 7.89213 -0.0995846 7.5016 0.290939L1.13764 6.6549C0.747117 7.04543 0.747117 7.67859 1.13764 8.06911C1.52817 8.45964 2.16133 8.45964 2.55186 8.06911L8.20871 2.41226L13.8656 8.06911C14.2561 8.45964 14.8893 8.45964 15.2798 8.06911C15.6703 7.67859 15.6703 7.04543 15.2798 6.6549L8.91582 0.290939ZM9.20871 16.998L9.20871 0.998047L7.20871 0.998047L7.20871 16.998L9.20871 16.998Z"
                        fill="black"
                    />
                </svg>
            </a>
        </div>
    );
};

export default ToTopBtn;
