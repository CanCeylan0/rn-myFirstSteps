import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';


export default Iletisim = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        marginBottom: 15,
        fontSize: 22
      }}>
        İletişim Screen
      </Text>
      <TouchableOpacity style={{
        backgroundColor: "#008b8b",
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <Text style={{
          color: "#fff",
          fontSize: 18
        }}>
          Home Sayfasına git
        </Text>
      </TouchableOpacity>
    </View>
  );
}