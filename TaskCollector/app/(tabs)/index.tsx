import { Image, StyleSheet, Modal, TextInput } from "react-native";
import { useState } from "react";
import useQueryTasks from "@/hooks/useQueryTasks";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import useMutationEditTask from "@/hooks/useMutationEditTask";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TasksResponse } from "@/hooks/useQueryTasks";
import { View } from "react-native";
import useMutationAddTask from "@/hooks/useMutationAddTask";
import useMutationDeleteTask from "@/hooks/useMutationDeleteTask";

type ModalProps = {
  isVisible: boolean;
  close: () => void;
};

const ModalAddTask = ({ close, isVisible }: ModalProps) => {
  const { mutateAsync } = useMutationAddTask();
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    mutateAsync({ task });
    close();
    setTask("");
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ThemedText type="defaultSemiBold" style={{ fontSize: 24 }}>
            Add Task
          </ThemedText>
          <View style={{ borderBottomWidth: 1 }}>
            <TextInput
              style={{ fontSize: 20 }}
              value={task}
              onChangeText={(text) => setTask(text)}
              autoCorrect={false}
            ></TextInput>
          </View>
          <ThemedView style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              style={[styles.button, styles.buttonSave]}
              onPress={handleAddTask}
            >
              <ThemedText type="defaultSemiBold" style={{ color: "white" }}>
                Save
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={close}
            >
              <ThemedText type="defaultSemiBold" style={{ color: "white" }}>
                Cancel
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </View>
      </View>
    </Modal>
  );
};

type ModalEditProps = {
  isVisible: boolean;
  close: () => void;
} & TasksResponse;

const ModalEditTask = ({ close, isVisible, id, task }: ModalEditProps) => {
  const { mutateAsync: editTask } = useMutationEditTask();
  const [editedTask, setEditTask] = useState(task);

  const handleEditTask = () => {
    editTask({ id, task: editedTask });
    close();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ThemedText type="defaultSemiBold" style={{ fontSize: 24 }}>
            Edit Task
          </ThemedText>
          <View style={{ borderBottomWidth: 1 }}>
            <TextInput
              style={{ fontSize: 20 }}
              value={editedTask}
              onChangeText={(text) => setEditTask(text)}
              autoCorrect={false}
            ></TextInput>
          </View>
          <ThemedView style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              style={[styles.button, styles.buttonSave]}
              onPress={handleEditTask}
            >
              <ThemedText type="defaultSemiBold" style={{ color: "white" }}>
                Save
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={close}
            >
              <ThemedText type="defaultSemiBold" style={{ color: "white" }}>
                Cancel
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </View>
      </View>
    </Modal>
  );
};

type TaskItemViewProps = {
  handleToggleModalEdit: () => void;
} & TasksResponse;

const TaskItemView = ({
  handleToggleModalEdit,
  id,
  task,
}: TaskItemViewProps) => {
  const { mutateAsync } = useMutationDeleteTask();
  const handleDeleteTask = () => {
    mutateAsync({ id });
  };

  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ThemedText type="subtitle">{`• ${task}`}</ThemedText>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <TouchableOpacity onPress={handleToggleModalEdit}>
          <ThemedText type="default">📝</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteTask}>
          <ThemedText type="default">❌</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default function HomeScreen() {
  const { data, error } = useQueryTasks();
  console.log("data :", data);
  console.log("error :", error);
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TasksResponse>({
    id: 0,
    task: "",
  });

  const handleToggleModalEdit = (item: TasksResponse) => {
    setSelectedTask(item);
    setIsModalEditVisible((prev) => !prev);
  };
  const handleToggleModalAdd = () => setIsModalAddVisible((prev) => !prev);

  return (
    <>
      <View style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">My Saved Tasks</ThemedText>
          <TouchableOpacity onPress={handleToggleModalAdd}>
            <ThemedText type="title">➕</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <FlatList
          data={data?.payload}
          renderItem={({ item }) => {
            return (
              <TaskItemView
                {...item}
                handleToggleModalEdit={() => handleToggleModalEdit(item)}
              />
            );
          }}
        />
      </View>

      <ModalEditTask
        close={() => setIsModalEditVisible(false)}
        isVisible={isModalEditVisible}
        {...selectedTask}
      />
      <ModalAddTask
        close={handleToggleModalAdd}
        isVisible={isModalAddVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    // backgroundColor: "#b03232",
    paddingTop: 50,
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    gap: 15,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 100,
    elevation: 2,
  },
  buttonSave: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "red",
  },
});
