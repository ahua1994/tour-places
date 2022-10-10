import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <CardGrid />
        </div>
    );
}

export default App;
