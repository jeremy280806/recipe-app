import { Link } from "expo-router";
import { Text, View } from 'react-native';

const AboutScreen = () => {
    return (
        <View>
            <Text>Ini Halaman About</Text>
            <Link style={{fontSize: 20, color: "blue"}} href={"/"}>
            Kembali ke Home
            </Link>
        </View>
    );
}