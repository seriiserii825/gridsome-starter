<template>
    <Layout>
        <content-header :title="$page.about.title" :sub="$page.about.subtitle"></content-header>

        <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">

            <div class="lg:mx-32 md:mx-16 px-4 mb-8">
                <section class="post-content container mx-auto relative dark:text-gray-400">
                    <div v-html="$page.about.content"></div>
                </section>
            </div>
        </div>

    </Layout>
</template>

<page-query>
query {
    about {
        title
        content
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.page.title
        };
    }
};
</script>
