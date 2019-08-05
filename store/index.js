const initialState = () => ({
  page: 'index',
  indexedUser: 0,
  users: [
    {
      id: "iudjkheuy_odiausiouyuh",
      name: 'Ngọc Anh', //'♥ ngọͥcaͣnͫh ♥',
      img: '/profile/1.jpg',
      bio: 'Everything is possible, as long as you believe in it.',
      following: 273,
      followers: 573,
      days: 2,
      trips: ['Đà Lạt'],
      active: false
    },
    {
      id: "jhfjbngjsaywquitr_ieyurgdaf",
      name: 'Ngọc Anh',
      img: '/profile/2.jpg',
      bio: 'Thanh xuân là những chuyến đi.',      
      following: 542,
      followers: 5643,
      days: 3,
      trips: ['Coco Beach'],
      active: true
    },
    {
      id: "mkfjsahbrwtqeuwqy231_84732hjhtad",
      name: 'Ngọc Anh',
      img: '/profile/3.jpg',
      bio: 'Thanh xuân là những chuyến đi.',      
      following: 347,
      followers: 3476,
      days: 3,
      trips: ['Đà Lạt'],
      active: false
    },
    {
      id: "brfsadaewqqeuwqy231_84732hjhtad",
      name: 'Ngọc Anh',
      img: '/profile/4.jpg',
      bio: 'Thanh xuân là những chuyến đi.',     
      following: 654,
      followers: 8755,
      days: 4,
      trips: ['Nha Trang'],
      active: true
    }
  ],
  places: [
    {
      name: 'Đà Lạt',
      stars: 5,
      tags: ['dalat', 'cool', 'fresh'],
      img: ['/home/2.jpg', '/place/1.jpg'],
      description:
        'Nơi yên bình, nơi cất giữ những yêu thương không đâu khác chính là Nơi Đây. Tôi yêu cái lạnh buốt da, yêu sự tĩnh lặng khi về thăm Đà Lạt vào những ngày thứ trong tuần. Nó nhẹ nhàng không ồn ào không chút vội vã. Yêu những cung đường lúc thì ngoằn nghoèo khi thì thẳng tấp không cần đưa tôi đến nơi đâu cả. Cơn mưa rào bất chợt chỉ lướt qua rồi đi mất cũng làm tôi yêu nơi này hơn. Những buổi sáng quấn mình trong chăn ấm áp, những buổi chiều lang thang một mình ngắm nhìn mọi thứ...bình yên đến lạ thường! Yêu luôn cả con người, những đôi mắt long lanh làn da rám nắng của đám trẻ con người bản địa. Tôi yêu nơi này!'
    },
    {
      name: 'Nha Trang',
      stars: 4.5,
      tags: ['nhatrang', 'beach', 'great'],
      img: ['/home/1.jpg', '/place/3.jpg'],
      description:
        'Nơi đầy nắng và gió, Nha Trang một bãi biển xinh đẹp. Núi cao, mây trôi sóng biển dạt dào mang chút ồn ào nhưng không hề vội vã. Dòng người đông đúc qua qua lại lại nói cười trên bãi biển mới đó đâu đã thưa thớt dần đó chính là chiều tà, lúc ánh sáng mặt trời không còn chói chang cũng là lúc những ánh đèn ven biển lần lượt bật lên. Đêm muộn thêm bao nhiêu thì tiếng nói cũng thưa thớt đi bấy nhiêu chỉ còn lại một vài người trong lòng có chút tâm sự một mình trãi lòng với biển đêm. Biển đẹp nhất là khi nó chỉ một mình!'
    },
    {
      name: 'Coco Beach',
      stars: 4,
      tags: ['coco', 'beach', 'hot'],
      img: ['/home/3.jpg', '/place/2.jpg'],
      description:
        'Nơi có một vùng biển yên bình - Coco Beach. Không quá rực rỡ cũng không một chút ồn ào, ngày tôi đặt chân đến đây chắc có lẽ là lúc mọi thứ đã trở về đơn giản nhất. Không gian tĩnh lặng chỉ có sóng là vẫn vỗ ồ ạt gió vẫn thổi rào rào và thế là tôi đã có một kỳ nghỉ vội vàng thật sự tuyệt vời!'
    }
  ],
  galleries: [
    {
      "title": "Na 1",
      "name": "/gallery/1.jpg",
      "description": "da lat 1"
    },
    {
      "title": "Na 2",
      "name": "/gallery/2.jpg",
      "description": "da lat 2"
    },
    {
      "title": "Na 3",
      "name": "/gallery/3.jpg",
      "description": "da lat 3"
    },
    {
      "title": "Na 4",
      "name": "/gallery/4.jpg",
      "description": "da lat 4"
    },
    {
      "title": "Na 5",
      "name": "/gallery/5.jpg",
      "description": "da lat 5"
    },
    {
      "title": "Na 6",
      "name": "/gallery/6.jpg",
      "description": "da lat 6"
    },
    {
      "title": "Na 7",
      "name": "/gallery/7.jpg",
      "description": "da lat 7"
    },
    {
      "title": "Na 8",
      "name": "/gallery/8.jpg",
      "description": "da lat 8"
    },
    {
      "title": "Na 9",
      "name": "/gallery/9.jpg",
      "description": "da lat 9"
    },
    {
      "title": "Na 10",
      "name": "/gallery/10.jpg",
      "description": "da lat 10"
    },
    {
      "title": "Na 11",
      "name": "/gallery/11.jpg",
      "description": "da lat 11"
    },
    {
      "title": "Na 12",
      "name": "/gallery/12.jpg",
      "description": "da lat 12"
    },
    {
      "title": "Na 13",
      "name": "/gallery/13.jpg",
      "description": "da lat 13"
    },
    {
      "title": "Na 14",
      "name": "/gallery/14.jpg",
      "description": "da lat 14"
    },
    {
      "title": "Na 15",
      "name": "/gallery/15.jpg",
      "description": "da lat 15"
    },
    {
      "title": "Na 16",
      "name": "/gallery/16.jpg",
      "description": "da lat 16"
    },
    {
      "title": "Na 17",
      "name": "/gallery/17.jpg",
      "description": "da lat 17"
    },
    {
      "title": "Na 18",
      "name": "/gallery/18.jpg",
      "description": "da lat 18"
    },
    {
      "title": "Na 19",
      "name": "/gallery/19.jpg",
      "description": "da lat 19"
    }
  ]
})

export const state = () => initialState()

export const getters = {
  users: state => state.users,
  places: state => state.places,
  galleries: state => state.galleries,
  page: state => state.page,
  indexedUser: state => state.indexedUser,
  selectedUser: state => state.users[state.indexedUser]
}

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName
  },
  addFollower(state) {
    state.users[state.indexedUser].followers++
  },
  removeFollower(state) {
    state.users[state.indexedUser].followers--
  },
  changeUser(state, i) {
    state.indexedUser = i
  }
}

