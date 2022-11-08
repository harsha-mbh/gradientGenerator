import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onChangeActiveDirection, activeDirection} = props
  const {directionId, displayText} = directionDetails
  const isActive = activeDirection === directionId

  const onClickDirection = () => {
    onChangeActiveDirection(directionId)
  }

  return (
    <li>
      <Button type="button" onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
