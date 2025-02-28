import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';

const Benefits = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Benefits</Text>
      <View style={styles.errorCard}>
        <Image
          source={{
            uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/traffic-barrier-3d-icon-download-in-png-blend-fbx-gltf-file-formats--road-construction-tools-pack-equipment-icons-7520663.png',
          }}
          style={styles.errorIcon}
        />
        <Text style={styles.errorTitle}>Something Went Wrong</Text>
        <Text style={styles.errorMessage}>
          Looks like we need to fix something, so we're working on it.
        </Text>
      </View>
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a4971',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    padding: 16,
    textAlign: 'center',
  },
  errorCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
  },
  errorIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Benefits;
