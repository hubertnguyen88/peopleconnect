"use client";

export const scrollTo = (id: string, smooth = true) => {
  try {
    const anchor = document?.getElementById(id);
    if (anchor) {
      /* Scroll to that element if present */
      const behavior = !smooth ? undefined : "smooth";
      setTimeout(
        () =>
          anchor.scrollIntoView({
            behavior,
          }),
        0
      );
    }
  } catch {}
};
