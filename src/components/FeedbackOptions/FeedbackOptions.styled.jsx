import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;

export const BtnItem = styled.li``;

export const Btn = styled.button`
  padding: 10px 32px;
  color: black;
  background-color: #ffffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border: none;
  border-radius: 4px;
  border: 1px solid rgba(238, 238, 238, 1);
  box-shadow: 0px 4px 4px $button-shadow;
  min-width: 150px;
  max-height: 50 px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    background-color: #1e90ff;
    color: #ffffffff;
  }

  &:active {
    background-color: #1e90ff;
    color: red;
  }
`;
