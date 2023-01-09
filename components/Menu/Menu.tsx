import * as React from 'react'

import { MenuHamburger } from "../atomic design/atoms/Menu/MenuHamburger"
import { MenuLogo } from "../atomic design/atoms/Menu/MenuLogo"
import { MenuMolecule } from "../atomic design/molecules/Menu/MenuMolecule"

export const Menu = () => {
    return(
        <>
            <React.Fragment>
                <div className="menu-container">
                    {/* @ts-expect-error Server Component */}
                    <MenuMolecule></MenuMolecule>
                </div>
            </React.Fragment>
        </>
    )
}