import React from 'react'
import { Card } from 'react-bootstrap'

const Brewery = () => {

    


    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title tag="h5">Card title</Card.Title>
                    <Card.Subtitle tag="h6" className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                </Card.Body>
                <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <Card.Body>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Brewery