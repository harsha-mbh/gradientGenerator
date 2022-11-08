import {Component} from 'react'
import {
  AppContainer,
  Heading,
  SubHeading,
  ColorPickersContainer,
  ColorPicker,
  ColorPickerInput,
  TabContainer,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeActiveDirection = id => {
    const direction = gradientDirectionsList.filter(
      eachDirection => eachDirection.directionId === id,
    )
    this.setState({activeDirection: direction[0].directionId})
  }

  render() {
    const {activeDirection, firstColor, secondColor} = this.state
    const filteredDirection = gradientDirectionsList.filter(
      eachDirection => eachDirection.directionId === activeDirection,
    )
    const activeDirectionValue = filteredDirection[0].value
    return (
      <AppContainer
        firstColor={firstColor}
        secondColor={secondColor}
        activeDirectionValue={activeDirectionValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <TabContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              activeDirection={activeDirection}
              directionDetails={eachDirection}
              onChangeActiveDirection={this.onChangeActiveDirection}
            />
          ))}
        </TabContainer>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorPickersContainer>
          <ColorPicker>
            <p>{firstColor}</p>
            <ColorPickerInput
              id="firstColor"
              type="color"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </ColorPicker>
          <ColorPicker>
            <p>{secondColor}</p>
            <ColorPickerInput
              id="secondColor"
              type="color"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </ColorPicker>
        </ColorPickersContainer>
        <GenerateButton type="button">Generate</GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
