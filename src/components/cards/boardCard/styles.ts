import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    marginTop: 12,
    marginHorizontal: 12,
    backgroundColor: "rgba(242, 106, 97, .5)",
  },
  cardContent: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContainer: {
    flex: 4,
  },
});

export default styles;
