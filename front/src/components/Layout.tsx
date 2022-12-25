import React from "react";
import {Outlet} from "react-router-dom";

const userGroup: boolean = false

export default function Layout() {
  return (
      <>
        <header>
          I'm Header
        </header>
        <main>
          <nav>
            I'm Nav
          </nav>
          <div>
            {userGroup
                ? <Outlet/>
                : <>You do not have permission to view this page</>
            }
          </div>
        </main>
        <footer>
          I'm Footer
        </footer>
        I'm Layout
      </>
  )
}