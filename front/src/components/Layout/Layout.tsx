import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";

type Props = {
  openMenu: boolean,
  // setOpenMenu: (val: boolean) => void,
}


export default function Layout() {

  const userGroup: boolean = false
  const [openMenu, setOpenMenu] = useState<Props>(false)



  return (
      <>
        <Header menu={setOpenMenu}/>
        <main>
          <nav>
            I'm Nav
          </nav>
          <div className='main-content'>
            {userGroup
                ? <Outlet/>
                : <>You do not have permission to view this page</>
            }
          </div>
        </main>
        <footer>
          {/*I'm Footer*/}
        </footer>
      </>
  )
}