export default {
  // Api
  Api_Base_Url: process.env.EXPO_PUBLIC_API_URL,

  // Keys
  Token_Key: 'auth-token',

  Auth_Routes: ['/login', '/signup', 'forget-password'],

  // Mode
  App_Mode: process.env.EXPO_PUBLIC_MODE,
};
