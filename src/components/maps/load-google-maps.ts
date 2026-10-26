let mapsReady: Promise<void> | null = null;

export let mapsAuthFailed = false;
if (typeof window !== "undefined") {
  window.addEventListener("gmaps:auth-failure", () => {
    mapsAuthFailed = true;
  });
}

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return id || undefined;
}

/** Load Maps JavaScript API once per session (callback + auth-failure handling). */
export function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("ssr"));
  }
  if (typeof window.google?.maps?.importLibrary === "function") {
    return Promise.resolve();
  }
  if (mapsReady) {
    return mapsReady;
  }
  mapsReady = new Promise<void>((resolve, reject) => {
    const cb = "__gmapsReady";
    (window as unknown as Record<string, () => void>)[cb] = () => resolve();
    (window as unknown as Record<string, () => void>).gm_authFailure = () => {
      window.dispatchEvent(new Event("gmaps:auth-failure"));
      reject(new Error("gm_authFailure"));
    };
    const s = document.createElement("script");
    s.id = "google-maps-js-api";
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async&callback=${cb}`;
    s.async = true;
    s.onerror = () => {
      mapsReady = null;
      reject(new Error("maps script failed"));
    };
    document.head.appendChild(s);
  });
  return mapsReady;
}

/** @deprecated alias — prefer loadGoogleMaps after resolving the API key */
export function loadGoogleMapsApi(): Promise<typeof google> {
  const key = getGoogleMapsApiKey();
  if (!key) {
    return Promise.reject(new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set"));
  }
  return loadGoogleMaps(key).then(() => window.google);
}
