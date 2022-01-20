import {
  Section,
  Card,
  Image,
  Title,
  Paragraph,
  FlexDiv,
  Button,
} from "./styles";

const WelcomePage = () => {
  return (
    <>
      <nav style={{ marginBottom: "25px" }}>Nabvar</nav>
      <input
        type="text"
        placeholder="Oportunidad laboral "
        style={{ marginBottom: "50px" }}
      />
      <Section>
        <Image
          src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img-section"
          circle
        />
        <Card>
          <Title>About</Title>
          <Paragraph>
            Amet repudiandae accusantium quaerat blanditiis dolorum Minus in
            quasi eveniet alias iure similique ab. Quia temporibus soluta lorem
            ratione quos, nesciunt necessitatibus Explicabo quidem debitis modi
            delectus cupiditate? Consequatur obcaecati tenetur amet maxime quam
            Est laudantium sunt at voluptates quos expedita Aperiam veniam quam
            cum odio enim alias. Adipisci quia vitae tenetur deleniti
            accusantium Magnam quod quibusdam quo ipsum quas? Debitis laboriosam
            et ea rerum incidunt Nostrum alias ipsum cumque rerum quia
            repudiandae Veritatis dolore commodi autem eaque nihil? Iusto harum
            corporis vero voluptas temporibus architecto Nihil corrupti
            blanditiis cupiditate non minima earum? Id obcaecati fuga numquam
            non quo. Tenetur
          </Paragraph>
          <Button>Click here</Button>
        </Card>
      </Section>
      <Section primary>
        <Card>
          <Title>About</Title>
          <Paragraph primary>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Paragraph>
          <Button>Click here</Button>
        </Card>
        <Image
          src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img-section"
          circle
        />
      </Section>
      <Section>
        <Card width>
          <Title center>About</Title>
          <Paragraph>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Paragraph>
          <Image
            src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="img-section"
            rectangle
          />
          <FlexDiv>
            <Button>Click here</Button>
            <Button>Click here</Button>
          </FlexDiv>
        </Card>
      </Section>
    </>
  );
};

export default WelcomePage;
