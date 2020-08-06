import { Fragment } from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ImmutablePureComponent from 'react-immutable-pure-component'
import { fetchGroup } from '../actions/groups'
import PageTitle from '../features/ui/util/page_title'
import GroupLayout from '../layouts/group_layout'
import TimelineComposeBlock from '../components/timeline_compose_block'
import Divider from '../components/divider'
import GroupSortBlock from '../components/group_sort_block'

const messages = defineMessages({
	group: { id: 'group', defaultMessage: 'Group' },
})

const mapStateToProps = (state, { params: { id } }) => ({
	group: state.getIn(['groups', id]),
	relationships: state.getIn(['group_relationships', id]),
})

const mapDispatchToProps = (dispatch) => ({
	onFetchGroup(groupId) {
		dispatch(fetchGroup(groupId))
	},
})

export default
@injectIntl
@connect(mapStateToProps, mapDispatchToProps)
class GroupPage extends ImmutablePureComponent {

	static propTypes = {
		intl: PropTypes.object.isRequired,
		group: ImmutablePropTypes.map,
		children: PropTypes.node.isRequired,
		relationships: ImmutablePropTypes.map,
		onFetchGroup: PropTypes.func.isRequired,
		sortByValue: PropTypes.string.isRequired,
		sortByTopValue: PropTypes.string.isRequired,
	}
	
	componentDidMount() {
		this.props.onFetchGroup(this.props.params.id)
		// this.props.onFetchGroup(this.props.params.slug)
	}

	render() {
		const {
			intl,
			children,
			group,
			relationships,
			isTimeline,
		} = this.props

		const groupTitle = !!group ? group.get('title') : ''
		const groupId = !!group ? group.get('id') : undefined
		
		return (
			<GroupLayout
				showBackBtn
				title={'Group'}
				group={group}
				groupId={groupId}
				relationships={relationships}
				isTimeline={isTimeline}
			>
				<PageTitle path={[groupTitle, intl.formatMessage(messages.group)]} />

				{
					!!relationships && isTimeline && relationships.get('member') &&
					<Fragment>
						<TimelineComposeBlock size={46} groupId={groupId} autoFocus />
						<Divider />
					</Fragment>
				}

				{
					isTimeline && <GroupSortBlock />
				}

				{children}
			</GroupLayout>
		)
	}
}