<template>
  <div>
    <nuxt-link
      :to="{ name: 'article-id', params: { id: 123 }}"
      class="content">
      <div class="img flex-inline-center">
        <img
          v-lazy="data.imgSrc"
        >
      </div>
      <div class="content-right margin-left-30">
        <span>{{ data.title }}</span>
        <p>{{ data.describe }}</p>
        <p>{{ data.author }}</p>
        <div class="margin-top-10">
          <el-tag
            v-for="(item, index) of data.tag"
            :key="index"
            style="margin-right: 8px"
            type="success"
            size="mini"
            hit
            color="#e9ebec">
            {{ item }}
          </el-tag>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      // required: true,
      default: function() {
        return {
          imgSrc:
            'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400',
          title: '2018 年终盘点：“年度爆款”的区块链真的结束了吗？',
          describe: '年终盘点之区块链：拨霾见日，大路朝天',
          author: '覃云，徐川',
          tag: ['区块链', 'web']
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/common';

.content {
  display: flex;
}
.content-right {
  width: 254px;
  position: relative;
}
.content-right > span:nth-child(1) {
  color: $--color-base-black;
  font-size: $--large;
  height: 48px;
  line-height: 24px;
  @include over-length(2);
}
.content-right > span:nth-child(1):hover {
  color: $--color-main-light-2;
}
.content-right > p:first-of-type {
  color: $--color-sub-black;
  font-size: $--small;
  margin-block-start: $--px8;
  margin-block-end: 0;
  height: 72px;
}
.content-right > p:nth-of-type(2) {
  font-size: $--extra-extra-small;
  color: $--color-base-black-3;
  max-height: 30px;
  overflow-y: hidden;
  line-height: 15px;
}
.content-right > p:nth-of-type(2)::before {
  content: '作者：';
  color: $--color-sub-black;
}
.content-right > div {
  position: absolute;
  bottom: 0;
}
.img,
.img > img {
  width: 388px;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.img > img:hover {
  transform: scale(1.2);
}
</style>
