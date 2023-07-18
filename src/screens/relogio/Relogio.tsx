import { Text, TextInput, View, FlatList, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import uuid from 'react-native-uuid';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from "../../shared/components";

type typeData = {
    id: string,
    name: string
}

export const Relogio = () => {

    const [name, setName] = useState("");
    const [data, setData] = useState<typeData[]>([])
    const { getItem, setItem,removeItem } = useAsyncStorage("@ffl:name");
    const [add, setAdd] = useState(false)

    const handleRelogio = async () => {

        const id = uuid.v4();
        const newData = {
            id,
            name
        }

        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];
        const data = [...previousData, newData];
        await setItem(JSON.stringify(data));
        setName('')
        setAdd(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            let teste = await getItem();
            const dataList = teste ? JSON.parse(teste) : []
            setData(dataList)
            setAdd(false);
        }
        fetchData();
    }, [add])

    const handleClear = async ()=>{
        await removeItem();
        setAdd(true)

    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={setName}
                value={name} />
            <TouchableOpacity
                style={styles.buttonSalvar}
                onPress={handleRelogio}>
                <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>
                <View style={styles.clear}>
                    <MaterialIcons onPress={handleClear} name="cleaning-services" size={30} color='#b1b1b1' />
                </View>
                <FlatList
                    style={styles.BoxName}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Card data={item}/>
                    }
                />
        </View>
    )
}