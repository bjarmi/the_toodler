import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { IList, IListForm } from "../../../../common/interfaces";
import ColorSelector from "../../colorSelector";
import styles from "./styles";

const initialFormState = (list?: IList): IListForm =>
  list
    ? list
    : {
        name: "",
        color: "",
        boardId: -1,
      };

interface Props {
  onSubmit: (board: IListForm) => void;
  onDelete?: () => void;
  list?: IList;
}

const ListForm = ({ onSubmit, onDelete, list }: Props) => {
  const [form, setForm] = useState(initialFormState(list));

  const inputHandler = (name: string, value: string) =>
    setForm({
      ...form,
      [name]: value,
    });

  const handleOnSubmit = () => onSubmit(form);

  return (
    <View>
      <View style={styles.input}>
        <ColorSelector
          selectedColor={form.color}
          onChnage={(color: string) => inputHandler("color", color)}
        />
      </View>
      <TextInput
        style={styles.input}
        label="Board Name"
        value={form.name}
        onChangeText={(value: string) => inputHandler("name", value)}
      />
      <View style={styles.buttonGroup}>
        {list ? (
          <Button mode="contained" buttonColor="red" onPress={() => onDelete()}>
            Delete
          </Button>
        ) : (
          <></>
        )}
        <Button mode="contained" onPress={() => handleOnSubmit()}>
          {list ? "Confirm" : "Create"}
        </Button>
      </View>
    </View>
  );
};

export default ListForm;
