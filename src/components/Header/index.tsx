import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg"
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <span><img src={logo} alt="Logo"/></span>
            <nav>
                <NavLink to="/" title="time"><Timer size={24} /></NavLink>
                <NavLink to="/history" title="histórico"><Scroll size={24} /></NavLink>               
            </nav>
        </HeaderContainer>
    );
}