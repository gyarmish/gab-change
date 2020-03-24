import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { FormattedMessage } from 'react-intl';
import { changeSetting, saveSettings } from '../../../../actions/settings';
import SettingSwitch from '../../../../components/setting_switch';

const mapStateToProps = state => ({
  settings: state.getIn(['settings', 'home']),
});

const mapDispatchToProps = dispatch => ({
  onChange(key, checked) {
    dispatch(changeSetting(['home', ...key], checked));
  },
  onSave() {
    dispatch(saveSettings());
  },
});

export default
@connect(mapStateToProps, mapDispatchToProps)
class ColumnSettings extends ImmutablePureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render () {
    const { settings, onChange } = this.props;

    return (
      <div>
        <FormattedMessage id='home.column_settings.basic' defaultMessage='Basic' />

        <SettingSwitch
          prefix='home_timeline'
          settings={settings}
          settingPath={['shows', 'repost']}
          onChange={onChange}
          label={<FormattedMessage id='home.column_settings.show_reposts' defaultMessage='Show reposts' />}
        />

        <SettingSwitch
          prefix='home_timeline'
          settings={settings}
          settingPath={['shows', 'reply']}
          onChange={onChange}
          label={<FormattedMessage id='home.column_settings.show_replies' defaultMessage='Show replies' />}
        />
      </div>
    );
  }

}
