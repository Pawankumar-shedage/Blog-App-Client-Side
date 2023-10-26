/* eslint-disable no-unused-vars */
import { Base } from "../Components/Base";
import { Blogs } from "../Components/Blogs";
import { MainHeroSection } from "../Components/MainHeroSection";

export const Home = () => {
  return (
    <>
      <Base>
        <MainHeroSection />

        {/* Blogs */}
        <br />
        <Blogs />
      </Base>
    </>
  );
};
