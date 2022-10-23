import { createStore } from 'vuex';

const store = createStore({
  state: {
    // 定义收支
    name: ['pay', 'save'],
    // 定义 收支类型

    list: [
      { 'foods': 'pay' },
      { 'clothes': 'pay' },
      { 'transport': 'pay' },
      { 'snacks': 'pay' },
      { 'rent': 'pay' },
      { 'wages': 'save' },
      { 'gift': 'save' },
    ],
    payList: [
      {
        type:'pay',
        name: 'foods',
        value: 15
      },
      {
        type:'pay',
        name: 'clothes',
        value: 88
      },
      {
        type:'pay',
        name: 'transport',
        value: 2
      },
      {
        type:'pay',
        name: 'snacks',
        value: 6
      },
      {
        type:'pay',
        name: 'rent',
        value: 500
      },


    ],
    saveList: [
      {
        type:'save',
        name: 'wages',
        value: 2000
      },
      {
        type:'save',
        name: 'gift',
        value: 5000
      },
    ],

  }
});

export default store;