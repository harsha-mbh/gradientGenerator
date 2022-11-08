import styled from 'styled-components'

export const Button = styled.button`
  color: #1e293b;
  background-color: ${props => (props.isActive ? '##ffffff79' : '#ededed')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  padding: 5px 8px 5px 8px;
  border: none;
  border-radius: 8px;
  width: 100px;
  font-size: 20px;
  font-family: 'Roboto';
  margin-right: 20px;
  margin-bottom: 20px;
`
