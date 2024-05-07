import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.div`
  /* background-color: #ffffff; */
  color: #454545;
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0; // Removes margin from the last link
  }
`;
