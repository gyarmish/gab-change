import Sticky from 'react-stickynode'
import Search from '../components/search'
import ColumnHeader from '../components/column_header'
import Sidebar from '../components/sidebar'

export default class SearchLayout extends PureComponent {
  static propTypes = {
    actions: PropTypes.array,
    tabs: PropTypes.array,
    layout: PropTypes.object,
    showBackBtn: PropTypes.bool,
  }

  render() {
    const { children, showBackBtn, layout, actions, tabs } = this.props

    // const shouldHideFAB = path => path.match(/^\/posts\/|^\/search|^\/getting-started/);
    // const floatingActionButton = shouldHideFAB(this.context.router.history.location.pathname) ? null : <button key='floating-action-button' onClick={this.handleOpenComposeModal} className='floating-action-button' aria-label={intl.formatMessage(messages.publish)}></button>;

    return (
      <div className={[_s.default, _s.flexRow, _s.width100PC, _s.heightMin100VH, _s.backgroundColorSecondary3].join(' ')}>

        <Sidebar />

        <main role='main' className={[_s.default, _s.flexShrink1, _s.flexGrow1, _s.borderColorSecondary2, _s.borderLeft1PX].join(' ')}>

          <div className={[_s.default, _s.height53PX, _s.borderBottom1PX, _s.borderColorSecondary2, _s.backgroundColorSecondary3, _s.z3, _s.top0, _s.positionFixed].join(' ')}>
            <div className={[_s.default, _s.height53PX, _s.paddingLeft15PX, _s.width1015PX, _s.flexRow, _s.justifyContentSpaceBetween].join(' ')}>
              <div className={[_s.default, _s.width645PX].join(' ')}>
                <ColumnHeader
                  title={'Search'}
                  showBackBtn={showBackBtn}
                  actions={actions}
                  tabs={tabs}
                />
              </div>
              <div className={[_s.default, _s.width340PX].join(' ')}>
                <Search />
              </div>
            </div>
          </div>

          <div className={[_s.default, _s.height53PX].join(' ')}></div>

          <div className={[_s.default, _s.width1015PX, _s.flexRow, _s.justifyContentSpaceBetween, _s.paddingLeft15PX, _s.paddingVertical15PX].join(' ')}>
            <div className={[_s.default, _s.width645PX, _s.z1].join(' ')}>
              <div className={_s.default}>
                {children}
              </div>
            </div>

            <div className={[_s.default, _s.width340PX].join(' ')}>
              <Sticky top={73} enabled>
                <div className={[_s.default, _s.width340PX].join(' ')}>
                  {layout}
                </div>
              </Sticky>
            </div>
          </div>

        </main>

      </div>
    )
  }

}