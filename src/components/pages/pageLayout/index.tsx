import { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import { FAB } from "react-native-paper";
import styles from "./styles";

interface Props {
  action: () => void;
  children: ReactNode;
}

const PageLayout = ({ action, children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <FAB style={styles.fab} icon="plus" onPress={action} />
    </SafeAreaView>
  );
};

export default PageLayout;
