# 画像挿入ガイド

JSONデータ内に画像を挿入する方法について説明します。

## 📸 画像の配置場所

画像ファイルは `/public` ディレクトリに配置してください。

```
/public
  /images
    /jissen-hoshu
      /dai8kai
        /kansa
          /2025
            - image1.png
            - image2.jpg
            ...
```

## 🖼️ 画像の挿入方法

### 基本的な使い方

JSONデータ内で `<img>` タグを使用します：

```json
{
  "question": "問題文の内容\\n<img src=\"/images/jissen-hoshu/dai8kai/kansa/2025/image1.png\" alt=\"説明\" />\\n続きの文章"
}
```

### 画像の属性

- `src`: 画像のパス（`/public`からの相対パス、先頭に`/`を付ける）
- `alt`: 画像の説明（アクセシビリティのため必須推奨）
- `width`: 幅（オプション）
- `height`: 高さ（オプション）
- `style`: インラインスタイル（オプション）

### 使用例

#### 1. 基本的な画像

```json
{
  "question": "以下の図を参照してください。\\n<img src=\"/images/jissen-hoshu/dai8kai/kansa/2025/diagram.png\" alt=\"説明図\" />\\n上記の図に基づいて答えなさい。"
}
```

#### 2. サイズを指定した画像

```json
{
  "question": "図表：\\n<img src=\"/images/jissen-hoshu/dai8kai/kansa/2025/table.png\" alt=\"表\" width=\"600\" height=\"400\" />"
}
```

#### 3. スタイルを適用した画像

```json
{
  "question": "図：\\n<img src=\"/images/jissen-hoshu/dai8kai/kansa/2025/chart.png\" alt=\"グラフ\" style=\"max-width: 100%; height: auto;\" />"
}
```

#### 4. 中央寄せの画像

```json
{
  "question": "図：\\n<img src=\"/images/jissen-hoshu/dai8kai/kansa/2025/image.png\" alt=\"図\" style=\"display: block; margin: 20px auto; max-width: 100%;\" />"
}
```

## 📋 推奨事項

### 1. 画像ファイル名

- わかりやすい名前を使用（例：`question1-diagram.png`）
- 年度ごとにディレクトリを分ける
- 拡張子は統一（`.png`、`.jpg`、`.svg`など）

### 2. 画像の最適化

- ファイルサイズを小さくする（圧縮）
- 適切な形式を選択（写真は`.jpg`、図表は`.png`、アイコンは`.svg`）
- 解像度は必要最小限に

### 3. アクセシビリティ

- `alt`属性を必ず設定
- 画像が装飾的な場合は`alt=""`を設定
- 説明が必要な場合は`alt`に詳細な説明を記述

### 4. レスポンシブ対応

- `style="max-width: 100%; height: auto;"`を使用してモバイル対応

## 🎯 実装例

### 年度別のディレクトリ構造

```
/public
  /images
    /jissen-hoshu
      /dai8kai
        /kansa
          /2025
            - question1-image1.png
            - question1-image2.png
            - question2-diagram.png
          /2024
            - question1-image1.png
            ...
```

### JSONデータでの使用

```json
{
  "id": "No.2",
  "question": "問題1-問1 問1 以下の図を参照してください。\\n<img src=\"/images/jissen-hoshu/dai8kai/kansa/2025/question1-diagram.png\" alt=\"問題1の図表\" style=\"max-width: 100%; height: auto; display: block; margin: 20px auto;\" />\\n上記の図に基づいて、以下の設問に答えなさい。\\n1. 図中のA点の座標を答えなさい。"
}
```

## ⚠️ 注意事項

1. **パスの指定**
   - `/public`ディレクトリからの相対パスを使用
   - パスは`/`で始める（例：`/images/...`）
   - スペースを含むファイル名は避ける

2. **ファイル形式**
   - 対応形式：`.png`、`.jpg`、`.jpeg`、`.gif`、`.svg`、`.webp`
   - 推奨：`.png`（図表）、`.jpg`（写真）、`.svg`（アイコン）

3. **ファイルサイズ**
   - 大きな画像は読み込みが遅くなるため、適切に圧縮
   - 1MB以下を推奨

4. **セキュリティ**
   - 信頼できるソースからの画像のみを使用
   - 悪意のある画像ファイルは使用しない

## 🔧 トラブルシューティング

### 画像が表示されない場合

1. パスが正しいか確認（`/public`からの相対パス）
2. ファイルが実際に存在するか確認
3. ファイル名の大文字小文字が正しいか確認
4. ブラウザのコンソールでエラーを確認

### 画像が大きすぎる場合

```json
{
  "question": "<img src=\"/images/...\" alt=\"...\" style=\"max-width: 600px; height: auto;\" />"
}
```

### 画像を中央寄せしたい場合

```json
{
  "question": "<img src=\"/images/...\" alt=\"...\" style=\"display: block; margin: 20px auto; max-width: 100%;\" />"
}
```

