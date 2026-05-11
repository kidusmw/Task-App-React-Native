import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../styles/RegisterStyles";

export default function RegisterScreen({ navigation }) {
  const [toggle, setToggle] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        <View>
          <Text style={styles.label}>Full Name</Text>
          <TextInput placeholder="John Doe" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="you@example.com" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              secureTextEntry={toggle}
              placeholder="******"
              style={styles.passwordInput}
            />
            <Pressable onPress={() => setToggle(!toggle)}>
              {toggle ? <Eye /> : <EyeOff />}
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerInnerText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
