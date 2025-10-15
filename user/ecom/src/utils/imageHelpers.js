import AppURL from "../api/AppURL";

const apiOrigin = (() => {
  try {
    const baseUrl = new URL(AppURL.BaseURL);
    return `${baseUrl.protocol}//${baseUrl.host}`;
  } catch (error) {
    return "";
  }
})();

export const FALLBACK_PRODUCT_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>\
  <defs>\
    <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>\
      <stop offset='0%' stop-color='#f5f5f5'/>\
      <stop offset='100%' stop-color='#d9d9d9'/>\
    </linearGradient>\
  </defs>\
  <rect width='300' height='300' fill='url(#gradient)'/>\
  <g fill='#9e9e9e'>\
    <path d='M196.5 135.5a46.5 46.5 0 1 1-93 0 46.5 46.5 0 0 1 93 0z' opacity='0.35'/>\
    <path d='M63 237h174a9 9 0 0 0 7.2-14.4l-55.5-78a9 9 0 0 0-14.4 0l-26.4 37.2-16.2-22.8a9 9 0 0 0-14.4 0l-64.8 91.8A9 9 0 0 0 63 237z'/>\
  </g>\
</svg>`);

const isAbsoluteUrl = (value) => /^(?:[a-z]+:)?\/\//i.test(value);

export const resolveImageUrl = (imagePath, fallback = FALLBACK_PRODUCT_IMAGE) => {
  if (typeof imagePath !== "string") {
    return fallback;
  }

  const trimmedPath = imagePath.trim();

  if (!trimmedPath) {
    return fallback;
  }

  if (isAbsoluteUrl(trimmedPath) || trimmedPath.startsWith("data:")) {
    return trimmedPath;
  }

  if (!apiOrigin) {
    return trimmedPath.startsWith("/") ? trimmedPath : `/${trimmedPath}`;
  }

  const normalisedPath = trimmedPath.startsWith("/")
    ? trimmedPath
    : `/${trimmedPath}`;

  return `${apiOrigin}${normalisedPath}`;
};

export const normaliseImageList = (images, fallback = FALLBACK_PRODUCT_IMAGE) => {
  const normalised = images
    .filter((image) => typeof image === "string" && image.trim())
    .map((image) => resolveImageUrl(image, fallback));

  if (normalised.length === 0) {
    return [fallback];
  }

  return Array.from(new Set(normalised));
};
