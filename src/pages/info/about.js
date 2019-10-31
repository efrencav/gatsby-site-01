import React from 'react';
import Layout from "../../components/layout2";
import { Link } from "gatsby"
import Greeting from "../../components/greeting";
import gatsbyAstronaut from "../../images/gatsby-astronaut.png";

const About = () => (
    <Layout>
    <div>
        <h1>About Page</h1>
        <p>lorem ipsum</p>
        <img style={{width: '150px' }} src={gatsbyAstronaut} alt="Gatsby Astronaut" />
        <br/>
        <Greeting greeting="Hi" name="Efren"/>

    </div>
    <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default About;