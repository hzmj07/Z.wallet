import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get('window');

const transactions = [
  { id: 1, name: "Hazem Aljasem", amount: -150, date: "18 Oct", time: "14:30", type: "transfer", avatar: require("../../assets/profile.png") },
  { id: 2, name: "Sarah Martinez", amount: 450, date: "17 Oct", time: "09:15", type: "received", avatar: require("../../assets/profile.png") },
  { id: 3, name: "Ahmed Hassan", amount: -89, date: "16 Oct", time: "18:45", type: "transfer", avatar: require("../../assets/profile.png") },
  { id: 4, name: "Maya Johnson", amount: 1200, date: "15 Oct", time: "11:20", type: "received", avatar: require("../../assets/profile.png") },
  { id: 5, name: "Omar Khalid", amount: -320, date: "14 Oct", time: "16:00", type: "transfer", avatar: require("../../assets/profile.png") },
  { id: 6, name: "Lisa Chen", amount: 650, date: "13 Oct", time: "13:30", type: "received", avatar: require("../../assets/profile.png") },
];

const banks = [
  { id: 1, name: "Syrian Bank", logo: require("../../assets/flag2.png") },
  { id: 2, name: "Commercial Bank", logo: require("../../assets/flag2.png") },
  { id: 3, name: "International Bank", logo: require("../../assets/flag2.png") },
  { id: 4, name: "Trust Bank", logo: require("../../assets/flag2.png") },
];

const Home = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [balance] = useState(45300);
  const [cardHidden, setCardHidden] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Gradient Background */}
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.avatar}
            source={require("../../assets/profile.png")}
          />
          <View style={styles.userInfo}>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>Hazem ALjasem</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/accountverification")}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => setMenuVisible(true)}>
            <Feather name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Main Card */}
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={['#6a11cb', '#2575fc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mainCard}
          >
            <View style={styles.cardHeader}>
              <View style={styles.cardFlag}>
                <Image
                  style={styles.flagImage}
                  source={require("../../assets/flag2.png")}
                />
                <Text style={styles.cardTitle}>Syrian Lira</Text>
              </View>
              <TouchableOpacity onPress={() => setCardHidden(!cardHidden)}>
                <Ionicons 
                  name={cardHidden ? "eye-off-outline" : "eye-outline"} 
                  size={24} 
                  color="#fff" 
                />
              </TouchableOpacity>
            </View>

            <View style={styles.balanceContainer}>
              <Text style={styles.balanceLabel}>Total Balance</Text>
              <Text style={styles.balanceAmount}>
                {cardHidden ? "••••••" : `SY ${balance.toLocaleString()}`}
              </Text>
              <Text style={styles.accountId}>ID: 12345679</Text>
            </View>

            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="arrow-up-outline" size={20} color="#6a11cb" />
                </View>
                <Text style={styles.actionText}>Send</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="arrow-down-outline" size={20} color="#6a11cb" />
                </View>
                <Text style={styles.actionText}>Receive</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <MaterialCommunityIcons name="bank-transfer" size={20} color="#6a11cb" />
                </View>
                <Text style={styles.actionText}>Transfer</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="add-outline" size={20} color="#6a11cb" />
                </View>
                <Text style={styles.actionText}>More</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Transactions Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map((item) => (
            <TouchableOpacity key={item.id} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
                <View style={styles.transactionAvatar}>
                  <Image
                    style={styles.transactionAvatarImage}
                    source={item.avatar}
                  />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>{item.name}</Text>
                  <Text style={styles.transactionDate}>{item.date} • {item.time}</Text>
                </View>
              </View>
              <View style={styles.transactionRight}>
                <Text style={[
                  styles.transactionAmount,
                  { color: item.amount > 0 ? '#00d4aa' : '#ff6b6b' }
                ]}>
                  {item.amount > 0 ? '+' : ''}{item.amount} SY
                </Text>
                <Ionicons 
                  name={item.amount > 0 ? "arrow-down-circle" : "arrow-up-circle"} 
                  size={16} 
                  color={item.amount > 0 ? '#00d4aa' : '#ff6b6b'} 
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Partner Banks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Partner Banks</Text>
            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.banksContainer}
          >
            {banks.map((bank) => (
              <TouchableOpacity key={bank.id} style={styles.bankCard}>
                <View style={styles.bankLogo}>
                  <Image
                    style={styles.bankLogoImage}
                    source={bank.logo}
                  />
                </View>
                <Text style={styles.bankName}>{bank.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BlurView intensity={80} tint="dark" style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navButton, styles.navButtonActive]}>
          <Ionicons name="home" size={26} color="#6a11cb" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push("/findeUser")}
        >
          <Ionicons name="send-outline" size={26} color="#8e8e93" />
          <Text style={styles.navText}>Send</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButtonCenter}>
          <LinearGradient
            colors={['#6a11cb', '#2575fc']}
            style={styles.centerButton}
          >
            <Ionicons name="scan-outline" size={28} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push("/cards")}
        >
          <MaterialCommunityIcons name="credit-card-outline" size={26} color="#8e8e93" />
          <Text style={styles.navText}>Cards</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push("/profile")}
        >
          <Ionicons name="person-outline" size={26} color="#8e8e93" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </BlurView>

      {/* Menu Modal */}
      {menuVisible && (
        <TouchableOpacity 
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <BlurView intensity={20} tint="dark" style={styles.modalOverlay}>
            <View style={styles.menuContainer}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  router.push("/profile");
                }}
              >
                <View style={styles.menuIcon}>
                  <Ionicons name="person-outline" size={24} color="#6a11cb" />
                </View>
                <Text style={styles.menuText}>My Account</Text>
                <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  router.push("/settings");
                }}
              >
                <View style={styles.menuIcon}>
                  <Ionicons name="settings-outline" size={24} color="#6a11cb" />
                </View>
                <Text style={styles.menuText}>Settings</Text>
                <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Ionicons name="help-circle-outline" size={24} color="#6a11cb" />
                </View>
                <Text style={styles.menuText}>Help & Support</Text>
                <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
              </TouchableOpacity>

              <View style={styles.menuDivider} />

              <TouchableOpacity style={styles.menuItem}>
                <View style={[styles.menuIcon, { backgroundColor: '#ffe0e0' }]}>
                  <Ionicons name="log-out-outline" size={24} color="#ff6b6b" />
                </View>
                <Text style={[styles.menuText, { color: '#ff6b6b' }]}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#6a11cb',
  },
  userInfo: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 13,
    color: '#8e8e93',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  mainCard: {
    borderRadius: 24,
    padding: 24,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardFlag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: 28,
    height: 20,
    borderRadius: 4,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  balanceContainer: {
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  accountId: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6a11cb',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    marginRight: 12,
  },
  transactionAvatarImage: {
    width: '100%',
    height: '100%',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#8e8e93',
  },
  transactionRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
  banksContainer: {
    gap: 12,
  },
  bankCard: {
    width: 140,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  bankLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  bankLogoImage: {
    width: 36,
    height: 26,
    borderRadius: 4,
  },
  bankName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  navButtonActive: {
    transform: [{ scale: 1.05 }],
  },
  navText: {
    fontSize: 11,
    marginTop: 4,
    color: '#8e8e93',
    fontWeight: '500',
  },
  navTextActive: {
    color: '#6a11cb',
    fontWeight: '700',
  },
  navButtonCenter: {
    marginTop: -20,
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 20,
  },
  menuContainer: {
    backgroundColor: 'rgba(30, 30, 46, 0.95)',
    borderRadius: 24,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginVertical: 4,
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(106, 17, 203, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  menuDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 8,
  },
});

export default Home;