import React, { useState } from 'react';
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useFormik, FormikProvider } from 'formik';
import Styles from './style';
import environment from '../relay/environment';
import SignUpMutation from './mutations/SignUpMutation';

const SignUp = () => {
  const [userCreated, setUserCreated] = useState();

  const onSubmit = (values) => {
    // @todo the mutation will be implemented here
    const {username, password} = values;

    const input = {
        fields: {
            username,
            password,
        }
    }

    SignUpMutation.commit({
        environment,
        input,
        onCompleted: ({signUp}) => {
            const {viewer} = signUp;
            const {sessionToken, user} = viewer;

            if (sessionToken !== null) {
                alert(`user ${user.usename} successfuly created`);
                setUserCreated(user);
                return;
            }
        },
        onError: (errors) => {
            alert(errors[0].message);
        }
    })
  };

  const formikbag = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
  });

  const { handleSubmit, setFieldValue } = formikbag;
  if (userCreated?.id) {
    return (
      <View style={ {marginTop: 15, alignItems: 'center'} }>
        <Text>User {userCreated.name} created</Text>
      </View>
    );
  }

  return (
    <FormikProvider value={formikbag}>
      <View style={Styles.login_wrapper}>
        <View style={Styles.form}>
          <Text>Username</Text>
          <TextInput
            name={"username"}
            style={Styles.form_input}
            autoCapitalize="none"
            onChangeText={(text) => setFieldValue("username", text)}
          />
          <Text>Password</Text>
          <TextInput
            style={Styles.form_input}
            name={"password"}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setFieldValue("password", text)}
          />
          <TouchableOpacity onPress={() => handleSubmit()}>
            <View style={Styles.button}>
              <Text style={Styles.button_label}>{"Sign Up"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </FormikProvider>
  );
};

export default SignUp;