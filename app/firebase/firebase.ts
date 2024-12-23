import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase only on the client side
let app;

if (typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  app = initializeApp(firebaseConfig);

  // Only initialize analytics in the client-side
  if (typeof window !== "undefined" && app) {
    getAnalytics(app);  // Initialize Firebase Analytics
  }
}

export { app };
