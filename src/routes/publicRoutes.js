import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useState, cloneElement } from "react";

export default function PublicRoute({ children }) {
  const [navOpen, setnavOpen] = useState(true);

  return (
    <>
      <Navbar setnavOpen={setnavOpen} navOpen={navOpen} />
      <aside className={navOpen ? "navOpen" : null}>
        {cloneElement(children, { navOpen })}
      </aside>

      <Footer navOpen={navOpen} />
    </>
  );
}
