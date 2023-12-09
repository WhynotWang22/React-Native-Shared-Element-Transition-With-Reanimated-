import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import FakeData from '../Data/FakeData';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { RootStackParamList } from '../navitation/RootNavigator';
type Props ={
  item:  any,
  index : number
}

const HomeScreen = ({navigation} : any) => {
  const renderItem =({ item, index} : Props ) => {        
    const goToDetail = () => {
      navigation.navigate('Detail' , { image: item.img , id: item?.id } as any);
  };
    return (
    <Animated.View entering={FadeInDown.delay(200 * index)}> 
        <Pressable style={styles.container} onPress={goToDetail}>
        <Animated.Image
               sharedTransitionTag={`image-${item?.id}`}
         style={styles.img} source={{uri: item.img}}
          resizeMode='contain'
        />  
      </Pressable>
    </Animated.View>
    )
  }
  return (
   <FlatList
   data={FakeData.image}
   style={styles.layout_header}
   renderItem={renderItem}
   keyExtractor={(item) => item?.id.toString()} // Use id as the key
   />
  )
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  img: {
    width: 200,
    height: 200,
  },
  layout_header: {
    flex: 1,
  },
});
export default HomeScreen
