import Image from 'next/image'
import styles from './MenuLogo.module.sass'
import { useEffect, useRef, useState } from 'react'


export const MenuLogo = () => {
    return(
        <>
            <div className={styles.menuLogoContainer}>
                <img src='/logo.png'></img>
            </div>
        </>
    )
}