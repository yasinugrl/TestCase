import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

interface SpinnerProps {
    size?: string
    color?: string
}

const Spinner = (props: SpinnerProps) => {
  return (
        <ActivityIndicator color={props.color ||'blue'} size={props.size || 'large'} />
  );
};

export {Spinner};

const styles = StyleSheet.create({
  container: {}
});
