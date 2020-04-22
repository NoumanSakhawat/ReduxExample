import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from "../redux/store";
// screen's Import Start
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";

// screen's Import End

const Stack = createStackNavigator();
const initialRouteName = "Login";

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={initialRouteName}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Dashboard" component={Dashboard} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}//end of CLASSS
