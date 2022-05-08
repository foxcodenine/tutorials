<template>
    <base-card>
        <form v-on:submit.prevent="">
            
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title">
            </div>
            
            <div class="form-control">
                <label for="description">Description</label>
                <textarea type="text" id="description" name="description" rows="3"></textarea>
            </div>
            
            <div class="form-control">
                <label for="tink">Link</label>
                <input type="url" id="tink" name="tink">
            </div>

            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>

        </form>
    </base-card>
</template>

<!--------------------------------------------------------------------->

<script>
import BaseButton from '../UI/BaseButton.vue'

export default {
  components: {BaseButton  },

}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>