<template>
  <section>
            <p class="text-center"><strong>Leave a reply</strong></p>

            <form @submit.prevent="saveComment">
              <!-- Name input -->
              <div class="form-outline mb-4">
                <input type="text" class="form-control" v-model="comment.name" />
                <label class="form-label" for="form4Example1">Name</label>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" class="form-control" v-model="comment.email" />
                <label class="form-label">Email address</label
                >
              </div>

              <!-- Message input -->
              <div class="form-outline mb-4">
                <textarea
                  class="form-control"
                  id="form4Example3"
                  rows="4"
                  v-model="comment.comment" 
                ></textarea>
                <label class="form-label" for="form4Example3">Comments</label>
              </div>

          
              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Publish Comment
              </button>
            </form>
          </section>
</template>

<script>
  import axios from 'axios';
export default {
  props:{
    post_id:Number
  },
  data(){
    return{
        comment:{
            post_id:this.post_id,
            name:'',
            email:'',
            comment:'',
        }
    }
      
  },
  methods:{
    resetForm(){
      this.name='';
      this.email='';
      this.comment='';
    },
    async saveComment(){        
        await axios.post('comment',this.comment)
        .then(() => {
          this.resetForm()
          this.$parent.getAllComments();
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }
}
</script>

<style>

</style>