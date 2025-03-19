<template>
  <div class="">


    <div class="q-ma-md text-h4">Popular</div>

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

  const openDialog = ref(false)

  // const image_url = "https://image.tmdb.org/t/p/original/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg"

  const image_url = "https://image.tmdb.org/t/p/original"

  const slide = ref(0)

  const dataList = ref([])

  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&primary_release_year=2025&sort_by=popularity.desc';

  const config = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJjNDQ1NDRmNDg1NDVhNmM5NTliNWI4ZDRlMzFhZCIsIm5iZiI6MTc0MjI3MzgwMy4xOTYsInN1YiI6IjY3ZDhmZDBiMzU3MmFmNWJjYzA4ODA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H_AE8Qc112eA-BeipirMKICO9recYIE492AKzHwGF9o'
    }
  };

  function getMovieDetails(){

    
  }

  onMounted(()=>{

    getMovies()



  })


  function getMovies(){

    api.get(url,config).then(
      (response)=>{


        dataList.value = response.data.results


        console.log( dataList.value)



      })
    .catch((error)=>{


    })


  }



</script>
