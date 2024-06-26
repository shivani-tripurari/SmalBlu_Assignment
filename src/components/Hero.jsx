import Section from "./Section.jsx";
import Button from "./Button.jsx";
import robot from "../assets/hero/robot.jpg";
import curve from "../assets/hero/curve.png";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import Generating from "./Generating.jsx";
import Notification from "./Notification.jsx";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { GradientLight } from "./design/Benefits.jsx";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Section
        className="pt-[14rem] -mt-[7.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative " ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 mb-6">
              Unlock Your Forex Trading Potential with{" "}
              <span className="relative inline-block">
                SmalBlu
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2  lg:mb-8">
              Experience the power of advanced trading tools and real-time
              market analysis, tailored for both beginners and experts.
            </p>
            <GradientLight />
            <Button href="/pricing" white>
              Get started
            </Button>
          </div>

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-[24rem]">
            <div className="relative z-1 p-0.5 rounded-2xl ">
              <div className="relative bg-n-8 rounded-[1rem]">
                {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" /> */}
                <div className="aspect-[33/40] rounded-b-[0.09rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={robot}
                    className="w-full scale-[1.69] translate-y-[8%] md: scale-[1] -translate-y-[11%] lg: -translate-y-[24%]"
                    width={1440}
                    height={490}
                    alt="robot"
                  />

                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem]" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Start your journey"
                    />
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
            </div>

            <BackgroundCircles />
          </div>
          <BottomLine />
        </div>
      </Section>
    </>
  );
};

export default Hero;
