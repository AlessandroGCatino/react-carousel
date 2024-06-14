import Footer from "./components/footer/footer.jsx"
import Header from "./components/header/header.jsx"
import Main from "./components/main/main.jsx"

function App() {

  return (
    <>
      <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
      <Header/>
      <Main/>
      <Footer/>
      </div>
    </>
  )

}

export default App
