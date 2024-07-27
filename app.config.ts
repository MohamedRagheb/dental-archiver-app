export default ({ config }: any) => ({
  ...config,
  extra: {
    expoPublicApiUrl: process.env.EXPO_PUBLIC_API_URL || '',
  },
});
