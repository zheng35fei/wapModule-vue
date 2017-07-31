<template>
  <div>
    <top></top>

    <el-row>
      <el-col :span="4" align="top">
        <left></left>
      </el-col>
      <el-col :span="20" align="top">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import top from './components/header/top.vue'
  import left from './components/left/left.vue'
export default {
    name: 'app',
    data () {
      return {
        activeIndex: '1'
      }
    },
    components: {
      top,
      left
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
}
</script>

<style>
</style>
