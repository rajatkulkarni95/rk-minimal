import LogoDot from "@svg/logo/logo_dot.svg";
import LogoFirstCircle from "@svg/logo/logo_first_circle.svg";
import LogoSecondCircle from "@svg/logo/logo_second_circle.svg";
import LogoThirdCircle from "@svg/logo/logo_third_circle.svg";
import LogoFourthCircle from "@svg/logo/logo_fourth_circle.svg";

const SiteLogo = () => {
  return (
    <div className="relative w-16 h-16 mr-4">
      <LogoFourthCircle className="absolute animate-spin10 [animation-direction:alternate]" />
      <LogoThirdCircle className="absolute top-2 left-2 animate-spin8 [animation-direction:alternate-reverse]" />
      <LogoSecondCircle className="absolute top-4 left-4 animate-spin6 [animation-direction:alternate]" />
      <LogoFirstCircle className="absolute top-6 left-6 animate-spin4 [animation-direction:alternate-reverse]" />
      <LogoDot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
    </div>
  );
};

export default SiteLogo;
