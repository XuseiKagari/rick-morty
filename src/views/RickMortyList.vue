<template>
  <div class="home">
    Rick and morty 
    <div class="character-list">
      <character-block 
      v-for="character in characters" 
      :key="character.id"
      :character="character"
      />
    </div>
    <paginate
      v-model="currentPage"
      :page-count="pages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :active-class="'active-class'"
      :next-link-class="'next-link-class'"
      :prev-link-class="'prev-link-class'"
    >
    </paginate>
  </div>
</template>

<script>
import CharacterBlock from '@/components/CharacterBlock.vue'
import Paginate from 'vuejs-paginate-next'
export default {
  name: 'Rick-Morty-List',
  components: {
    CharacterBlock,
    Paginate
  },
  data(){
    return{
      currentPage: 1
    }
  },
  computed: {
    characters(){
      return this.$store.getters['getCharacterByPage'](this.currentPage)
    },
    firstCharacter(){
      return this.$store.getters['getCharacterById']({ id: 1, page: 1})
    },
    pages(){
      return this.$store.state.pages
    }
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch('fetchCharacters', page)
      },
      immediate: true
    }
  },
  methods: {
      clickCallback (pageNum){
        console.log(pageNum)
      }
  }
}
</script>
