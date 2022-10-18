import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import SbRTE from '@/components/SbRTE'

Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      'custom-component': SbRTE,
    },
  },
})