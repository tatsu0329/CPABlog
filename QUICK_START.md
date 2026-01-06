# クイックスタートガイド

このガイドでは、問題集や記事を追加するための最短手順を説明します。

## 🚀 問題集を追加する（5分）

### ステップ1: テンプレートをコピー

```bash
cp data/templates/question-template.json data/jissen-hoshu/dai8kai/kansa/2026.json
```

### ステップ2: JSONファイルを編集

`data/jissen-hoshu/dai8kai/kansa/2026.json` を開いて、問題を追加します。

### ステップ3: 問題一覧ページを更新

`app/jissen-hoshu/dai8kai/kansa/page.tsx` を開いて、`availableYears` 配列に年度を追加：

```typescript
const availableYears = [
  { year: 2026, date: "2026年3月XX日（X）実施" }, // 追加
  { year: 2025, date: "2025年3月16日（日）実施" },
  // ...
]
```

### ステップ4: 確認

```bash
npm run build
```

エラーがなければ完了です！

📖 **詳細は**: `HOW_TO_ADD_QUESTIONS.md` を参照

---

## 📝 記事を追加する（5分）

### ステップ1: ディレクトリとファイルを作成

```bash
mkdir -p app/new-article
touch app/new-article/page.tsx
```

### ステップ2: ページコンポーネントを作成

`app/new-article/page.tsx` に、`HOW_TO_ADD_ARTICLES.md` のテンプレートをコピーして編集します。

### ステップ3: 確認

```bash
npm run dev
```

ブラウザで `http://localhost:3000/new-article` にアクセスして確認します。

📖 **詳細は**: `HOW_TO_ADD_ARTICLES.md` を参照

---

## 📚 ドキュメント一覧

- **問題集の追加**: `HOW_TO_ADD_QUESTIONS.md`
- **記事の追加**: `HOW_TO_ADD_ARTICLES.md`
- **データ構造**: `data/README.md`
- **テンプレート**: `data/templates/question-template.json`

---

## ⚠️ よくあるエラーと解決方法

### JSONエラー: "制御文字が含まれています"

**原因**: タブ文字が含まれている

**解決**: タブを削除し、必要に応じて `\\n` で改行に置き換え

### JSONエラー: "カンマが不正です"

**原因**: 最後の要素の後にカンマがある

**解決**: 余分なカンマを削除

### ビルドエラー: "Data not found"

**原因**: JSONファイルが正しい場所にない、またはファイル名が間違っている

**解決**: 
- ファイルが `data/jissen-hoshu/dai8kai/kansa/[年度].json` にあるか確認
- ファイル名が数字のみか確認（例: `2026.json`）

---

## 💡 ヒント

- **テンプレートを使用**: `data/templates/question-template.json` をコピーして使用すると、正しい形式で始められます
- **既存ファイルを参考**: 既存の `2025.json` などを参考にすると、形式が理解しやすくなります
- **段階的に追加**: 最初は1問だけ追加して動作確認し、その後すべての問題を追加することをおすすめします

