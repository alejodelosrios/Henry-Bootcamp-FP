import { FC } from 'react';

import {
  CatCard, Container, Image, CardTitle
} from './styles';

import Finanzas from '../../assets/finanzas.svg';
import Diseño from '../../assets/diseno.svg';
import Construccion from '../../assets/construccion.svg';
import Programacion from '../../assets/programacion.svg';
import Restaurantes from '../../assets/restaurantes.svg';

const CategoryCard: FC = ()=>{
    return (
      <Container>
        <CatCard>
          <Image src={Finanzas} alt="" />
          <CardTitle>Finanzas</CardTitle>
        </CatCard>
        <CatCard>
          <Image src={Construccion} alt="" />
          <CardTitle>Construccion</CardTitle>
        </CatCard><CatCard>
          <Image src={Diseño} alt="" />
          <CardTitle>Diseño</CardTitle>
        </CatCard><CatCard>
          <Image src={Restaurantes} alt="" />
          <CardTitle>Restaurantes</CardTitle>
        </CatCard><CatCard>
          <Image src={Programacion} alt="" />
          <CardTitle>Programacion</CardTitle>
        </CatCard>
      </Container>
    )
}

export default CategoryCard;
