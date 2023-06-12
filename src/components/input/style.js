import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.black,
    marginRight: 10,
    color: theme.colors.black,
    marginLeft: 10,
  },
});
