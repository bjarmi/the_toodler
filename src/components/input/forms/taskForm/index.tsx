import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ITask, ITaskForm } from "../../../../common/interfaces";
import styles from "./styles";

const initialFormState = (task?: ITask): ITaskForm =>
  task
    ? task
    : {
        name: "",
        isFinished: false,
        description: "",
        listId: -1,
      };

interface Props {
  onSubmit: (task: ITaskForm) => void;
  onDelete?: () => void;
  task?: ITask;
}

const TaskForm = ({ onSubmit, onDelete, task }: Props) => {
  const [form, setForm] = useState(initialFormState(task));

  const inputHandler = (name: string, value: string) =>
    setForm({
      ...form,
      [name]: value,
    });

  const handleOnSubmit = () => onSubmit(form);

  return (
    <View>
      <TextInput
        style={styles.input}
        label="Board Name"
        value={form.name}
        onChangeText={(value: string) => inputHandler("name", value)}
      />
      <TextInput
        style={styles.input}
        label="Board Name"
        value={form.description}
        onChangeText={(value: string) => inputHandler("description", value)}
      />
      <View style={styles.buttonGroup}>
        {task ? (
          <Button mode="contained" buttonColor="red" onPress={() => onDelete()}>
            Delete
          </Button>
        ) : (
          <></>
        )}
        <Button mode="contained" onPress={() => handleOnSubmit()}>
          {task ? "Confirm" : "Create"}
        </Button>
      </View>
    </View>
  );
};

export default TaskForm;
