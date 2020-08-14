import { defineMessages, injectIntl } from 'react-intl'
import PageTitle from '../features/ui/util/page_title'
import DefaultLayout from '../layouts/default_layout'
import {
  LinkFooter,
  VerifiedAccountsPanel,
  ProgressPanel,
} from '../features/ui/util/async_components'

class ProPage extends PureComponent {

  render() {
    const { intl, children } = this.props

    const title = intl.formatMessage(messages.title)

    return (
      <DefaultLayout
        title={title}
        page='pro'
        layout={[
          ProgressPanel,
          VerifiedAccountsPanel,
          LinkFooter,
        ]}
      >
        <PageTitle path={title} />
        {children}
      </DefaultLayout>
    )
  }

}

const messages = defineMessages({
  title: { 'id': 'column.pro', 'defaultMessage': 'Pro feed' },
})

ProPage.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
}

export default injectIntl(ProPage)