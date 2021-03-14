import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

const ExampleOne: React.FC = () => {
    const [value] = useState(new Animated.ValueXY({
    x: 0,
    y: 0,
  }));

  const moveBall = useCallback(() => {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 500,
      useNativeDriver: false
    }).start()
  },[])

  const moveBallBack = useCallback(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false
    }).start()
  },[])

  return (
    <View style={styles.container}>
      <Animated.View style={value.getLayout()}> 
        <View style={styles.ball} />
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={moveBall}>
        <Text>Move the ball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack} onPress={moveBallBack}>
        <Text>Move back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
    borderRadius: 50
  },
  button: {
    backgroundColor: 'tomato',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    marginBottom: 40
  },
  buttonBack: {
    backgroundColor: 'tomato',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    marginBottom: 100
  }
});

export default ExampleOne;
