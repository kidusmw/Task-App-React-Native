import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email field" style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput placeholder="Password field" style={styles.input} />
      </View>
      <Pressable style={styles.button}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 16,
    padding: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
});
