# 問題集の追加方法

このガイドでは、監査総合グループ第 8 回考査の問題集を追加する方法を説明します。

## 📁 ファイル構造

問題集のデータは以下のディレクトリに格納されます：

```
data/
  └── jissen-hoshu/
      └── dai8kai/
          └── kansa/
              ├── 2025.json
              ├── 2024.json
              ├── 2023.json
              └── 2022.json
```

## 📝 追加手順

### ステップ 1: JSON ファイルの作成

1. `data/jissen-hoshu/dai8kai/kansa/` ディレクトリに新しい JSON ファイルを作成します
2. ファイル名は年度を表す数字にします（例: `2026.json`）
3. `data/templates/question-template.json` をコピーして、内容を編集します

### ステップ 2: JSON ファイルの編集

#### 基本構造

```json
{
  "category": {
    "exam": "監査第8回考査"
  },
  "questions": [
    // 問題の配列
  ]
}
```

#### 問題の構造

各問題は以下の形式です：

```json
{
  "id": "No.1",
  "question": "問題文",
  "choices": [
    {
      "label": "A",
      "text": "選択肢の内容"
    }
  ],
  "answer": "A",
  "explanation": "解説"
}
```

#### フィールドの説明

| フィールド    | 必須 | 説明                                     |
| ------------- | ---- | ---------------------------------------- |
| `id`          | ✅   | 問題番号（例: "No.1", "No.2"）           |
| `question`    | ✅   | 問題文。改行は `\\n` で表現              |
| `choices`     | ✅   | 選択肢の配列                             |
| `answer`      | ✅   | 正答（例: "A", "1A,2B"）                 |
| `explanation` | ❌   | 解説（空文字列 `""` または `null` も可） |

#### 選択肢の形式

**単一選択問題の場合：**

```json
"choices": [
  {
    "label": "A",
    "text": "選択肢Aの内容"
  },
  {
    "label": "B",
    "text": "選択肢Bの内容"
  }
]
```

**複数選択問題の場合：**

```json
"choices": [
  {
    "label": "1",
    "subChoices": [
      {
        "label": "A",
        "text": "選択肢1-A"
      },
      {
        "label": "B",
        "text": "選択肢1-B"
      }
    ]
  },
  {
    "label": "2",
    "subChoices": [
      {
        "label": "A",
        "text": "選択肢2-A"
      }
    ]
  }
]
```

複数選択問題の正答は、カンマ区切りで指定します（例: `"1A,2B"`）。

### ステップ 3: 問題一覧ページの更新

新しい年度を追加したら、`app/jissen-hoshu/dai8kai/kansa/page.tsx` の `availableYears` 配列に年度を追加します：

```typescript
const availableYears = [
  { year: 2026, date: "2026年3月XX日（X）実施" }, // 新規追加
  { year: 2025, date: "2025年3月16日（日）実施" },
  // ...
];
```

### ステップ 4: JSON の検証

JSON ファイルが正しい形式か確認します：

1. **構文チェック**: JSON の構文が正しいか（カンマ、括弧など）
2. **必須フィールド**: すべての問題に必須フィールドが含まれているか
3. **エスケープ**: 改行は `\\n`、タブ文字は使用しない
4. **文字エンコーディング**: UTF-8 で保存

#### よくあるエラー

- **制御文字エラー**: タブ文字（`\t`）が含まれている
  - 解決: タブを削除し、必要に応じて `\\n` で改行に置き換え
- **カンマエラー**: 最後の要素の後にカンマがある（例: `,}`）
  - 解決: 余分なカンマを削除
- **引用符エラー**: 文字列内の引用符がエスケープされていない
  - 解決: `"` を `\"` に変更

## 📋 チェックリスト

新しい問題集を追加する際のチェックリスト：

- [ ] JSON ファイルが正しいディレクトリに作成されている
- [ ] ファイル名が年度を表す数字になっている（例: `2026.json`）
- [ ] すべての問題に `id`, `question`, `choices`, `answer` が含まれている
- [ ] 改行は `\\n` で表現されている
- [ ] タブ文字が含まれていない
- [ ] JSON の構文が正しい（カンマ、括弧など）
- [ ] `app/jissen-hoshu/dai8kai/kansa/page.tsx` の `availableYears` に年度を追加した
- [ ] ビルドが成功する（`npm run build`）

## 🔍 テンプレートの使用

`data/templates/question-template.json` をコピーして使用すると、正しい形式で問題を追加できます。

```bash
# 例: 2026年度の問題集を作成
cp data/templates/question-template.json data/jissen-hoshu/dai8kai/kansa/2026.json
```

## 💡 ヒント

- **HTML タグの使用**: 問題文や解説に `<u>`, `<strong>`, `<em>` などの HTML タグを使用できます
- **画像の参照**: 画像は `public` ディレクトリに配置し、`<img src="/path/to/image.png" />` で参照できます
- **長い問題文**: 問題文が長い場合は、適切に改行（`\\n`）を入れて読みやすくします
- **解説の充実**: 解説は学習者にとって重要です。可能な限り詳しく記述することを推奨します

## 🚀 デプロイ前の確認

1. ローカルでビルドを実行: `npm run build`
2. エラーがないか確認
3. 開発サーバーで表示を確認: `npm run dev`
4. すべての問題が正しく表示されるか確認
5. 選択肢の選択、回答表示、解説表示が正常に動作するか確認

## 📚 関連ファイル

- テンプレート: `data/templates/question-template.json`
- 問題一覧ページ: `app/jissen-hoshu/dai8kai/kansa/page.tsx`
- 問題表示ページ: `app/jissen-hoshu/dai8kai/kansa/[year]/page.tsx`
- API ルート: `app/api/jissen-hoshu/dai8kai/kansa/[year]/route.ts`

