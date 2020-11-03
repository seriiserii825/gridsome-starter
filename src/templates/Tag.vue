<template>
  <Layout>
    <h1>{{ $page.tag.title }}</h1>

    <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <g-image :src="edge.node.cover_image"/>
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <strong>{{ edge.node.date }}</strong>
      <hr>
      <em>{{ edge.node.timeToRead }}</em>
      <hr>
      <div>
        <span v-for="tag in edge.node.tags" :key="tag.id"># <g-link :to="tag.path">{{ tag.id }}</g-link></span>
      </div>
      <g-link :to="edge.node.path">Read more</g-link>
    </article>
  </Layout>
</template>

<page-query>
query ($id: String) {
tag (id: $id) {
title
belongsTo {
edges {
node {
... on Post {
id
title
excerpt
date(format: "MMMM Do, YYYY")
tags {
id
path
}
timeToRead
path
cover_image (height: 300, fit: cover)
}
}
}
}
}
}
</page-query>
