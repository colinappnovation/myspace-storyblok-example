<template>
  <div v-editable="blok" class="flex flex-wrap md items-center mb-10">
    <div v-if="blok.image_position === 'left' && blok.image.filename" class="bg-red-600 w-full md:w-1/2">
      <nuxt-picture :src="blok.image.filename" quality="75" fit="contain" />
    </div>
    <div class="bg-white w-full md:w-1/2">
      <div class="mx-16">
        <h1 class="text-6xl font-bold mt-8">{{ blok.title }}</h1>
        <div class="description w-full mt-4 text-gray-500 text-xl">
          <rich-text-renderer v-if="blok.introduction" :document="blok.introduction" />
        </div>

        <div v-show="blok.call_to_action_btn.cached_url !== ''" class="pt-5">
          <nuxt-link
            v-if="blok.call_to_action_btn.linktype === 'story'"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
            :to="blok.call_to_action_btn.cached_url"
          >Learn More</nuxt-link>

          <a
            v-if="blok.call_to_action_btn.linktype === 'url'"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
            :href="blok.call_to_action_btn.cached_url"
          >Learn More</a>
        </div>
      </div>
    </div>
    <div v-if="blok.image_position === 'right' && blok.image.filename" class="bg-red-600 w-full md:w-1/2">
      <nuxt-picture :src="blok.image.filename" quality="75" fit="contain" />
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.blok)
  }
}
</script>