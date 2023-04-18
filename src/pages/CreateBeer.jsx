import React from "react"
import NavBar from "../components/NavBar"
import { Form } from "react-bootstrap"

export default function CreateBeer() {
  return (
    <div>
      <NavBar />
      <h1> CreateBeer</h1>
      <Form>
        <FormData></FormData>
      </Form>
    </div>
  )
}
