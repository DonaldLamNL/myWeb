<template>
    <div id="introduction">
        <HomeImage />
        <ShortIntro />

    </div>
</template>

<script>
import HomeImage from './HomeImage.vue'
import ShortIntro from './ShortIntro.vue'

export default {
    name:'Introduction',
    components: { HomeImage, ShortIntro }
}
</script>

<style scoped>
#introduction{
    height: 100vh;
    min-height: 600px;
    position: relative;
}
</style>