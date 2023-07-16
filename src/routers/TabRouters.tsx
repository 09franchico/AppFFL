import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Relogio } from '../screens';
import Ionicons from '@expo/vector-icons/Ionicons';


const { Screen, Navigator } = createBottomTabNavigator();

export const TabRouters = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;

          if (route.name === 'home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'relogio') {
            iconName = focused ? 'time' : 'time';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#eb59eb',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
          headerTintColor:'#ffffff',
          headerStyle:{
            backgroundColor:'#eb59eb'
          }
      })}>
      <Screen
        name='home'
        component={Home}
        options={{
          title:'Home'
        }}
      />
      <Screen
        name='relogio'
        component={Relogio}
        options={{
          title:'Relogio'
        }}
      />
    </Navigator>
  )
}