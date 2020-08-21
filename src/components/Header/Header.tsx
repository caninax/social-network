import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    const {header} = classes;
    return (
        <header className={header}>
            <img
                src="https://lh3.googleusercontent.com/proxy/oxQkh4EUncHpix1p7B567ycZObjaPS4xoqyk74IRHVRi4Q0gx36oid8qhwe_b7IS9aYOZ-XUUT6GUtURLBQxOA-c57GrPfTuQvU_FiPTu89HW6pE2QpyTBHKkOw6um0REw"
                alt="logo"/>
        </header>
    )
};
