import { Outlet } from "react-router-dom";
import Header from "../header/header";

function RootLayout() {

    return (
      <>      
        <Header/>
        <Outlet></Outlet>
      </>
    )
  }
  
  export default RootLayout;