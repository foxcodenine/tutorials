<template>
  <div class="admin-auth-page">
      <div class="auth">
          <form  class="auth__form">
              <AppControllInput type="email">E-Mail Address</AppControllInput>
              <AppControllInput type="password">Password</AppControllInput>
              <AppButton 
                btn-style="blue"
                type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
              <AppButton 
                type="button"
                btn-style="inverted"
                style="margin-left: 1rem"
                @click="isLogin = !isLogin">
                Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
          </form>
      </div>
  </div>
</template>

<script>
import AppButton from "~/components/UI/AppButton";
import AppControllInput from "~/components/UI/AppControllInput";

export default {
    name: 'AdminAuthPage',
    layout: 'adminLayout',
    components: {
        AppButton,
        AppControllInput
    },
    data() {
        return {
        isLogin: true
        }
    }
}
</script>

<style scoped lang="scss">
.admin-auth-page {
  padding: 20px;
}

.auth {
  border: 1px solid #ccc;
  border-radius: .5rem;
  box-shadow: 0 2px 2px #ccc;
  width: 90%;
  margin: auto;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 762px) {
      width: 50rem;
  }
}
</style>