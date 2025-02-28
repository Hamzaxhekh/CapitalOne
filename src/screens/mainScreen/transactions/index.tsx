import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {AppStyles} from '../../../appSizeMatters';

const TransactionItem = ({name, type, amount}) => {
  return (
    <TouchableOpacity style={styles.transactionItem}>
      <View style={{width: '80%'}}>
        <Text style={styles.transactionName}>{name}</Text>
        <Text style={styles.transactionType}>{type}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          amount.startsWith('-') && styles.negativeAmount,
        ]}>
        {amount}
      </Text>
    </TouchableOpacity>
  );
};

const TransactionList = ({transactions, visibleCount}) => {
  // Filter out the 'Pending' key as it's handled separately
  const dates = Object.keys(transactions).filter(date => date !== 'Pending');

  let displayedTransactions = [];
  let count = 0;

  for (const date of dates) {
    if (count >= visibleCount) break;
    const dateTransactions = transactions[date];
    displayedTransactions.push({date, transactions: dateTransactions});
    count += dateTransactions.length;
  }

  return (
    <View style={styles.transactionListContainer}>
      {displayedTransactions.map(({date, transactions}, index) => (
        <View key={`${date}-${index}`} style={styles.dateGroup}>
          <Text style={styles.transactionDate}>{date}</Text>
          {transactions.map((transaction, idx) => (
            <TransactionItem
              key={`${date}-${idx}`}
              name={transaction.name}
              type={transaction.type}
              amount={transaction.amount}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const TransactionScreen = () => {
  const navigation = useNavigation();
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  // Sample transaction data based on the screenshot
  // Updated transactions list including all provided transactions
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

  const renderPendingTransactions = () => {
    if (transactions.Pending) {
      return (
        <View style={styles.pendingContainer}>
          <Text style={styles.pendingHeader}>Pending</Text>
          {transactions.Pending.map((transaction, index) => (
            <TransactionItem
              key={index}
              name={transaction.name}
              type={transaction.type}
              amount={transaction.amount}
            />
          ))}
        </View>
      );
    }
    return null;
  };

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + 10);
      setLoading(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'red'} />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transactions</Text>
        <View />
      </View>

      <View style={styles.searchContainer}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            paddingHorizontal: 5,
            borderRadius: 8,
          }}>
          <Feather name="search" color="#666" size={24} />
          <TextInput
            style={styles.searchInput}
            // placeholder="Search transactions"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="filter" color="white" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {renderPendingTransactions()}
        <TransactionList
          transactions={transactions}
          visibleCount={visibleCount}
        />
        {visibleCount < Object.values(transactions).flat().length && (
          <TouchableOpacity
            style={styles.viewMoreButton}
            onPress={handleViewMore}>
            {loading ? (
              <ActivityIndicator size="small" color="#0071A8" />
            ) : (
              <Text style={styles.viewMoreText}>View More Transactions</Text>
            )}
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#122949',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    // fontWeight: '600',
    color: 'white',
    fontFamily: AppStyles.fontFamily.ArimoBold,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    backgroundColor: '#122949',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    // backgroundColor: '#fffff',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    fontFamily: AppStyles.fontFamily.ArimoRegular,
  },
  filterButton: {
    // backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
  },
  pendingContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  pendingHeader: {
    fontSize: 16,
    fontFamily: AppStyles.fontFamily.ArimoMedium,
    marginBottom: 8,
    color: '#666',
  },
  transactionListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  dateGroup: {
    marginBottom: 16,
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: AppStyles.fontFamily.ArimoRegular,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom: 1,
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    fontFamily: AppStyles.fontFamily.ArimoRegular,
  },
  transactionType: {
    fontSize: 14,
    color: '#666',
    fontFamily: AppStyles.fontFamily.ArimoRegular,
  },
  transactionAmount: {
    fontSize: 16,
    fontFamily: AppStyles.fontFamily.ArimoRegular,
  },
  negativeAmount: {
    color: '#6AB764',
  },
  viewMoreButton: {
    padding: 16,
    alignItems: 'center',
    // backgroundColor: '#122949',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  viewMoreText: {
    color: '#0071A8',
    fontSize: 16,
    fontFamily: AppStyles.fontFamily.ArimoBold,
  },
});

export default TransactionScreen;
