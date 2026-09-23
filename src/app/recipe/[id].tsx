
import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>      
      <Text  style={{fontSize:30}}>Detail recipe id: {id}</Text>
    </View>
  )
}

export default DetailRecipe