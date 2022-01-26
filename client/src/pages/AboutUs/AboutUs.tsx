import {FC} from 'react';
import { AboutCont, Header, Logo, Section, 
  Description, Aside, Graphic, Info, Foot, Us } from './styles';

import companyLogo from '../../assets/logo.svg';
import photos from '../../assets/restaurantes.svg';
import graphic from '../../assets/finanzas.svg';

const AboutUs: FC = () => {
  return <AboutCont>
    <Header>
      <Logo src={companyLogo}/>
    </Header>

    <Section>

      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem libero cumque quod eligendi architecto reprehenderit, cum quaerat ab distinctio saepe quis deleniti eius, perferendis voluptatibus laborum nam praesentium eum ex sed aut veniam accusamus animi facere. Nam ducimus nostrum quo, dolorum autem ex officiis tempore aperiam, architecto accusamus placeat odio, praesentium animi nulla quod optio saepe repellendus! Dolorem nulla obcaecati quisquam, consequatur velit in blanditiis id corporis libero nam alias, ab deleniti aspernatur nihil est! Exercitationem, sed ad facilis ducimus voluptate quibusdam consectetur explicabo nostrum expedita illo maiores cupiditate necessitatibus mollitia sint alias assumenda. Eum ratione quos beatae cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi hic maiores qui totam sunt tenetur debitis ad neque aut nisi consequuntur vitae repellat, quasi ut accusantium illum, fuga perspiciatis inventore rem? Illo impedit aliquam debitis, commodi quasi itaque sequi molestiae ullam odio inventore, maiores possimus asperiores rerum accusamus deleniti nisi, magnam ab expedita laudantium labore necessitatibus? Perferendis accusantium dolorum magnam saepe minus dignissimos, ab ex assumenda. Ullam minus dolor omnis perspiciatis quisquam, quasi sapiente porro voluptatem illo sint? Velit iusto sit provident similique aliquam a facilis, odio temporibus vitae officia nam sint placeat corrupti tempora eos, modi quod, molestias id?
      </Description>

      <Aside>
        <Graphic src={graphic} />
        <Info>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique odio non voluptatibus, inventore soluta id expedita asperiores amet voluptate quidem nam impedit perspiciatis. Mollitia molestiae labore dolor doloribus consectetur vitae repellat distinctio itaque nulla eos. Totam impedit quis, sapiente, aliquid earum modi perspiciatis molestias sit doloremque, ratione maiores officia!
        </Info>
      </Aside>

    </Section>

    <Foot>
      <Us src={photos} />
      <Us src={photos} />
      <Us src={photos} />
      <Us src={photos} />
      <Us src={photos} />
      <Us src={photos} />
      <Us src={photos} />
      <Us src={photos} />
    </Foot>
  </AboutCont>;
};

export default AboutUs;
