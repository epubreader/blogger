<template>
  <div class="root">
    <ul>
      <li
        v-for="(item, index) of data"
        :key="item.id"
        :data-index="index + 1"
        class="font-small">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: '从 400+ 节点 Elasticsearch 集群的运维中，我们总结了这些经验'
        },
        {
          id: 2,
          title: '从 400+ 节点 Elasticsearch 集群的运维中，我们总结了这些经验'
        },
        {
          id: 3,
          title: '从 400+ 节点 Elasticsearch 集群的运维中，我们总结了这些经验'
        },
        {
          id: 4,
          title: '从 400+ 节点 Elasticsearch 集群的运维中，我们总结了这些经验'
        },
        {
          id: 5,
          title: '从 400+ 节点 Elasticsearch 集群的运维中，我们总结了这些经验'
        },
        {
          id: 6,
          title: '从 400+ 节点 Elasticsearch 集群的运维中，我们总结了这些经验'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/common';

.root ul {
  list-style: none;
  margin-block-start: 0;
}
.root ul li {
  color: $--color-base-black;
  margin-bottom: 12px;
  line-height: 24px;
  font-weight: 400;
  position: relative;
}
.root ul li::before {
  content: ' ';
  display: block;
  position: absolute;
  left: -39px;
  top: 2px;
  width: 18px;
  height: 18px;
  border: 1px solid #1f6bb5;
  border-radius: 10px;
}
.root ul li::after {
  position: absolute;
  left: -44px;
  top: 2px;
  content: attr(data-index);
  width: 30px;
  height: 18px;
  text-align: center;
  line-height: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #1f6bb5;
  transform: scale(0.5);
}
</style>
