import { MenuHamburger } from "../../atoms/Menu/MenuHamburger"
import { MenuLogo } from "../../atoms/Menu/MenuLogo"
import styles from './MenuMolecule.module.sass'

type MenuMolecule = {
    
}

export const MenuMolecule = () => {
    return(
        <>
            <div className={styles.menuContent}>
                <MenuLogo />
                <MenuHamburger />
            </div>
        </>
    )
}