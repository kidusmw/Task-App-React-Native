import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../constants/theme";

export const styles = StyleSheet.create({
  // ─── LAYOUT ───────────────────────────────
  // The full screen wrapper - centers the card both ways
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // The white form card sitting in the middle of the screen
  card: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 16,
    width: "85%",
  },

  // ─── TYPOGRAPHY ───────────────────────────
  // Main screen heading
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },

  // Subtitle below the heading
  subtitle: {
    fontSize: fontSizes.md,
    color: colors.muted,
    marginBottom: 24,
  },

  // Label above each input field
  label: {
    fontSize: fontSizes.sm,
    fontWeight: "500",
    color: colors.text,
    marginBottom: 6,
  },

  // ─── FORM ─────────────────────────────────
  // Regular input field (email)
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 10,
    fontSize: fontSizes.md,
    marginBottom: 16,
  },

  // Password row - input + eye icon side by side
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  // Makes the TextInput stretch to fill remaining space in the row
  passwordInput: {
    flex: 1,
    padding: 10,
    fontSize: fontSizes.md,
  },

  // ─── BUTTON ───────────────────────────────
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: fontSizes.lg,
  },

  // ─── FOOTER ───────────────────────────────
  footer: {
    fontSize: fontSizes.sm,
    color: colors.muted,
    textAlign: "center",
    marginTop: 16,
  },

  footerInnerText: {
    color: colors.primary,
  },
});
