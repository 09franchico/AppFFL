import { NavigationContainer } from '@react-navigation/native';
import { TabRouters } from './TabRouters';


export const Routes = ()=>{
    return(
        <NavigationContainer>
            <TabRouters/>
        </NavigationContainer>
    )
}