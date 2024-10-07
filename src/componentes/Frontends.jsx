import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
const Frontends = () => {
  return (
    <>

      <Header/>
    
      <main className="container">
      
      <Outlet />

      </main>
      <Footer/>
    </>
  )
}

export default Frontends
