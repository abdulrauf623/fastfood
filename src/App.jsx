import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"

import Header from "./components/Header/Header"

import Instruction  from "./components/Instructions/Instructions"

import Chip from "./components/Chip/Chip"

import {useState} from "react"


import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()


console.log("Data: ", restaurants)


export function App() {


  const [clickedCategory, setCategory] = useState()

  const [clickRestaurant, setRestaurant] = useState("")

  const [clickMenu, setMenu] = useState("")


  var selectedItems


  function changeMenu(men){

    setMenu(men)



   }



  function changeRestaurant(rest){


    setRestaurant(rest)
  }



  function changeCategory(cat){

    setCategory(cat)

    console.log(data)

  }








   var currentMenuItems = data.filter(

    (dat) => {


      return dat.restaurant ===clickRestaurant && dat.food_category === clickedCategory
    }

   )


  




  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>


          {categories.map((category) => {

            return <Chip key = {category.toString()} label={category} isActive = {category == clickedCategory} setOnClick = {changeCategory} />
          }

          )}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/*HEADER GOES HERE*/}

        < Header header = {appInfo} />

       

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{restaurants.map((restaurant) => {

            return <Chip key = {restaurant.toString()} label = {restaurant} isActive = {restaurant == clickRestaurant} setOnClick = { changeRestaurant} />

          })}</div>
        </div>

        {/* INSTRUCTIONS GO HERE */}

        <Instruction instructions = {appInfo}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((menu) => {


return <Chip key = {menu.item_name.toString()} label = {menu} isActive = {menu.item_name == clickMenu.item_name} setOnClick = {changeMenu}/>



})}






          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
          
           <NutritionalLabel props = {clickMenu} />
          
          
          
          }</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )

        }

export default App
