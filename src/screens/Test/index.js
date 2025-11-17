import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';

import {MapView} from '@maplibre/maplibre-react-native';

const {width, height} = Dimensions.get('window');

const EMOJIS = [
  {id: 1, icon: '😍', top: height * 0.10, left: width * 0.25},
  {id: 2, icon: '😊', top: height * 0.18, left: width * 0.65},
  {id: 3, icon: '😊', top: height * 0.30, left: width * 0.20},
  {id: 4, icon: '🙂', top: height * 0.38, left: width * 0.70},
  {id: 5, icon: '😊', top: height * 0.45, left: width * 0.40},
];

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Map */}
      <MapView
        style={StyleSheet.absoluteFill}
        mapStyle={require('../../assets/json/map.json')}
      />

      {/* Emoji pinler */}
      {EMOJIS.map(item => (
        <Text
          key={item.id}
          style={[
            styles.emoji,
            {top: item.top, left: item.left},
          ]}>
          {item.icon}
        </Text>
      ))}

      {/* Alt card */}
      <View style={styles.cardContainer}>
        <View style={styles.cardInner}>
          {/* Profil foto */}
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
              }}
              style={styles.avatar}
            />
          </View>

          {/* İsim + metin */}
          <View style={{flex: 1}}>
            <Text style={styles.nameText}>Olivia, 28</Text>
            <Text style={styles.subtitleText}>Anyone up for a coffee? ☕️</Text>

            {/* Butonlar */}
            <View style={styles.actionsRow}>
              <View style={styles.actionCircle}>
                <Text style={styles.actionIcon}>💬</Text>
              </View>
              <View style={styles.actionCircle}>
                <Text style={styles.actionIcon}>🎁</Text>
              </View>
              <View style={styles.likePill}>
                <Text style={styles.likeIcon}>❤️</Text>
                <Text style={styles.likeCount}>12</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4ee',
  },
  emoji: {
    position: 'absolute',
    fontSize: 30,
  },
  cardContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
  },
  cardInner: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
    elevation: 4,
  },
  avatarWrapper: {
    marginRight: 12,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#272727',
  },
  subtitleText: {
    marginTop: 2,
    fontSize: 14,
    color: '#555',
  },
  actionsRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 18,
  },
  likePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    marginLeft: 'auto',
  },
  likeIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  likeCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
});
