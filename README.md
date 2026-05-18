# yoheic01.github.io

個人ホームページ。Jekyll で生成し、GitHub Pages で公開。

## どこを編集するか

論文・経歴などのコンテンツは `_data/` 配下の YAML を編集するだけ。HTML は触らない。

| 編集したいもの | 編集するファイル |
|---|---|
| 論文を追加 / 修正 | `_data/publications.yml` |
| 経歴 (Background) | `_data/cv.yml` |
| 賞 (Awards) | `_data/awards.yml` |
| フェローシップ | `_data/fellowships.yml` |
| 招待講演 (Talks) | `_data/talks.yml` |
| 見た目 (CSS) | `assets/css/style.css` |
| ページ構造 (ナビ・各セクションの並びなど) | `index.html`, `_layouts/default.html`, `_includes/` |
| OGP/JSON-LD/Analytics | `_includes/head.html`, `_config.yml` |

## 論文を1本追加する例

`_data/publications.yml` の **先頭** にエントリを追加する（リスト先頭が最新扱い）:

```yaml
- authors: "Foo Bar, [[Yohei Cho]], and Baz Qux*"
  title: "Some catalytic discovery"
  journal: "Nature Catalysis"
  volume: 12
  issue: 3
  pages: "100–110"
  year: 2026
  doi: "10.1038/example"
  note: "Front Cover"        # 任意
```

ルール:
- 自分の名前は `[[Yohei Cho]]` で囲むとアクセント色で強調表示。
- corresponding author は名前のあとに `*` を付ける。
- タイトル中に `<sub>2</sub>` のような HTML を入れてもそのままレンダリングされる。
- `volume` / `issue` / `pages` は省略可。プレプリントなら全部省略してよい。
- 査読受理中なら `status: "accepted in press"` を入れる。

書き終わったら commit して push、それだけ。GitHub Pages が自動でビルド & デプロイ。

## ローカルで確認したいとき

Ruby があれば:

```bash
bundle install
bundle exec jekyll serve
# http://127.0.0.1:4000/ で確認
```

無くても GitHub Pages 側で勝手にビルドされるので必須ではない。
