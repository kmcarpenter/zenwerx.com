const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Zenwerx - Michael Carpenter', // Navigation and Site Title
  siteTitleAlt: 'Zenwerx', // Alternative Site title for SEO
  siteTitleShort: 'Zenwerx', // short_name for manifest
  siteHeadline: 'Bringing the blue sparks since 2000!', // Headline for schema.org JSONLD
  siteUrl: 'https://zenwerx.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Michael Carpenter\'s personal website.',
  author: 'Michael Carpenter', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kmcarpenter_', // Twitter Usernangme
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
