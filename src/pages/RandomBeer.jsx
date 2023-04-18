import React from "react"
import { useState, useEffect } from "react"
import { Card, Row } from "react-bootstrap"
import axios from "axios"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"

export default function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null)

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        // console.log("response.data", res.data)
        setRandomBeer(res.data)
        console.log("wow it works!", res.data)
      })
      .catch(() => console.log("error getting random beer"))
  }, [])

  return (
    <div>
      <NavBar />
      {randomBeer && (
        <Card
          key={randomBeer._id}
          style={{ width: "40vw", padding: "40px", margin: "16px" }}>
          <Row className="">
            <Card.Title>{`${randomBeer.name}`}</Card.Title>
            <Card.Img src={`${randomBeer.image_url}`} />
            <Card.Body>
              <Card.Text>{`${randomBeer.tagline}`}</Card.Text>
              <Card.Text>{`${randomBeer.first_brewed}`}</Card.Text>
              <Card.Text>{`${randomBeer.attenuation_level}`}</Card.Text>
              <Card.Text>{`${randomBeer.description}`}</Card.Text>
              <Card.Text>{`${randomBeer.contributed_by}`}</Card.Text>
              <Card.Link href={`/random-beer/${randomBeer._id}`}>Read more...</Card.Link>
            </Card.Body>
          </Row>
        </Card>
      )}
    </div>
  )
}
