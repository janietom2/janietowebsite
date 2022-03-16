import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Row, Col, Container, Button} from "react-bootstrap" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <Container
      style={{
        marginTop: `30px`
      }}
    >
    {/* Red Column */}
      <Row>
        <Col md xs lg={{ span: 4, offset: 3}} className="redLightBox">
          Hi! I am a software engineer that loves technology, building web apps, analyzing systems, automation and learning new techonologies! 
          <br></br>
          <Button className="lightButton margin10-top">
            Download Resume 
            <FontAwesomeIcon style={{marginLeft: `10px`}} icon={faFileLines} />
          </Button>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: `20px`
        }}
      >
        <Col md xs={{span: 12}} lg={{ span: 4, offset: 5}} className="redDarkBox">
          Check out my latest projects and my blog posts about technology and software development. 
          <br></br>
        </Col>
      </Row>

    </Container>
    
  </Layout>
)

export default IndexPage
