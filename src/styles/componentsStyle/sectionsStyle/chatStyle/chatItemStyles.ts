import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE, WEIGHT } from '../../../../constants';

export default StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 8
  },
  activeChatItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.green,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontWeight: WEIGHT.medium,
    fontFamily: FONT.plusJakartaBold
  },
  timestamp: {
    color: COLORS.white50Percent,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular
  },
  lastMessage: {
    color: COLORS.white50Percent,
    fontSize: SIZE.sm,
    marginTop: 2,
    fontFamily: FONT.plusJakartaRegular
  },
  unreadBadge: {
    backgroundColor: COLORS.purple,
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 6,
    fontFamily: FONT.plusJakartaExtraLight
  },
  unreadCount: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: WEIGHT.medium,
  },
});
