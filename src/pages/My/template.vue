<template>
  <div id="my">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
      <h3>{{ user.username }}</h3>
    </section>
    <section class="blogs-list">
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/details/${blog.id}`">
        <div class="data">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
        <el-button-group>
          <router-link :to="`/edit/${blog.blogId}`">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </router-link>
          <el-button type="primary" icon="el-icon-delete" @click.prevent="onDelete(blog.id)"></el-button>
        </el-button-group>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="onPageChange"
        :current-page.sync="page"
        :total="total">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>
