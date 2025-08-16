import Footer from "./components/Footer";
import LeftMenuNav from "./components/LeftMenuNav";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div id="content">
        <LeftMenuNav />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
