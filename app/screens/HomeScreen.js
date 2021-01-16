import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import HomeSlideshow from "../components/HomeSlideshow";

function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={{ uri: "https://i.imgur.com/BSKSfOh.png" }}
          style={styles.background}
        >
          <View style={styles.container}>
            <Text style={styles.bigText}>
              Vous consultez maintenant la revue écologique!
            </Text>
            <Text style={styles.smallText}>
              Réalisée par les élèves du TCS1 du GS AlBayane
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            Cette revue contient les sujets redigés par les élèves du TCS1
            portant sur le domaine de l'écologie. Ceci a été fait sous la
            supervision de notre prof de SVT.
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 25,
          paddingTop: 10,
          paddingLeft: 10,
          fontFamily: "serif",
        }}
      >
        Articles Recents
      </Text>
      <HomeSlideshow />
      <View style={styles.paragraphContainer2}>
        <Text
          style={{
            textAlign: "right",
            fontSize: 25,
            fontFamily: "sans-serif-bold",
            paddingBottom: 5,
          }}
        >
          À propos
        </Text>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 0.7,
            width: 300,
          }}
        />
        <Text style={styles.paragraph2}>
          Ce site est une magazine écologique rédigée primairement par les
          élèves du TCS1 du GS AlBayane. GS AlBayane est une école privée situé
          à l'Av Tarik Ibn Ziad Hay Al Moustakbal Al Badil, comme le montre la
          carte ci-dessous. Le créateur de ce site: Marwane ElBaraka, est lui
          aussi un élève dans le GS AlBayane. Le professeur superviseur de cette
          revue est: M. Hassan Ouchtaqalla.
        </Text>
      </View>
      <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 33.9038237389782,
          longitude: -6.915270661380776,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 250,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    color: "white",
    textAlign: "center",
    fontSize: 28,
    fontFamily: "sans-serif-light",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  smallText: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
    top: 10,
    fontFamily: "sans-serif-light",
  },
  mainContainer: {
    flex: 1,
  },
  paragraph: {
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
  paragraph2: {
    textAlign: "center",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 17,
    fontFamily: "sans-serif-light",
  },
  paragraphContainer: {
    backgroundColor: "#d4d4d4",
    height: 175,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,

    marginBottom: 45,
  },
  paragraphContainer2: {
    backgroundColor: "#d4d4d4",
    height: 300,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,

    marginBottom: 30,
  },
  map: {
    margin: 20,
    height: 300,
  },
});
