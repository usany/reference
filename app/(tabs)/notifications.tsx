import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'trip' | 'payment' | 'promotion' | 'system';
}

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Trip Confirmed',
      message: 'Your shuttle to downtown has been confirmed for 3:00 PM',
      time: '2 hours ago',
      read: false,
      type: 'trip'
    },
    {
      id: '2',
      title: 'Payment Successful',
      message: '$12.50 has been charged to your card ending in 4242',
      time: '5 hours ago',
      read: false,
      type: 'payment'
    },
    {
      id: '3',
      title: 'Special Offer',
      message: 'Get 20% off your next 3 rides this week!',
      time: '1 day ago',
      read: true,
      type: 'promotion'
    },
    {
      id: '4',
      title: 'Trip Completed',
      message: 'Your trip from airport to hotel has been completed',
      time: '2 days ago',
      read: true,
      type: 'trip'
    },
    {
      id: '5',
      title: 'System Update',
      message: 'New features added: Real-time tracking and improved booking',
      time: '3 days ago',
      read: true,
      type: 'system'
    }
  ]);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'trip':
        return 'car-outline';
      case 'payment':
        return 'card-outline';
      case 'promotion':
        return 'bag-outline';
      case 'system':
        return 'settings-outline';
      default:
        return 'notifications-outline';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'trip':
        return '#007AFF';
      case 'payment':
        return '#34C759';
      case 'promotion':
        return '#FF9500';
      case 'system':
        return '#8E8E93';
      default:
        return '#007AFF';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        {unreadCount > 0 && (
          <Pressable style={styles.markAllButton} onPress={markAllAsRead}>
            <Text style={styles.markAllText}>Mark all as read</Text>
          </Pressable>
        )}
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <Pressable
            key={notification.id}
            style={[
              styles.notificationItem,
              !notification.read && styles.unreadItem
            ]}
            onPress={() => markAsRead(notification.id)}
          >
            <View style={styles.iconContainer}>
              <Ionicons
                name={getIcon(notification.type)}
                size={24}
                color={getIconColor(notification.type)}
              />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.titleRow}>
                <Text style={[
                  styles.notificationTitle,
                  !notification.read && styles.unreadTitle
                ]}>
                  {notification.title}
                </Text>
                {!notification.read && (
                  <View style={styles.unreadDot} />
                )}
              </View>
              <Text style={styles.notificationMessage}>
                {notification.message}
              </Text>
              <Text style={styles.notificationTime}>
                {notification.time}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  markAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#007AFF',
    borderRadius: 15,
  },
  markAllText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  unreadItem: {
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  unreadTitle: {
    color: '#007AFF',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
});
