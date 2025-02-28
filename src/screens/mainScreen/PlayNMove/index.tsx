import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const ActionButton = ({icon, label}) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.iconCircle}>
      <Text style={styles.iconText}>{icon}</Text>
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const TabBarButton = ({icon, label, isActive}) => (
  <TouchableOpacity style={styles.tabButton}>
    <Text style={styles.tabIcon}>{icon}</Text>
    <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const PayAndMove = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Pay & move money</Text>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <ActionButton icon="💰" label="Pay" />
        <ActionButton icon="↔️" label="Transfer" />
        <ActionButton icon="📥" label="Deposit" />
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome to pay & move money</Text>

        <Image
          source={{
            uri: 'https://ecm.capitalone.com/WCM/card/background-images/sbc-benefits/pay-your-vendors-image.png',
          }}
          style={styles.welcomeImage}
        />

        <Text style={styles.welcomeMessage}>
          Use this space to pay, send or receive money. You'll be able to do
          more here, so keep checking in to see what's new.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a4971',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    padding: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  actionLabel: {
    color: 'white',
    marginTop: 8,
    fontSize: 14,
  },
  welcomeSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  welcomeImage: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 24,
  },
  welcomeMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: '#666',
  },
  activeTabLabel: {
    color: '#2d6ca2',
    fontWeight: '600',
  },
});

export default PayAndMove;
