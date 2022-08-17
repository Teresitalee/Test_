import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);


    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <img src="https://www.coopeuch.cl/media/logo/stores/1/logo.svg" alt="" />
            </div>
        </header>
    );
};

export default Header;