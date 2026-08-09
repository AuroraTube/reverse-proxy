# Node.js リバースプロキシ

指定したサイトをリバースプロキシして表示するシンプルなサーバーです。

## デフォルト転送先

`https://auroratube.yosshy-123.workers.dev`

## セットアップ

```bash
npm install
```

## 起動

```bash
npm start
```

ブラウザで http://localhost:3000 を開くと、転送先のサイトが表示されます。

## 環境変数

| 変数名 | 説明 | デフォルト |
|--------|------|------------|
| `TARGET_URL` | プロキシ先のURL | `https://auroratube.yosshy-123.workers.dev` |
| `PORT` | 待ち受けポート | `3000` |

## 開発時（ファイル変更で自動再起動）

```bash
npm run dev
```
