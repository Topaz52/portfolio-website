import React from 'react';
import NavLink from './NavLink';

// Define the structure of a link
interface Link {
    path: string;
    title: string;
}

// Define the props for MenuOverlay
interface MenuOverlayProps {
    links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center bg-primary-950'>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
}

export default MenuOverlay;
