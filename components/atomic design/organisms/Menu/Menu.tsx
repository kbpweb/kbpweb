import * as React from 'react'

import { MenuHamburger } from "../../atoms/Menu/MenuHamburger"
import { MenuLogo } from "../../atoms/Menu/MenuLogo"
import styles from './Menu.module.sass'
import { MenuMolecule } from "../../molecules/Menu/MenuMolecule"

export const Menu = () => {
    return(
        <>
            <div className={styles.menuContainer}>
                <MenuMolecule />
            </div>
        </>
    )
}