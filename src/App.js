import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageContent from "./PageContent";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}
