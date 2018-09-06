<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @input="limitNumber(30, 'title')" :class="{active: titleLimit.isLimit}" clearable></el-input>
    <p :class="[{ active: titleLimit.isLimit }, 'msg']">字数限制在 30 字内，您还可以输入 {{ titleLimit.limit }} 字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" :autosize="{minRows: 2,maxRows: 6}" v-model="description" 
      @input="limitNumber(100, 'description')" :class="{active: descriptionLimit.isLimit}"></el-input>
    <p :class="[{ active: descriptionLimit.isLimit }, 'msg']">字数限制在 100 字内，您还可以输入 {{ descriptionLimit.limit }} 字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" :autosize="{minRows: 4,maxRows: 30}" v-model="content"
      @input="limitNumber(10000, 'content')" :class="{active: contentLimit.isLimit}"></el-input>
    <p :class="[{ active: contentLimit.isLimit }, 'msg']">字数限制在 10000 字内，您还可以输入 {{ contentLimit.limit }} 字</p>
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
