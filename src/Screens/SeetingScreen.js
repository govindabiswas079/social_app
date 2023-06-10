import { useNavigation } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { View, Text, StatusBar, Pressable, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { posetrImage } from '../assets/image'
import { UserList } from '../Datas'

const SeetingScreen = () => {
  const Navigation = useNavigation()
  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} animated={true} backgroundColor={'#171717'} />
      <View style={{ flex: 1, backgroundColor: '#171717' }}>
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

          <Pressable style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name='more-vertical' color={'#FFFFFF'} size={27} />
          </Pressable>
        </View>
        <FlatList
          ItemSeparatorComponent={() => (<View style={{ height: 20 }} />)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: '#000000', marginTop: 10 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>About</Text>
              <View style={{ paddingTop: 15 }}>
                <Text numberOfLines={3} style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'OpenSans-Regular' }}>
                  Lorem Ipsum text is dummy text that is commonly used as a placeholder for content in the design and publishing industries. Lorem Ipsum text is dummy text that is commonly used as a placeholder for content in the design and publishing industries.
                </Text>
              </View>
              <View style={{ paddingTop: 15, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>Term & Conditions</Text>
                <Text style={{ color: '#2281ac', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>See More</Text>
              </View>
              <View style={{ paddingTop: 15, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>Notification</Text>
                <View style={{ width: 40, height: 20, borderRadius: 50, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <View style={{ width: 20, height: 20, backgroundColor: '#2281ac', borderRadius: 50 }}></View>
                </View>
              </View>
              <View style={{ backgroundColor: '#171717', paddingTop: 20, paddingBottom: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>About</Text>
              </View>
            </View>
          )}
          data={UserList}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }) => {
            return (
              <Fragment>
                <Pressable style={{ paddingHorizontal: 15, }}>
                  <Pressable onPress={() => { Navigation.navigate('ChatScreen') }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={posetrImage} style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={{ paddingLeft: 15 }}>
                      <Text style={{ fontSize: 16, color: '#FFFFFF', fontFamily: 'OpenSans-Bold' }}>
                        {item?.Name}
                      </Text>
                    </View>
                  </Pressable>
                </Pressable>
              </Fragment>
            )
          }}
        />

        <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFFFFF', fontFamily: 'OpenSans-Bold', paddingBottom: 20 }}>Feedback FAQ</Text>

      </View>
    </Fragment>
  )
}

export default SeetingScreen