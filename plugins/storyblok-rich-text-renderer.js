import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import InlineImage from '~/components/InlineImage'

// Simple ...
Vue.use(VueRichTextRenderer, {
    resolvers: {
        components: {
            InlineImage,
        },
    }}
    )