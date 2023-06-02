import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export const BTN = ({ title, func }) => {
    return (
        <TouchableOpacity style={{ height: 53, backgroundColor: '#009BDE', width: '100%', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={func}>
            <Text style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>{title}</Text>
        </TouchableOpacity>
    )
}
