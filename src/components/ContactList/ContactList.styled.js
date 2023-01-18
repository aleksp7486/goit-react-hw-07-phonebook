import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
  line-height: 1;
  overflow: hidden;
`;

export const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accent};
`;

export const Phone = styled.span`
  padding-left: ${p => p.theme.space[3]}px;
`;

export const Btn = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;
  transition: background-color 200ms ease-in;
  :hover {
    background-color: ${p => p.theme.colors.delete};
  }
`;
