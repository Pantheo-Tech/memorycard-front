import instagramIcon from '../../assets/img/instagram-icon.png'
import youTubeIcon from '../../assets/img/youtube-icon.png'
import xIcon from '../../assets/img/x-icon.png'
import facebookIcon from '../../assets/img/facebook-icon.png'

const FooterSocialLinks = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href="#">
            <img className="h-6 w-6" src={instagramIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="h-6 w-6" src={youTubeIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="h-6 w-6" src={xIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="h-6 w-6" src={facebookIcon} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterSocialLinks