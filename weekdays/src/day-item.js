//import some code
import React from 'react';
import { Text, AppRegistry, StyleSheet} from 'react-native';


//Create our component
var DayItenm = React.createClass({
    render: function(){
        return <Text style={this.style()}>
            {this.props.day}
            {this.props.daysUtil}
        </Text>
    },

    //use a function to dynanmically generate css style
    style: function(){
        return {
            color: this.color(),
            fontWeight: this.fontWeight(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        }
    },
    color: function(){
        var opacity = 1/(this.props.daysUntil+1);
        return 'rgba(0,0,0,'+ opacity +')';
    },
    fontWeight: function(){
        var weight = (7 - this.props.daysUntil)*100;
        return weight.toString();
    },
    fontSize: function(){
      return 60 - 6 * this.props.daysUntil;
    },
    lineHeight: function(){
        return 70 - 4 * this.props.daysUntil;
    }
});

//Style our component




//Make this code available elsewhere
module.exports=DayItenm;