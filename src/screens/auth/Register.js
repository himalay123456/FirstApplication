/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

// Static imports
import {Background, Button, Field} from '../../custom';
import {darkGreen} from '../../constants/color';
import registerValidation from '../../validations/register';

const Signup = props => {
  const signupHandler = formValues => {
    alert(JSON.stringify(formValues));
    props.navigation.navigate('Login');
  };

  return (
    <Background>
      <View style={{alignItems: 'center', width: 390}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: '',
          }}
          validationSchema={registerValidation}
          onSubmit={values => signupHandler(values)}>
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
                paddingTop: 50,
                alignItems: 'center',
              }}>
              <Field
                placeholder="First Name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                errorText={
                  errors.firstName && touched.firstName ? errors.firstName : ''
                }
              />
              <Field
                placeholder="Last Name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                errorText={
                  errors.lastName && touched.lastName ? errors.lastName : ''
                }
              />
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
              <Field
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={handleChange('confirm')}
                onBlur={handleBlur('confirm')}
                value={values.confirm}
                errorText={
                  errors.confirm && touched.confirm ? errors.confirm : ''
                }
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '78%',
                  paddingRight: 16,
                }}>
                <Text style={{color: 'grey', fontSize: 16}}>
                  By signing in, you agree to our{' '}
                </Text>
                <Text
                  style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                  Terms & Conditions
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '78%',
                  paddingRight: 16,
                  marginBottom: 10,
                }}>
                <Text style={{color: 'grey', fontSize: 16}}>and </Text>
                <Text
                  style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                  Privacy Policy
                </Text>
              </View>
              <Button
                textColor="white"
                bgColor={darkGreen}
                btnLabel="Signup"
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
                  Already have an account ?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text
                    style={{
                      color: darkGreen,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Login
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

export default Signup;
