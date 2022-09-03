import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#ececec", textAlign: "center" }}>In this app, you can  see the profil picture and some information about me !</h1>

      <h2> Hello It's me Amani </h2>
    </header>
  )
}

export default Header