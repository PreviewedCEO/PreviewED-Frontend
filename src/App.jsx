import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div> Hello </div>
      </Container>
      <Footer />
      <div className="bg-teal-500 w-[5rem] h-[5rem] rounded-md"></div>
    </>
  );
}

export default App;
