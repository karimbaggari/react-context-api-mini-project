import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import ThemeProvider from "./contexts/ThemContext";
import LanguageProvider from "./contexts/LanguageContext";
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
