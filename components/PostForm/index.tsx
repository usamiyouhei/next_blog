import "./index.css";

export default function PostForm() {
  return (
    <form className="post-form">
      {/* エラーメッセージ表示（コメントインで確認可能） */}
      {/*
      <p className="form-error">タイトルと本文を入力してください</p>
      */}

      <input
        name="title"
        type="text"
        defaultValue="Reactの最新機能を試してみた"
        placeholder="記事のタイトルを入力..."
        className="title-input"
        required
      />

      <div className="editor-pane">
        <div className="editor-panel">
          <div className="panel-label">Markdown</div>
          <textarea
            name="content"
            defaultValue="## はじめに&#10;&#10;ここに本文を書きます。"
            placeholder="Markdownで本文を書いてください..."
            className="content-textarea"
            required
          />
        </div>
        <div className="preview-panel">
          <div className="panel-label">プレビュー</div>
          <div className="preview-content">
            <p>Markdownプレビューがここに表示されます</p>
            {/* 空の場合はこちら（コメントインで確認可能） */}
            {/*
            <p className="preview-placeholder">プレビューがここに表示されます</p>
            */}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button
          name="published"
          value="false"
          type="submit"
          className="btn-draft"
        >
          下書き保存
        </button>
        <button
          name="published"
          value="true"
          type="submit"
          className="btn-publish"
        >
          公開する
        </button>
      </div>
    </form>
  );
}
