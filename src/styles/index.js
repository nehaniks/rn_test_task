import {StyleSheet} from 'react-native';

var colors = {
  primaryLight: '#fbf9c2',
  primary: '#f9d83f',
  primaryDark: '#333',
  accent: '#cce00e',
  info: '#f51b00',
  secondary: '#fff',
  secondaryDark: '#000',
};

export const page = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    marginTop: 30,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: colors.secondary,
    backgroundColor: colors.primaryLight,
  },
  inputText: {
    width: '100%',
    marginVertical: 20,
    padding: 10,
    backgroundColor: colors.primaryDark,
    borderRadius: 25,
    fontSize: 16,
    color: colors.secondary,
  },
  button: {
    width: '100%',
    marginVertical: 20,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondaryDark,
  },
});

export const typography = StyleSheet.create({
  errorText: {
    marginTop: -15,
    color: colors.info,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondaryDark,
  },
});
