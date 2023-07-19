import { Text, View } from "react-native"
import { styles } from "./style"
import { MaterialIcons } from '@expo/vector-icons';


type Tprops = {
    id: string,
    name: string,
    dataHora:Date
}
type Data = {
    data: Tprops
}
export const Card = ({ data }: Data) => {

    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <Text style={styles.textDesc}>
                    {data.name}
                </Text>
                <View style={styles.containerTime}>
                    <Text >
                        09-02-2023
                    </Text>
                    <Text>
                        12:45:12 h
                    </Text>
                    <Text >
                        00:00:25 s
                    </Text>
                    <MaterialIcons name="timer" size={22} color='#00cba9' />
                </View>
            </View>
        </View>
    )
}