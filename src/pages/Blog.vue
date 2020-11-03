<template>
<Layout>
    <h1>Blog</h1>
    <article v-for="edge in $static.allPost.edges" :key="edge.node.id">
        <g-image :src="edge.node.cover_image" />
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

<static-query>
{
allPost (perPage: 2) {
    edges {
        node {
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
</static-query>
<style scoped>
article {
    margin-bottom: 40px;
    padding: 40px 0;
    border-bottom: 2px solid #ccc;
}
</style>
