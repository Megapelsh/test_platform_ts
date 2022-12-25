import React from "react";

export default function Header() {

  const openMenu = () => {
    console.log(1111)
  }

  return (
      <header>
        <button onClick={openMenu}>menu</button>
        I'm Header
      </header>
  )
}