<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="frontend" :checked="filters.frontend" v-on:change="setFilter" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" :checked="filters.backend" v-on:change="setFilter" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" :checked="filters.career" v-on:change="setFilter" />
            <label for="career">Career</label>
        </span>
    </base-card>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    emits: ['change-filter'],
    
    data() {
        return {
            filters: {
                frontend: true,
                backend:  true,
                career:   true
            },
        }
    },
    methods: {
        setFilter(e) {
            const inputId = e.target.id;
            const isActive = e.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;

            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>