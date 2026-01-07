# 記事の追加方法

このガイドでは、サイトに新しい記事やページを追加する方法を説明します。

## 📁 現在のページ構造

```
app/
  ├── page.tsx              # ホームページ
  ├── tandoku/              # 短答式試験
  │   └── page.tsx
  ├── ronbun/               # 論文式試験
  │   └── page.tsx
  ├── shuryo/               # 修了考査
  │   └── page.tsx
  ├── study-guide/          # 対策方法
  │   ├── page.tsx
  │   ├── tandoku/
  │   ├── ronbun/
  │   └── shuryo/
  ├── jissen-hoshu/         # 実務補習
  │   └── dai8kai/
  └── other/                # その他
      └── page.tsx
```

## 📝 記事の追加方法

### 方法 1: 新しいページを作成する

#### ステップ 1: ディレクトリとファイルの作成

Next.js の App Router では、ディレクトリ構造がそのまま URL になります。

例: `/new-article` というページを作成する場合

```bash
mkdir -p app/new-article
touch app/new-article/page.tsx
```

#### ステップ 2: ページコンポーネントの作成

`app/new-article/page.tsx` に以下のようなテンプレートを使用します：

```tsx
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NewArticlePage() {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbarRef.current.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
      } else {
        navbarRef.current.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="site-title">記事のタイトル</h1>
          <p className="site-subtitle">記事のサブタイトル</p>
        </div>
      </header>

      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <ul className="nav-menu">
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/tandoku">短答式試験</Link>
            </li>
            <li>
              <Link href="/ronbun">論文式試験</Link>
            </li>
            <li>
              <Link href="/shuryo">修了考査</Link>
            </li>
            <li>
              <Link href="/study-guide">対策方法</Link>
            </li>
            <li>
              <Link href="/other">その他</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <article className="exam-section">
            <div className="exam-header">
              <span className="exam-number">01</span>
              <h2>セクションのタイトル</h2>
            </div>

            <div className="exam-content">
              <p>記事の内容をここに記述します。</p>

              <div
                className="exam-info-box highlight"
                style={{ marginTop: "20px" }}
              >
                <h4>重要な情報</h4>
                <p>強調したい内容をここに記述します。</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2025 公認会計士試験ガイド.
            最新情報は公式サイトでご確認ください.
          </p>
          <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
            <Link
              href="/privacy"
              style={{
                color: "white",
                textDecoration: "underline",
                marginRight: "20px",
              }}
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              style={{ color: "white", textDecoration: "underline" }}
            >
              利用規約
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
```

#### ステップ 3: ナビゲーションメニューへの追加（必要に応じて）

新しいページをナビゲーションメニューに追加する場合は、各ページの `nav-menu` セクションを更新します。

### 方法 2: 既存のページを編集する

既存のページを編集する場合は、該当する `page.tsx` ファイルを直接編集します。

例: ホームページを編集する場合

- ファイル: `app/page.tsx`

例: 短答式試験のページを編集する場合

- ファイル: `app/tandoku/page.tsx`

## 🎨 スタイリング

### 利用可能な CSS クラス

既存のページで使用されている CSS クラスを利用できます：

- `.header`: ヘッダー
- `.navbar`: ナビゲーションバー
- `.exam-section`: セクション
- `.exam-header`: セクションヘッダー
- `.exam-number`: セクション番号
- `.exam-content`: セクションコンテンツ
- `.exam-info-box`: 情報ボックス
- `.highlight`: 強調スタイル

### インラインスタイルの使用

必要に応じて、インラインスタイルも使用できます：

```tsx
<div style={{ marginTop: "20px", padding: "15px" }}>
  <p>コンテンツ</p>
</div>
```

## 📋 チェックリスト

新しい記事を追加する際のチェックリスト：

- [ ] ディレクトリとファイルが正しい場所に作成されている
- [ ] ページコンポーネントが正しく実装されている
- [ ] ナビゲーションバーが統一されている
- [ ] フッターが統一されている
- [ ] リンクが正しく機能している
- [ ] ビルドが成功する（`npm run build`）
- [ ] 開発サーバーで表示を確認した（`npm run dev`）

## 💡 ヒント

- **コンポーネントの再利用**: 共通のヘッダーやフッターは、必要に応じてコンポーネント化を検討できます
- **Markdown の使用**: 長い記事の場合は、Markdown ファイルを読み込む方法も検討できます
- **画像の配置**: 画像は `public` ディレクトリに配置し、`/path/to/image.png` で参照できます
- **リンクの統一**: 内部リンクには `Link` コンポーネントを使用します

## 🚀 デプロイ前の確認

1. ローカルでビルドを実行: `npm run build`
2. エラーがないか確認
3. 開発サーバーで表示を確認: `npm run dev`
4. すべてのリンクが正しく機能するか確認
5. モバイル表示も確認（必要に応じて）

## 📚 参考例

既存のページを参考にしてください：

- ホームページ: `app/page.tsx`
- 短答式試験: `app/tandoku/page.tsx`
- 実務補習第 8 回考査: `app/jissen-hoshu/dai8kai/page.tsx`
- その他: `app/other/page.tsx`

