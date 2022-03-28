<template>
  <section>
    <Casestudy :blok="story.content" />
  </section>
</template>
 
<script>

export default {
  asyncData(context) {
    // Load the JSON from the API
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/references/${context.params.slug}`, {
      version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  head({ $seo }) {
    const meta = this.story.content.seo_meta;
    return $seo({    
      ...meta,
      openGraph: {
        title: meta.og_title,
        description: meta.og_description ?? meta.description,
      }
    })
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  }
}
</script>