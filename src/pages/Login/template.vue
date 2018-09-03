<template>
  <div id="login">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <p class="error">{{ error1 }}</p>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="请输入6-16位密码" @keyup.enter.native="onLogin" ></el-input>
    <p class="error">{{ error2 }}</p>
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
  </div>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>
