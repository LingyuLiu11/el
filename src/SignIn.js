import React, { useState, useEffect } from "react";
import environment, {getSessionToken} from "../relay/environment";
import { FormikProvider, useFormik } from "formik";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";

import LogInMutation from "./mutations/LogInMutation";

import UserLoggedRenderer from "./UserLoggedRenderer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import LogOutMutation from "./mutations/LogOutMutation";



import Styles from "./Style";

const SignIn = () => {
    const [sessionToken, setSessionToken] = useState(null);
    const [info, setinfo] = useState(false);

    const setInfo = () => {
        setinfo(true);
    }


  
    useEffect(() => {
      (async () => {
        const sT = await getSessionToken();
        setSessionToken(sT);
      })();
    }, [1000]);
  
    const handleLogout = async () => {
      LogOutMutation.commit({
        environment,
        input: {},
        onCompleted: async () => {
          await AsyncStorage.removeItem("sessionToken");
          setSessionToken(null);
          alert("User successfully logged out");
        },
        onError: (errors) => {
          alert(errors[0].message);
        },
      });
    };
  
    const onSubmit = (values) => {
      const { username, password } = values;
  
      const input = {
        username,
        password,
      };
  
      LogInMutation.commit({
        environment,
        input,
        onCompleted: async (response) => {
          if (!response?.logIn || response?.logIn === null) {
            alert("Error while logging");
            return;
          }
  
          const { viewer } = response?.logIn;
          const { sessionToken } = viewer;
  
          if (sessionToken !== null) {
            setSessionToken(sessionToken);
            // setUserLogged(user);
            await AsyncStorage.setItem("sessionToken", sessionToken);
            // console.log("here");
            return;
          }
        },
        onError: (errors) => {
          alert(errors[0].message);
        },
      });
    };
  
    const formikbag = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
    });
  
    const { handleSubmit, setFieldValue } = formikbag;
  
    if (sessionToken) {
      return (
        <View>
          <UserLoggedRenderer />
          <TouchableOpacity onPress={() => setInfo()}>
              <View style={Styles.button}>
                <Text style={Styles.button_label}>{"Show Info"}</Text>
              </View>
            </TouchableOpacity>
          <Button title={"logout"} onPress={() => handleLogout()} />
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
            <Text style={{ marginTop: 15 }}>Password</Text>
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
  