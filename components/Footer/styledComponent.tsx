import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  background-color: navy;
  display: flex;
  align-items: flex-end;
  width: 100%;
  position: fixed; //tbd
  bottom: 0;
  left: 0;
  padding: 10px 20px;
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0; // Removes margin from the last link
  }
`;
