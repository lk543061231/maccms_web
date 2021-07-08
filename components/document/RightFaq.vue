<template>
  <div class="">
    <div>
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in activeItem" :key="index">
        <p class="c-t">{{ item.title }}</p>
        <p class="c-pt" v-for="(conItem, conIndex) in item.con" :key="conIndex">
          <codemirror v-if="conItem.pre" ref="cmEditor" :value="conItem.pre" />
          <span v-else> {{ conItem }}</span>
        </p>
        <p class="c-p" v-for="(conItem, conIndex) in item.label" :key="conIndex">
          {{ conItem }}
        </p>
        <codemirror v-if="item.pre" ref="cmEditor" :value="item.pre" />
      </div>
    </div>
    <!-- <div v-if="activeVer == 1">
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in list2" :key="index">
        <p class="c-t">{{ item.title }}</p>
        <p class="c-pt" v-for="(conItem, conIndex) in item.con" :key="conIndex">
          {{ conItem }}
        </p>
        <p class="c-p" v-for="(conItem, conIndex) in item.label" :key="conIndex">
          {{ conItem }}
        </p>
        <codemirror v-if="item.pre" ref="cmEditor" :value="item.pre.con" :class="[item.pre.cls]" />
      </div>
    </div> -->
  </div>
</template>

<script>
import { feq0, feq02, feq1, feq2, feq3 } from './doc';
import { mapMutations, mapState } from 'vuex';
export default {
  components: {},
  props: {
    activeVer: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      feq0: feq0
    };
  },
  computed: {
    ...mapState('document', ['activeNav']),
    activeItem() {
      let sub = this.activeNav.sub;

      if (sub === 0) {
        return feq1;
      } else if (sub === 1) {
        return feq2;
      } else if (sub === 2) {
        return feq3;
      } else {
        if (this.activeVer) {
          return feq02;
        } else {
          return feq0;
        }
      }
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
