import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from 'react-native';

// import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
// import SmsListener from 'react-native-android-sms-listener';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';

// if you want to customize the country picker
const countryPickerCustomStyles = {};

// your brand's theme primary color
const brandColor = '#744BAC';

const styles = StyleSheet.create({
  countryPicker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 22,
    margin: 20,
    color: '#4A4A4A',
  },
  form: {
    margin: 20,
  },
  textInput: {
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 20,
    color: brandColor,
  },
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrongNumberText: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  disclaimerText: {
    marginTop: 30,
    fontSize: 12,
    color: 'grey',
  },
  callingCodeView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  callingCodeText: {
    fontSize: 20,
    color: brandColor,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingRight: 10,
  },
});

export default class PhoneVerifierScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      country: {
        cca2: 'US',
        callingCode: '1',
      },
    };
  }

  getCode = () => {
    // this.setState({ spinner: true });

    console.log(this.form.getValues());
    console.log(this.state.country);

    // const developerEmailEncoded = encodeURIComponent('wangpp1@gmail.com')
    // const userMobileNumberEncoded  = encodeURIComponent('+6593661019')
    // const messageEncoded = encodeURIComponent('Hello Boonjun, here is the code: ')
    // const sendCodeQueryString = `sendCode?developerEmail=${developerEmailEncoded}&userMobileNumber=${userMobileNumberEncoded}&message=${messageEncoded}`
    //
    //
    // const stringified = queryString.stringify({ developerEmail: developerEmailEncoded, userMobileNumber: userMobileNumberEncoded, message: messageEncoded });
    //
    // const test = 'http://digitimate.com/sendCode?'+stringified;
    //
    // console.log(test2);
    //
    // axios.get(test2)
    // .then( response => {
    //   console.log(response.data);
    //   console.log(response.status);
    // }).catch( err => {
    //   console.log(err);
    // });


    setTimeout(async () => {
      try {
        // const res = await api.post('/v1/verifications', {
        //   body: {
        //     ...this.refs.form.getValues(),
        //     ...this.state.country,
        //   },
        // });
        //
        // if (res.err) throw res.err;
        //
        // this.setState({
        //   spinner: false,
        //   enterCode: true,
        //   verification: res.body,
        // });
        // this.refs.form.refs.textInput.setNativeProps({ text: '' });
        // this.refs.form.refs.textInput.focus();
        //
        // setTimeout(() => {
        //   Alert.alert('Sent!', "We've sent you a verification code");
        // }, 100);
      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }
    }, 100);
  }

  getSubmitAction = () => (this.state.enterCode ? this.verifyCode() : this.getCode())

  verifyCode = () => {
    this.setState({ spinner: true });

    setTimeout(async () => {
      try {
        // const res = await api.put('/v1/verifications', {
        //   body: {
        //     ...this.refs.form.getValues(),
        //     ...this.state.country,
        //   },
        // });
        //
        // if (res.err) throw res.err;
        //
        // this.refs.form.refs.textInput.blur();
        // // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        // this.setState({ spinner: false });
        // setTimeout(() => {
        //   Alert.alert('Success!', 'You have successfully verified your phone number');
        // }, 100);
      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }
    }, 100);
  }

  tryAgain = () => {
    this.form.refs.textInput.setNativeProps({ text: '' });
    this.form.refs.textInput.focus();
    this.setState({ enterCode: false });
  }

  changeCountry = (country) => {
    this.setState({ country });
    this.form.refs.textInput.focus();
  }

  renderFooter = () => {
    if (this.state.enterCode) {
      return (
        <View>
          <Text style={styles.wrongNumberText} onPress={this.tryAgain}>
            Enter the wrong number or need a new code?
          </Text>
        </View>
      );
    }

    return (
      <View>
        <Text style={styles.disclaimerText}>
          By tapping Send confirmation code above,
          we will send you an SMS to confirm your phone number.
          Message &amp; data rates may apply.
        </Text>
      </View>
    );
  }

  renderCountryPicker = () => {
    if (this.state.enterCode) {
      return (
        <View />
      );
    }

    return (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this.changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation="eng"
      />
    );
  }

  renderCallingCode = () => {
    if (this.state.enterCode) {
      return (
        <View />
      );
    }

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );
  }

  render() {
    const headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`;
    const buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code';
    const textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Courier',
    } : {};

    return (

      <View style={styles.container}>

        <Text style={styles.header}>{headerText}</Text>

        <Form ref={(c) => { this.form = c; }} style={styles.form}>

          <View style={{ flexDirection: 'row' }}>

            {this.renderCountryPicker()}
            {this.renderCallingCode()}

            <TextInput
              ref={(c) => { this.form = c; }}
              name={this.state.enterCode ? 'code' : 'phoneNumber'}
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[styles.textInput, textStyle]}
              returnKeyType="go"
              autoFocus
              placeholderTextColor={brandColor}
              selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 20}
              onSubmitEditing={this.getSubmitAction}
            />

          </View>

          <TouchableOpacity style={styles.button} onPress={this.getSubmitAction}>
            <Text style={styles.buttonText}>{ buttonText }</Text>
          </TouchableOpacity>

          {this.renderFooter()}

        </Form>

        <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }}
        />

      </View>

    );
  }
}
