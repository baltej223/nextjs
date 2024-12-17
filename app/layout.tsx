"use client";
import "./globals.css";
import React from "react";
import Snowfall from 'react-snowfall'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <><Snowfall /></>
        {children}
      </body>
    </html>
  );
}
