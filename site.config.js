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
    noindex: false,
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
        streaming: '配信（YouTube Live）',
        livecaption: '字幕（UDトーク）',
        forweb: 'ブラウザで表示 ',
        forapp: 'アプリで表示',
        graphicrecording: 'グラフィックレコーディング',
        graphicer: 'グラフィッカー',
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
        streaming: 'YouTube Live',
        livecaption: 'Live Caption',
        forweb: 'For Web Browser',
        forapp: 'For App',
        graphicrecording: 'Graphic Recording',
        graphicer: 'Graphic artists',
      },
    },
    {
      langName: 'zh-TW',
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
        streaming: 'YouTube Live',
        livecaption: 'Live Caption',
        forweb: 'For Web Browser',
        forapp: 'For App',
        graphicrecording: 'Graphic Recording',
        graphicer: 'Graphic artists',
      },
    },
    {
      langName: 'zh-CN',
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
        streaming: 'YouTube Live',
        livecaption: 'Live Caption',
        forweb: 'For Web Browser',
        forapp: 'For App',
        graphicrecording: 'Graphic Recording',
        graphicer: 'Graphic artists',
      },
    },
  ],
}

module.exports = SiteConfig
