import React from "react"
import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { Card, Row, Col } from "react-bootstrap"

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
    <div style={{ justifyItems: "center" }}>
      <NavBar className="container-fluid" />
      {beers.map((beer) => (
        <Card
          key={beer._id}
          style={{ padding: "40px", margin: "16px", alignItems: "space-around" }}>
          <Row className="">
            <Col>
              <Card.Img
                style={{ maxHeight: "300px", maxWidth: "200px" }}
                src={`${beer.image_url}`}
              />
            </Col>
            <Col>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <Card.Title>{`${beer.name}`}</Card.Title>
                    <Card.Text>{`${beer.tagline}`}</Card.Text>
                  </div>
                  <div>
                    <Card.Text>{`${beer.contributed_by}`}</Card.Text>
                    <Link to={`/beers/${beer._id}`}>Read more...</Link>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  )
}
