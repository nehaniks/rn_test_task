import {TextInput, View, TouchableOpacity, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

import {page, typography} from '../styles';

const SignUp = props => {
  const [data, setData] = useState({
    email: '',
    name: '',
    mobile: '',
  });
  const [error, setError] = useState({
    email: '',
    name: '',
    mobile: '',
  });
  // const [mobile, setMobile] = useState();

  const [isFormFilled, setIsFormFilled] = useState(false);
  // const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (
      data['email'].length >= 6 &&
      data['name'].length >= 2 &&
      data['mobile'].length === 10 &&
      error['email'].length === 0 &&
      error['name'].length === 0 &&
      error['mobile'].length === 0
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [data, error]);

  const updateData = (text, field) => {
    setData({...data, [field]: text});
  };

  const checkValidation = field => {
    let reg;
    if (field === 'email') {
      reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    } else if (field === 'name') {
      reg = /^[a-z ,.'-]{2,}$/i;
    } else if (field === 'mobile') {
      reg = /^[6-9]\d{9}$/;
    }

    if (reg.test(data[field]) === false) {
      setError({...error, [field]: `Please enter a valid ${field}`});
    } else {
      setError({...error, [field]: ''});
    }
  };

  const handleSignUp = () => {
    props.onChange(!props.hasSignedUp);
  };

  return (
    <View style={page.formContainer}>
      <Text style={typography.headerText}>Sign up</Text>
      <TextInput
        style={page.inputText}
        placeholder="Email"
        value={data.email}
        onChangeText={text => updateData(text, 'email')}
        onEndEditing={() => checkValidation('email')}
      />
      {error['email'].length > 0 ? (
        <Text style={typography.errorText}>{error.email}</Text>
      ) : null}

      <TextInput
        style={page.inputText}
        placeholder="Name"
        value={data.name}
        onChangeText={text => updateData(text, 'name')}
        onEndEditing={() => checkValidation('name')}
      />
      {error['name'].length > 0 ? (
        <Text style={typography.errorText}>{error.name}</Text>
      ) : null}

      <TextInput
        style={page.inputText}
        placeholder="Mobile"
        keyboardType="numeric"
        value={data.mobile}
        onChangeText={text => updateData(text, 'mobile')}
        onEndEditing={() => checkValidation('mobile')}
      />
      {error['mobile'].length > 0 ? (
        <Text style={typography.errorText}>{error.mobile}</Text>
      ) : null}

      {isFormFilled ? (
        <TouchableOpacity
          style={page.button}
          onPress={() => {
            Alert.alert('Thank You', 'Welcome', [
              {text: 'OK', onPress: () => handleSignUp()},
            ]);
            setData({
              email: '',
              name: '',
              mobile: '',
            });
          }}>
          <Text style={page.buttonText}>Submit</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SignUp;
