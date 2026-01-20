import { Route, Routes } from "react-router-dom"
import ExamplePage from "./ExamplePage.jsx"


function App() {

  return (
    <>
      <Routes>
        <Route path="/example" element={<ExamplePage/>} />
      </Routes>
    </>
  )
}

export default App
