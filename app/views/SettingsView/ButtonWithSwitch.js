import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { COLOR_DANGER, COLOR_SUCCESS } from '../../constants/colors';
import { isAndroid } from '../../utils/deviceInfo';

const ButtonWithSwitch = React.memo(({
	onValueChange, title, subTitle, disable, value
}) => (
	<View style={[styles.sectionItem, disable && styles.sectionItemDisabled]}>
		<View>
			<Text style={styles.sectionItemTitle}>{title}</Text>
			{subTitle
				? <Text style={styles.sectionItemSubTitle}>{subTitle}</Text>
				: null
			}
		</View>
		<Switch
			value={value}
			disabled={disable}
			style={styles.switch}
			trackColor={{
				false: isAndroid ? COLOR_DANGER : null,
				true: COLOR_SUCCESS
			}}
			onValueChange={onValueChange}
		/>
	</View>

));

ButtonWithSwitch.propTypes = {
	value: PropTypes.bool,
	onValueChange: PropTypes.func,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	disable: PropTypes.bool
};

ButtonWithSwitch.defaultProps = {
	onValueChange: () => {},
	disable: false,
	value: false
};
export default ButtonWithSwitch;