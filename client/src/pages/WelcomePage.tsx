import styled, { css } from "styled-components";
import { NavBar } from "../components/NavBar";

const WelcomePage = () => {
  const Section = styled.section<{ primary?: boolean }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    /* margin-bottom: 50px; */
    padding: 50px 50px;
    ${(props) =>
      props.primary &&
      css`
        background: grey;
      `};
  `;
  const Image = styled.img<{ circle?: boolean; rectangle?: boolean }>`
    ${(props) =>
      props.circle
        ? css`
            width: 400px;
            height: 400px;
            border-radius: 200px;
          `
        : props.rectangle
        ? css`
            width: 100%;
            height: 400px;
            margin-bottom: 22.5px;
          `
        : null};
  `;
  const Card = styled.div<{ width?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 400px;

    ${(props: any) =>
      props.width
        ? css`
            width: 100%;
          `
        : null}
  `;
  const Title = styled.h3<{ center?: boolean }>`
    color: black;
    font-weight: bold;
    ${(props: any) =>
      props.center
        ? css`
            text-align: center;
          `
        : null}
  `;
  const Text = styled.p<{ primary?: boolean }>`
    color: grey;
    margin-top: 0px;
    margin-bottom: 22.5px;

    ${(props) =>
      props.primary &&
      css`
        color: white;
      `}
  `;
  const FlexDiv = styled.div`
    display: flex;
  `;
  const Button = styled.button`
    width: 100px;
    margin-right: 10px;
  `;
  return (
    <>
      <nav style={{ marginBottom: "25px" }}><NavBar/></nav>
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
          <Text>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Text>
          <Button>Click here</Button>
        </Card>
      </Section>
      <Section primary>
        <Card>
          <Title>About</Title>
          <Text primary>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Text>
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
          <Text>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Text>
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
