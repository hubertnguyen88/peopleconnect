"use client";

import React, { memo } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const GoogleRecaptchaWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const recaptchaKey: string | undefined =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default memo(GoogleRecaptchaWrapper);
