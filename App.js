/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 60,
        }}>
        <Text>image</Text>
      </View>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            backgroundColor: 'grey',
            borderRadius: 50,
            padding: 8,
          }}>
          PRO
        </Text>
        <Text style={{fontWeight: '700', fontSize: 18, textAlign: 'center'}}>
          NEELESH CHOWDARY
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
          UI/UX DESIGNER{' '}
        </Text>
        <View>
          <Text style={{alignItems: 'center'}}>
            LAREM ipsum dolor sit amet consecuyter hgvnmhv bvhbjmj ghfyjbn
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>image</Text>
          <Text>image</Text>
          <Text>image</Text>
          <Text>image</Text>
          <Text>image</Text>
          <Text>image</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 10,
              padding: 8,
            }}>
            message
          </Text>
          <Text>
            style=
            {{
              alignSelf: 'center',
              backgroundColor: 'blue',
              borderRadius: 50,
              padding: 8,
            }}
            >connect
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
