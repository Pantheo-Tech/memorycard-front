import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import LinkHeader from './linkHeader';

export default function HeaderHome() {
    const { pathname } = useLocation();

    return (
        <header className={`flex justify-between items-center w-full ${pathname === "/" ? "bg-custom-gradient-banner fixed top-0 z-50" : "bg-black"} px-16 py-5 h-20`}>
            <Link to="/"><img src={Logo} alt="Logo da pagina" className="w-52" /></Link>
            <nav className="flex gap-5">
                <LinkHeader link={"/"} text="Inicio" />
                <LinkHeader link={"/games"} text="Jogos" />
                <LinkHeader link={"/booming"} text="Bombando" />
                <LinkHeader link={"/myGames"} text="Meus Jogos" />
                <LinkHeader link={"/about"} text="Sobre" />
            </nav>
            <ul className="text-gray-300 flex items-center gap-5">
                <li className="flex items-center"><button><Search /></button></li>
                <li className="w-6 h-6"><button><Bell /></button></li>
                <li><button className="flex items-center gap-3"><div className="rounded-full bg-slate-600 w-10 h-10"></div><ChevronDown /></button></li>
            </ul>
        </header>
    );
}
