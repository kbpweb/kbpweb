import { MenuHamburger } from "../../atoms/Menu/MenuHamburger"
import { MenuLogo } from "../../atoms/Menu/MenuLogo"

type MenuMolecule = {
    
}

export const MenuMolecule = () => {
    <>
        <div className="menuContent">
            <MenuLogo />
            <MenuHamburger />
        </div>
    </>
}