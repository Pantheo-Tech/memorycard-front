import background from "../../assets/img/background-landing-page.png";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen">
      {" "}
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
};

export default Background;
