import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  inputTitle: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.black,
    marginRight: 10,
    color: theme.colors.black,
    marginLeft: 10,
    marginTop: 10,
  },
  title: { fontSize: 15, fontWeight: 'bold' },
  listContainer: { marginTop: 10, marginLeft: 10 },
});
