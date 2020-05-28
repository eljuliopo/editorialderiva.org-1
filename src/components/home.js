import React from "react"
import { Grid, Segment, Container, Divider, Header } from "semantic-ui-react"

export default ({ siteTitle }) => (
  <div
    style={{
      marginTop: `0em`,
      marginBottom: '0em',
    }}
  >
  <Container vertical textAlign="center" style={{
      position: 'relative',
      boxSizing: 'content-box',
  }} />
    <Grid stackable columns='equal' style={{
      textAlign: 'left'
    }}>
      <Grid.Column width={1}>
      </Grid.Column>
      <Grid.Column width={10}>
      <Header as='h3' textAlign='left' dividing style={{
        marginTop: '0em',
      }}>
      editorialderiva.org
      <Header.Subheader>
      EDICIÓN, SUBVERSIÓN & MANUFACTURA DE LIBROS
      </Header.Subheader>
      </Header>
        <Container text fluid>
          <p><br/>
          <b>EDITORIAL DERIVA</b> nace como una intención de promover y proponer material teórico que acompañe, y ojalá potencie, la crítica y la lucha que despliega la población oprimido-explotada de este y otros territorios.
          </p>
          <p>El proyecto editorial surge desde la exploración y naufragio por el vasto océano del conocimiento, afirmando que cualquier división entre saberes no es más que una incompleta forma de experienciar el mundo. Lejos de seguir una sola corriente dentro del enorme flujo de ideas acumuladas en la desventura humana, preferimos adentrarnos, a tientas, hacia la deriva teórica. En este océano donde (para bien) han muerto las certidumbres, navegamos sin más dirección que aquella que propone el viento, guiados por la intuición de visibilizar relatos de enorme poder emancipatorio que no han tenido cabida bajo las rígidas estructuras ortodoxas.
          </p>
          <p>Como timón y vela asumimos la crítica y la perspectiva histórica, para situarnos en un punto espacial que nos permita integrar las repercusiones que genera cualquier aporte desde un campo del conocimiento a otro. A su vez, nos reconocemos en todas aquellas situaciones antiautoritarias que ha parido la civilización, impulsados por el afán de promover un cuestionamiento que contribuya a descomponer este entramado de relaciones humanas explotadoras, inconexas y alienantes.
          </p>
          <p>Desde el sur del río Maule, geografía que presenció la resistencia al inca, el avance del imperio español y el disciplinamiento y descomposición del campesinado, buscamos aportar al desmantelamiento teórico y político de la ideología que violenta las sociedades humanas, que secuestra su autonomía y libertad, y degrada progresivamente las condiciones de mantención de la vida en amplias regiones del planeta. Esperamos que la difusión de los elementos teóricos en este sitio web contribuya a potenciar la movilización popular contra la explotación de clases sociales, ayuden a subvertir el modo de vida capitalista imperante y a detener el avance extractivista global.
          </p>
          <b>
          <p style={{
            textTransform: 'uppercase',
          }}>
          <Divider />
          Las ideas humanas son una construcción histórica y social imposibles de apropiar, ante la propiedad intelectual promovemos intelecto contra la propiedad.
          <Divider />
          </p>
          </b>

        </Container>
        </Grid.Column>
        <Grid.Column width={5}>
        <Segment vertical verticalAlign='center' textAlign='center'>

            <iframe title='fbDeriva' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FeditorialDERIVA%2F&tabs=timeline&width=250&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=944284989104809" width="100%" height="500" style={{border: '0', overflow: 'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </Segment>
        </Grid.Column>
      </Grid>
  </div>
)
