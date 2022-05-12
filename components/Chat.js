import React from 'react';
import { View, Platform, KeyboardAvoidingView } from "react-native";
import { GiftedChat, Bubble } from 'react-native-gifted-chat';


export default class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
        };
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    // this is what will be called when a user sends a message
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderBubble(props) {
        return (
            <Bubble {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#000',
                    },
                }}
            />
        );
    }

    render() {

        let name = this.props.route.params.name;
        this.props.navigation.setOptions({ title: name });

        // takes the input parameters of background color defined in the start.js component
        let bgColor = this.props.route.params.bgColor;
        return (
            <View style={{ flex: 1 }}>
                <GiftedChat
                    renderBubble={this.renderBubble.bind(this)}
                    messages={this.state.messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />

                {/* this fixes android keyboard */}
                {Platform.OS === "android" ? (<KeyboardAvoidingView behavior="height" />) : null}
            </View>

        );
    }
}
