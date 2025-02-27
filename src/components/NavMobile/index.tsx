import { Bomb, Gamepad2, Heart, House, Info } from "lucide-react";
import LinkHeader from "./LinkHeaderMobile";

export default function NavMenu() {
    return (
        <nav className={`hidden gap-5 fixed bottom-0 z-50 w-full justify-between px-16 max-sm:px-6 py-5 bg-background max-md:flex `}>
            <LinkHeader to={"/home"} children={<House />} />
            <LinkHeader to={"/games"} children={<Gamepad2 />} />
            <LinkHeader to={"/booming"} children={<Bomb />} />
            <LinkHeader to={"/myGames"} children={<Heart />} />
            <LinkHeader to={"/about"} children={<Info />} />
        </nav>
    )
}