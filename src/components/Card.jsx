import { useState } from "react"
import { Button, CardBody, CardGroup, CardText, CardTitle, Row, Col } from "react-bootstrap"

function Card({title, text, answer}) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <CardGroup className="text-center" style={{width: "32rem", margin: "2rem"}}>
      <CardBody>
        <Row>
          <Col>
            <CardTitle>{title}</CardTitle>
            <CardText hidden={showAnswer}>{text}</CardText>
            <CardText hidden={!showAnswer}>{answer}</CardText>
          </Col>
        </Row>
        <Row style={{marginTop: "2rem"}}>
          <Col>
            <Button>Prev</Button>
          </Col>
          <Col>
            <Button onClick={() => {setShowAnswer(true)}}>Show answer</Button>
          </Col>
          <Col>
            <Button>Next</Button>
          </Col>
        </Row>
      </CardBody>
    </CardGroup>
  )
}

export default Card