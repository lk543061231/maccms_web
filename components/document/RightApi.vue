<template>
  <div class="">
    <div>
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in list" :key="index">
        <p class="c-t">{{ item.title }}</p>
        <p class="c-p" v-for="(conItem, conIndex) in item.label" :key="conIndex">
          <codemirror v-if="conItem.pre" ref="cmEditor" :value="conItem.pre.con" :class="[conItem.pre.cls]" />
          <span v-else> {{ conItem }}</span>
        </p>
        <codemirror v-if="item.pre" ref="cmEditor" :value="item.pre.con" :class="[item.pre.cls]" />
      </div>
    </div>
  </div>
</template>

<script>
import { api, api2 } from './doc';
export default {
  components: {},
  props: {
    activeVer: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    list() {
      return this.activeVer ? api2 : api;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
