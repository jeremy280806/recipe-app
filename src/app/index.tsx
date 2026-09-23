import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>Hello world</Text>
      <Link style={{fontSize: 20, color: "blue"}} href={"/about"}>
        Ke about
      </Link>
      <Link style={{fontSize: 16, color: "blue"}} href={"/recipe"}>
        Ke recipe
      </Link>

      <Text style={{fontSize: 30, fontWeight: "bold"}}>
        List Recipe 
      </Text>
      <Link style={{fontSize: 20, color: "blue"}} href={"/recipe/1"}>
        Recipe 1
      </Link>
      <Link style={{fontSize: 20, color: "blue"}} href={"/recipe/22"}>
        Recipe 22
      </Link>
      <Link style={{fontSize: 20, color: "blue"}} href={"/recipe/155"}>
        Recipe 155
      </Link>
    </View>
  );
}

