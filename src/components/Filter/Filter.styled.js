import styled from 'styled-components';
export const Board = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Input = styled.input`
  width: 100%;
  display: block;
`;
