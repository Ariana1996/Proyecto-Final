import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
