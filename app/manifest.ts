import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Komjirak Studio",
    short_name: "Komjirak",
    description: "Creating services that make both creators and users happy.",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#E63E2E",
    orientation: "portrait",
    prefer_related_applications: false,
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/images/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/images/og-image.png",
        sizes: "1200x1200",
        type: "image/png",
        label: "Komjirak Studio Homepage",
      },
    ],
    shortcuts: [
      {
        name: "View Products",
        url: "/#products",
        description: "View Komjirak Studio products",
      },
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.diary.komjirak",
        id: "com.diary.komjirak",
      },
      {
        platform: "itunes",
        url: "https://apps.apple.com/us/app/colorful-diary-your-day/id6670740993",
      },
    ],
  }
}
