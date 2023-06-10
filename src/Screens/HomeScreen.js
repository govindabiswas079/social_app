import { View, Text, StatusBar, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Fragment } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FlatList } from 'react-native';

import { UserList } from '../Datas'
import { posetrImage } from '../assets/image'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const Navigation = useNavigation();

    return (
        <Fragment>
            <StatusBar barStyle={'light-content'} animated={true} backgroundColor={'#171717'} />
            <View style={{ flex: 1, backgroundColor: '#171717', }}>
                <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#171717', borderBottomColor: '#020202', borderBottomWidth: 4 }}>
                    <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#FFFFFF", borderRadius: 50, borderStyle: 'solid' }}>
                        <Text style={{ color: '#ffffff' }}>PB</Text>
                    </View>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontFamily: 'OpenSans-SemiBold' }}>Messanger</Text>
                    <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name='notifications-outline' color={'#FFFFFF'} size={26} />
                    </View>
                </View>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (<View style={{ height: 20 }} />)}
                    ListHeaderComponent={() => {
                        return (
                            <Fragment>
                                <View style={{ paddingHorizontal: 15 }}>
                                    <View style={{ backgroundColor: "#50555c", height: 50, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, marginTop: 15, }}>
                                        <Feather name='search' color={'#FFFFFF'} size={26} />
                                        <TextInput style={{flex: 1, paddingHorizontal: 10}} />
                                        <FontAwesome name='microphone' color={'#FFFFFF'} size={26} />
                                    </View>


                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: 10, paddingBottom: 15 }}>
                                        <View style={{ height: 50, width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#ffffff', fontSize: 18, fontFamily: 'OpenSans-Bold' }}>Inbox</Text>
                                        </View>
                                        <View style={{ height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderBottomColor: '#29b6f6', borderBottomWidth: 4, }}>
                                            <Text style={{ color: '#ffffff', fontSize: 18, fontFamily: 'OpenSans-Bold' }}>Community</Text>
                                        </View>
                                    </View>
                                </View>
                            </Fragment>
                        )
                    }}
                    data={UserList}
                    keyExtractor={item => item?.id}
                    renderItem={({ item, index }) => {
                        return (
                            <Fragment>
                                <Pressable style={{ paddingHorizontal: 15, }}>
                                    <Pressable onPress={() => { Navigation.navigate('ChatScreen') }} style={{ flexDirection: 'row', }}>

                                        <View style={{ width: 50, height: 50, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={posetrImage} style={{ width: '100%', height: '100%' }} />
                                        </View>
                                        <View style={{ paddingLeft: 15 }}>
                                            <Text style={{ fontSize: 18, color: '#FFFFFF', fontFamily: 'OpenSans-Bold' }}>
                                                {item?.Name}
                                            </Text>
                                            <View style={{ width: '80%' }}>
                                                <Text numberOfLines={1} style={{ fontSize: 14, color: '#FFFFFF', lineHeight: 30, fontFamily: 'OpenSans-Regular' }}>
                                                    Lorem Ipsum text is dummy text that is commonly used as a placeholder for content in the design and publishing industries.
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexGrow: 1 }} />
                                        <Text style={{ fontSize: 12, color: '#FFFFFF', fontFamily: 'OpenSans-SemiBold' }}>
                                            <Feather name='user' color={'#FFFFFF'} size={18} /> 09/609
                                        </Text>
                                    </Pressable>
                                </Pressable>
                            </Fragment>
                        )
                    }}
                />

            </View>
        </Fragment>
    )
}

export default HomeScreen