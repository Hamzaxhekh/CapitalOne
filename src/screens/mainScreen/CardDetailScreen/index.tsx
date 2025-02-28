import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppStyles} from '../../../appSizeMatters';
import LinearGradient from 'react-native-linear-gradient';
import {TransactionList} from '../../../components/transactions';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/screensName';

const CardDetailScreen = () => {
  const navigation = useNavigation();
  const transactions = [
    {
      date: 'Feb 17',
      description: 'ATLANTIS SUBMARINES RETAI',
      category: 'Other',
      amount: 233.2,
    },
    {
      date: 'Feb 15',
      description: 'Airbnb',
      category: 'Other Travel',
      amount: -169.76,
    },
    {
      date: 'Feb 15',
      description: 'Airbnb',
      category: 'Other Travel',
      amount: -231.33,
    },
    {
      date: 'Feb 15',
      description: 'Dole Plantation',
      category: 'Other',
      amount: 54.97,
    },
    {
      date: 'Feb 15',
      description: 'Louis Vuitton',
      category: 'Merchandise',
      amount: 733.13,
    },
    {
      date: 'Feb 15',
      description: 'LEGO ALA MOANA',
      category: 'Merchandise',
      amount: 10.44,
    },
    {
      date: 'Feb 11',
      description: 'Payment from JPMORGAN CHASE BANK',
      category: 'Payment',
      amount: -2061.6,
    },
    {
      date: 'Feb 10',
      description: 'Airbnb',
      category: 'Other Travel',
      amount: 937.98,
    },
    {
      date: 'Feb 10',
      description: 'Airbnb',
      category: 'Other Travel',
      amount: -786.89,
    },
    {
      date: 'Feb 10',
      description: 'Airbnb',
      category: 'Other Travel',
      amount: 786.89,
    },
    {
      date: 'Feb 10',
      description: 'HIMS & HERS HEALTH',
      category: 'Healthcare',
      amount: 175.0,
    },
    {
      date: 'Feb 08',
      description: 'Capital One Travel',
      category: 'Other Travel',
      amount: 648.62,
    },
    {
      date: 'Feb 08',
      description: 'J WOODFIN COUNSELING',
      category: 'Healthcare',
      amount: 300.0,
    },
    {
      date: 'Feb 07',
      description: 'Payment from JPMORGAN CHASE BANK',
      category: 'Payment',
      amount: -4044.83,
    },
    {
      date: 'Feb 06',
      description: 'Payment from JPMORGAN CHASE BANK',
      category: 'Payment',
      amount: -1421.76,
    },
    {
      date: 'Feb 04',
      description: 'Expedia',
      category: 'Other Travel',
      amount: 85.84,
    },
    {
      date: 'Jan 23',
      description: 'Temu.com',
      category: 'Merchandise',
      amount: 17.38,
    },
    {
      date: 'Jan 14',
      description: 'DAISO - CUPERTINO',
      category: 'Merchandise',
      amount: 11.44,
    },
    {
      date: 'Jan 11',
      description: 'Costco',
      category: 'Merchandise',
      amount: 196.41,
    },
    {
      date: 'Jan 09',
      description: 'Costco',
      category: 'Merchandise',
      amount: 123.39,
    },
    {
      date: 'Jan 09',
      description: 'Payment from JPMORGAN CHASE BANK',
      category: 'Payment',
      amount: -833.83,
    },
    {
      date: 'Jan 06',
      description: 'Costco',
      category: 'Merchandise',
      amount: 13.49,
    },
    {
      date: 'Dec 30',
      description: 'Costco',
      category: 'Merchandise',
      amount: 113.01,
    },
    {
      date: 'Dec 30',
      description: 'Costco',
      category: 'Merchandise',
      amount: -43.07,
    },
    {
      date: 'Dec 27',
      description: 'HOTEL FA LOS CABOS',
      category: 'Lodging',
      amount: 7.59,
    },
    {
      date: 'Dec 17',
      description: 'Ticketmaster',
      category: 'Entertainment',
      amount: 420.0,
    },
    {
      date: 'Dec 06',
      description: 'Temu.com',
      category: 'Merchandise',
      amount: 55.01,
    },
    {
      date: 'Dec 06',
      description: 'Payment from JPMORGAN CHASE BANK',
      category: 'Payment',
      amount: -4415.87,
    },
    {date: 'Dec 05', description: 'Target', category: 'Grocery', amount: 15.28},
    {
      date: 'Dec 02',
      description: 'Costco',
      category: 'Merchandise',
      amount: 15.25,
    },
    {
      date: 'Nov 29',
      description: 'Costco',
      category: 'Merchandise',
      amount: 64.61,
    },
    {
      date: 'Nov 29',
      description: 'Costco',
      category: 'Merchandise',
      amount: -15.27,
    },
    {
      date: 'Nov 25',
      description: 'CSJ CONVNTION CTR GARAGE',
      category: 'Gas/Automotive',
      amount: 5.0,
    },
    {
      date: 'Nov 20',
      description: 'FS *Capture One',
      category: 'Merchandise',
      amount: 34.0,
    },
    {
      date: 'Nov 20',
      description: 'SP ALLERMI INC.',
      category: 'Healthcare',
      amount: 39.9,
    },
    {
      date: 'Nov 19',
      description: 'Costco',
      category: 'Merchandise',
      amount: 120.54,
    },
    {
      date: 'Nov 16',
      description: 'WWW.BODYSPEC.COM',
      category: 'Healthcare',
      amount: 39.95,
    },
    {
      date: 'Nov 14',
      description: 'DECKERS*HOKA ONE ONE',
      category: 'Merchandise',
      amount: 87.3,
    },
    {
      date: 'Nov 11',
      description: 'Costco',
      category: 'Merchandise',
      amount: 87.26,
    },
    {
      date: 'Nov 07',
      description: 'Costco',
      category: 'Other Travel',
      amount: 1994.31,
    },
    {
      date: 'Oct 21',
      description: 'STRATFORD SCHOOL, INC',
      category: 'Other',
      amount: 37.5,
    },
    {
      date: 'Oct 21',
      description: 'FS *Capture One',
      category: 'Merchandise',
      amount: 34.0,
    },
    {
      date: 'Oct 14',
      description: 'Costco',
      category: 'Merchandise',
      amount: 64.26,
    },
    {
      date: 'Oct 14',
      description: 'SP THE ARMOURY',
      category: 'Merchandise',
      amount: -260.0,
    },
    {
      date: 'Oct 14',
      description: 'SP DSANDDURGA',
      category: 'Merchandise',
      amount: 278.27,
    },
    {
      date: 'Oct 12',
      description: 'SP THE ARMOURY',
      category: 'Merchandise',
      amount: 260.0,
    },
    {
      date: 'Oct 07',
      description: 'Costco',
      category: 'Merchandise',
      amount: 69.01,
    },
    {
      date: 'Oct 07',
      description: 'Build-A-Bear',
      category: 'Merchandise',
      amount: 4.38,
    },
    {
      date: 'Oct 07',
      description: 'New Balance',
      category: 'Merchandise',
      amount: 136.69,
    },
    {
      date: 'Oct 03',
      description: 'Payment from JPMORGAN CHASE BANK',
      category: 'Payment',
      amount: -1707.65,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#1a2b4a'} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>VENTURE X...5844</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Balance Section */}
        <LinearGradient
          colors={['#1a2b4a', '#2a3b5a', '#1a2b4a']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.gradientContainer}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceAmount}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '400',
                  textAlignVertical: 'top',
                  marginRight: 2,
                }}>
                $
              </Text>
              1,432<Text style={styles.cents}>17</Text>
            </Text>
            <Text style={styles.balanceLabel}>Current Balance</Text>

            <View style={styles.divider} />

            <View style={styles.milesContainer}>
              <Text style={styles.milesAmount}>57</Text>
              <Text style={styles.milesLabel}>{'Miles >'}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Warning Banner */}
        <View style={styles.warningBanner}>
          <Icon name="warning" size={20} color="#FFB300" />
          <Text style={styles.warningText}>
            This credit card account is currently restricted.
          </Text>
        </View>

        {/* Scheduled Payments Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Scheduled payments</Text>
            <TouchableOpacity>
              <Icon name="more-horiz" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <Text style={styles.paymentStatus}>Minimum payment met</Text>

          <View style={styles.autoPayRow}>
            <Text style={styles.autoPayLabel}>
              AutoPay:{' '}
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                }}>
                OFF
              </Text>
            </Text>
            <TouchableOpacity>
              <Text style={styles.autoPayButton}>Set up AutoPay</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bankInfo}>
            <View>
              <Text style={styles.bankName}>
                JPMORGAN CHASE BANK, NA ...1080
              </Text>
              <Text style={styles.creditUpdate}>
                Your available credit has been updated.
              </Text>
            </View>
            <View>
              <Text style={[styles.date, {marginVertical: 5}]}>
                {'$1432.17 >'}
              </Text>
              <Text style={styles.date}>Feb 22</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Make a payment</Text>
          </TouchableOpacity>
        </View>

        {/* Expected Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Expected Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions */}
        <TransactionList transactions={transactions} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="star" size={24} color="#666" />
          <Text style={styles.navText}>Benefits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="swap-horiz" size={24} color="#666" />
          <Text style={styles.navText}>Pay/Move</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="help" size={24} color="#666" />
          <Text style={styles.navText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a2b4a',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: AppStyles.fontFamily.NotoSerifJpMedium,
  },
  balanceContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#1a2b4a',
  },
  balanceAmount: {
    color: 'white',
    fontSize: 58,
    fontWeight: '300',
  },
  cents: {
    fontSize: 22,
    marginTop: -10,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  milesContainer: {
    // marginTop: 24,
  },
  milesAmount: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  milesLabel: {
    color: '#ccc',
    fontSize: 16,
  },
  warningBanner: {
    backgroundColor: '#FFF3E0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 4,
  },
  warningText: {
    marginLeft: 8,
    color: '#333',
    flex: 1,
  },
  section: {
    backgroundColor: 'white',
    marginTop: 16,
    padding: 16,
    marginHorizontal: 16,
  },
  lastSection: {
    marginBottom: 80, // Add space for bottom navigation
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  paymentStatus: {
    color: '#666',
    marginBottom: 16,
  },
  autoPayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  autoPayLabel: {
    color: '#333',
  },
  autoPayButton: {
    color: '#0277bd',
  },
  bankInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  bankName: {
    color: '#333',
    marginBottom: 4,
  },
  creditUpdate: {
    color: '#666',
    fontSize: 13,
  },
  date: {
    color: '#666',
  },
  paymentButton: {
    backgroundColor: '#0277bd',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  viewAllButton: {
    color: '#0277bd',
  },
  transactionDate: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  transactionSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  transactionType: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  gradientContainer: {
    width: '100%',
  },
  divider: {
    width: '95%',
    height: 4,
    backgroundColor: '#FFFFFF40',
    marginVertical: 20,
  },
});

export default CardDetailScreen;
