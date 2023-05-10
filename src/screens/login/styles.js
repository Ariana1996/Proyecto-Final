import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontWeight: 'bold', fontSize: 20 },
  input: {
    backgroundColor: theme.colors.secondary,
    marginVertical: 10,
    borderWidth: 2,
    width: 200,
    textAlign: 'center',
  },
});
