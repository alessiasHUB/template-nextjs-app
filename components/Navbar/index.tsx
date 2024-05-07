import { LinkContainer, Nav } from "./styledComponent";

const Navbar = () => {
  return (
    <Nav>
      <LinkContainer href="/">
        <span>Home</span>
      </LinkContainer>
      <LinkContainer href="/about">
        <span>About</span>
      </LinkContainer>
      <LinkContainer href="/contact-us">
        <span>Contact Us</span>
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;
