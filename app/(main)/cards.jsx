import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 48;

const transactions = [
  { id: 1, name: "Netflix Subscription", amount: -12.99, date: "18 Oct", time: "14:30", category: "Entertainment", icon: "film-outline" },
  { id: 2, name: "Spotify Premium", amount: -9.99, date: "17 Oct", time: "09:15", category: "Music", icon: "musical-notes-outline" },
  { id: 3, name: "Amazon Purchase", amount: -45.50, date: "16 Oct", time: "18:45", category: "Shopping", icon: "cart-outline" },
  { id: 4, name: "Starbucks", amount: -8.75, date: "15 Oct", time: "08:20", category: "Food", icon: "cafe-outline" },
  { id: 5, name: "Uber Ride", amount: -15.30, date: "14 Oct", time: "22:00", category: "Transport", icon: "car-outline" },
  { id: 6, name: "Apple Store", amount: -99.00, date: "13 Oct", time: "16:30", category: "Tech", icon: "phone-portrait-outline" },
];

const CardsPage = () => {
  const router = useRouter();
  const [hasCard, setHasCard] = useState(true);
  const [cardHidden, setCardHidden] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const cardBalance = 2450.75;
  const cardNumber = "4532 •••• •••• 8790";
  const cardHolder = "HAZEM ALJASEM";
  const expiryDate = "12/27";
  const cvv = "•••";

  const handleDeleteCard = () => {
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setDeleteModalVisible(false);
    setHasCard(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cards</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {hasCard ? (
            <>
              {/* Virtual Card */}
              <View style={styles.cardSection}>
                <View style={styles.cardHeader}>
                  <Text style={styles.sectionTitle}>Virtual Card</Text>
                  <View style={styles.cardBadge}>
                    <MaterialCommunityIcons name="shield-check" size={16} color="#00d4aa" />
                    <Text style={styles.badgeText}>Active</Text>
                  </View>
                </View>

                <LinearGradient
                  colors={['#667eea', '#764ba2', '#f093fb']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.card}
                >
                  {/* Card Chip & Logo */}
                  <View style={styles.cardTop}>
                    <View style={styles.cardChip}>
                      <View style={styles.chipInner} />
                    </View>
                    <MaterialCommunityIcons name="contactless-payment" size={32} color="rgba(255,255,255,0.9)" />
                  </View>

                  {/* Card Number */}
                  <View style={styles.cardMiddle}>
                    <Text style={styles.cardNumber}>
                      {cardHidden ? "•••• •••• •••• ••••" : cardNumber}
                    </Text>
                  </View>

                  {/* Card Details */}
                  <View style={styles.cardBottom}>
                    <View style={styles.cardDetail}>
                      <Text style={styles.cardLabel}>Card Holder</Text>
                      <Text style={styles.cardValue}>{cardHolder}</Text>
                    </View>
                    <View style={styles.cardDetail}>
                      <Text style={styles.cardLabel}>Expires</Text>
                      <Text style={styles.cardValue}>{expiryDate}</Text>
                    </View>
                    <View style={styles.cardDetail}>
                      <Text style={styles.cardLabel}>CVV</Text>
                      <Text style={styles.cardValue}>{cardHidden ? "•••" : cvv}</Text>
                    </View>
                  </View>

                  {/* Visa Logo */}
                  <View style={styles.cardLogo}>
                    <Text style={styles.visaText}>VISA</Text>
                  </View>
                </LinearGradient>

                {/* Card Actions */}
                <View style={styles.cardActions}>
                  <TouchableOpacity 
                    style={styles.cardActionButton}
                    onPress={() => setCardHidden(!cardHidden)}
                  >
                    <View style={styles.actionIconContainer}>
                      <Ionicons 
                        name={cardHidden ? "eye-off-outline" : "eye-outline"} 
                        size={20} 
                        color="#667eea" 
                      />
                    </View>
                    <Text style={styles.actionButtonText}>
                      {cardHidden ? "Show" : "Hide"}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.cardActionButton}>
                    <View style={styles.actionIconContainer}>
                      <Ionicons name="lock-closed-outline" size={20} color="#667eea" />
                    </View>
                    <Text style={styles.actionButtonText}>Freeze</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.cardActionButton}>
                    <View style={styles.actionIconContainer}>
                      <Ionicons name="settings-outline" size={20} color="#667eea" />
                    </View>
                    <Text style={styles.actionButtonText}>Settings</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.cardActionButton}>
                    <View style={styles.actionIconContainer}>
                      <Ionicons name="share-social-outline" size={20} color="#667eea" />
                    </View>
                    <Text style={styles.actionButtonText}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Card Balance */}
              <View style={styles.balanceSection}>
                <View style={styles.balanceCard}>
                  <Text style={styles.balanceLabel}>Available Balance</Text>
                  <Text style={styles.balanceAmount}>
                    ${cardBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </Text>
                  <View style={styles.balanceProgress}>
                    <View style={[styles.balanceProgressBar, { width: '65%' }]} />
                  </View>
                  <Text style={styles.balanceLimit}>Limit: $5,000.00</Text>
                </View>
              </View>

              {/* Recent Transactions */}
              <View style={styles.transactionsSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Recent Transactions</Text>
                  <TouchableOpacity>
                    <Text style={styles.seeAllText}>See All</Text>
                  </TouchableOpacity>
                </View>

                {transactions.map((item) => (
                  <TouchableOpacity key={item.id} style={styles.transactionItem}>
                    <View style={styles.transactionIcon}>
                      <Ionicons name={item.icon} size={22} color="#667eea" />
                    </View>
                    <View style={styles.transactionInfo}>
                      <Text style={styles.transactionName}>{item.name}</Text>
                      <Text style={styles.transactionMeta}>
                        {item.category} • {item.date} {item.time}
                      </Text>
                    </View>
                    <View style={styles.transactionRight}>
                      <Text style={styles.transactionAmount}>
                        {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount).toFixed(2)}
                      </Text>
                      <View style={[styles.statusDot, { backgroundColor: item.amount < 0 ? '#ff6b6b' : '#00d4aa' }]} />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Bottom Actions */}
              <View style={styles.bottomActions}>
                <TouchableOpacity 
                  style={styles.subscriptionButton}
                  onPress={() => router.push("/subscriptions")}
                >
                  <View style={styles.subscriptionIconContainer}>
                    <MaterialIcons name="subscriptions" size={24} color="#667eea" />
                  </View>
                  <View style={styles.subscriptionInfo}>
                    <Text style={styles.subscriptionTitle}>Manage Subscriptions</Text>
                    <Text style={styles.subscriptionSubtitle}>View and control your recurring payments</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={handleDeleteCard}
                >
                  <View style={styles.deleteIconContainer}>
                    <MaterialIcons name="delete-outline" size={24} color="#ff6b6b" />
                  </View>
                  <Text style={styles.deleteButtonText}>Delete Virtual Card</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.noCardContainer}>
              <View style={styles.noCardContent}>
                <LinearGradient
                  colors={['rgba(102, 126, 234, 0.1)', 'rgba(118, 75, 162, 0.1)']}
                  style={styles.noCardIcon}
                >
                  <MaterialCommunityIcons name="credit-card-plus-outline" size={64} color="#667eea" />
                </LinearGradient>
                
                <Text style={styles.noCardTitle}>No Virtual Card Yet</Text>
                <Text style={styles.noCardDescription}>
                  Create your virtual card now and start making secure online payments instantly
                </Text>

                <TouchableOpacity style={styles.createCardButton}>
                  <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.createCardGradient}
                  >
                    <Ionicons name="add-circle-outline" size={24} color="#fff" />
                    <Text style={styles.createCardText}>Create Virtual Card</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.features}>
                  <View style={styles.featureItem}>
                    <Ionicons name="shield-checkmark" size={20} color="#00d4aa" />
                    <Text style={styles.featureText}>Secure Payments</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Ionicons name="flash" size={20} color="#ffd93d" />
                    <Text style={styles.featureText}>Instant Activation</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Ionicons name="lock-closed" size={20} color="#667eea" />
                    <Text style={styles.featureText}>Enhanced Security</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>

      {/* Delete Confirmation Modal */}
      {deleteModalVisible && (
        <TouchableOpacity 
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setDeleteModalVisible(false)}
        >
          <BlurView intensity={20} tint="dark" style={styles.modalBlur}>
            <View style={styles.deleteModal}>
              <View style={styles.deleteModalIcon}>
                <MaterialIcons name="warning-amber" size={48} color="#ff6b6b" />
              </View>
              
              <Text style={styles.deleteModalTitle}>Delete Virtual Card?</Text>
              <Text style={styles.deleteModalText}>
                This action cannot be undone. Your card will be permanently deleted and all subscriptions will be cancelled.
              </Text>

              <View style={styles.deleteModalActions}>
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={() => setDeleteModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.confirmDeleteButton}
                  onPress={confirmDelete}
                >
                  <Text style={styles.confirmDeleteText}>Delete Card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </TouchableOpacity>
      )}
    </SafeAreaView>
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
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  headerButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  cardSection: {
    paddingHorizontal: 24,
    marginTop: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  cardBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00d4aa',
  },
  card: {
    width: CARD_WIDTH,
    height: 200,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardChip: {
    width: 48,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipInner: {
    width: 36,
    height: 28,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  cardMiddle: {
    flex: 1,
    justifyContent: 'center',
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 2,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetail: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  cardLogo: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  visaText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    fontStyle: 'italic',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cardActionButton: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  actionIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  balanceSection: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  balanceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  balanceLabel: {
    fontSize: 13,
    color: '#8e8e93',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16,
  },
  balanceProgress: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  balanceProgressBar: {
    height: '100%',
    backgroundColor: '#00d4aa',
    borderRadius: 4,
  },
  balanceLimit: {
    fontSize: 12,
    color: '#8e8e93',
  },
  transactionsSection: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#667eea',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
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
  transactionMeta: {
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
    color: '#fff',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  bottomActions: {
    paddingHorizontal: 24,
    marginTop: 32,
    gap: 16,
  },
  subscriptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  subscriptionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  subscriptionInfo: {
    flex: 1,
  },
  subscriptionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  subscriptionSubtitle: {
    fontSize: 12,
    color: '#8e8e93',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.2)',
    gap: 12,
  },
  deleteIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ff6b6b',
  },
  noCardContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  noCardContent: {
    alignItems: 'center',
  },
  noCardIcon: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  noCardTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
  },
  noCardDescription: {
    fontSize: 15,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  createCardButton: {
    width: '100%',
    marginBottom: 40,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  createCardGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    gap: 12,
  },
  createCardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  features: {
    width: '100%',
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  featureText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteModal: {
    backgroundColor: 'rgba(30, 30, 46, 0.95)',
    borderRadius: 24,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  deleteModalIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  deleteModalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  deleteModalText: {
    fontSize: 14,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  deleteModalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  confirmDeleteButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#ff6b6b',
    alignItems: 'center',
  },
  confirmDeleteText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
});

export default CardsPage;