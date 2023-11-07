import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <div className="menu-overlay">
            <ul className="flex flex-col py-4 items-center">
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            href={link.path}
                            title={link.title}
                            key={index}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuOverlay;
