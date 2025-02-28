import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ScreenNames } from "../constants/screensName";
import Icon from "react-native-vector-icons/MaterialIcons";

const TransactionItem = ({ name, subtext, type, amount, index }) => {
  const isGreen = index % 3 === 0;
  const amountColor = isGreen ? "#4CAF50" : "#333"; // Light green for every 3rd transaction
  const formattedAmount = isGreen ? `+\u0024${amount}` : `\u0024${amount}`;

  return (
    <TouchableOpacity style={styles.transactionItem}>
      {/* Name & Amount in the same row */}
      <View style={styles.row}>
        <Text style={styles.transactionName}>{type}</Text>
        <Text style={[styles.transactionAmount, { color: amountColor }]}>
          {formattedAmount}
        </Text>
        <Icon name="chevron-right" size={22} color={amountColor} />
      </View>
      {/* Subtext and Type below */}
      {subtext && <Text style={styles.transactionSubtext}>{subtext}</Text>}
    </TouchableOpacity>
  );
};

// TransactionList.js
const TransactionList = ({ transactions }) => {
  const navigation = useNavigation();
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const { date } = transaction;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  return (
    <View style={[styles.section, styles.lastSection]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenNames.TransactionScreen as never)
          }
        >
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      </View>

      {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
        <View key={date}>
          <Text style={styles.transactionDate}>{date}</Text>
          {dateTransactions.map((transaction, index) => (
            <TransactionItem
              key={`${date}-${index}`}
              name={transaction.name}
              subtext={transaction.category}
              type={transaction.description}
              amount={transaction.amount}
              index={index}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 16,
    padding: 16,
  },
  lastSection: {
    marginBottom: 80,
  },
  sectionHeader: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    paddingVertical: 16,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Arial",
  },
  viewAllButton: {
    color: "#0277bd",
    fontFamily: "Arial",
  },
  transactionDate: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 8,
    fontFamily: "Arial",
    fontWeight: "700",
  },
  transactionItem: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
  },
  transactionName: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Arial",
    width: "75%",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Arial",
    marginLeft: 10,
  },
  transactionSubtext: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Arial",
  },
  transactionType: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Arial",
  },
});

export { TransactionItem, TransactionList };
