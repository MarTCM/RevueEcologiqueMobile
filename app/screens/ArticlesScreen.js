import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import articleApi from "../api/articles";

class ArticlesScreen extends Component {
  state = {
    articles: [],
    isLoading: false,
  };
  alertItemName = (item) => {
    alert(item.titre);
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await articleApi.getArticles().then((articles) => {
      this.setState({
        articles: articles.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    return (
      <View style={{ top: 20 }}>
        <Text style={{ fontSize: 21, padding: 10, fontFamily: "serif" }}>
          Affichage de {this.state.articles.length} articles.
        </Text>
        <View>
          {this.state.articles.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() =>
                this.props.navigation.navigate("Article", { item: item })
              }
            >
              <Text style={styles.text}>{item.titre}</Text>
              <Text
                style={{
                  alignSelf: "flex-end",
                  fontSize: 13,
                  fontFamily: "sans-serif-light",
                }}
              >
                Par {item.auteur}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
export default ArticlesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 30,
    margin: 5,
    marginTop: 3,
    backgroundColor: "white",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  text: {
    fontFamily: "sans-serif-light",
    color: "dodgerblue",
    fontSize: 20,
  },
});
