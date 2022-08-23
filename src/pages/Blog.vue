<template>
    <div>
        <h1>Now linking to https://donaldlamnl.github.io/myBlog/</h1>
    </div>
</template>

<script>
export default {
    name:'Blog',
    mounted() {
        this.$nextTick(() => {
            window.location.href = 'https://donaldlamnl.github.io/myBlog/'   
        })
        
    },
}
</script>

<style>

</style>