import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Text, Input, Icon, Button } from 'react-native-elements';

const Login = (props) => {
    // useEffect(() => {
    //     const resetAction = CommonActions.reset({
    //         index: 0,
    //         routes: [
    //             { name: 'Drawermain' }
    //         ]
    //     });
    //     props.navigation.dispatch(resetAction)
    // }, [])

    return (
        <View style={styles.containerStyle}>
            <Animatable.View animation={'fadeInDown'} duration={2000}>
                        <Text h3 style={{ color: 'tomato'}}>TomatoApp</Text>
                        <Icon 
                            name='rowing'
                            size={80}
                            type='material-community'
                            color='tomato' 
                        />
                    </Animatable.View>
                    <View style={styles.inputContainerStyle}>
                        <Input
                            placeholder='Username'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    type='feather'
                                    color='tomato'
                                />
                            }
                            // value={this.props.loginForm.username}
                            // onChangeText={(val) => this.props.onInputText('username', val)}
                        />
                        <Button
                        title="enter"
                        containerStyle={{ width: '90%', marginBottom: 10,marginTop:10,marginLeft:20}}
                        buttonStyle={{ backgroundColor: 'tomato', color: 'white' }}
                        onPress={()=>props.navigation.navigate('HomeTomato')}
                        // loading={this.props.loginForm.loading}
                    />
                    </View>
            {/* <Text>ini Login</Text>
            <Button
                title='Register'
                onPress={() => props.navigation.navigate('Register', { nama: 'bebas' })}
            />
            <Button
                title='Home'
                onPress={() => props.navigation.navigate('Drawermain', { nama: 'bebas' })}
            /> */}

        </View>
    )
}
const styles = StyleSheet.create({
    containerSplashStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})


export default (Login);