import { Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/HomePage"
import AllBeers from "./pages/AllBeers"
import RandomBeer from "./pages/RandomBeer"
import CreateBeer from "./pages/CreateBeer"
import OneBeer from "./pages/OneBeer"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/"}
          element={<Homepage />}
        />
        <Route
          path={"/beers"}
          element={<AllBeers />}
        />
        <Route
          path={"/beers/:id"}
          element={<OneBeer />}
        />
        <Route
          path={"/random-beer"}
          element={<RandomBeer />}
        />
        <Route
          path={"/new-beer"}
          element={<CreateBeer />}
        />
      </Routes>
    </div>
  )
}

export default App
