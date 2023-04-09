import Header from "@component/Header/Header";
import Manage from "@component/Manage/Manage";
import Supply from "@component/Supply/Supply";
import Document from "@component/Document/Document";
import Contact from "@component/Contact/Contact";
import Intro from "@component/Intro/Intro";
import Footer from "@component/Footer/Footer";
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
