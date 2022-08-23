<template>
    <div id="academic">
        <div class="nav-space"></div>
        <CUHK />
        <DSE />
    </div>
</template>

<script>
import CUHK from '../components/academicSections/CUHK.vue'
import DSE from '../components/academicSections/DSE.vue'

export default {
    name: 'Academic',
    components: { CUHK, DSE }
}
</script>

<style scoped>
.nav-space{
    height: 50px;
    background-color: rgb(0, 0, 0);
}
</style>