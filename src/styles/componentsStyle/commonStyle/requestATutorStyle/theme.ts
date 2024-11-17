export const colors = {
    primary: '#9333EA',
    primaryLight: '#B366FF',
    background: '#1E1B4B',
    surface: 'rgba(255, 255, 255, 0.1)',
    text: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    border: 'rgba(255, 255, 255, 0.2)',
    error: '#EF4444',
    success: '#10B981',
    disabled: 'rgba(255, 255, 255, 0.3)',
  };
  
  export const typography = {
    title: {
      fontSize: 24,
      fontWeight: '700' as const,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600' as const,
    },
    label: {
      fontSize: 14,
      fontWeight: '500' as const,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
    },
  };
  
  export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  };
  
  export const shadows = {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  };