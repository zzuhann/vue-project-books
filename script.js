let book_datas = [
  {
      name: '做自己，為什麼還要說抱歉？',
      author: '林依晨',
      publish_house: '聯經出版公司',
      img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/29/0010912984.jpg&v=61c995ba&w=348&h=348',
      price: 390,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010912984?loc=P_0003_001',
      link_author: 'https://search.books.com.tw/search/query/key/%E6%9E%97%E4%BE%9D%E6%99%A8/adv_author/1/',
      date: '2022/01/13'
    },
  {
      name: '原子習慣：細微改變帶來巨大成就的實證法則',
      author: 'James Clear',
      publish_house: '方智',
      img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/082/25/0010822522.jpg&v=5cda990c&w=348&h=348',
      price: 330,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010822522?loc=P_0003_002',
      link_author: 'https://search.books.com.tw/search/query/key/James+Clear/adv_author/1/',
      date: '2019/06/01'
    },
  {
      name: 'ETF實戰週記：樂活大叔的52個叮嚀',
      author: '施昇輝',
      publish_house: '商業周刊',
      img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/23/0010912341.jpg&v=61c5a14f&w=348&h=348',
      price: 380,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010912341?loc=P_0003_003',
      link_author: 'https://search.books.com.tw/search/query/key/%E6%96%BD%E6%98%87%E8%BC%9D/adv_author/1/',
      date: '2022/01/13'
    },
  {
      name: '男孩、鼴鼠、狐狸與馬',
      author: 'Charlie Mackesy',
      publish_house: '天下雜誌',
      img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/48/0010914874.jpg&v=61e00d42&w=348&h=348',
      price: 699,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010914874?loc=P_0003_004',
      link_author: 'https://search.books.com.tw/search/query/key/Charlie+Mackesy/adv_author/1/',
      date: '2022/01/26'
    },
  {
      name: '【限量親簽】大概是時間在煮我吧',
      author: '張西',
      publish_house: '三采',
      img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/64/0010916485.jpg&v=61f27431&w=348&h=348',
      price: 380,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010916485?loc=P_0003_005',
      link_author: 'https://search.books.com.tw/search/query/key/%E5%BC%B5%E8%A5%BF/adv_author/1/',
      date: '2022/02/25'
    },
  {
      name: '小資致富術：用主題式ETF錢滾錢',
      author: '陳重銘',
      publish_house: '金尉',
      img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/090/91/0010909106.jpg&v=619236c9&w=348&h=348',
      price: 360,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010909106?loc=P_0003_006',
      link_author: 'https://search.books.com.tw/search/query/key/%E9%99%B3%E9%87%8D%E9%8A%98/adv_author/1/',
      date: '2021/12/02'
    },
  {
      name: '蛤蟆先生去看心理師（暢銷300萬冊！英國心理諮商經典，附《蛤蟆先生勇氣藏書卡》組）',
      author: 'Robert de Board',
      publish_house: '三采',
      img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/47/0010914794.jpg&v=61f2743d&w=348&h=348',
      price: 400,
      is_discount: true,
      discount: 0.79,
      link_book: 'https://www.books.com.tw/products/0010914794?loc=P_0003_007',
      link_author: 'https://search.books.com.tw/search/query/key/Robert+de+Board/adv_author/1/',
      date: '2022/01/26'
    }  
];

let vm = new Vue({
  el: '#app',
  data: {
    books: book_datas,
    mode_detail: true,
    mode_size: 'big'
  }
});