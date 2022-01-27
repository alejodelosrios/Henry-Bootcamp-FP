import {FC} from 'react';
import { DivBot, Card, TeamImg, CardTitle, CardSubTitle, CardMiniTitle,  } from './styles';

import Alejandro from '../../assets/About-Us/Alejandro.png';
import Celeste from '../../assets/About-Us/Celes.png';
import Carolina from '../../assets/About-Us/Caro.png';
import Julian from '../../assets/About-Us/Cuarzo.png';
import Ridegras from '../../assets/About-Us/Ridegras.png';
import Bryan from '../../assets/About-Us/Bryan.png';
import Francisco from '../../assets/About-Us/Francisco.png';
import Federico from '../../assets/About-Us/Fer.png';

const CardContainer: FC = () => {
    return (
    <>
    <DivBot>
      <Card>
          <TeamImg src={Alejandro}/>
          <div>
            <CardTitle>Manuel Alejandro Ramírez</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Team Leader</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Ridegras}/>
          <div>
            <CardTitle>Francisco Minutti</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Front-End Developer</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Bryan}/>
          <div>
            <CardTitle>Bryan de la Cruz</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Front-End Developer</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Celeste}/>
          <div>
            <CardTitle>María Celeste Medina</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Back-End Developer</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Julian}/>
          <div>
            <CardTitle>Julian Mariano Decurnex</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Back-End Developer</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Carolina}/>
          <div>
            <CardTitle>Carolina Ortiz</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Back-End Developer</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Francisco}/>
          <div>
            <CardTitle>Francisco Lopez</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Front-End Developer</CardMiniTitle>
          </div>
      </Card>

      <Card>
          <TeamImg src={Federico}/>
          <div>
            <CardTitle>Federico Fernández</CardTitle>
            <CardSubTitle>Full Stack Developer</CardSubTitle>
            <CardMiniTitle>Front-End Developer</CardMiniTitle>
          </div>
      </Card>

    </DivBot>
    </>
)};

export default CardContainer;