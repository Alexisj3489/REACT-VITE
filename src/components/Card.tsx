import { CardContainer } from './CardContainer';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';
import { CardText } from './CardText';
import { CardLink } from './CardLink';
import { CardFooter } from './CardFooter'; // Nueva importación

function Card() {
  return (
    <CardContainer width="380px"> 


      <CardBody>
        <CardTitle title="Un Título Más Atractivo" />
        <CardText text="Este es un ejemplo de texto más descriptivo para nuestra hermosa tarjeta. Podemos añadir más detalles aquí para hacerla interesante." />
        
        <CardLink href="#" label="Descubre Más" variant="dark" /> 
      </CardBody>

      <CardFooter>
        <span>Última actualización: Hoy</span>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;