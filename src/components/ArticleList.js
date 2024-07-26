import React from "react";

import Article from "./Article";

function ArticleList({posts}) {
  const articles = posts.map((post) => {
    const {
      id,
      title,
      date,
      preview
    } = post;

    return <Article key={id} title={title} date={date} preview={preview} />
  })

  return (
    <main>
      {articles}
    </main>
  );
}

export default ArticleList;