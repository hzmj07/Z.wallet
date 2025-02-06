// app/(auth)/_layout.js
import { Stack } from "expo-router"; // Expo Router'ın Stack navigasyonunu import ediyoruz
import React from "react";

export default function MainLayout() {
  return (
    <Stack>
      {/* Her bir ekran için Stack.Screen tanımlıyoruz */}
      <Stack.Screen
        name="home" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />

      <Stack.Screen
        name="cards" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />

<Stack.Screen
        name="subscriptions" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />

<Stack.Screen
        name="settings" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />
      
<Stack.Screen
        name="profile" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />

<Stack.Screen
        name="findeUser" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />
      <Stack.Screen
        name="accountverification" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />
      <Stack.Screen
        name="averification" // app/(auth)/login.js dosyasına karşılık gelir
        options={{ headerShown: false }} // Başlık çubuğunu gizle
      />
    </Stack>
  );}