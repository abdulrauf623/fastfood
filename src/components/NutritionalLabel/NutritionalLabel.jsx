import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"


var need 
export function NutritionalLabel(props) {

  const nutrition = nutritionFacts



  

need = props.props


console.log("Prop nkoaa", need)
  


  return (


    
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.props.item_name}</h4>

      <ul className="fact-list">{/* WRITE CODE HERE */
      
      nutrition.map((facts) => {



        need = props.props


        console.log("need: ", need)



        return <NutritionalLabelFact fact = {facts} items = {props.props}/>
      


      })
      
      
      
      
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact(fact, items) {


  console.log("secondneed: ", need)

  var at = fact.fact.attribute


  var jj = need[at]

  console.log("JJJ: ", jj)


  console.log("At", at)


  console.log("working?  ", need.sugar)


  return (
    <li className="nutrition-fact">
      <span className="fact-label">{fact.fact.label}</span>
      <span className="fact-value">{jj}</span>
    </li>
  )
}

export default NutritionalLabel
