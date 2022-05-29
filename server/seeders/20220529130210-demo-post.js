'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      title: '한라산',
      image: 'https://api.cdn.visitjeju.net/photomng/imgpath/201911/29/48bdb99e-20ba-4fb6-82f2-6ea79ceefb0d.jpg',
      contents: '정상 분화구에 백록담(白鹿潭)이라는 호수가 있다. 백록담은 흰 사슴이 물을 마시는 연못이라는 뜻이지만, 여름철에 가보면 정상에 물이 없는 경우가 많다. 전술한 것처럼 비가 잔뜩 오거나 태풍이 온 다음 날을 잘 잡으면 물이 차있는 광경을 볼 수도 있다.',
      user_id: '1',
      total_likes: '8',
      address: '대한민국 제주도',
      latitude: '33.21.41',
      longitude: '126.31.46',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
