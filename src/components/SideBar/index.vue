<template>
    <div class="sidebar-list">
        <ul>
            <router-link tag="li" to="/">发现音乐</router-link>
            <router-link tag="li" to="/recommend">推荐歌单</router-link>
            <router-link tag="li" to="/music">最新音乐</router-link>
            <router-link tag="li" to="/mv">最新MV</router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    cursor: pointer;
    color: rgb(208,208,208)
}

.active-link, li:hover {
    background-color: rgb(70, 70, 70);
}

.active-link {
    font-weight: bold;
}
</style>