import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agile Other Hippopotamus</title>
        <meta property="og:title" content="Agile Other Hippopotamus" />
      </Helmet>
    </div>
  )
}

export default Home
