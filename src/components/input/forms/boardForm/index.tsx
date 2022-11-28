import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { IBoard, IBoardForm } from "../../../../common/interfaces";
import IconSelector from "../../iconSelector";

const initialFormState = (board?: IBoard): IBoardForm =>
  board
    ? board
    : {
        name: "",
        description: "",
        thumbnailPhoto: "",
      };

interface Props {
  onSubmit: (board: IBoardForm) => void;
  onDelete?: () => void;
  board?: IBoard;
}

const BoardForm = ({ onSubmit, onDelete, board }: Props) => {
  const [form, setForm] = useState(initialFormState(board));

  const inputHandler = (name: string, value: string) =>
    setForm({
      ...form,
      [name]: value,
    });

  const handleOnSubmit = () => onSubmit(form);

  return (
    <View>
      <View style={styles.input}>
        <IconSelector
          selectedIcon={form.thumbnailPhoto}
          onChnage={(icon: string) => inputHandler("thumbnailPhoto", icon)}
        />
      </View>
      <TextInput
        style={styles.input}
        label="Board Name"
        value={form.name}
        onChangeText={(value: string) => inputHandler("name", value)}
      />
      <TextInput
        style={styles.input}
        label="Description"
        value={form.description}
        onChangeText={(value: string) => inputHandler("description", value)}
      />
      <View style={styles.buttonGroup}>
        {board ? (
          <Button mode="contained" buttonColor="red" onPress={() => onDelete()}>
            Delete
          </Button>
        ) : (
          <></>
        )}
        <Button mode="contained" onPress={() => handleOnSubmit()}>
          {board ? "Confirm" : "Create"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BoardForm;
