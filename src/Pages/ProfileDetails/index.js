import React, {
  useEffect,
  useState
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView
} from 'react-native';


export default ProfileDetails = ({ navigation, route }) => {
  console.log(navigation)
  const [veri, setveri] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetch(`http://nibgat.space:6868/member?id=${route.params.id}`, {
      method: "GET"
    }).then((res) => {
      return res.json()
    })
      .then((res) => {
        setveri(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, [refreshing]);


  return (
    <SafeAreaView style = {{
      flex: 1
    }}>
      <ScrollView
        contentContainerStyle={{ flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

        <View style={styles.container}>

          <Image
            style={styles.image}
            source={{
              uri: veri.profilePhotoURL
            }} />

          <View style={styles.textContainer}>

            <Text style={{
              fontSize: 32
            }}>{veri.fullName} </Text>
            <Text
              style={{
                fontSize: 22,
                marginBottom: 10
              }}
            >Yaş: {veri.age}</Text>
            <Text>Oluşturuldu: {veri.createdAt}</Text>

          </View>

        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('Iletisim')
          }}
        >
          <Text style={{
            color: "#fff",
            fontSize: 18
          }}>
            İletişim Sayfasına git
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    borderRadius: 50
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    flexDirection: "column",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 30
  },
  button: {
    backgroundColor: "#8470ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  }
});