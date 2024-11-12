import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE, WEIGHT } from '../../../../constants';

export default StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
  },
  activeChatItem: {
    backgroundColor: COLORS.white10Percent,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 0,
    width: 8,
    height: 8,
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
    fontFamily: FONT.plusJakartaMedium
  },
  timestamp: {
    color: COLORS.white50Percent,
    fontSize: SIZE.s,
    fontFamily: FONT.plusJakartaRegular
  },
  lastMessage: {
    color: COLORS.white50Percent,
    fontSize: SIZE.sm,
    marginTop: 2,
    fontFamily: FONT.plusJakartaRegular,
    width: '100%',
  },
  unreadBadge: {
    backgroundColor: COLORS.purple,
    borderRadius: 12,
    minWidth: 15,
    height: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 8,
    paddingHorizontal: 6,
    fontFamily: FONT.plusJakartaExtraLight,
    alignItems: 'flex-end', 
  },
  unreadCount: { 
    color: COLORS.white,
    fontSize: SIZE.s,
    fontWeight: WEIGHT.medium,
  },
  messageStatus: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    top: 0,
    left: 0,
  },
});
