import React from "react";
import cl from './MyModale.module.css'

const MyModale = ({ children, visible, setVisible }) => {
    return (
        <div className={visible ? cl.modale_active : cl.modale} onClick={() => setVisible(false)}>
            <div className={cl.modale__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModale;