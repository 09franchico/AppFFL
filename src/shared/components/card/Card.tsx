import { Text, View } from "react-native"
import { styles } from "./style"

type Tprops = {
    id:string,
    name:string
}
type Data = {
    data:Tprops
}
export const Card = ({data}:Data)=>{
    return(
        <View style={styles.container}>
            <Text>
                {data.name}
            </Text>
        </View>
    )
}