<template>
    <div>
        <el-calendar v-model="value" style="line-height: 150%;">
        </el-calendar>
    </div>
</template>

<script>
</script>

<style>
</style>
<script>
    export default {
        data() {
            return {
                value: new Date()
            }
        }
    }
</script>