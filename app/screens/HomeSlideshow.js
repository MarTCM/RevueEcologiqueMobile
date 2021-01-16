import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slideshow from "react-native-slideshow";
import articleApi from "../api/articles";

class HomeSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sortedArticles: [],
      slideshowArticles: [],
      position: 1,
      interval: null,
    };
  }

  componentDidMount = async () => {
    await articleApi.getArticles().then((articles) => {
      this.setState({
        articles: articles.data.data,
      });
    });

    let sortedArticles = this.state.articles.sort(
      (a, b) => Date.parse(new Date(a)) - Date.parse(new Date(b))
    );

    this.setState({
      sortedArticles: sortedArticles.reverse(),
    });

    const slideArts = [
      this.state.sortedArticles.map((item, index) => ({
        url: item.imgLink,
        title: item.titre,
        caption: "Par " + item.auteur,
      })),
    ];

    this.setState({
      slideshowArticles: slideArts[0],
    });
  };

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.slideshowArticles.length
              ? 0
              : this.state.position + 1,
        });
      }, 3000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <Slideshow
        dataSource={this.state.slideshowArticles}
        position={this.state.position}
        onPositionChanged={(position) => this.setState({ position })}
      />
    );
  }
}

export default HomeSlideshow;
