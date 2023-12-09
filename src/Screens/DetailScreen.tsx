import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navitation/RootNavigator';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import Animated from 'react-native-reanimated';
import LayoutHeader from './Header';
type DetailScreenRouterProps = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = ({route} : any) => {
  const item = route?.params?.image;
  const id = route?.params?.id
  
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <LayoutHeader/>
     <View>
     <Animated.Image 
       source={{uri: item}} 
       resizeMode='cover'
       sharedTransitionTag={`image-${id}`}
       style={{width: width, height: width}}/>
     </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default DetailScreen
