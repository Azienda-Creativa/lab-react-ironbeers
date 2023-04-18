import React from "react"
import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { Card, Row } from "react-bootstrap"

export default function AllBeers() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        // console.log("response.data", res.data)
        setBeers(res.data)
      })
      .catch(() => console.log("error getting all beers"))
  }, [])

  return (
    <div>
      <NavBar />
      {beers.map((beer) => (
        <Card
          key={beer._id}
          style={{ width: "40vw", padding: "40px", margin: "16px" }}>
          <Row className="">
            <Card.Img src={`${beer.image_url}`} />
            <Card.Body>
              <Card.Title>{`${beer.name}`}</Card.Title>
              <Card.Text>{`${beer.tagline}`}</Card.Text>
              <Card.Text>{`${beer.contributed_by}`}</Card.Text>
              <Link to={`/beers/${beer._id}`}>Read more...</Link>
            </Card.Body>
          </Row>
        </Card>
      ))}
    </div>
  )
}
