import React, { useEffect, useState } from "react";
import classes from "./Dropdown.module.scss";

const Form = () => {
   
    return (
       <div className={classes.container}>
         <h4>Datos Personales</h4>
            <div className={classes.main}>
                <div className={classes.box}>
                    <label for="fname">Nombres</label>
                    <input type="text" id="fname" name="firstname"  />
                </div>
                <div className={classes.box}>
                    <label for="lname">Apellido Paterno</label>
                    <input type="text" id="lname" name="lastname" />
                </div>
                <div className={classes.box}>
                    <label for="lname">Apellido Materno</label>
                    <input type="text" id="lname" name="lastname" />
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.box}>
                    <label for="lname">Rut</label>
                    <input type="text" id="lname" name="lastname" />
                </div>
                <div className={classes.box}>
                    <label for="country">Parentesco con el beneficiario</label>
                    <select id="country" name="country">
                        <option value="australia">Hijo</option>
                        <option value="canada">Sobrino</option>
                        <option value="usa">otro</option>
                    </select>
                </div>
            </div>
       </div>
    );
};

export default Form;