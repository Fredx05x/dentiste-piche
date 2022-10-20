import Hygienist from '../../Assets/Images/hygienist.png'
import './team.css'

function Team() {
  return (
    <div className="team-container">
      <div className="photo-container">
        <div className={'self-photo'}>
          <img src={Hygienist} alt="Hygienist" />
          <span className="name">Hygiéniste X</span>
        </div>
        <div className={'self-photo'}>
          <img src={Hygienist} alt="Hygienist" />
          <span className="name">Hygiéniste X</span>
        </div>
        <div className={'self-photo'}>
          <img src={Hygienist} alt="Hygienist" />
          <span className="name">Assistante X</span>
        </div>
      </div>
    </div>
  )
}

export default Team
