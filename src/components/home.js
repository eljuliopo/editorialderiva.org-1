import React from "react"


import { Header, Grid, Divider } from "semantic-ui-react"

export default ({ siteTitle }) => (
  <div
    style={{
      marginTop: `3.2rem`,
    }}
  >
    <Header
      as='h5'>

    </Header>
    <Divider />
    <Grid stackable columns='equal' style={{
      textAlign: 'justify'
    }}>
      <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
        <p>
        <b>EDITORIAL DERIVA</b> se conforma con el objetivo de proveer materiales teóricos que permitan acompañar y potenciar las luchas que despliega la población oprimida y explotada de este y otros territorios.
        </p>
        <p>El proyecto editorial surge desde la exploración y naufragio por el vasto océano del conocimiento, entendiendo que cualquier división entre saberes no es más que una incompleta forma de experienciar el mundo. Lejos de seguir una sola corriente dentro del enorme flujo de ideas críticas acumuladas en la desventura humana, preferimos adentrarnos, a tientas, hacia la deriva teórica. En este océano donde (para bien) han muerto las certidumbres, navegamos sin más dirección que aquella que propone el viento, guiados por la intuición de visibilizar relatos de enorme poder emancipatorio que no han tenido cabida bajo las rígidas estructuras ortodoxas.
        </p>
        <p>Como timón y vela, asumimos la crítica y la perspectiva histórica, para situarnos en un punto espacial que nos permita integrar las repercusiones que genera cualquier aporte desde un campo del conocimiento a otro. A su vez, nos reconocemos en todas aquellas situaciones antiautoritarias que ha parido la civilización, impulsados por el afán de promover un cuestionamiento que contribuya a descomponer este entramado de relaciones humanas explotadoras, inconexas y alienantes.
        </p>
        <p>Desde el sur del río Maule, geografía que presenció la resistencia al inca, el avance del imperio español y el disciplinamiento y descomposición del campesinado, buscamos aportar al desmantelamiento teórico y político de la ideología que violenta las sociedades humanas, que secuestra su autonomía y libertad, y degrada progresivamente las condiciones de mantención de la vida en amplias regiones del planeta. Esperamos que la difusión de los elementos teóricos en este sitio web contribuya a potenciar la movilización popular contra la explotación de clases sociales, ayuden a subvertir el modo de vida capitalista imperante y a detener el avance extractivista global.
        </p>
        <p><b>
        Las ideas humanas son una construcción histórica y social imposibles de apropiar, por eso, ante la propiedad intelectual, promovemos intelecto contra la propiedad.
        </b></p>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid>
      <Divider />
  </div>
)
