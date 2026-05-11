import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { styles } from "../styles/LoginStyles";

export default function LoginScreen({ navigation }) {
  const [toggle, setToggle] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your tasks</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="you@example.com" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="******"
              style={styles.passwordInput}
              secureTextEntry={toggle}
            />
            <Pressable onPress={() => setToggle(!toggle)}>
              {toggle ? <Eye /> : <EyeOff />}
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.footerInnerText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
