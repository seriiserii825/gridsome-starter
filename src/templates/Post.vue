<template>
    <Layout>
        <g-image :src="$page.post.cover_image"/>
        <div v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
query ($path: String!) {
    post (path: $path) {
        cover_image
        content
    }
}
</page-query>
