import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import LinkHeader from './linkHeader';
import { useState } from 'react';

export default function HeaderHome() {
    const [search, setSearch] = useState(false);
    const { pathname } = useLocation();

    return (
        <header className={`flex justify-between items-center w-full ${pathname === "/home" ? "bg-custom-gradient-banner fixed top-0 z-50" : "bg-background"} px-16 max-lg:px-10 max-sm:px-6 py-5 h-20`}>
            <Link to="/home"><img src={Logo} alt="Logo da pagina" className="w-52 max-lg:w-44 max-sm:w-28" /></Link>
            <nav className={`flex gap-5 max-md:hidden `}>
                <LinkHeader link={"/home"} text="Inicio" />
                <LinkHeader link={"/games"} text="Jogos" />
                <LinkHeader link={"/booming"} text="Bombando" />
                <LinkHeader link={"/myGames"} text="Meus Jogos" />
                <LinkHeader link={"/about"} text="Sobre" />
            </nav>
            <ul className="text-gray-300 flex items-center gap-5">
                <li className="flex items-center relative">
                    <input type="text" className={`transition-all duration-500 ease-out h-8 bg-transparent border rounded-md border-white mr-5 transform origin-right absolute bottom-[-40px] right-[-20px] ${search ? "scale-x-100 px-3" : "scale-x-0 px-0"}`} />
                    <button className='w-5 h-5 max-lg:w-4 max-lg:h-4' onClick={() => setSearch(!search)}>
                        <Search className='w-full h-full' />
                    </button>
                </li>
                <li className="w-5 h-5 max-lg:w-4 max-lg:h-4">
                    <button>
                        <Bell className='w-full h-full' />
                    </button>
                </li>
                <li>
                    <button className="flex items-center gap-3">
                        <div className="rounded-full bg-slate-600 w-[30px] h-[30px]">
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </li>
            </ul>
        </header>
    );
}
