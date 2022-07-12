import "./TopBar.css"
import cerclegris from "../../images/cerclegris.png"
import pokeballcolor from "../../images/pokeballcolor.png"

function Topbar() {
  return (
    <div className="title">
        <div className="title__left">
            <p>Pokédex</p>
            <div className="caught-seen">
                <div className="caught">
                    <img src={pokeballcolor} alt="pokeball" style={{width:"30px", marginRight:"10px"}}/>
                    <p>438</p>
                </div>
                <div className="seen">
                    <img src={cerclegris} alt="cerclegris" style={{width:"30px", marginRight:"10px"}}/>
                    <p>649</p>
                </div>
            </div>
        </div>
        <p style={{color:"white"}}>Ordre Alphabétique</p>
    </div>
  )
}

export default Topbar