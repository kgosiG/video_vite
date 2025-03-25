<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title >
          <div @click="router.push('/')">
            Movie Vite
          </div>
          
        </q-toolbar-title>

        <!-- <div>MV v 0.0.1</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

import EssentialLink from 'components/EssentialLink.vue'

import { useRoute, useRouter } from 'vue-router'

 const router = useRouter()




const linksList = [
   
  {
    title: 'popular',
    caption: 'popular movies',
    icon: 'favorite',
    link: '/'
  },

  {
    title: 'Top Rated',
    caption: 'top rated movies',
    icon: 'star',
    link: 'toprated'
  },
  {
    title: 'Upcoming',
    caption: 'Upcoming movies',
    icon: 'upcoming',
    link: 'Upcoming'
  },

   {
    title: 'search',
    caption: 'search movies',
    icon: 'search',
    link: 'search'
  },
   
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
