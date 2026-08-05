import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { appFonts } from "@/constants/fonts";

/** Render per request so footer copyright uses the server's current year. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://peopleconnect.world"),
  title: "PeopleConnect.World - Your Trusted HR Partner",
  description:
    "People Connect is a leading provider of HR services, including headhunting, payroll, and HR outsourcing. We offer customized solutions to help businesses of all sizes find and retain top talent, streamline their HR processes, and improve their bottom line",
  icons: {
    icon: "https://peopleconnect.world/images/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://peopleconnect.world",
    title: "PeopleConnect.World - Your Trusted HR Partner",
    description:
      "People Connect is a leading provider of HR services, including headhunting, payroll, and HR outsourcing. We offer customized solutions to help businesses of all sizes find and retain top talent, streamline their HR processes, and improve their bottom line",
    siteName: "People Connect",
    images: [
      {
        url: "https://peopleconnect.world/images/thumbnail.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6HJF7HM3BB"
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HJF7HM3BB');
          `}
        </Script>
        <Script id="crisp-chat">
          {`
            window.$crisp=[];window.CRISP_WEBSITE_ID="d7f2a484-48e8-4066-9450-d48a3af92eab";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script>
      </head>
      <body className={appFonts.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
