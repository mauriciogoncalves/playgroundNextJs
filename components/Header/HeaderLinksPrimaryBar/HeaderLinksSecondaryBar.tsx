import * as React from 'react';
import {HeaderLinksBarButton} from "./HeaderLinksBarButton";

export default function HeaderLinksSecondaryBar() {
    return (
        <div className={"footer-links-row-container"}>
            <div className={"footer-links-row"}>
                <HeaderLinksBarButton href={"#"}>Imprint</HeaderLinksBarButton>
                <HeaderLinksBarButton href={"#"}>About Us</HeaderLinksBarButton>
                <HeaderLinksBarButton href={"#"}>Contact</HeaderLinksBarButton  >
                <HeaderLinksBarButton href={"#"}>Terms & Conditions</HeaderLinksBarButton>
                <HeaderLinksBarButton href={"#"}>Privacy Policy</HeaderLinksBarButton>
                <HeaderLinksBarButton href={"#"}>Support</HeaderLinksBarButton>
            </div>
        </div>
    );
}