import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="block py-2 pl-3 pr-4 text-white md:text-base sm:text-xl rounded md:p-0 hover:text-white opacity-50 hover:opacity-100"
        >
            {title}
        </Link>
    );
}

export default NavLink;
