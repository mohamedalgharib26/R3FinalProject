import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

function MainLayout() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
    </>
  );
}

export default MainLayout;
