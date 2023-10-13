import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#B9D3EE",
        borderRadius: 10,
        flexDirection: "row", // Để các phần tử nằm cạnh nhau
        height: Dimensions.get("window").height / 8,
        marginTop: 5,
    },
    idText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    titleText: {
        marginTop: 5,
        fontSize: 14,
    },
    image: {
        borderRadius: 5,
        margin: 10,
        width: "20%",
        height: "80%",
    },
    textContainer: {
        flex: 1, // Để các phần tử trong textContainer có thể mở rộng theo chiều ngang
        marginLeft: 10, // Khoảng cách giữa hình ảnh và textContainer
        padding: 5,
        justifyContent: 'center'
    },
});

export default styles