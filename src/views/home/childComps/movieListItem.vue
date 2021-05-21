<template>
  <div class="movie-item" @click="itemClick">
    <img :src="movieItem.mSrc" alt="" @load="imageLoad">
    <div class="movie-info">
      <span>{{movieItem.mText}}</span>
      <p>{{movieItem.mDetail}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name:'MovieListItem',
  data () {
    return {
    }
  },
  props: {
    movieItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.movieItem.mId)

    }
  }

}
</script>

<style  scoped>
.movie-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.movie-item img {
  width: 100%;
  border-radius: 5px;
}
.movie-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.movie-info p {
  color: rgba(0, 0, 0, .4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
</style>
