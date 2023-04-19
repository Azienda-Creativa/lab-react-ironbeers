import React, { useState } from "react"
import NavBar from "../components/NavBar"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function CreateBeer() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setFirst_brewed] = useState("")
  const [brewers_tips, setBrewers_tips] = useState("")
  const [attenuation_level, setAttenuation_level] = useState(0)
  const [contributed_by, setContributed_by] = useState("")

  const navigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault()

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    }
    console.log(body)
    axios
      .post(" https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((res) => {
        console.log(res)
        setName("")
        setTagline("")
        setDescription("")
        setFirst_brewed("")
        setBrewers_tips("")
        setAttenuation_level("")
        setContributed_by("")
        //navigate("/beers")
      })
      .catch(() => console.log("error posting data"))
  }

  return (
    <div>
      <NavBar />
      <section style={{ margin: "40px" }}>
        <h1> CreateBeer</h1>
        <Form onSubmit={(e) => formHandler(e)}>
          <Form.Group
            className="m-3 "
            controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group
            className="m-3"
            controlId="exampleForm.ControlInput2">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tagline"
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
            />
          </Form.Group>

          <Form.Group
            className="m-3"
            controlId="exampleForm.ControlTextarea3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Add description of the beer..."
              style={{ height: "30vh" }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>
          <Form.Group
            className="m-3"
            controlId="exampleForm.ControlInput4">
            <Form.Label>First Brewed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add year"
              onChange={(e) => setFirst_brewed(e.target.value)}
              value={first_brewed}
            />
          </Form.Group>
          <Form.Group
            className="m-3"
            controlId="exampleForm.ControlInput5">
            <Form.Label>Brewers Tips</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add tips"
              onChange={(e) => setBrewers_tips(e.target.value)}
              value={brewers_tips}
            />
          </Form.Group>
          <Form.Group
            className="m-3"
            controlId="exampleForm.ControlInput6">
            <Form.Label>Attenuation Level</Form.Label>
            <Form.Control
              type="number"
              placeholder="Attenuation Level"
              onChange={(e) => setAttenuation_level(e.target.value)}
              value={attenuation_level}
            />
          </Form.Group>
          <Form.Group
            className="m-3"
            controlId="exampleForm.ControlInput7">
            <Form.Label>Contributed by</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contributed by"
              onChange={(e) => setContributed_by(e.target.value)}
              value={contributed_by}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </section>
    </div>
  )
}
