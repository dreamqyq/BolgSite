<template>
  <div id="register">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <p class="error">{{ error1 }}</p>
    <h4>密码</h4>
    <el-input v-model="password" type="password" name="password" placeholder="请输入6-16位密码"></el-input>
    <p class="error">{{ error2 }}</p>
    <h4>确认密码</h4>
    <el-input v-model="repassword" type="password" name="repasseord" placeholder="确认密码" @keyup.enter.native="onRegister"></el-input>
    <p class="error">{{ error3 }}</p>
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="../Login/template.less"></style>
