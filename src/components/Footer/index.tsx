import Button from "../Button";
import FooterNav from "../FooterNav";

const Footer = () => {
  return (
    <div className="bg-bg-footer bg-cover bg-center h-[300px] flex flex-col justify-center items-center relative">
      <Button title="Acesse já" className="h-[45px] w-[250px] text-[20px]" />
      <FooterNav />
    </div>
  );
};

export default Footer;
