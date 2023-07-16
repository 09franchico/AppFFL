import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import Ionicons from '@expo/vector-icons/Ionicons';

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerCxPrincipal}>
                <View>
                    <TouchableOpacity
                        style={styles.caixaOne}
                        onPress={() => alert('ola mundo')}>
                        <Text>
                            <Ionicons
                                name="add-circle"
                                size={30}
                                color={'white'} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity
                        style={styles.caixaOne}
                        onPress={() => alert('ola mundo')}>
                        <Text>
                            <Ionicons
                                name="time"
                                size={30}
                                color={'white'} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.text}>.</Text>
        </View>
    )
}