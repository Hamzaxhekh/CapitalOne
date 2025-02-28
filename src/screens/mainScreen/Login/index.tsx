import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {AppStyles} from '../../../appSizeMatters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/screensName';

const CapitalOneLogin = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [faceId, setFaceId] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(ScreenNames.Home as never);
    }, 2000); // 2 seconds delay
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.helpText}>Help</Text>
        <Image
          source={{
            uri: 'https://d1.awsstatic.com/Customer%20References%20Directory%20Logos/Capital-One_Logo_%401x.0aef0b700254d3f618484ff03747100753de3d64.png',
          }}
          style={styles.logo}
        />

        <View />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          {/* <View style={styles.avatar} /> */}
          <Image
            source={{
              uri: 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.profileName}>Vincent</Text>
            <TouchableOpacity>
              <Text style={styles.switchProfile}>Switch profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View />
      </View>

      {/* Login Form */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="vinc********"
            editable={false}
          />
          <TouchableOpacity style={styles.clearButton}>
            <AntDesign name="closecircle" size={16} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={16} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Entypo
              name={showPassword ? 'eye' : 'eye-with-line'}
              size={24}
              color={'grey'}
            />
          </TouchableOpacity>
        </View>

        {/* Switches */}
        <View style={styles.switchesContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{false: '#767577', true: '#0071A8'}}
            />
            <Text>Remember me</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={faceId}
              onValueChange={setFaceId}
              trackColor={{false: '#767577', true: '#0071A8'}}
            />
            <Text>Face ID</Text>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSignIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.signInText}>Sign in</Text>
          )}
        </TouchableOpacity>

        {/* Links */}
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Forgot username or password?</Text>
          <Feather name="external-link" size={24} color="#0071A8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Set up online access</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Product offerings</Text>
          </TouchableOpacity>
          <Text style={styles.footerDivider}>|</Text>
          <TouchableOpacity>
            <Text style={styles.footerText}>Security and privacy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text style={styles.footerText}>Español</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  helpText: {
    fontSize: 16,
    fontWeight: '600',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
  profileSection: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: '#ddd',
    marginRight: 20,
  },
  profileName: {
    fontSize: 24,
    marginTop: 10,
  },
  switchProfile: {
    color: '#32647C',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600',
  },
  form: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    marginLeft: 10,
  },
  clearButton: {
    padding: 8,
  },
  switchesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  signInButton: {
    backgroundColor: '#0071A8',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    gap: 5,
  },
  linkText: {
    color: '#0071A8',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '800',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    padding: 20,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerText: {
    color: '#0071A8',
    fontSize: 14,
    fontWeight: '600',
  },
  footerDivider: {
    marginHorizontal: 8,
    color: '#0071A8',
  },
});

export default CapitalOneLogin;