import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Dock, Home, MobileHome, MobileNavbar, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
  MobileTerminal,
  MobileSafari,
  MobileResume,
  MobileFinder,
  MobileContact,
  MobilePhotos,
  MobileText,
  MobileImage,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />

      <MobileTerminal />
      <MobileSafari />
      <MobileResume />
      <MobileFinder />
      <MobileContact />
      <MobilePhotos />
      <MobileText />
      <MobileImage />
      <MobileHome />
    </main>
  );
};

export default App;
