import Assistances from '../../Components/Assistances/assistances'
import Dentists from '../../Components/Dentists/dentists'
import NavBar from '../../Components/NavBar/navbar'
import Team from '../../Components/Team/team'
import './main.css'

function Main() {
  return (
    <div className="main-container">
      <div id="main">
        <NavBar />
      </div>
      <div id="assistances">
        <Assistances />
      </div>
      <div id="dentists">
        <Dentists />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  )
}

export default Main
