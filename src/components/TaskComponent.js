import React from "react";
import { View, Text } from "react-native";
import { useQuery, gql } from "@apollo/client";

const GET_TASKS = gql`
  query GetTasks {
    getTasks {
      id
      desc
      checked
    }
  }
`;

const TasksComponent = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.getTasks.map((task) => (
        <Text key={task.id}>{task.desc}</Text>
      ))}
    </View>
  );
};

export default TasksComponent;
