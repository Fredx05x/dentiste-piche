import * as React from 'react'
import AlertDialogSlide from '../AlertDialogSlide/alertDialogSlide'
import './assistances.css'

function Assistances() {
  const [open, setOpen] = React.useState(false)
  const [titleFormat, setTitleFormat] = React.useState('')
  const [textFormat, setTextFormat] = React.useState('')

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div className="assistances-container">
        <div>
          <h1>Nos services offerts</h1>
        </div>
        <div>
          <ul>
            <li
              onClick={() => {
                setTitleFormat('Dentisterie générale')
                setTextFormat(
                  'Cette discipline englobe l’examen visuel et radiologique pour établir un diagnostic complet, le détartrage, le polissage, les obturations et les scellants.'
                )
                setOpen(true)
              }}
            >
              Dentisterie générale
            </li>
            <li
              onClick={() => {
                setTitleFormat('Soins dentaires pour les enfants')
                setTextFormat(
                  'Les soins buccodentaires pédiatriques comportent deux parties : les soins préventifs du dentiste pédiatrique et les soins préventifs à la maison. Bien que la carie dentaire chez les nourrissons et les jeunes enfants et les lésions carieuses soient plus en plus courantes ces dernières années, une bonne stratégie de soins dentaires éliminera ces deux risques.'
                )
                setOpen(true)
              }}
            >
              Soins dentaires pour les enfants
            </li>
            <li
              onClick={() => {
                setTitleFormat('Dentisterie esthétique')
                setTextFormat(
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                )
                setOpen(true)
              }}
            >
              Dentisterie esthétique
            </li>
            <li
              onClick={() => {
                setTitleFormat('Implants dentaires')
                setTextFormat(
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                )
                setOpen(true)
              }}
            >
              Implants dentaires
            </li>
            <li
              onClick={() => {
                setTitleFormat('Parodontie (Traitement des gencives)')
                setTextFormat(
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                )
                setOpen(true)
              }}
            >
              Parodontie (Traitement des gencives)
            </li>
            <li
              onClick={() => {
                setTitleFormat('Traitement de canal (endodontie)')
                setTextFormat(
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                )
                setOpen(true)
              }}
            >
              Traitement de canal (endodontie)
            </li>
            <li
              onClick={() => {
                setTitleFormat('Extraction des dents de sagesse')
                setTextFormat(
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                )
                setOpen(true)
              }}
            >
              Extraction des dents de sagesse
            </li>
            <li
              onClick={() => {
                setTitleFormat('Service d’orthodontie')
                setTextFormat(
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                )
                setOpen(true)
              }}
            >
              Service d’orthodontie
            </li>
          </ul>
        </div>
      </div>
      <AlertDialogSlide
        open={open}
        titleFormat={titleFormat}
        textFormat={textFormat}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Assistances
