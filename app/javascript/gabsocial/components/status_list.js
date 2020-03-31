import { Fragment } from 'react';
import { debounce } from 'lodash';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import StatusContainer from '../containers/status_container';
import ScrollableList from './scrollable_list';
import TimelineQueueButtonHeader from './timeline_queue_button_header';
import ColumnIndicator from './column_indicator';

export default class StatusList extends ImmutablePureComponent {

  static propTypes = {
    scrollKey: PropTypes.string.isRequired,
    statusIds: ImmutablePropTypes.list.isRequired,
    featuredStatusIds: ImmutablePropTypes.list,
    onLoadMore: PropTypes.func,
    isLoading: PropTypes.bool,
    isPartial: PropTypes.bool,
    hasMore: PropTypes.bool,
    emptyMessage: PropTypes.string,
    timelineId: PropTypes.string,
    queuedItemSize: PropTypes.number,
    onDequeueTimeline: PropTypes.func,
    group: ImmutablePropTypes.map,
    withGroupAdmin: PropTypes.bool,
    onScrollToTop: PropTypes.func,
    onScroll: PropTypes.func,
    promotion: PropTypes.object,
    promotedStatus: ImmutablePropTypes.map,
    fetchStatus: PropTypes.func,
  };

  componentDidMount() {
    this.handleDequeueTimeline();
    this.fetchPromotedStatus();
  };

  fetchPromotedStatus() {
    const { promotion, promotedStatus, fetchStatus } = this.props;

    if (promotion && !promotedStatus) {
      fetchStatus(promotion.status_id);
    }
  }

  getFeaturedStatusCount = () => {
    return this.props.featuredStatusIds ? this.props.featuredStatusIds.size : 0;
  }

  getCurrentStatusIndex = (id, featured) => {
    if (featured) {
      return this.props.featuredStatusIds.indexOf(id);
    }

    return this.props.statusIds.indexOf(id) + this.getFeaturedStatusCount();
  }

  handleMoveUp = (id, featured) => {
    const elementIndex = this.getCurrentStatusIndex(id, featured) - 1;
    this._selectChild(elementIndex, true);
  }

  handleMoveDown = (id, featured) => {
    const elementIndex = this.getCurrentStatusIndex(id, featured) + 1;
    this._selectChild(elementIndex, false);
  }

  handleLoadOlder = debounce(() => {
    this.props.onLoadMore(this.props.statusIds.size > 0 ? this.props.statusIds.last() : undefined);
  }, 300, { leading: true })

  _selectChild (index, align_top) {
    const container = this.node.node;
    const element = container.querySelector(`article:nth-of-type(${index + 1}) .focusable`);

    if (element) {
      if (align_top && container.scrollTop > element.offsetTop) {
        element.scrollIntoView(true);
      } else if (!align_top && container.scrollTop + container.clientHeight < element.offsetTop + element.offsetHeight) {
        element.scrollIntoView(false);
      }
      element.focus();
    }
  }

  handleDequeueTimeline = () => {
    const { onDequeueTimeline, timelineId } = this.props;
    if (!onDequeueTimeline || !timelineId) return;

    onDequeueTimeline(timelineId);
  }

  setRef = c => {
    this.node = c;
  }

  render () {
    const { statusIds, featuredStatusIds, onLoadMore, timelineId, totalQueuedItemsCount, isLoading, isPartial, withGroupAdmin, group, promotion, promotedStatus, ...other }  = this.props;

    if (isPartial) {
      return <ColumnIndicator type='loading' />
    }

    let scrollableContent = (isLoading || statusIds.size > 0) ? (
      statusIds.map((statusId, index) => statusId === null ? (
        <div
          key={'gap:' + statusIds.get(index + 1)}
          disabled={isLoading}
          maxId={index > 0 ? statusIds.get(index - 1) : null}
          onClick={onLoadMore}
        />
      ) : (
        <Fragment key={statusId}>
          <StatusContainer
            id={statusId}
            onMoveUp={this.handleMoveUp}
            onMoveDown={this.handleMoveDown}
            contextType={timelineId}
            group={group}
            withGroupAdmin={withGroupAdmin}
            showThread
          />
          {
            promotedStatus && index === promotion.position &&
            <StatusContainer
              id={promotion.status_id}
              contextType={timelineId}
              promoted
              showThread
            />
          }
        </Fragment>
      ))
    ) : null;

    if (scrollableContent && featuredStatusIds) {
      scrollableContent = featuredStatusIds.map(statusId => (
        <StatusContainer
          key={`f-${statusId}`}
          id={statusId}
          featured
          onMoveUp={this.handleMoveUp}
          onMoveDown={this.handleMoveDown}
          contextType={timelineId}
          showThread
        />
      )).concat(scrollableContent);
    }

    return (
      <Fragment>
        <TimelineQueueButtonHeader
          onClick={this.handleDequeueTimeline}
          count={totalQueuedItemsCount}
          itemType='gab'
        />
        <ScrollableList
          ref={this.setRef}
          isLoading={isLoading}
          showLoading={isLoading && statusIds.size === 0}
          onLoadMore={onLoadMore && this.handleLoadOlder}
          {...other}
        >
          {scrollableContent}
        </ScrollableList>
      </Fragment>
    );
  }

}