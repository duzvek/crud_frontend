import { useState } from "react";
import { View, Button, Text, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';



const Inputs = ({ type, placeholder, iconColor, textState, setState }) => {

    const [eye, setEye] = useState(false)

    return (
        <View style={{ height: 53, backgroundColor: '#FFFFFF', width: '100%', borderRadius: 5, overflow: 'hidden', flexDirection: 'row' }}>
            <View style={{ width: 46, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#CACACA' }}>
                {(() => {
                    switch (type) {
                        case "user": return <FontAwesome5 name="user-alt" size={22} color={iconColor} />;
                        case "pass": return <FontAwesome5 name="lock" size={22} color={iconColor} />;
                        default: return null
                    }
                })()}
            </View>
            <TextInput style={{ fontSize: 15, flex: 1, paddingRight: type === 'pass' ? 0 : 10, paddingLeft: 10 }} value={textState} placeholder={placeholder} placeholderTextColor={'#909090'} secureTextEntry={ eye ? false : true } onChange={setState}/>
            {(() => {
                switch (type) {
                    case "user": return null;
                    case "pass": return (
                        <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setEye((prev) => {
                                    if (prev) {
                                        return false
                                    }
                                    else {
                                        return true
                                    }
                                })
                            }}>
                                { eye ? <Ionicons name="eye-outline" size={22} color="#909090" /> : <Ionicons name="eye-off-outline" size={22} color="#909090" /> }
                            </TouchableWithoutFeedback>
                        </View>
                    );
                    default: return null
                }
            })()}
        </View>
    )
}


export default Inputs