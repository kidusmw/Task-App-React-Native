import { Eye, EyeOff, AlertCircle, AlertCircleIcon } from "lucide-react-native";
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../styles/RegisterStyles";
import { useRegister } from "../hooks/useRegister";

export default function RegisterScreen({ navigation }) {
  const [toggle, setToggle] = useState(true);
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleRegister,
  } = useRegister();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        {error ? (
          <View style={styles.errorContainer}>
            <AlertCircle size={16} color="#C62828" />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
        <View>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="John Doe"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={toggle}
              placeholder="******"
              style={styles.passwordInput}
            />
            <Pressable onPress={() => setToggle(!toggle)}>
              {toggle ? <Eye /> : <EyeOff />}
            </Pressable>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => handleRegister(navigation)}
        >
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
