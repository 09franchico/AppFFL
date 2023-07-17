import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { MotiText, MotiView, useAnimationState } from 'moti'
import { useEffect } from "react";


type RootStackParamList = {
    relogio: undefined;
    home: undefined;
};

type props = {
    navigation: BottomTabNavigationProp<RootStackParamList, 'home'>;
};


export const Home = ({ navigation }: props) => {

    const withAnimetedState = useAnimationState({
        w1:{
            width:50
        },
        w2:{
            width:100
        }
    })

    const opacity = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    })

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 3000 })

    }, [])

    const handleRelogio = () => {
        withAnimetedState.transitionTo('w2')

        //navigation.navigate('relogio')

    }

    const handleClickWith = ()=>{
        withAnimetedState.transitionTo('w1')
    }
    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.textBv, animatedStyle]}>Bem vindo, Flavica</Animated.Text>
            <View style={styles.containerCxPrincipal}>

                <MotiView
                    from={{
                        rotate: '100deg',
                        opacity: 0
                    }}
                    animate={{
                        rotate: '0deg',
                        opacity: 1
                    }}
                    transition={{
                        type: 'timing',
                        duration: 2000
                    }}>
                    <TouchableOpacity
                        style={styles.caixaOne}
                        onPress={handleClickWith}>
                        <Text>
                            <Ionicons
                                name="add-circle"
                                size={30}
                                color={'white'} />
                        </Text>
                    </TouchableOpacity>
                </MotiView>
                <MotiView
                    from={{
                        rotate: '100deg',
                        opacity: 0
                    }}
                    animate={{
                        rotate: '0deg',
                        opacity: 1
                    }}
                    transition={{
                        type: 'timing',
                        duration: 2000
                    }}
                >
                    <TouchableOpacity
                        style={styles.caixaOne}
                        onPress={handleRelogio}>
                        <Text>
                            <Ionicons
                                name="time"
                                size={30}
                                color={'white'} />
                        </Text>
                    </TouchableOpacity>
                </MotiView>
            </View>
            <MotiText
                state={withAnimetedState}
                from={{ opacity: 0 }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    type: 'timing',
                    duration: 3000
                }}
                style={styles.text}>.
            </MotiText>
        </View>
    )
}