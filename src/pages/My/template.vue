<template>
  <div id="my">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
      <div class="user-detail">
        <h3>{{ user.username }}</h3>
        <p>博客小站 第 {{ user.id }} 号会员</p>
      </div>
    </section>
    <section class="blogs-list">
      <ul>
        <li class="item" v-for="blog in blogs" :key="blog.id">
          <router-link :to="`/details/${blog.id}`">
            <div class="date">
              <span class="day">{{ splitDate(blog.createdAt).date }}</span>
              <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
              <span class="year">{{ splitDate(blog.createdAt).year }}年</span>
            </div>
            <div class="blog-info">
              <h3>{{ blog.title }}</h3>
              <p>{{ blog.description }}</p>
            </div>
          </router-link>
          <div class="btns">
            <router-link :to="`/edit/${blog.id}`">
              <el-button type="primary" icon="el-icon-edit" :title="`编辑本篇博客`"></el-button>
            </router-link>
            <el-button type="primary" icon="el-icon-delete" :title="'删除本篇博客'" @click.prevent="onDelete(blog.id)"></el-button>
          </div>
        </li>
      </ul>
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
