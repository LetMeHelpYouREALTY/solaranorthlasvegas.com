/** Build InfoWindow content from text nodes (no HTML injection from Places data). */
export function buildPlaceInfoWindowContent(
  name: string,
  address: string,
  directionsUrl: string,
): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "220px";

  const title = document.createElement("strong");
  title.textContent = name;
  root.appendChild(title);

  if (address) {
    const addr = document.createElement("p");
    addr.style.margin = "0.35rem 0 0";
    addr.style.fontSize = "0.85rem";
    addr.textContent = address;
    root.appendChild(addr);
  }

  const linkWrap = document.createElement("p");
  linkWrap.style.margin = "0.5rem 0 0";
  const link = document.createElement("a");
  link.href = directionsUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  linkWrap.appendChild(link);
  root.appendChild(linkWrap);

  return root;
}

export function buildCommunityInfoWindowContent(
  communityName: string,
  markerLabel: string,
  subtitle: string,
): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "240px";

  const title = document.createElement("strong");
  title.textContent = communityName;
  root.appendChild(title);

  const label = document.createElement("p");
  label.style.margin = "0.35rem 0 0";
  label.style.fontSize = "0.85rem";
  label.textContent = markerLabel;
  root.appendChild(label);

  const sub = document.createElement("p");
  sub.style.margin = "0.5rem 0 0";
  sub.style.fontSize = "0.85rem";
  sub.textContent = subtitle;
  root.appendChild(sub);

  return root;
}
