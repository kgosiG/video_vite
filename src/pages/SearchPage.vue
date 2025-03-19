<template>
  <div class="">


    <div class="q-ma-md text-h4">Search</div>

    <q-input v-model="text" label="Standard"  class="q-ma-sm" outlined />

    <q-btn @click="getMovies()" outline 
    style="color: goldenrod;" label="Search" class="full-width" />

    <MovieComponent :dataList="dataList"></MovieComponent>
     
  </div>
</template>

<script setup>

  import { ref,onMounted } from 'vue'

  import { api } from 'boot/axios'

  import { useRoute, useRouter } from 'vue-router'

  import MovieComponent from 'components/MovieComponent.vue' 

  const route = useRoute()

  const router = useRouter()

  const text = ref("")

  // const image_url = "https://image.tmdb.org/t/p/original/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg"

  const image_url = "https://image.tmdb.org/t/p/original"

  const slide = ref(0)

  const dataList = ref([])

  

  const config = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJjNDQ1NDRmNDg1NDVhNmM5NTliNWI4ZDRlMzFhZCIsIm5iZiI6MTc0MjI3MzgwMy4xOTYsInN1YiI6IjY3ZDhmZDBiMzU3MmFmNWJjYzA4ODA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H_AE8Qc112eA-BeipirMKICO9recYIE492AKzHwGF9o'
    }
  };


  
 

  onMounted(()=>{

    // getMovies()



  })


  function getMovies(){

    const url = `https://api.themoviedb.org/3/search/movie?query=${text.value}include_adult=false&language=en-US&page=1`;

    api.get(url,config).then(
      (response)=>{


        dataList.value = response.data.results


        console.log( dataList.value)



      })
    .catch((error)=>{


    })


  }



</script>
