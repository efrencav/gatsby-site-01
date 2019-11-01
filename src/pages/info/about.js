import React from 'react';
import { Link } from 'gatsby'
// import styles from './about.module.css';
import styled from 'styled-components';

import Layout from '../../components/layout2';
import efrenImage from '../../images/efren.jpg';

// const User = props => (
//     <div className={styles.user}>
//         <img src={props.avatar} className={styles.avatar} alt="" />
//         <div className={styles.description}>
//             <h2 className={styles.username}>{props.username}</h2>
//             <p className={styles.excerpt}>{props.excerpt}</p>
//         </div>
//     </div>
// )

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0, auto, 12px, auto;
`

const Avatar = styled.img`
    flex: 0 0 96px;
    width: 96px;
    margin: 0;
`

const Description = styled.div`
    flex: 1;
    margin-left: 18px;
    padding: 12px;
`
const Username = styled.div`
    margin: 0 0 12px 0;
`

const Exceprt = styled.p`
margin:0;
`

const User = props => (
    <UserWrapper>
        <Avatar src={props.avatar} alt=""/>
        <Description>
            <Username>{props.username}</Username>
            <Exceprt>{props.excerpt}</Exceprt>
        </Description>
    </UserWrapper>
)

const About = () => (
    <Layout>
        <div>
            <h1>About Page</h1>

            <User
                username="Efren Cavazos"
                avatar={efrenImage}
                excerpt="Art director" />
            <br/>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
)

export default About;