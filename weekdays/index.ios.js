//import the library we required
// use import instead of require

//var React = require('react-native');
//var AppRegistry = React.AppRegistry;
//var Text = React.Text;
//var View = React.View;
//var DayItem = require('./src/day-item');

import React from 'react';
import Moment from 'moment';
import { View, Text, AppRegistry, StyleSheet} from 'react-native';


import DayItem from './src/day-item';

//Crete a react component
var Weekdays = React.createClass({
    render:function(){
        //return some code to display the interface
        //Use JSX in react to render html
        // add the style in the tags
        return <View style = {styles.container} >
            {this.days()}
        </View>
    },

    //utility function
    days: function(){
        var daysItems = [];
        for (let i = 0; i < 7; i++){
            var day = Moment().add(i,'days').format('dddd');

            daysItems.push(
                <DayItem day={day} daysUntil={i} key = {i}/>
            );
        }
        return daysItems;
    }
});

//style the react component
//flex: ???
//justify: 上下居中
//alighItems: 左右居中
var styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

//Show the react component on the screen
AppRegistry.registerComponent('weekdays',function(){
    return Weekdays;
})


