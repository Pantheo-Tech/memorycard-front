import { Instagram, Youtube, Mail, Facebook } from "lucide-react";

const FooterSocialLinks = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href="#" aria-label="Instagram">
            <Mail size={24} className="text-white hover:text-gray-400" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="YouTube">
            <Youtube size={24} className="text-white hover:text-gray-400" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Twitter">
            <Instagram size={24} className="text-white hover:text-opacity-50" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Facebook">
            <Facebook size={24} className="text-white hover:text-gray-400" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterSocialLinks;
