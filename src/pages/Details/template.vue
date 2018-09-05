<template>
  <div id="details">
    <section class="user-info">
      <router-link :to="`/user/${user.id}`">
        <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      </router-link>
      <div class="user-detail">
        <h3>{{ title }}</h3>
        <p>
          <router-link :to="`/user/${user.id}`">{{user.username}}</router-link>
          发布于{{ friendlyDate(createdAt) }}
        </p>
      </div>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>
