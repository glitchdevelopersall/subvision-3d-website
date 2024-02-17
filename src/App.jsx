import DisplaySection from "./componets/DisplaySection";
import HeroSection from "./componets/HeroSection";
import Navbar from "./componets/Navbar";
import SoundSection from "./componets/SoundSection";
import WebgiViewer from "./componets/WebgiViewer";
function App() {

  return (
    <div className="App">
      {/* <Navbar/> */}
      <HeroSection/>
      <SoundSection/>
      <DisplaySection/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
