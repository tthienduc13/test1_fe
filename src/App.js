import Header from "./components/Header/Header";
import Manage from "./components/Manage/Manage";
import Supply from "./components/Supply/Supply";
import Document from "./components/Document/Document";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Manage></Manage>
      <Supply></Supply>
      <Intro></Intro>
      <Document></Document>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
