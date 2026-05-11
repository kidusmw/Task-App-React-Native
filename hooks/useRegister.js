import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (navigation) => {
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    await AsyncStorage.setItem(
      `user:${email}`,
      JSON.stringify({ name, email, password }),
    );
    navigation.navigate("Login");
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    error,
    setPassword,
    handleRegister,
  };
}
