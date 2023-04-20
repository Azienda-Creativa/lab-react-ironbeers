import React from "react"
import { useState, useEffect } from "react"
import { Card, Row } from "react-bootstrap"
import axios from "axios"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"

export default function OneBeer() {
  const [beer, setBeer] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => {
        // console.log("response.data", res.data)
        setBeer(res.data)
        console.log("wow it works!", res.data)
      })
      .catch(() => console.log("error getting one beer", id))
  }, [id])

  return (
    <div>
      <NavBar />
      {beer && (
        <Card
          key={beer._id}
          style={{ width: "40vw", padding: "40px", margin: "16px auto" }}>
          <Row className="">
            <Card.Title>{`${beer.name}`}</Card.Title>
            <Card.Img
              src={`${beer.image_url}`}
              style={{ height: "20vh", width: "auto", margin: "auto" }}
            />
            <Card.Body style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <Card.Text>{`${beer.tagline}`}</Card.Text>
              <Card.Text>{`${beer.first_brewed}`}</Card.Text>
              <Card.Text>{`${beer.attenuation_level}`}</Card.Text>
              <Card.Text>{`${beer.description}`}</Card.Text>
              <Card.Text>{`${beer.contributed_by}`}</Card.Text>
              <Card.Link href={`/beer/${beer._id}`}>Read more...</Card.Link>
            </Card.Body>
          </Row>
        </Card>
      )}
    </div>
  )
}
