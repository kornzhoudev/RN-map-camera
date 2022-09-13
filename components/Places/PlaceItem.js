import React from 'react';
import { Image, View, Text, Pressable, StyleSheet } from 'react-native';

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.Address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  
});
