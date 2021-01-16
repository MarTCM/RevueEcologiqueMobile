import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomeSlideshow from "./HomeSlideshow";

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
      <HomeSlideshow />
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
});
