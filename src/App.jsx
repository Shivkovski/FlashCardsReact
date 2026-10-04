import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { Container, Row, Col } from 'react-bootstrap'

function App() {

  return (
    <Container className='d-flex justify-content-center'>
      <Card title="English Course" text="Welcome back!" answer="З поверненням!"/>
    </Container>
  )
}

export default App
