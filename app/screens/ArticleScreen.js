import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { Base64 } from "../utils/base64";

class ArticleScreen extends Component {
  render() {
    var paragraph = this.props.route.params.item.paragraphe[0];
    paragraph = paragraph.replace(/\s/g, "");
    paragraph = Base64.atob(paragraph);
    return (
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=0.6"></head>${paragraph}</html>`,
        }}
      />
    );
  }
}

export default ArticleScreen;
