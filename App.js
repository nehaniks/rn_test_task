import {SafeAreaView} from 'react-native';

import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';

import React, {useState} from 'react';
import {page} from './src/styles';

const App = () => {
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const handleSignUp = () => {
    setHasSignedUp(!hasSignedUp);
  };

  return (
    <SafeAreaView style={page.container}>
      {hasSignedUp ? <Login /> : <SignUp hasSignedUp onChange={handleSignUp} />}
    </SafeAreaView>
  );
};

export default App;
