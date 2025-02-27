import { Link, useLocation } from 'react-router-dom';

type LinkProps = {
    text: string,
    link: string,
}

export default function LinkHeader({ text, link }: LinkProps) {
    const location = useLocation();

    const isActive = location.pathname === link;

    return (
        <Link
            to={link}
            className={`text-sm max-md:text-xs font-bold ${isActive ? "text-red underline" : "no-underline text-gray-300"}`}
        >
            {text}
        </Link>
    );
};

