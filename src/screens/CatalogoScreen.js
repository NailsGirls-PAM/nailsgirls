import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const nailsData = [
  { id: '1', image: require('../img/image 4.png'), liked: false, title: 'Unha Decorada 1' }, 
  { id: '2', image: require('../img/image 3.png'), liked: false, title: 'Unha Decorada 2' },
  { id: '3', image: require('../img/image 1.png'), liked: false, title: 'Unha Decorada 3' },
];

const CatalogoScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.likeButton}>
        <Icon name={item.liked ? 'heart' : 'heart-outline'} size={24} color="#393357" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../img/item4.png')}  
          style={styles.bannerImage}
          resizeMode="cover" 
        />

        <FlatList
          data={nailsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    marginBottom: 10,
  },
  listContent: {
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 97,
    height: 97,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#393357',
  },
  likeButton: {
    padding: 10,
  },
});

export default CatalogoScreen;
