import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/actions/loginActions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }//end of Constructor

    loginPress = () => {
        this.props.navigation.navigate("Dashboard")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Counter For Login </Text>

                <Button title="Reset Counter" onPress={this.props.reset} />

                <TouchableOpacity style={styles.signContainer} onPress={() => this.props.increment()}>
                    <Text style={styles.sign}>+</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{this.props.number}</Text>
                <TouchableOpacity style={styles.signContainer} onPress={this.props.decrement}>
                    <Text style={styles.sign}>-</Text>
                </TouchableOpacity>

                <Button title="Goto Dashboard" onPress={this.loginPress} />

            </View>
        );
    }//end of Render
}//end of Class

function mapStateToProps(state) {
    return { number: state.loginReducer }
}

export default connect(mapStateToProps, { increment, decrement, reset })(index);