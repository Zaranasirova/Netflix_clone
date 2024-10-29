import React from 'react'
import Cards from '../../Components/Cards'

const CardsSection = () => {
  return (
    <div className='CardsSection'>
        <div className="container">
        <Cards title={"Blockbuster Movies"}/>
        <Cards title={"Only on Netflix"}/>
        <Cards title={"Upcoming"}/>
        <Cards title={"Top Pics for You"}/>
        </div>
    </div>
  )
}

export default CardsSection