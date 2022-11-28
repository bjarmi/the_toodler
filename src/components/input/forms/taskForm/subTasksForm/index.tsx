import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ISubTask } from "../../../../../common/interfaces";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  subTasks: ISubTask[];
  onChange: (idx: number, name: string) => void;
  onRemove: (idx: number) => void;
}

const SubTasksForm = ({ subTasks, onChange, onRemove }: Props) => {
  return (
    <ScrollView>
      {subTasks.map((subTask: ISubTask, idx: number) => (
        <View key={idx} style={styles.subTask}>
          <TextInput
            label="Sub Task"
            value={subTask.name}
            onChangeText={(value: string) => onChange(idx, value)}
          />

          <Button
            mode="contained"
            buttonColor="red"
            compact
            onPress={() => onRemove(idx)}
          >
            <FontAwesomeIcon size={20} icon={faTrash} />
          </Button>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subTask: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SubTasksForm;
