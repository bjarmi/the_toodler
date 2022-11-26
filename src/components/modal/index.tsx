import { Modal as NativeModal, Pressable } from "react-native";
import { Card } from "react-native-paper";
import styles from "./styles";

const Modal = ({ visible, hideModal, children }) => {
  return (
    <NativeModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={hideModal}
    >
      <Pressable onPress={() => hideModal()} style={styles.centeredView}>
        <Card elevation={5} style={styles.modalCard}>
          {children}
        </Card>
      </Pressable>
    </NativeModal>
  );
};

export default Modal;
