<template>
  <div id="details">
    <section class="user-info">
      <router-link :to="`/user/${user.id}`">
        <img :src="blogAuth.avatar" :alt="blogAuth.username" :title="blogAuth.username" class="avatar">
      </router-link>
      <div class="user-detail">
        <h3>{{ title }}</h3>
        <p>
          <router-link :to="`/user/${blogAuth.id}`">{{blogAuth.username}}</router-link>
          发布于{{ friendlyDate(createdAt) }}
        </p>
      </div>
      <div class="btns" v-show="isAuth">
        <router-link :to="`/edit/${blogId}`">
          <el-button>编辑本文</el-button>
        </router-link>
        <el-button @click="onDelete(blogId)">删除本文</el-button>
      </div>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>
