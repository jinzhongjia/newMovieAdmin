<script lang="ts" setup>
import { login as api_login, silent_version } from '@/tool/api'

// 存储账户
const account = ref('')
// 存储密码
const password = ref('')
// 存储是否记住密码
const remember = ref(false)

// 在windows对象注册函数
;(() => {
    window.$message = useMessage()
})()

const router = useRouter()
const message = useMessage()

function login() {
    api_login(
        account.value,
        password.value,
        () => {
            message.success('登陆成功')
            router.push({
                name: 'dashboard',
            })
        },
        () => {
            message.error('登陆失败,请检查账户和密码！')
        },
    )
}
silent_version(
    () => {
        router.push({
            name: 'dashboard',
        })
    },
    () => {},
)
</script>
<template>
    <div class="login-box">
        <n-card class="login" title="登陆">
            <div class="login-input">
                <n-input
                    v-model:value="account"
                    type="text"
                    placeholder="请输入用户名"
                />
            </div>

            <div class="login-input">
                <n-input
                    v-model:value="password"
                    type="password"
                    show-password-on="click"
                    placeholder="请输入密码"
                    @keyup.enter="login"
                />
            </div>
            <div class="login-input">
                <n-checkbox v-model:checked="remember">记住密码</n-checkbox>
            </div>
            <div class="login-input">
                <n-button class="login-button" type="primary" @click="login">
                    登陆
                </n-button>
            </div>
        </n-card>
    </div>
</template>

<style>
.login-box {
    width: 100vw;
    height: 100vh;
}
.login {
    max-width: 100vw;
    max-height: 100vh;
    width: 400px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.login-input {
    margin-bottom: 15px;
}
.login-button {
    width: 100%;
}
</style>
