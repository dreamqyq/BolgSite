<template>
  <div id="index">
    <section class="blog-posts">
      <ul>
        <li class="item" v-for="blog in blogs" :key="blog.id">
          <router-link :to="`/user/${blog.user.id}`">
            <figure class="avatar">
              <img :src="blog.user.avatar" :alt="blog.user.username">
              <figcaption>{{ blog.user.username }}</figcaption>
            </figure>
          </router-link>
          <router-link class="blog-link" :to="`/details/${blog.id}`">
            <h3>{{ blog.title }} <span>{{ friendlyDate(blog.createdAt) }}</span></h3>
            <p>{{ blog.description }}</p>
          </router-link>
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
<style scoped lang="less" src="./template.less"></style>
