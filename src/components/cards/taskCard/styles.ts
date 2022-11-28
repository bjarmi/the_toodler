import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  touchable: {
    padding: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
