import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#9DFFA7",
  },
});

export default PageLayout;
