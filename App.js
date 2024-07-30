import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

export default function App() {
  const [goals, setGoals] = useState(sampleGoals);
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
  };

  const removeGoalHandler = (goalIndex) => {
    setGoals(currentGoals => {
      return currentGoals.filter((_, index) => index !== goalIndex);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ajouter un nouvel objectif ..."
          style={styles.input}
          value={enteredGoal}
          onChangeText={setEnteredGoal}
        />
        <Button title="Ajouter" onPress={addGoalHandler} style={styles.addButton} />
      </View>
      <FlatList
        data={goals}
        renderItem={({ item, index }) => (
          <View style={styles.goalItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => removeGoalHandler(index)}>
              <Text style={styles.removeButton}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: 'cornflowerblue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  goalItem: {
    color: 'white',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'cornflowerblue',
    borderColor: 'cornsilk',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: 'lightgreen',
    backgroundColor: 'cornflowerblue',
    padding: 10,
    color: 'white',
  },
  removeButton: {
    color: 'red',
  },
});
