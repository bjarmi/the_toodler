import { Card, Title } from "react-native-paper";
import { IList, ITask } from "../../../common/interfaces";
import styles from "./styles";
import { data } from "../../../redux/dataStub";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

interface Props {
  task: ITask;
}

const TaskCard = ({ task }: Props) => {
  const [isChecked, setIsChecked] = useState(task.isFinished);

  const list: IList = data.lists.filter((list) => list.id === task.listId)[0];

  return (
    <Card elevation={2} style={{ ...styles.card, backgroundColor: list.color }}>
      <View style={styles.content}>
        <Title>{list.name}</Title>
        <RadioButton
          value="first"
          status={isChecked ? "checked" : "unchecked"}
          onPress={() => setIsChecked(!isChecked)}
        />
      </View>
    </Card>
  );
};

export default TaskCard;
