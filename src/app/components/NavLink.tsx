import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
    icon?: JSX.Element; // Optional icon prop
    target?: string; // Optional target prop
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, icon, target }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (href.startsWith('#')) {
            event.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Determine if the link is external
    const isExternalLink = target === "_blank" || href.startsWith('http');

    return isExternalLink ? (
        <a
            href={href}
            onClick={handleClick}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="flex items-center py-2 pl-3 pr-4 text-white md:text-base sm:text-xl rounded md:p-0 hover:text-white opacity-70 hover:opacity-100"
        >
            {title}
            {icon && <span className="ml-1">{icon}</span>} {/* Render the icon if provided */}
        </a>
    ) : (
        <Link
            href={href}
            onClick={handleClick}
            className="flex items-center py-2 pl-3 pr-4 text-white md:text-base sm:text-xl rounded md:p-0 hover:text-white opacity-70 hover:opacity-100"
        >
            {title}
            {icon && <span className="ml-1">{icon}</span>} {/* Render the icon if provided */}
        </Link>
    );
};

export default NavLink;
