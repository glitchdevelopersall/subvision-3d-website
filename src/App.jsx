import DisplaySection from "./componets/DisplaySection";
import HeroSection from "./componets/HeroSection";
import LoadingSection from "./componets/Loadingsection";
import Navbar from "./componets/Navbar";
import SoundSection from "./componets/SoundSection";
import WebgiViewer from "./componets/WebgiViewer";
function App() {

  return (
    <div className="App">
      <Navbar/> 
      <LoadingSection/>
      <HeroSection/>
      <SoundSection/>
      <DisplaySection/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
