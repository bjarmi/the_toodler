import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "column",
        marginTop: 12,
        marginHorizontal: 12,
        padding: 10,
        backgroundColor: "rgba(242, 106, 97, 1)",
    },
    cardContent: {
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

export default styles
