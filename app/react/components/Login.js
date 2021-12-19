import React  from 'react';
import {Button} from 'react-native'
import Animated from "react-native-reanimated";
import View from "module:react-native-reanimated.Animated.View";
import {TextInput} from "react-native-gesture-handler";

function Login (){
    return (
        <TextInput
            placeholder="Username"
        />
        <Button>
            title="Submit"
        </Button>
        )

}

export default Login;
