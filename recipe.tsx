import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const RecipeScreen = () => {
  return (
    <View>
        <Text>Ini Halaman Recipe</Text>
        <Link style={{fontSize: 20, color: "blue"}} href={"/"}>
          Kembali ke Home
        </Link>
    </View>
  )
};

