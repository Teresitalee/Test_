import React from "react";
import classes from "./Footer.module.scss";


const Footer = () => {

    return (
        <footer className={classes.foot}>
            <div className={classes.content}>
                <div className={classes.box1}>
                    <img src="https://www.coopeuch.cl/media/wysiwyg/procalidad_1_.png" alt="" />
                    <p className={classes.calidad}>1º Lugar categoría Banca Retail por Tercer año consecutivo</p>
                </div>
                <div className={classes.box2}>
                    <p>Infórmese sobre la garantía estatal de los depósitos en su cooperativa o banco o en www.sbif.cl   Coopeuch ® 2019 - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );

}


export default Footer;