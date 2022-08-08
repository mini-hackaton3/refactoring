import Header from "./components/Header";
import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />;
    </>
  );
};

export default App;
