<template>
  <div class="q-pa-md">

    

     <div class="row">
       <div v-for="(item, index) in dataList" class="col-xs-12 col-sm-4 q-pa-sm" >

        <div style="height: 650px;position: relative;" class="">
           <q-img :src="image_url + item.poster_path" style="height: 70%;">
             <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>

           </q-img>
          <div class="text-h6">{{item.original_title}}</div>
          <div class="text-body2 ellipsis-3-lines">{{item.overview}}</div>

          <div class="q-gutter-sm absolute-bottom">
            <q-btn outline style="color: goldenrod;" label="Upcoming" class="full-width" />

            <q-btn outline style="color: black;" :label="item.release_date"
             class="full-width" />
          </div>

          
        </div>
        
      </div>
     </div>
     
  </div>
</template>

<script setup>

  import { ref,onMounted } from 'vue'

 

 

  const props = defineProps({
  dataList: {
    type: Array,
    required: true
  }
})

 

  const image_url = "https://image.tmdb.org/t/p/original"

  

  const dataList = ref([])
 

  

  onMounted(()=>{

   



  })


 



</script>
