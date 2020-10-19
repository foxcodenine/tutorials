<template>
  <div class="admin-postid-page">
      <AdminPostForm :loadedPost="loadedPost"></AdminPostForm>
  </div>
</template>



<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Sarah Tran',
                title: 'Cardano Becomes the 6th Largest Crypto',
                thumbnailLink: 'https://blockchainstock.blob.core.windows.net/article/E2D0F576946C39229347F83C8328640A1FFAA0550F3247FDB1335236F2D2B8C8.jpg',
                content: `Cardano’s native crypto ADA has reached a two-year high on July 8, topping $0.138, up by 180 percent in the past 180 days. Cardano’s ADA cryptocurrency has been one of the top-performing tokens this year and has become the sixth-largest crypto according to CoinMarketCap.`
            }
        }
    }
}
</script>



<style lang="scss">
.admin-postid-page{
    width: 90%;
    margin: 2rem auto;

    @media (min-width: 769px) {
        width: 70rem;
    }
}
</style>