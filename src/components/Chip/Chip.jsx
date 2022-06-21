import * as React from "react"
import "./Chip.css"

export function Chip({label , isActive = false, key = "", setOnClick}) {




  let state = "item"


  if (label.item_name != null){



    state = label.item_name




    
  }


  else{


    state = label
  }







  var buttonClassName

  if (isActive){

    buttonClassName = "active chip"
  }

  else{
    buttonClassName = "chip"
  }


  
  return (


    <button className = {buttonClassName}  onClick = { () => setOnClick(label)}>

      <p className="label">{state}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
