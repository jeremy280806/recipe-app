import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>List Recipe</Text>
      
      <Link  style={{ fontSize: 20, color: 'blue' }} href="/about">
        Ke About
      </Link>
      <Link  style={{ fontSize: 20, color: 'blue' }} href="/recipe">
        Ke Recipe
      </Link>

      <Text style={{fontSize: 30, fontWeight: "bold"}}>List Recipe</Text>
      <Link  style={{ fontSize: 20, color: 'blue' }} href="/recipe/1">
        Ke Recipe 1
      </Link>
      <Link  style={{ fontSize: 20, color: 'blue' }} href="/recipe/22">
        Ke Recipe 22
      </Link>
      <Link  style={{ fontSize: 20, color: 'blue' }} href="/recipe/155">
        Ke Recipe 155
      </Link>
      

     
   </View>
  );
};