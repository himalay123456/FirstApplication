/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';

// Static imports
import {Button, Field, Header} from '../custom';
import {darkGreen} from '../constants/color';
import addGoalValidation from '../validations/addGoal';

const AddGoal = props => {
  const addGoalHandler = formValues => {
    alert(JSON.stringify(formValues));
    props.navigation.navigate('Dashboard');
  };
  return (
    <Header>
      <View style={{alignItems: 'center', width: 390}}>
        <Text
          style={{
            color: 'teal',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Add Goal
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new goal
        </Text>
        <Formik
          initialValues={{
            name: '',
            description: '',
          }}
          validationSchema={addGoalValidation}
          onSubmit={values => addGoalHandler(values)}>
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
                placeholder="Goal Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                errorText={errors.name && touched.name ? errors.name : ''}
              />
              <Field
                placeholder="Description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                errorText={
                  errors.description && touched.description
                    ? errors.description
                    : ''
                }
              />
              <Button
                textColor="white"
                bgColor={darkGreen}
                btnLabel="Add Goal"
                Press={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </Header>
  );
};

export default AddGoal;
