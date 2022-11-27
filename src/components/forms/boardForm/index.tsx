import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { IBoardForm } from "../../../common/interfaces";

const emptyForm: IBoardForm = {
  name: "",
  description: "",
  thumbnail: "",
};

interface Props {
  onSubmit: (board: IBoardForm) => void;
  onDelete?: () => void;
  initialValue?: IBoardForm;
}

const BoardForm = ({ onSubmit, onDelete, initialValue }: Props) => {
  const [form, setForm] = useState(initialValue ? initialValue : emptyForm);

  const inputHandler = (name: string, value: string) =>
    setForm({
      ...form,
      [name]: value,
    });

  const handleOnSubmit = () => onSubmit(form);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        label="Board Name"
        value={form.name}
        onChangeText={(value: string) => inputHandler("name", value)}
      />
      <TextInput
        style={styles.textInput}
        label="Description"
        value={form.description}
        onChangeText={(value: string) => inputHandler("description", value)}
      />
      <View style={styles.buttonGroup}>
        {initialValue ? (
          <Button mode="contained" buttonColor="red" onPress={() => onDelete()}>
            Delete
          </Button>
        ) : (
          <></>
        )}
        <Button mode="contained" onPress={() => handleOnSubmit()}>
          {initialValue ? "Confirm" : "Create"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BoardForm;
