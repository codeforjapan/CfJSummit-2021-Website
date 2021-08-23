/**
 * サイトの設定ファイルです
 *
 * 最初の言語がデフォルトの言語になります
 *
 * langName: 言語名
 * indexDescription: indexの説明文
 * siteName: サイト名（色々な場所で使われます）
 *
 * @type {import("src/types/site.config.d.ts")}
 */
const SiteConfig = {
  domain: 'summit2021.code4japan.org',
  meta: {
    noindex: true,
    facebook: {
      appID: '',
    },
    twitter: {
      siteUsername: '@codeforjapan',
      creatorUsername: '@codeforjapan',
    },
  },
  locales: [
    {
      langName: 'ja',
      timeZone: 'Asia/Tokyo',
      siteDescription:
        '東日本大震災から10年。' +
        '自分に何ができるのか、テクノロジーで何かできるのか。' +
        '必死に考え、手を動かしたあの時に日本のシビックテックは生まれました。',
      siteName: 'Code for Japan Summit 2021',
      siteKeyWord:
        'Summit, Code for Japan, CfJ, 2021 Summit, Code for Japan Summit, シビックテック, コードフォージャパン ',
      vocabulary: {
        overview: '概要',
        speakers: '登壇者',
        backToList: 'PROGRAM 一覧へ',
      },
    },
    {
      langName: 'en',
      timeZone: 'Asia/Tokyo',
      siteDescription:
        '東日本大震災から10年。' +
        '自分に何ができるのか、テクノロジーで何かできるのか。' +
        '必死に考え、手を動かしたあの時に日本のシビックテックは生まれました。',
      siteName: 'Code for Japan Summit 2021',
      siteKeyWord:
        'Summit, Code for Japan, CfJ, 2021 Summit, Code for Japan Summit, シビックテック, コードフォージャパン ',
      vocabulary: {
        overview: 'Overview',
        speakers: 'Speakers',
        backToList: 'Return to Program List',
      },
    },
    {
      langName: 'zh-tw',
      timeZone: 'Asia/Tokyo',
      siteDescription:
        '東日本大震災から10年。' +
        '自分に何ができるのか、テクノロジーで何かできるのか。' +
        '必死に考え、手を動かしたあの時に日本のシビックテックは生まれました。',
      siteName: 'Code for Japan Summit 2021',
      siteKeyWord:
        'Summit, Code for Japan, CfJ, 2021 Summit, Code for Japan Summit, シビックテック, コードフォージャパン ',
      vocabulary: {
        overview: 'Overview',
        speakers: 'Speakers',
        backToList: 'Return to Program List',
      },
    },
    {
      langName: 'zh-cn',
      timeZone: 'Asia/Tokyo',
      siteDescription:
        '東日本大震災から10年。' +
        '自分に何ができるのか、テクノロジーで何かできるのか。' +
        '必死に考え、手を動かしたあの時に日本のシビックテックは生まれました。',
      siteName: 'Code for Japan Summit 2021',
      siteKeyWord:
        'Summit, Code for Japan, CfJ, 2021 Summit, Code for Japan Summit, シビックテック, コードフォージャパン ',
      vocabulary: {
        overview: 'Overview',
        speakers: 'Speakers',
        backToList: 'Return to Program List',
      },
    },
  ],
}

module.exports = SiteConfig
