import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, PanResponder } from 'react-native';

const ExampleTwo: React.FC = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },
        onPanResponderMove: Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ]
        ),
        onPanResponderRelease: () => {
          pan.flattenOffset();
        }
      })
    ).current;

  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }} > 
        <View style={styles.ball} />
      </Animated.View>
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
  }
});

export default ExampleTwo;
