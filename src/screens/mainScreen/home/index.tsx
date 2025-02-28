import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppStyles} from '../../../appSizeMatters';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/screensName';

const HomeScreen = () => {
  const navigation = useNavigation();

  const AccountCard = ({title, balance, lastFour, warning, topCardstyle}) => (
    <TouchableOpacity
      style={[styles.card, warning && styles.darkCard]}
      onPress={() =>
        navigation.navigate(ScreenNames.CardDetailScreen as never)
      }>
      <View>
        <View style={[styles.cardHeader]}>
          <Text style={[styles.cardTitle, topCardstyle]}>{title}</Text>
          <Text style={styles.lastFour}>...{lastFour}</Text>
        </View>
        <Text style={styles.balance}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              textAlignVertical: 'top',
              marginRight: 2,
            }}>
            $
          </Text>
          {balance}
        </Text>

        <Text style={styles.balanceLabel}>
          {warning ? null : 'Available Balance'}
        </Text>
      </View>
      {warning && (
        <View style={styles.warningContainer}>
          <Entypo name="warning" color="yellow" size={16} />
          <Text style={styles.warningText}> {warning}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const RewardsCard = () => (
    <TouchableOpacity style={[styles.card, styles.rewardsCard]}>
      <Text style={styles.rewardsTitle}>Explore rewards and benefits</Text>
      <View style={styles.milesContainer}>
        <Text style={styles.milesNumber}>57</Text>
        <Text style={styles.milesLabel}>Miles</Text>
      </View>
    </TouchableOpacity>
  );

  const ShoppingOffer = ({logo, name}) => (
    <TouchableOpacity style={styles.offerCard}>
      <Image source={{uri: logo}} style={styles.offerLogo} />
      <Text style={styles.offerName}>{name}</Text>
      <TouchableOpacity>
        <Text
          style={{
            color: '#0071A8',
            fontWeight: '600',
            fontFamily: AppStyles.fontFamily.ArimoBold,
            paddingVertical: 6,
          }}>
          Earn Now
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const CreditWiseSection = () => (
    <View style={styles.creditWiseSection}>
      <View style={styles.creditWiseHeader}>
        <Image
          source={{
            uri: 'https://mms.businesswire.com/media/20160310006403/en/513850/5/2501811_CreditWise_Wordmark_CMYK_cl_12716_v1.jpg',
          }}
          style={styles.creditWiseLogo}
        />
        <Text style={styles.chevron}>^</Text>
      </View>
      <Text style={styles.creditScoreLabel}>Your Credit Score:</Text>
      <View style={styles.updateInfo}>
        <Text style={styles.creditScore}>764</Text>
        <View
          style={{
            borderLeftWidth: 1,
            borderColor: '#e0e0e0',
            alignItems: 'baseline',
          }}>
          <Text style={styles.updateText}>New Update Available</Text>
          <Text style={styles.updateDate}>Updated: Jan 28, 2025 ⚠</Text>
        </View>
      </View>
      <View style={styles.scoreRange}>
        <Text style={styles.rangeText}>300</Text>
        <View style={styles.scoreBar}>
          <View style={styles.scoreProgress} />
        </View>
        <Text style={styles.rangeText}>850</Text>
      </View>

      <TouchableOpacity style={styles.seeScoreButton}>
        <Text style={styles.seeScoreText}>See Your New Score</Text>
      </TouchableOpacity>
    </View>
  );

  const LocationsSection = () => (
    <View style={styles.locationsSection}>
      <Text style={styles.locationTitle}>Locations near you</Text>
      <View style={styles.locationButtons}>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Deposit or add cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Get cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Deposit a check</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: 'https://external-preview.redd.it/s746_lX5G9sk-ToBu0eHScS9GhBuGJJrkq_X90wuvLY.png?width=1080&crop=smart&format=pjpg&auto=webp&s=14c27fa474128d9c87a5c812469c96fda79ba0d5',
        }}
        style={styles.mapImage}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Logo */}
        <Image
          source={{
            uri: 'https://d1.awsstatic.com/Customer%20References%20Directory%20Logos/Capital-One_Logo_%401x.0aef0b700254d3f618484ff03747100753de3d64.png',
          }}
          style={styles.logo}
        />

        {/* Account Cards */}
        <AccountCard
          title="360 Performance Savings"
          balance="90.57"
          lastFour="7840"
          topCardstyle={styles.topCardstyle}
        />

        <AccountCard
          title="V E N T U R E  X"
          balance="1,432.17"
          lastFour="5844"
          warning="This credit card account is currently restricted."
        />

        {/* New Account Button */}
        <TouchableOpacity style={styles.newAccountButton}>
          <Text style={styles.newAccountIcon}>+</Text>
          <Text style={styles.newAccountText}>Open a New Account</Text>
        </TouchableOpacity>

        {/* Rewards Card */}
        <RewardsCard />

        {/* Shopping Offers */}
        <View style={styles.offersSection}>
          <Text style={styles.offersTitle}>Shopping Offers</Text>
          <View style={styles.offersGrid}>
            <ShoppingOffer
              logo="https://s202.q4cdn.com/757635260/files/images/new-logos/2023/Expedia-Horizontal-Logo-Product-Full-Colour-Dark-Blue-RGB.png"
              name="Up to 12% Back"
            />
            <ShoppingOffer
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeI03xoBYSxmeum-DnK7Lfk1Td4_KYCd-ZKg&s"
              name="3% Back"
            />
            <ShoppingOffer
              logo="https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png"
              name="4% Back"
            />
          </View>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Offers</Text>
          </TouchableOpacity>
        </View>

        {/* CreditWise Section */}
        <CreditWiseSection />

        {/* Locations Section */}
        <LocationsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#225F83',
    borderRadius: 8,
    // padding: 16,
    margin: 16,
    marginBottom: 8,
    minHeight: 150,
  },
  topCardstyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: AppStyles.fontFamily.ArimoBold,
  },
  darkCard: {
    backgroundColor: '#102E4A',
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  cardTitle: {
    color: 'white',
    fontSize: 28,
    fontFamily: AppStyles.fontFamily.ArimoMedium,
  },
  lastFour: {
    color: 'white',
    opacity: 0.8,
  },
  balance: {
    color: 'white',
    fontSize: 32, // Adjust if needed
    fontFamily: AppStyles.fontFamily.ArimoRegular,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  balanceLabel: {
    color: 'white',
    opacity: 0.8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#00000050',
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  warningText: {
    color: '#fff',
    fontWeight: '600',
  },
  newAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  newAccountIcon: {
    fontSize: 16,
    color: '#2d6ca2',
    marginRight: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#2d6ca2',
  },

  newAccountText: {
    color: 'black',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  rewardsCard: {
    backgroundColor: '#006378',
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  beach: {
    width: '100%',
    height: 150,
    // transform: [{ rotate: '180deg' }]
  },
  rewardsTitle: {
    color: 'white',
    fontSize: 18,
    // fontWeight: '500',
    fontFamily: AppStyles.fontFamily.ArimoMedium,
  },
  milesContainer: {
    marginTop: 16,
  },
  milesNumber: {
    color: 'white',
    fontSize: 32,
    // fontWeight: 'bold',
    fontFamily: AppStyles.fontFamily.ArimoMedium,
  },
  milesLabel: {
    color: 'white',
    opacity: 0.8,
  },
  offersSection: {
    padding: 16,
  },
  offersTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  offersGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  offerCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    width: '30%',
  },
  offerLogo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  offerName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  earnButton: {
    marginTop: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2d6ca2',
  },
  earnButtonText: {
    color: '#2d6ca2',
    fontSize: 12,
  },
  viewAllButton: {
    marginTop: 16,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  viewAllText: {
    color: '#2d6ca2',
    fontSize: 16,
  },
  creditWiseSection: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  creditWiseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditWiseLogo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  chevron: {
    fontSize: 20,
    color: '#666',
  },
  creditScoreLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
  },
  creditScore: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  scoreRange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  scoreBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 8,
  },
  scoreProgress: {
    width: '80%',
    height: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  rangeText: {
    color: '#666',
    fontSize: 12,
  },
  updateInfo: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  updateText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
  updateDate: {
    color: 'red',
    marginTop: 4,
    paddingHorizontal: 16,
  },
  seeScoreButton: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2d6ca2',
  },
  seeScoreText: {
    color: '#2d6ca2',
    fontSize: 16,
  },
  locationsSection: {
    margin: 16,
    paddingBottom: 50,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  locationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  locationButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '30%',
  },
  locationButtonText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#2d6ca2',
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
});

export default HomeScreen;
