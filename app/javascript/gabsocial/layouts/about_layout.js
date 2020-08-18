import React from 'react'
import PropTypes from 'prop-types'
import {
  CX,
  BREAKPOINT_EXTRA_SMALL,
} from '../constants'
import { me } from '../initial_state'
import NavigationBar from '../components/navigation_bar'
import LoggedOutNavigationBar from '../components/logged_out_navigation_bar'
import FooterBar from '../components/footer_bar'
import Responsive from '../features/ui/util/responsive_component'
import ResponsiveClassesComponent from '../features/ui/util/responsive_classes_component'
import WrappedBundle from '../features/ui/util/wrapped_bundle'
import {
  AboutSidebar,
  GlobalFooter,
  SidebarXS,
} from '../features/ui/util/async_components'

class SettingsLayout extends React.PureComponent {

  componentWillMount() {
    this.menuItems = [
      {
        title: 'About',
        to: '/about',
      },
      // {
      //   title: 'Assets',
      //   to: '/about/assets',
      // },
      {
        title: 'DMCA',
        to: '/about/dmca',
      },
      {
        title: 'Investors',
        to: '/about/investors',
      },
      // {
      //   title: 'Press',
      //   to: '/about/press',
      // },
      {
        title: 'Privacy Policy',
        to: '/about/privacy',
      },
      {
        title: 'Terms of Sale',
        to: '/about/sales',
      },
      {
        title: 'Terms of Service',
        to: '/about/tos',
      },
    ]
  }

  render() {
    const { children, title } = this.props
    const { menuItems } = this

    const mainBlockClasses = CX({
      _: 1,
      w1015PX: 1,
      flexRow: 1,
      jcEnd: 1,
      py15: 1,
      mlAuto: !me,
      mrAuto: !me,
    })

    return (
      <div className={[_s._, _s.w100PC, _s.minH100VH, _s.bgPrimary].join(' ')}>

        <Responsive max={BREAKPOINT_EXTRA_SMALL}>
          <WrappedBundle component={SidebarXS} />
        </Responsive>

        {
          me &&
          <NavigationBar title={title} noSearch />
        }
        {
          !me &&
          <LoggedOutNavigationBar />
        }

        <div className={[_s._, _s.flexRow, _s.w100PC].join(' ')}>

          <Responsive min={BREAKPOINT_EXTRA_SMALL}>
            <WrappedBundle component={AboutSidebar} componentParams={{ title, items: menuItems }} />
          </Responsive>

          <ResponsiveClassesComponent
            classNames={[_s._, _s.flexShrink1, _s.flexGrow1].join(' ')}
            classNamesSmall={[_s._, _s.flexShrink1, _s.flexGrow1].join(' ')}
            classNamesXS={[_s._, _s.w100PC].join(' ')}
          >
            <main role='main'>

              <ResponsiveClassesComponent
                classNames={mainBlockClasses}
                classNamesXS={[_s._, _s.w1015PX, _s.jcEnd, _s.pb15].join(' ')}
              >

                <div className={[_s._, _s.w1015PX, _s.z1].join(' ')}>

                  <Responsive max={BREAKPOINT_EXTRA_SMALL}>
                    <WrappedBundle component={AboutSidebar} componentParams={{ title, items: menuItems }} />
                  </Responsive>
      
                  <div className={_s._}>
                    {children}
                  </div>
                </div>

              </ResponsiveClassesComponent>

            </main>
          </ResponsiveClassesComponent>
        </div>

        <WrappedBundle component={GlobalFooter} />

        <Responsive max={BREAKPOINT_EXTRA_SMALL}>
          <FooterBar />
        </Responsive>
      </div>
    )
  }

}

SettingsLayout.propTypes = {
  title: PropTypes.string,
}

export default SettingsLayout