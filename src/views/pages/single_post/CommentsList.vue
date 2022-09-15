<template>
  <div class="container my-2 py-2" v-if="comments.length">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10">
        <h4 class="mb-0">Recent comments</h4>
        <p class="fw-light mb-4 pb-2">Latest Comments section by users</p>
        <div class="card text-dark">
          <div
            class="card-body p-4"
            v-for="comment in comments"
            :key="comment.id"
          >
            <div class="d-flex flex-start">
              <img
                class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                alt="avatar"
                width="60"
                height="60"
              />
              <div>
                <h6 class="fw-bold mb-1">{{ comment.name }}</h6>
                <!-- <div class="d-flex align-items-center mb-3">
                    <p class="mb-0">
                      March 07, 2021
                      <span class="badge bg-primary">Pending</span>
                    </p>
                    
                    <a href="#!" class="link-muted"
                      ><i class="fas fa-heart ms-2"></i
                    ></a>
                  </div> -->
                <p class="mb-0">{{ comment.comment }}</p>
              </div>
            </div>
          </div>

          <hr class="my-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Object,
    post_id: Number,
  },
};
</script>

<style lang="scss" scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #4facfe; /* Chrome 10-25,
Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to bottom right,
    rgba(79, 172, 254, 1),
    rgba(0, 242, 254, 1)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+,
Safari 7+ */
  background: linear-gradient(
    to bottom right,
    rgba(79, 172, 254, 1),
    rgba(0, 242, 254, 1)
  );
}
</style>>
