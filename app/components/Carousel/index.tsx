import React, {useRef, useState} from 'react';
import {View, FlatList, Image, StyleSheet, Dimensions} from 'react-native';
import {Color} from '../utils/GlobalStyles';

const images = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
  },
  // Add more images here
];

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const onViewRef = useRef(({changed}: any) => {
    if (changed && changed.length > 0) {
      setCurrentIndex(changed[0].index);
    }
  });

  const viewabilityConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const Pagination = () => (
    <View style={styles.pagination}>
      {images.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === currentIndex ? styles.paginationDotActive : null,
          ]}
        />
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item.uri}} style={styles.image} />
        )}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewabilityConfigRef.current}
      />
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight / 2.5,
    resizeMode: 'cover',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: Color.primaryBlue,
  },
});

export default Carousel;
