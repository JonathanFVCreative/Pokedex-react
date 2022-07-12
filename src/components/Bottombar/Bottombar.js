import "./Bottombar.css"

function Bottombar() {
  return (
    <div className="bottom">
        <div className="bottom-btn">
            <p className="bg-circle-white">A</p>
            <p className="text">Informations</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">X</p>
            <p className="text">Habitat</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">Y</p>
            <p className="text">Trier</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">+</p>
            <p className="text">Faire évaluer le Pokédex</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">B</p>
            <p className="text">Retour</p>
        </div>
    </div>
  )
}

export default Bottombar