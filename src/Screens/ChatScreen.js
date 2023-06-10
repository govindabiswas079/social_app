import { useNavigation } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { View, Text, StatusBar, Pressable, Image, FlatList, TextInput, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons' // send
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome' // smile-o  
import Entypo from 'react-native-vector-icons/Entypo' // attachment
import { posetrImage, backdropImage } from '../assets/image'

const ChatScreen = () => {
  const Navigation = useNavigation()
  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} animated={true} backgroundColor={'#171717'} />
      <ImageBackground source={backdropImage} style={{ flex: 1, justifyContent: 'center' }} resizeMode="cover">
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#171717', borderBottomColor: '#020202', borderBottomWidth: 4, paddingTop: 10, paddingBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Pressable onPress={() => Navigation.goBack()} style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='chevron-back-outline' color={'#2281ac'} size={27} />
            </Pressable>

            <Pressable onPress={() => Navigation.navigate('SeetingScreen')} style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ width: 50, height: 50, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={posetrImage} style={{ width: '100%', height: '100%' }} />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ color: '#FFFFFF', fontFamily: 'OpenSans-Bold' }}>Prem Biswas</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Feather name='user' color={'#FFFFFF'} size={18} />
                  <Text style={{ fontSize: 12, color: '#FFFFFF', fontFamily: 'OpenSans-SemiBold' }}>
                    09/609
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>

          <Pressable onPress={() => Navigation.goBack()} style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name='more-vertical' color={'#FFFFFF'} size={27} />
          </Pressable>
        </View>

        <FlatList
          data={[]}
        />


        <View style={{ backgroundColor: "#50555c", height: 60, borderTopLeftRadius: 5, borderTopRightRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, }}>
          <View style={{ width: 30, height: 30, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name='smile-o' color={'#000000'} size={26} />
          </View>
          <TextInput placeholder='Message' placeholderTextColor={'#FFFFFF'} style={{ flex: 1, paddingHorizontal: 10, color: '#FFFFFF', fontSize: 16, fontFamily: 'OpenSans-SemiBold' }} />
          <View style={{ width: 30, height: 30, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name='attachment' color={'#2281ac'} size={26} />
          </View>
          <View style={{ width: 30, height: 30, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name='microphone' color={'#FFFFFF'} size={26} />
          </View>
        </View>
      </ImageBackground>
    </Fragment >
  )
}

export default ChatScreen