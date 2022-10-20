import Piche from '../../Assets/Images/dentiste1.jpg'
import './dentists.css'

function Dentists() {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img src={Piche} alt="piche" />
        <span className="name">Dre Fanny Piché</span>
      </div>
      <div className="about-text">
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          cursus nunc,
        </span>
      </div>
    </div>
  )
}

export default Dentists
