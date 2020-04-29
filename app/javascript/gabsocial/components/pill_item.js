import { withRouter } from 'react-router-dom'
import { CX } from '../constants'
import Button from './button'
import Text from './text'

export default
@withRouter
class PillItem extends PureComponent {

  static propTypes = {
    icon: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string,
    to: PropTypes.string,
  }

  state = {
    isCurrent: -1,
  }

  componentDidUpdate(prevProps) {
    // If user navigates to different page, ensure tab bar item
    // with this.props.to that is on location is set to active.
    if (this.props.location !== prevProps.location) {
      const isCurrent = this.props.to === this.props.location.pathname

      if (this.state.isCurrent !== isCurrent) {
        this.setState({ isCurrent })
      }
    }
  }

  render() {
    const {
      title,
      to,
      onClick,
      location,
      isActive,
    } = this.props
    const { isCurrent } = this.state

    // Combine state, props, location to make absolutely
    // sure of active status.
    const active = isActive ||
      (isCurrent === -1 ? to === location.pathname : false)

    const containerClasses = CX({
      default: 1,
      noUnderline: 1,
      text: 1,
      alignItemsCenter: 1,
      justifyContentCenter: 1,
      py5: 1,
      outlineNone: 1,
      cursorPointer: 1,
      circle: 1,
      bgSecondary: !active,
      bgSecondaryDark_onHover: !active,
      bgBrand: active,
      mr5: 1,
      mb5: 1,
    })

    const textParentClasses = CX({
      default: 1,
      height100PC: 1,
      alignItemsCenter: 1,
      justifyContentCenter: 1,
      py2: 1,
      px15: 1,
    })

    const textOptions = {
      size: 'small',
      color: active ? 'white' : 'secondary',
      weight: active ? 'bold' : 'medium',
    }

    return (
      <Button
        onClick={onClick}
        className={containerClasses}
        to={to || undefined}
        noClasses
      >
        <span className={textParentClasses}>
          <Text {...textOptions}>
            {title}
          </Text>
        </span>
      </Button>
    )
  }
}