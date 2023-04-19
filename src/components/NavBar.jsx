import React from "react"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <div style={{ background: "#8fe8f4" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
        alt="home-icon"
        style={{ width: "80px", padding: "16px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
    </div>
  )
}
