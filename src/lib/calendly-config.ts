/** Single event used for badge, inline, and popup widgets */
export const CALENDLY_EVENT_URL =
  "https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation" as const;

export const CALENDLY_WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js" as const;

export const CALENDLY_WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css" as const;

export const CALENDLY_BADGE_OPTIONS = {
  url: CALENDLY_EVENT_URL,
  text: "Schedule time with me",
  color: "#0069ff",
  textColor: "#ffffff",
  branding: false,
} as const;

export const CALENDLY_INLINE_MIN_WIDTH_PX = 320;
export const CALENDLY_INLINE_HEIGHT_PX = 700;
