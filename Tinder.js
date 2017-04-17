'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import {imdb250} from './imdb-top250';

class Card extends Component {
    render() {
        return (
            <View>
                <Image style={{width: 200, height: 300}} source={{uri: this.props.poster}} />
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        );
    }
}

export default class Tinder extends Component {
    state = {
        cards: []
    }

    constructor(props) {
        super(props);
    }

    handleYup(card) {
        console.log(`Yup for ${card.text}`);
    }

    handleNope(card) {
        console.log(`Nope for ${card.text}`);
    }

    handleMaybe(card) {
        console.log(`Maybe for ${card.text}`);
    }

    componentDidMount() {
        // const imdbcards = [];
        // console.log(imdb250);
        // imdb250.forEach(movie => imdbcards.push({name: movie.name, poster: movie.poster}));
        this.setState({
            cards: imdb250
        });
    }

    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={cardData => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                showYup={false}
                showNope={false}
                hasMaybeAction
            />
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300
    },
    noMoreCardsText: {
        fontSize: 22
    }
});
