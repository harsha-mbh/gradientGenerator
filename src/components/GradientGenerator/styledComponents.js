import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.activeDirectionValue},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: #ededed;
  font-size: 35px;
  font-family: 'Roboto';
`
export const SubHeading = styled.p`
  color: #ededed;
  font-size: 25px;
  font-family: 'Roboto';
`
export const ColorPickersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`

export const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`
export const ColorPickerInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
`
export const TabContainer = styled.ul`
  display: flex;
  list-style-type: none;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  padding: 5px 8px 5px 8px;
  border: none;
  border-radius: 7px;
`
