<template>
  <main class="my-5">
    <div class="container">
      <!--Section: Content-->
      <section class="text-center">
        <h4 class="mb-5"><strong>Latest posts</strong></h4>

        <div class="row">

          <div class="col-lg-4 col-md-12 mb-4" v-for="post in posts" :key="post.id">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  :src="post.image_path"
                  class="img-fluid"
                />
                <router-link :to="{ name: 'SinglePost', params: { id: post.id }}">
                  <div
                    class="mask"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </router-link>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">
                 {{post.post_content.substr(0,200)}}
                </p>
                <!-- <a href="" class="btn btn-primary">Read</a> -->
                <router-link :to="{ name: 'SinglePost', params: { id: post.id }}" class="btn btn-primary">Read</router-link>
              </div>
            </div>
          </div>

         

        </div>

        
      </section>
      <!--Section: Content-->

      <!-- Pagination -->
      <!-- <nav class="my-4" aria-label="...">
        <ul class="pagination pagination-circle justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
              >Previous</a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#"
              >2 <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav> -->
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
  import axios from 'axios';
  export default {
    name: "Home",
    data(){
      return{
        posts:[],
      }
    },
    mounted(){
      this.getAllPosts();
    },
    methods:{
      async getAllPosts(){
        await axios.get('http://127.0.0.1:8000/api/post')
        .then((response) => {
          this.posts=response.data.posts
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    }
  };
</script>

<style>
</style>