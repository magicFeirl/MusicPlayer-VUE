<template>
  <div>
    <!-- 顶部 banner 部分 -->
    <el-carousel :interval="4000" type="card" height="220px">
      <el-carousel-item v-for="(item, idx) in bannerImages" :key="idx">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>

    <!-- 推荐歌单部分 -->
    <div class="recommend">
      <div class="title">推荐歌单</div>
      <div class="item-list">
        <div class="item" v-for="(playlist, idx) in recommendPlayList" :key="idx">
          <div class="desc-warp">
            {{ playlist.copywriter }}
          </div>
          <img class="img-warp" :src="playlist.picUrl" alt="">
          <p class="name">{{ playlist.name }}</p>
        </div>
      </div>
    </div>

    <!-- 最新歌曲部分 -->
    <div class="news">
      <div class="title">最新歌曲</div>
      <div class="item-list">
        <div class="item" v-for="(song, idx) in newSongList" :key="idx">
          <div class="img-warp">
            <img :src="song.picUrl" alt="">
          </div>
          <div class="song-warp">
            <span>{{ song.song.name}}</span>
            <span class="singer">{{ song.song.artists[0].name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐 mv 区域 -->
    <div class="recommend-mv">
      <div class="title">推荐MV</div>
      <div class="item-list">
        <div class="item" v-for="(mv, idx) in mvList" :key="idx">
          <div class="img-warp">
            <img :src="mv.picUrl" alt="">
          </div>
          <div class="song-warp">
            <span>{{mv.name}}</span>
            <span class="singer">{{mv.artists[0].name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
      this.getBannerImages()
      this.getRecommendPlayList()
      this.getNewSongList()
      this.getMVList()
  },
  data() {
    return {
      bannerImages: [],
      recommendPlayList: [],
      newSongList: [],
      mvList: []
    };
  },
  methods: {
    getBannerImages(){
      const api = 'http://catbk.cn:3000/banner'
      this.$axios.get(api).then( res => {
          this.bannerImages = res.data.banners;
          console.log(this.bannerImages)
      });
    },
    getRecommendPlayList(){
      const api = 'http://catbk.cn:3000/personalized/playlist'
      this.$axios.get(api).then(res => {
        this.recommendPlayList = res.data.result.slice(0, 10);
      });
    },
    getNewSongList(){
      const api = 'http://catbk.cn:3000/personalized/newsong'
      this.$axios.get(api).then(res => {
        this.newSongList = res.data.result.slice(0, 10);
      })
    },
    getMVList(){
      const api = 'http://catbk.cn:3000/personalized/mv';
      this.$axios.get(api).then(res => {
        this.mvList = res.data.result.slice(0, 4);
      })
    }
  }
};
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    cursor: none;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.title {
  font-weight: 400;
  margin: 20px 0;
  padding-left: 8px;
  color: white;
  font-size: 18px;
}

.name {
  color: white;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 14px;
}

.item-list {
  display: flex;
  flex-wrap: wrap;
}

.item {
  cursor: pointer;
  z-index: 1;
}

.desc-warp {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    font-size: 16px;
    color: #fff;
    background: rgba(0,0,0,.5);
    max-height: 50px;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: none;
    transition: .5s;
}

.recommend .item {
  width: 200px;
  margin: 6px;
  position: relative;
}

.recommend .item:hover .desc-warp {
  display: block;
}

.recommend .img-warp {
  width: 200px;
  height: 200px;
}

.news .item {
  display: flex;
  width: 50%;
  padding: 15px;
  cursor: pointer;
}

.news .item:hover {
  background-color: rgb(66, 66, 66);
}

.news .img-warp {
  width: 80px;
  height: 80px;
}

.song-warp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 5px 10px;
}

.singer {
  color: rgb(200, 200, 200);
  font-size: 14px;
}

.recommend-mv .item {
  width: 250px;
  margin: 10px;
}

.recommend .img-warp {
  width: 100%;
}
</style>
