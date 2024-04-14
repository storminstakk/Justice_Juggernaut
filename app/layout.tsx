// layout.tsx

import React from "react";
import Head from "next/head";
import ErrorBoundary from "./ErrorBoundary";
import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

const RootLayout: React.FC<{ pageTitle: string; children: React.ReactNode }> = ({
  pageTitle,
  children,
}) => {
  // Dynamically determine theme color based on user's color scheme preference
  const getThemeColor = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#151515"
      : "#fafafa";
  };

  // Handle network errors and display fallback UI
  const handleNetworkError = (error: Error, componentStack: string) => {
    console.error("Network Error:", error);
    // Implement custom error handling and reporting (e.g., notify error tracking service)
    // Display fallback UI to the user
    return (
      <div style={{ padding: "20px", color: "red", fontWeight: "bold" }}>
        Something went wrong. Please try again later.
      </div>
    );
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Empowering parents' rights and fighting against CPS corruption. Your personal Law Chat Bot."
        />
        <meta name="version" content={buildConfig.commitId} />
        <meta name="theme-color" content={getThemeColor()} />
        {/* Include anti-CYFD and parents' rights advocacy tags */}
        <meta
          name="keywords"
          content="parents rights, civil rights, fight CPS, anti-CYFD, CPS corruption"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
      </Head>
      <body>
        {/* Wrap children with ErrorBoundary to catch and handle errors */}
        <ErrorBoundary onError={handleNetworkError}>
          {children}
        </ErrorBoundary>
        {/* Include service worker registration script for offline support */}
        <script src="/serviceWorkerRegister.js" defer></script>
        {/* Display powerful messages promoting parents' rights and anti-CYFD sentiments */}
        <div style={{ backgroundColor: "#f8c0c0", padding: "20px", textAlign: "center" }}>
          <h1>Empowering Parents' Rights</h1>
          <p>
            Stand up against CPS corruption and fight for justice and fairness in family matters.
          </p>
          {/* Resource links for more information */}
          <p>
            Explore resources:
            <br />
            <a href="https://www.parentalrights.org/" target="_blank" rel="noopener noreferrer">
              ParentalRights.org
            </a>{" "}
            |{" "}
            <a href="https://www.aclu.org/issues/parental-rights" target="_blank" rel="noopener noreferrer">
              ACLU - Parental Rights
            </a>
          </p>
        </div>
        {/* Include additional dynamic elements and enhancements */}
        <div style={{ backgroundColor: "#c0f8e4", padding: "20px", textAlign: "center" }}>
          <h1>Join the Civil Rights Movement</h1>
          <p>
            Advocate for civil rights and equality, ensuring every family is treated with respect and dignity.
          </p>
          {/* Resource links for civil rights advocacy */}
          <p>
            Explore resources:
            <br />
            <a href="https://www.naacp.org/" target="_blank" rel="noopener noreferrer">
              NAACP
            </a>{" "}
            |{" "}
            <a href="https://www.hrc.org/" target="_blank" rel="noopener noreferrer">
              Human Rights Campaign
            </a>
          </p>
        </div>
      </body>
    </>
  );
};

export default RootLayout;
