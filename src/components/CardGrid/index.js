import React from 'react'
import './index.scss'

const CardGrid = () => {
  return (
    <>
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://picsum.photos/500/300/?image=10"
                  alt="gambar2"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://picsum.photos/500/300/?image=5"
                  alt="gambar1"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CardGrid
