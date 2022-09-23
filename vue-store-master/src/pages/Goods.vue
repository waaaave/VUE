<template>
    <div>
        Goods
    </div>
</template>
<script>
    export default{
        data(){
            return{
                search:''
            }
        },
        created(){
            if(this.$route.query.search != undefined){
                this.search = this.$route.query.search
            }
        }
    }
</script>