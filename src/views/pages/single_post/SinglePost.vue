<template>
  <main class="mt-4 mb-5">
    <div class="container">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-8 mb-4">
          <!--Section: Post data-mdb-->
          <section class="border-bottom mb-4">
            <img
              :src="post.image_path"
              class="img-fluid shadow-2-strong rounded-5 mb-4"
              alt=""
            />

            <div class="row align-items-center mb-4">
              <div class="col-lg-8 text-center text-lg-start mb-3 m-lg-0">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
                  class="rounded-5 shadow-1-strong me-2"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <span> Published {{dateFormat(post.created_at)}} by </span>
                <a href="" class="text-dark">{{post.user.name}}</a>
              </div>

              
            </div>
          </section>
          <!--Section: Post data-mdb-->

          <!--Section: Text-->
          <section>
            {{post.post_content}}
          </section>
          <!--Section: Text-->

    
          <!--Section: Reply-->
          
          <NewComment :post_id="id"></NewComment>
          <CommentsList :post_id="id" :comments="comments"></CommentsList>
          <!--Section: Reply-->
        </div>
        <!--Grid column-->

     
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
  </main>
</template>

<script>
  import axios from "axios";
  import moment from 'moment'
  import NewComment from "./NewComment.vue";
  import CommentsList from "./CommentsList.vue";
  export default {
    name: "SinglePost",
    data() {
        return {
            post: {},
            id: this.$route.params.id,
            comments:{}
        };
    },
    created() {
        axios.get("post/" + this.id)
            .then(response => {
            this.post = response.data.post[0];
            this.comments = response.data.post[0].comments;
        })
        .catch(error => {
          console.warn(error)
        });
    },
    methods: {
      dateFormat(post_date){
        if (post_date) {
           return moment(String(post_date)).format('DD MMM, YYYY')
        }
      },
      async getAllComments(){
        await axios.get("comments/" + this.id)
            .then(response => {
            this.comments = response.data.data;
        })
        .catch(error => {
          console.warn(error)
        });
      }

    },
    components: { NewComment, CommentsList }
};
</script>

<style>
</style>