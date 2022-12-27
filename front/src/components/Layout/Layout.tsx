import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";

// type Props = {
//   openMenu: boolean,
//   menu: boolean,
//   // setOpenMenu: (val: boolean) => void,
// }

interface IHeaderProps {
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

// React.Dispatch<React.SetStateAction<string>>

const Layout: React.FC = () => {

  const userGroup: boolean = false
  const [openMenu, setOpenMenu] = useState(false)



  return (
      <>
        <Header setOpenMenu ={setOpenMenu(!ompenMenu)}/>
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

export {Layout}