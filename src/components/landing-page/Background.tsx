import background from "../../assets/img/background-landing-page.png";

const Background = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <img src={background} alt="background" />
      </div>
      <div className="bg-black opacity-60 absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

export default Background;
