<template>
    <div class="home">
        <!-- 轮播图 -->
        <div class="block">
            <el-carousel hight="460px">
                <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
                    <!-- 图片可能放在静态服务器上 -->
                    <img style="heighr:460px" :src="$target + item.imgPath" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 轮播图END -->
        <div class="main-box">
            <div class="main">
                <!-- 手机展示区域 -->
                <div class="phone">
                    <div class="box-hd">
                        <div class="title">手机</div>
                    </div>
                    <div class="box-bd">
                        <div class="promo-list">
                            <router-link to>
                                <img :src="$target + 'public/imgs/phone/phone.png'" alt="">
                            </router-link>
                        </div>
                        <div class="list">
                            <MyList :list="phoneList" :isMore="true" />
                        </div>
                    </div>
                </div>
                <!-- 手机展示区域END -->
            </div>
        </div>
    </div>
</template>

<script>
import { getCarouselData, getPromoData } from '../api/request'
import MyList from '../components/MyList.vue'
export default {
    data(){
        return{
            carousel:[],
            phoneList:[],
            miTvList:[],
            chargerList:[]
        }
    },
    mounted() {
        // console.log(this, this.$router)
       getCarouselData()
        .then(data => {
            // console.log(data);  
            this.carousel = data.data.carousel
        })
        .catch(err => {
            this.notifyError(JSON.stringify(err))
        })

        this.getPromo('手机','phoneList');
        this.getPromo('电视机','miTvList');
        this.getPromo('充电器','chargerList');
    },
    methods:{
        // 抽象能力
        getPromo(categoryName, val, api){
            api = api != undefined ? api: '/api/product/getPromoProduct';
            getPromoData(api, {
                categoryName
            }).then(res => {
                console.log(res);
            })
        }
    },
    components:{
        MyList
    }
}
</script>