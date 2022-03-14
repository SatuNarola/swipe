import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
//import { Component } from 'react/cjs/react.production.min';
//import Ball from './src/Ball';
import Deck from './src/Deck';
import { Card, Button, Text } from 'react-native-elements';


const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://lh4.googleusercontent.com/VbXnIcQxFAE8a0iWoWH5zoAlH-1NH3wvPvNVWf__yGbAHfk6kjEJJUwAQZy31Qw3-MqIwklTc9o98yjY5ZFkzvTDGLJ9z6jmCUtmTLo9jJ67xyZ4oObPd9qXkYIeqyZ-lW15Kfeq' },
  { id: 2, text: 'Card #2', uri: 'https://lh6.googleusercontent.com/tAbGfrS2VywycE21pmm6a81M9_WcFJdgq4a4KTKzrin5yvXtzvgTZ7dgHxSFCm18NLh2Ma2kH5Ok7jrnCb45XKWcUJ5wLFMkXbVQoyhhmGPtrdiZEl2_1ln2PLx7p0aP0TG-L6jE' },
  { id: 3, text: 'Card #3', uri: 'https://lh4.googleusercontent.com/JzlLIldQ0IfdiBIz24U51jSYvwRzBQUDwtrAHnoFW99jYoS9faHgrkpy3d8-E69Pt6onEOhBpc68qD9hL4_ePXJi8M_XWAITghqHrng-W917c8uADXs8Snkqd2EkNSuisujobYWW' },
  { id: 4, text: 'Card #4', uri: 'https://lh4.googleusercontent.com/-GhHHP6-IBgpjj99XIgT78TO-xe4aUf0jV_sQo60gQgJncUUA6m7yHQzJgBXnWSUYzMz_JnskcgSQwATrHh-_mGiCpw85pHYV6PBcxgdcQOiyQW2drTwoQBPffWMM7X6_lke24T9' },
  { id: 5, text: 'Card #5', uri: 'https://lh6.googleusercontent.com/ZhrwTNpqal9WX04Agj_bksu6tsIMoCHWg52JJOs9Z_z9xnn19SZawS6heaRKsyIugPgrZJ2t8f0toc_iL5MbG5pJuU7hz0MZeTL1zlhNq9uN0k1S4z8jWPon98oHSeLDGnPtZMGy' },
  { id: 6, text: 'Card #6', uri: 'https://lh5.googleusercontent.com/FipGJXAaQ_caMXnpzRSvuTc7EzslwOaHlAJvS9NxQsuBD9H8CQg_5LE8EU_w8f3EGFbo6_-msc4TOBMgdx8X9REJvDEIaS5vuVbJuq753lUmkP7LmFWZnxbZYjkmWNetxeWUzuZ3' },
  { id: 7, text: 'Card #7', uri: 'https://lh4.googleusercontent.com/OMcX9bDkNdsBd1lBz315QF3048QvZ4clVsL2o8VSEg4JpzMtmdMvhfzrTPEPDEMwmUz8hKarri6riRmn6FCHrdiWWNVJL17Id_K8TJ-Uja7BnKZ2O5gAxt-sdQcQnx8WAF0XuqWc' },
  { id: 8, text: 'Card #8', uri: 'https://lh6.googleusercontent.com/5cJ_agnWPM_iI_wd7GtlEiParD7w9qK3qRtmKwb2ULjdZTOIthyS8A3ncQ4oBPR4iPwGBe49LPjp34AW0eGhGz8ejtsVAOmR4QtfGABapgNcyv5zUc7ZIGVhAZdeArAs0lepkm8a' },
];

class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image source={{ uri: item.uri }} />
        <Text style={{ marginBottom: 10, marginTop: 10 }}>I can Constomize</Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor='#03A9F4'
          title="View Now!"
        />
      </Card>
    );
  }
  renderNoMoreCards() {
    return (
      <Card title="All Done!" style={{marginTop:100}}>
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Ball /> */}
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:10
  },
});

export default App;
