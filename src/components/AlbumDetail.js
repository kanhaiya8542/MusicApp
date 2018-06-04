import React, { Component } from 'react';
import { Text, View,Image,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSectiion';
import Button from './Button';



const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image ,url} = album;
   
    const {thumbnailStyle,
        headerContentStyle,
        headerTextStyle, 
        imageStyle,       
        thumnailContainerStyle}=styles;

    return (
        <Card>


            <CardSection>
                <View style={thumnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>


            <CardSection>
                <Image
                 style={imageStyle}
                source={{uri: image }}/>
                </CardSection>

                <CardSection>

                    <Button  onPress={() => Linking.openURL(url) } > 
                    BUY NOW
                    </Button>

                </CardSection>
        </Card>

    );

};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
        headerTextStyle:{
            fontSize:18

        },
    thumbnailStyle: {
        height:50,
        width:50
    },
    thumnailContainerStyle:{
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:10,
        marginRight: 10


    },
    imageStyle:{
        height:300,
        flex: 1,
        width:null
    }
};



export default AlbumDetail;