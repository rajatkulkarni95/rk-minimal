export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://rajatkulkarni.dev/" : "";
export const baseEmail = "rajatkulkarni95@gmail.com";

export const defaultSEO = {
  title: "Rajat Kulkarni",
  description: "Frontend focused Software Engineer. Okayish at most things.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Rajat Kulkarni",
    images: [
      {
        url: `${baseUrl}/img/og/default.png`,
        alt: "Rajat Kulkarni",
      },
    ],
  },
  twitter: {
    handle: "@JokingRajat",
    site: "@JokingRajat",
    cardType: "summary_large_image",
  },
};

// interface SEOProps {
//   title?: string;
//   description?: string;
//   image?: string;
//   url?: string;
// }

// export function extendSEO(options: SEOProps) {
//   const images = options.image
//     ? [{ url: `${baseUrl}/static/${options.image}` }]
//     : defaultSEO.openGraph.images;

//   return {
//     ...defaultSEO,
//     ...options,
//     url: `${baseUrl}/${options.url}`,
//     openGraph: {
//       ...defaultSEO.openGraph,
//       images,
//       url: `${baseUrl}/${options.url}`,
//     },
//   };
// }
