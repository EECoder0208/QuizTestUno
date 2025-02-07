import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["New York", "London", "Paris", "Berlin"],
      correctAnswerIndex: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswerIndex: 1
    }
  ];

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>You scored {score} out of {questions.length}</Text>
        <Button title="Restart Quiz" onPress={resetQuiz} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity key={index} style={styles.answerButton} onPress={() => handleAnswer(index)}>
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  answerButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5
  },
  answerText: {
    color: 'white',
    fontSize: 16
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20
  }
});

export default App;