import React, { Component } from "react";
//import { WebView } from "react-native-webview";
import AutoHeightWebView from "react-native-autoheight-webview";
import { Dimensions } from "react-native";
import { Base64 } from "../utils/base64";

class ArticleScreen extends Component {
  render() {
    var paragraph = this.props.route.params.item.paragraphe[0];

    return (
      <AutoHeightWebView
        style={{ width: Dimensions.get("window").width - 15, marginTop: 35 }}
        customStyle={`
      * {
        font-family: 'serif';
      }
      p {
        font-size: 16px;
        margin-left: 10;
      }
      img {
        width: 100%; 
        object-fit: fill;
      }
      strong {
        font-size: 10px;
      }
    `}
        //onSizeUpdated={(size) => console.log(size.height)}
        files={[
          {
            href: "cssfileaddress",
            type: "text/css",
            rel: "stylesheet",
          },
        ]}
        source={{
          html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=0.6"></head>${paragraph}</html>`,
        }}
        scalesPageToFit={true}
        viewportContent={"width=device-width, user-scalable=no"}
        /*
    other react-native-webview props
    */
      />
    );
  }
}

export default ArticleScreen;
