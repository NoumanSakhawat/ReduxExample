import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { increment, decrement, reset } from "../../redux/actions/dashboardAction";
import { connect } from 'react-redux';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }//end of Constructor

    dashboardPress = () => {
        this.props.navigation.pop() && this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Counter For Dashboard </Text>
                <Button title="Reset Counter" onPress={this.props.reset} />

                <TouchableOpacity style={styles.signContainer} onPress={() => this.props.increment()}>
                    <Text style={styles.sign}>+</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{this.props.number}</Text>
                <TouchableOpacity style={styles.signContainer} onPress={this.props.decrement}>
                    <Text style={styles.sign}>-</Text>
                </TouchableOpacity>

                <Button title="Back to Login" onPress={this.dashboardPress} />

            </View>
        );
    }//end of Render
}//end of Class

function mapStateToProps(state) {
    return { number: state.dashboardReducer }
}

export default connect(mapStateToProps, { increment, decrement, reset })(index);