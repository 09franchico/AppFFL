import { Text, TextInput, View, FlatList, TouchableOpacity, Platform, Button } from "react-native"
import { styles } from "./styles"
import uuid from 'react-native-uuid';
import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from "../../shared/components";
import RNDateTimePickerAndroid, { Event, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FormatarData } from '../../utils/FormatarData'

type typeData = {
    id: string,
    name: string,
    dataHora: Date
}

export const Relogio = () => {

    const [name, setName] = useState("");
    const [dataHora, setdataHora] = useState(new Date);
    const [data, setData] = useState<typeData[]>([])
    const [showPicker, setShowPicker] = useState(false);
    const { getItem, setItem, removeItem } = useAsyncStorage("@ffl:name");
    const [add, setAdd] = useState(false)


    const handleRelogio = async () => {

        const id = uuid.v4();
        const newData = {
            id,
            name,
            dataHora,
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

    const handleClear = async () => {
        await removeItem();
        setAdd(true)

    }

    const handleDateTimeChange = (event: DateTimePickerEvent, selected: Date | undefined) => {
        if (selected) {
            const currentTime = selected;
            setShowPicker(false)
            setdataHora(currentTime)
        }
    };


    const showTimePicker = () => {
        setShowPicker(true);
    };
    


    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    onChangeText={setName}
                    value={name} />
                {showPicker && (
                    <RNDateTimePickerAndroid 
                        mode="time"
                        display="default"
                        value={dataHora}
                        onChange={handleDateTimeChange}
                    />
                )}
                <TouchableOpacity onPress={showTimePicker} style={styles.inputTime}>
                    <MaterialIcons name="add-alarm" size={40} color='#07b89a' />
                </TouchableOpacity>
            </View>
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
                    <Card data={item} />
                }
            />
        </View>
    )
}