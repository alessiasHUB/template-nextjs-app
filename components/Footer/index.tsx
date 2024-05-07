import { Container, LinkContainer } from "./styledComponent";

const Footer = () => {
  return (
    <Container>
      <LinkContainer href="/">
        <span>Home</span>
      </LinkContainer>
      <LinkContainer href="/about">
        <span>About</span>
      </LinkContainer>
      <LinkContainer href="/contact-us">
        <span>Contact Us</span>
      </LinkContainer>
    </Container>
  );
};

export default Footer;
