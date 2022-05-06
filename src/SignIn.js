import React, {useState, useEffect} from 'react';
import environment, {getSessionToken} from '../relay/environment';
import {FormikProvider, useFormik} from 'formik';
import { Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Styles from './style';
import LogInMutation from './mutations/LogInMutation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignIn = () => {
//   const [userLogged, setUserLogged] = useState(null);
  const [sessionToken, setSessionToken] = useState(null);

  useEffect(() => {
    (async () => {
      const sT = await getSessionToken();
      setSessionToken(sT);
    })();
  }, []);

  const onSubmit = async (values) => {
    // @todo the mutation will be implemented here
    const {username, password } = values;
    const input = {
        username,
        password,
    };

    LogInMutation.commit({
        environment, 
        input,
        onCompleted: async (response) => {
            if (!response?.logIn || response?.logIn == null) {
                alert('Error while logging in');
                return;
            }

            const viewer = response?.logIn;
            const {sessionToken, user} = viewer;

            if (sessionToken !== null) {
                // setUserLogged(user);
                setSessionToken(sessionToken);
                alert(`user successfully logged in`);
                await AsyncStorage.setItem('sessionToken', sessionToken);
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

  const {handleSubmit, setFieldValue} = formikbag;

//   if (userLogged?.id) {
//     return (
//       <View style={ {marginTop: 15, alignItems: 'center'} }>
//         <Text>User {userLogged.name} logged</Text>
//       </View>
//     );
//   }

  if (sessionToken) {
      return(
          <View>
              <Text>user logged in</Text>
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
                        <Text style={Styles.button_label}>{"Sign in"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </FormikProvider>
  );
};

export default SignIn;