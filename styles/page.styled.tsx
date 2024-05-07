import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  color: #666;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const CenterContent = styled.div`
  text-align: center;
  margin: 20px 0;

  h1 {
    color: #333;
    font-size: 48px;
    margin-bottom: 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

export const Card = styled.a`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: #333;

  h2 {
    font-size: 22px;
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }

  span {
    font-size: 24px;
    color: #007bff;
  }

  &:hover {
    border-color: #007bff;
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;
