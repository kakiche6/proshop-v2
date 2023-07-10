import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <h1>Welcome to proshop</h1>
      </main>
      <Footer />
    </>
  );
};
export default App;
