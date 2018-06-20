import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    
    viewStyle:{
        backgroundColor: '#5795f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,    
        elevation: 2,
        position: 'relative'
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export default Header;