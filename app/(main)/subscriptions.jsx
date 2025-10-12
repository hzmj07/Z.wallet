import React, { useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const subscriptions = [
  { id: 1, title: "YouTube Premium", amount: 15.99, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "youtube", color: ['#FF0000', '#CC0000'], category: "Entertainment" },
  { id: 2, title: "Spotify Premium", amount: 9.99, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "spotify", color: ['#1DB954', '#1ED760'], category: "Music" },
  { id: 3, title: "Netflix", amount: 14.99, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "netflix", color: ['#E50914', '#B20710'], category: "Entertainment" },
  { id: 4, title: "İzmir Elektrik", amount: 245.50, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "lightning-bolt", color: ['#FFA726', '#FF9800'], category: "Utilities" },
  { id: 5, title: "İzmir Doğal Gaz", amount: 180.00, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "fire", color: ['#42A5F5', '#1976D2'], category: "Utilities" },
  { id: 6, title: "Car Installment", amount: 1250.00, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "car", color: ['#AB47BC', '#8E24AA'], category: "Auto" },
  { id: 7, title: "Apple Music", amount: 9.99, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "music", color: ['#FA2D48', '#FC3C44'], category: "Music" },
  { id: 8, title: "Adobe Creative", amount: 54.99, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "palette", color: ['#FA0F00', '#DA1F26'], category: "Software" },
  { id: 9, title: "Gym Membership", amount: 75.00, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "dumbbell", color: ['#66BB6A', '#43A047'], category: "Health" },
  { id: 10, title: "Cloud Storage", amount: 9.99, date: "18 Oct 2025", nextBilling: "18 Nov 2025", icon: "cloud", color: ['#26C6DA', '#00ACC1'], category: "Software" },
];

const SubscriptionsScreen = () => {
  const router = useRouter();
  const [hasData, setHasData] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Entertainment', 'Music', 'Utilities', 'Auto', 'Software', 'Health'];

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);

  const filteredSubscriptions = selectedCategory === 'All' 
    ? subscriptions 
    : subscriptions.filter(sub => sub.category === selectedCategory);

  const getIconName = (iconType) => {
    const icons = {
      'youtube': 'logo-youtube',
      'spotify': 'musical-notes',
      'netflix': 'film',
      'lightning-bolt': 'flash',
      'fire': 'flame',
      'car': 'car-sport',
      'music': 'musical-note',
      'palette': 'color-palette',
      'dumbbell': 'barbell',
      'cloud': 'cloud',
    };
    return icons[iconType] || 'apps';
  };

  if (!hasData) {
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
          <Text style={styles.headerTitle}>Subscriptions</Text>
          <View style={{ width: 44 }} />
        </View>

        <View style={styles.noDataContainer}>
          <View style={styles.noDataContent}>
            <LinearGradient
              colors={['rgba(102, 126, 234, 0.1)', 'rgba(118, 75, 162, 0.1)']}
              style={styles.noDataIcon}
            >
              <MaterialCommunityIcons name="calendar-remove-outline" size={64} color="#667eea" />
            </LinearGradient>
            
            <Text style={styles.noDataTitle}>No Subscriptions</Text>
            <Text style={styles.noDataDescription}>
              You don't have any active subscriptions for this card yet
            </Text>

            <TouchableOpacity style={styles.addButton}>
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.addButtonGradient}
              >
                <Ionicons name="add-circle-outline" size={24} color="#fff" />
                <Text style={styles.addButtonText}>Add Subscription</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

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
        <Text style={styles.headerTitle}>Subscriptions</Text>
        <TouchableOpacity style={styles.addIconButton}>
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Total Monthly Card */}
          <View style={styles.totalCard}>
            <LinearGradient
              colors={['#667eea', '#764ba2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.totalCardGradient}
            >
              <View style={styles.totalCardHeader}>
                <Text style={styles.totalCardLabel}>Total Monthly</Text>
                <MaterialCommunityIcons name="calendar-month" size={24} color="rgba(255,255,255,0.8)" />
              </View>
              <Text style={styles.totalAmount}>${totalMonthly.toFixed(2)}</Text>
              <View style={styles.totalCardFooter}>
                <View style={styles.totalCardStat}>
                  <Text style={styles.statValue}>{subscriptions.length}</Text>
                  <Text style={styles.statLabel}>Active</Text>
                </View>
                <View style={styles.totalCardDivider} />
                <View style={styles.totalCardStat}>
                  <Text style={styles.statValue}>${(totalMonthly * 12).toFixed(0)}</Text>
                  <Text style={styles.statLabel}>Yearly</Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Categories Filter */}
          <View style={styles.categoriesSection}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContainer}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryChip,
                    selectedCategory === category && styles.categoryChipActive
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text style={[
                    styles.categoryChipText,
                    selectedCategory === category && styles.categoryChipTextActive
                  ]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Subscriptions List */}
          <View style={styles.subscriptionsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {selectedCategory === 'All' ? 'All Subscriptions' : selectedCategory}
              </Text>
              <Text style={styles.subscriptionCount}>{filteredSubscriptions.length} items</Text>
            </View>

            {filteredSubscriptions.map((subscription) => (
              <TouchableOpacity 
                key={subscription.id} 
                style={styles.subscriptionCard}
              >
                <LinearGradient
                  colors={subscription.color}
                  style={styles.subscriptionIcon}
                >
                  <Ionicons name={getIconName(subscription.icon)} size={28} color="#fff" />
                </LinearGradient>

                <View style={styles.subscriptionInfo}>
                  <Text style={styles.subscriptionTitle}>{subscription.title}</Text>
                  <View style={styles.subscriptionMeta}>
                    <MaterialCommunityIcons name="calendar-clock" size={14} color="#8e8e93" />
                    <Text style={styles.subscriptionDate}>Next: {subscription.nextBilling}</Text>
                  </View>
                </View>

                <View style={styles.subscriptionRight}>
                  <Text style={styles.subscriptionAmount}>${subscription.amount}</Text>
                  <View style={styles.subscriptionBadge}>
                    <View style={styles.activeDot} />
                    <Text style={styles.activeBadgeText}>Active</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.moreButton}>
                  <Ionicons name="ellipsis-horizontal" size={20} color="#8e8e93" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>

          {/* Manage Section */}
          <View style={styles.manageSection}>
            <Text style={styles.sectionTitle}>Manage</Text>
            
            <TouchableOpacity style={styles.manageItem}>
              <View style={styles.manageIcon}>
                <MaterialCommunityIcons name="calendar-check" size={24} color="#667eea" />
              </View>
              <View style={styles.manageInfo}>
                <Text style={styles.manageTitle}>Payment Schedule</Text>
                <Text style={styles.manageDescription}>View upcoming payments</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.manageItem}>
              <View style={styles.manageIcon}>
                <MaterialCommunityIcons name="bell-ring" size={24} color="#667eea" />
              </View>
              <View style={styles.manageInfo}>
                <Text style={styles.manageTitle}>Notifications</Text>
                <Text style={styles.manageDescription}>Set payment reminders</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.manageItem}>
              <View style={styles.manageIcon}>
                <MaterialCommunityIcons name="chart-line" size={24} color="#667eea" />
              </View>
              <View style={styles.manageInfo}>
                <Text style={styles.manageTitle}>Spending Analytics</Text>
                <Text style={styles.manageDescription}>Track subscription costs</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <View style={styles.infoIcon}>
              <Ionicons name="information-circle" size={24} color="#667eea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Save Money</Text>
              <Text style={styles.infoText}>
                Review your subscriptions regularly to cancel unused services and save money
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
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
  },
  addIconButton: {
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
  totalCard: {
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  totalCardGradient: {
    borderRadius: 20,
    padding: 24,
  },
  totalCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalCardLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 42,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 20,
  },
  totalCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  totalCardStat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  totalCardDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  categoriesSection: {
    marginBottom: 24,
  },
  categoriesContainer: {
    paddingHorizontal: 24,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoryChipActive: {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8e8e93',
  },
  categoryChipTextActive: {
    color: '#fff',
  },
  subscriptionsSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeader: {
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
  subscriptionCount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8e8e93',
  },
  subscriptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  subscriptionIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  subscriptionInfo: {
    flex: 1,
  },
  subscriptionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  subscriptionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  subscriptionDate: {
    fontSize: 12,
    color: '#8e8e93',
  },
  subscriptionRight: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  subscriptionAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },
  subscriptionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00d4aa',
  },
  activeBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#00d4aa',
  },
  moreButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  manageSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  manageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  manageIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  manageInfo: {
    flex: 1,
  },
  manageTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  manageDescription: {
    fontSize: 12,
    color: '#8e8e93',
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#8e8e93',
    lineHeight: 18,
  },
  // No Data States
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  noDataContent: {
    alignItems: 'center',
    width: '100%',
  },
  noDataIcon: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  noDataTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
  },
  noDataDescription: {
    fontSize: 15,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  addButton: {
    width: '100%',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  addButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    gap: 12,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default SubscriptionsScreen;