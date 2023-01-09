import styles from './MenuHamburger.module.sass'
import { useState } from 'react'

export const MenuHamburger = () => {
    const [menuOpened, setMenuState] = useState(false)
    return(
        <>
            <div className={styles.hamburgerContainer}>
                <div className={styles.hamburger} onClick={() => setMenuState(!menuOpened)}>
                    <div className={styles.hamburgerLineTop} style={menuOpened ?  {translate: '0 300%', transition: '.2s all ease-in-out'} : {translate: '0 0', transition: '.2s all ease-in-out'}}/>
                    <div className={styles.hamburgerLineBottom} style={menuOpened ?  {translate: '0 -300%', transition: '.2s all ease-in-out'} : {translate: '0 0', transition: '.2s all ease-in-out'}}/>
                </div>
            </div>
        </>
    )
}