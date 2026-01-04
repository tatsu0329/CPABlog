# テキスト装飾記法の具体例

## 実装可能な記法の一覧

### 1. 下線

```json
{
  "question": "下線部<u>Ａ</u>に関して、期間定額基準との違いに触れながら説明しなさい。"
}
```

表示例：下線部<u>Ａ</u>に関して、期間定額基準との違いに触れながら説明しなさい。

---

### 2. 太字

```json
{
  "question": "**給付算定式基準**とは何かを説明しなさい。"
}
```

または HTML タグ：

```json
{
  "question": "<strong>給付算定式基準</strong>とは何かを説明しなさい。"
}
```

表示例：**給付算定式基準**とは何かを説明しなさい。

---

### 3. 斜体

```json
{
  "question": "*会計基準*に基づいて答えなさい。"
}
```

または HTML タグ：

```json
{
  "question": "<em>会計基準</em>に基づいて答えなさい。"
}
```

表示例：*会計基準*に基づいて答えなさい。

---

### 4. 下線 + 太字の組み合わせ

```json
{
  "question": "下線部<u><strong>Ａ</strong></u>に関して説明しなさい。"
}
```

表示例：下線部<u><strong>Ａ</strong></u>に関して説明しなさい。

---

### 5. 色付きテキスト

```json
{
  "question": "空欄<span style=\"color: red;\">①</span>～<span style=\"color: red;\">⑤</span>に当てはまる語句を答えなさい。"
}
```

表示例：空欄 ① ～ ⑤ に当てはまる語句を答えなさい。

---

### 6. 背景色付きテキスト（ハイライト）

```json
{
  "question": "重要:<span style=\"background-color: yellow;\">この項目は必須です</span>"
}
```

表示例：重要:<span style="background-color: yellow;">この項目は必須です</span>

---

### 7. 上付き・下付き文字

```json
{
  "question": "X<sup>2</sup> + Y<sub>1</sub> = 0"
}
```

表示例：X<sup>2</sup> + Y<sub>1</sub> = 0

---

### 8. 組み合わせ例

```json
{
  "question": "下線部<u><strong>Ａ</strong></u>の<em>給付算定式基準</em>に関して、<span style=\"color: red;\">期間定額基準</span>との違いに触れながら説明しなさい。"
}
```

---

## 実装方法

### 簡単な実装（HTML タグのみ）

現在の実装で、`dangerouslySetInnerHTML`を使用：

```tsx
<div
  dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, "<br />") }}
/>
```

### より安全な実装（HTML エスケープ + 許可されたタグのみ）

HTML タグをサニタイズして使用：

```tsx
import DOMPurify from 'isomorphic-dompurify'

const sanitizedHtml = DOMPurify.sanitize(q.question.replace(/\\n/g, '<br />'), {
  allowedTags: ['u', 'strong', 'b', 'em', 'i', 'span', 'sup', 'sub'],
  allowedAttributes: {
    'span': ['style']
  }
})

<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
```

---

## 推奨記法

**試験問題の場合、以下の記法を推奨：**

1. **下線**: `<u>テキスト</u>` - 問題文の下線部を表現
2. **太字**: `<strong>テキスト</strong>` - 重要な語句を強調
3. **改行**: `\n` - 段落の区切り（既に実装済み）
4. **色付き**: `<span style="color: red;">テキスト</span>` - 空欄番号などを強調

これらを組み合わせることで、問題文を効果的に表現できます。




