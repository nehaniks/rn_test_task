import {TextInput, View, TouchableOpacity, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

import {page, typography} from '../styles';

const Login = () => {
  const [data, setData] = useState({
    mobile: '',
    otp: '',
  });
  const [error, setError] = useState({
    mobile: '',
    otp: '',
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [hasGeneratedOtp, setHasGeneratedOtp] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');

  useEffect(() => {
    if (data['mobile'].length === 10 && error['mobile'].length === 0) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
    if (hasGeneratedOtp && data['otp'] === generatedOtp) {
      setData({
        mobile: '',
        otp: '',
      });
      setIsFormFilled(false);
      setHasGeneratedOtp(false);
      Alert.alert('Thank You', 'Welcome', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  }, [data, error]);

  const updateData = (text, field) => {
    setData({...data, [field]: text});
  };

  const checkValidation = field => {
    let reg;
    if (field === 'mobile') {
      reg = /^[6-9]\d{9}$/;
      if (reg.test(data[field]) === false) {
        setError({...error, [field]: `Please enter a valid ${field}`});
      } else {
        setError({...error, [field]: ''});
      }
    } else if (field === 'otp') {
      if (data[field] !== generatedOtp) {
        setError({...error, [field]: `Please enter a valid ${field}`});
      } else {
        setError({...error, [field]: ''});
      }
    }
  };

  return (
    <View style={page.formContainer}>
      <Text style={typography.headerText}>Login</Text>

      <TextInput
        style={page.inputText}
        placeholder={hasGeneratedOtp ? 'Otp' : 'Mobile'}
        keyboardType="numeric"
        value={hasGeneratedOtp ? data.otp : data.mobile}
        onChangeText={text => {
          hasGeneratedOtp
            ? updateData(text, 'otp')
            : updateData(text, 'mobile');
        }}
        onEndEditing={() => {
          hasGeneratedOtp ? checkValidation('otp') : checkValidation('mobile');
        }}
      />
      {hasGeneratedOtp ? (
        error['otp'].length > 0 ? (
          <Text style={typography.errorText}>{error.otp}</Text>
        ) : null
      ) : error['mobile'].length > 0 ? (
        <Text style={typography.errorText}>{error.mobile}</Text>
      ) : null}

      {isFormFilled && hasGeneratedOtp ? (
        <Text style={typography.errorText}>
          Please enter {generatedOtp} as OTP
        </Text>
      ) : isFormFilled ? (
        <TouchableOpacity
          style={page.button}
          onPress={() => {
            let otp = Math.floor(1000 + Math.random() * 9000).toString();
            setGeneratedOtp(otp);
            setHasGeneratedOtp(true);
          }}>
          <Text style={page.buttonText}>Next</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Login;
