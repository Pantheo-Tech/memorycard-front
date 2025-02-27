import { Link, useLocation, LinkProps } from 'react-router-dom';

export default function LinkHeader({ to, ...rest }: LinkProps) {
    const location = useLocation();

    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`text-sm max-md:text-xs font-bold ${isActive ? "text-red underline" : "no-underline text-gray-300"}`}
            {...rest}
        >
        </Link>
    );
};