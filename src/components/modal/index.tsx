import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-paper";
import styles from "./styles";
import Modal from "react-native-modal";

const CustomModal = ({ visible, hideModal, children }) => {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
    >
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressOut={hideModal}
      >
        <TouchableWithoutFeedback>
          <Card elevation={5} style={styles.modalCard}>
            {children}
          </Card>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModal;
