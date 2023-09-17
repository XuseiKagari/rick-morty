import { createRouter, createWebHistory } from 'vue-router'
import RickMortyList from '../views/RickMortyList.vue'
import RickMortyCharacter from '../views/RickMortyCharacter.vue'

const routes = [
  {
    path: '/',
    name: 'RickMortyList',
    component: RickMortyList
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: RickMortyCharacter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
