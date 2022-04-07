import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, bottom: 15, backgroundColor: 'white' }}>
      <Text style={{textAlign: 'center', top: 66, fontSize:23, fontWeight:'bold'}}>5 книжных новинок октября</Text>
    </View>
    <View style={{ flex: 2, backgroundColor: '#C0BEC4' }}>
      <Text style={{textAlign: 'center', top: 66, fontSize:23}}>"Кадиш.com" Натан Ингаланедер.{"\n"} Издательство "Книжники"</Text>
    </View>
    <View style={{ flex: 6, backgroundColor: '#9C9AA2' }}>
    <Text style={{textAlign: 'center', top: 66, fontSize:18}}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и дурналистское расследование о создании "Моссада". В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});