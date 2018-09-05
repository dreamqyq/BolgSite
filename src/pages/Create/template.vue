<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @input="limitNumber(30,'title')"></el-input>
    <p class="msg">字数限制在30字内，您还可以输入 {{ limit }} 字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" :autosize="{minRows: 2,maxRows: 6}" v-model="description"></el-input>
    <p class="msg">限100个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" :autosize="{minRows: 4,maxRows: 30}" v-model="content"></el-input>
    <p class="msg">限10000个字</p>
    <p class="btn">
      <label>是否展示到首页</label>
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <el-button @click="onCreate" type="primary">创建</el-button>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>
