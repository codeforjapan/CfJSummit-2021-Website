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
  domain: '2021.c4j.jp',
  meta: {
    noindex: true,
    facebook: {
      appID: '',
    },
    twitter: {
      siteUsername: '',
      creatorUsername: '',
    },
  },
  locales: [
    {
      langName: 'ja',
      timeZone: 'Asia/Tokyo',
      siteDescription: 'サイトのインデックに使用する説明文です',
      siteName: 'サイト名です',
      siteKeyWord: 'サイトきーわーど',
    },
  ],
}

module.exports = SiteConfig
