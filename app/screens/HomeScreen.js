import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../assets/background.jpg")}
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
          Cette revue contient les sujets redigés par les élèves du TCS1 portant
          sur le domaine de l'écologie. Ceci a été fait sous la supervision de
          notre prof de SVT.
        </Text>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 0.33,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 0.33,
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    color: "white",
    textAlign: "center",
    fontSize: 28,
    fontFamily: "sans-serif-light",
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
    flex: 0.33,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
});
