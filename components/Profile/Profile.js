import { useEffect, useState } from "react";
import { View, Button, Text, StatusBar, TextInput, ToastAndroid, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Inputs from "../Inputs/Inputs";
import { BTN } from '../Global'
import axios from "axios";

const Profile = ({ navigation, route }) => {

    const [mdl, setMdl] = useState(false)
    const [uname, setUname] = useState('')

    useEffect(() => {
        axios.get('https://80ac-49-149-68-98.ngrok-free.app/' + `api/2/user/${route.params.id}`)
            .then((response) => {
                setUname(response.data.username)
            })
            .catch(() => {
                ToastAndroid.show("Server is not available!", ToastAndroid.SHORT)
            })
    }, [])

    const del = () => {
        axios.delete('https://80ac-49-149-68-98.ngrok-free.app/' + 'api/2/delete', {
            data: { id: route.params.id }
        })
            .then((response) => {
                ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
                navigation.navigate('Login')
            })
    }

    return (
        <View style={{ backgroundColor: '#242B2E', flex: 1, alignItems: "center", paddingHorizontal: '9%' }}>
            <StatusBar hidden={false} />

            <Modal animationType='fade' transparent={true} onRequestClose={() => setMdl(false)} visible={mdl}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }}>
                    <View style={{ backgroundColor: '#2A3134', borderTopLeftRadius: 10, borderTopRightRadius: 10, bottom: 0, right: 0, left: 0, position: 'absolute' }}>
                        <View style={{ alignItems: 'center', height: 57, justifyContent: 'center', borderBottomColor: '#414C51', borderBottomWidth: 1, marginBottom: 10 }}>
                            <Text style={{ color: '#CB7070', fontSize: 16, fontWeight: 600 }}>Do you want to delete your profile?</Text>
                        </View>
                        <TouchableOpacity style={{ height: 51, alignItems: 'center', justifyContent: 'center' }} onPress={() => { setMdl(false); del() }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 51, alignItems: 'center', justifyContent: 'center' }} onPress={() => setMdl(false)}>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>No</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>


            <View style={{ marginBottom: 80 }} />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Ionicons name="exit" size={35} color="#87949A" style={{ marginBottom: 10 }} />
            </TouchableOpacity>
            <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 700 }}>Your Profile</Text>
            <Text style={{ color: '#009BDE', fontSize: 23 }}>Hi, {uname}</Text>
            <View style={{ marginBottom: 60, height: 1, backgroundColor: '#414C51', width: '100%', marginTop: 20 }} />
            <View style={{ width: '100%', marginBottom: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 700 }}>Actions</Text>
            </View>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity style={{ height: 45, backgroundColor: '#485054', elevation: 5, borderRadius: 5, width: '48%', justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 45, backgroundColor: '#BE6F6F', elevation: 5, borderRadius: 5, width: '48%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setMdl(true)}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Delete</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}


export default Profile