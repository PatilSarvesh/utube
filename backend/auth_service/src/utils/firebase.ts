import admin from 'firebase-admin';

const serviceAccount = process.env.SERVICE_ACCOUNT!
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const verifyAccessToken = async (accessToken: string) => {
    try {
      const decodedToken = await admin.auth().verifyIdToken(accessToken);
      return decodedToken.email;
    } catch (error) {
      console.error('Error verifying access token:', error);
      throw error;
    }
  }