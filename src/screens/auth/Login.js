/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Static imports
import {Background, Button, Field} from '../../custom';
import {darkGreen} from '../../constants/color';
import loginValidation from '../../validations/login';

const Login = props => {
  const loginHandler = formValues => {
    alert(JSON.stringify(formValues));
    AsyncStorage.setItem('token', 'Himalay');
  };
  return (
    <Background>
      <View style={{alignItems: 'center', width: 390}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidation}
          onSubmit={values => loginHandler(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={{
                backgroundColor: 'white',
                height: 700,
                width: '100%',
                borderTopLeftRadius: 130,
                paddingTop: 100,
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
                Welcome Back
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                Login to your account
              </Text>
              <Field
                placeholder="Email / Username"
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errorText={errors.email && touched.email ? errors.email : ''}
              />
              <Field
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorText={
                  errors.password && touched.password ? errors.password : ''
                }
              />
              <View
                style={{
                  alignItems: 'flex-end',
                  width: '78%',
                  paddingRight: 16,
                  marginBottom: 130,
                }}>
                <Text
                  style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                  Forgot Password ?
                </Text>
              </View>
              <Button
                textColor="white"
                bgColor={darkGreen}
                btnLabel="Login"
                Press={() => {
                  handleSubmit();
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Don't have an account ?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Signup')}>
                  <Text
                    style={{
                      color: darkGreen,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Background>
  );
};

export default Login;
