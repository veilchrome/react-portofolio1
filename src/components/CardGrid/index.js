import React from 'react'
import './index.scss'
import myImage1 from '../../assets/images/Artboard 1.png'
import myImage2 from '../../assets/images/Artboard 2.png'

const CardGrid = () => {
  return (
    <>
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={myImage2} alt="gambar2" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Emet Webmania</h2>
                <p className="card_text">An Film Searcher using API</p>
                <button className="btn card_btn">
                  <a href="https://webfilmwsearch-api-s5.vercel.app/">Demo</a>
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={myImage1} alt="gambar1" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Animanga Search</h2>
                <p className="card_text">Using API from Anime Jikan V4.</p>
                <button className="btn card_btn">
                  <a href="https://animanga-search.vercel.app/">Demo</a>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CardGrid
