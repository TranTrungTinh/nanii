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
      status: `Nơi yên bình, nơi cất giữ những yêu thương không đâu khác chính là Nơi Đây. Tôi yêu cái lạnh buốt da, yêu sự tĩnh lặng khi về thăm Đà Lạt vào những ngày thứ trong tuần. Nó nhẹ nhàng không ồn ào không chút vội vã. Yêu những cung đường lúc thì ngoằn nghoèo khi thì thẳng tấp không cần đưa tôi đến nơi đâu cả. Cơn mưa rào bất chợt chỉ lướt qua rồi đi mất cũng làm tôi yêu nơi này hơn. Những buổi sáng quấn mình trong chăn ấm áp, những buổi chiều lang thang một mình ngắm nhìn mọi thứ...bình yên đến lạ thường! Yêu luôn cả con người, những đôi mắt long lanh làn da rám nắng của đám trẻ con người bản địa. Tôi yêu nơi này!`,
      description:
        `Để yêu thêm Đà Lạt bạn hãy thử đến những vùng đất thiên nhiên ít người thay vì chen chúc nhau vào nơi đông đúc. Trải nghiệm tuyệt vời hơn khi bạn đi xe máy lên tận nơi và vi vu qua những con đường đèo xanh mát.<br> 
        - Tùng Hạ farm: Nơi chứa đựng nhiều tình yêu thiên nhiên nhất tôi từng đặt chân đến. Nơi có loài hoa tôi yêu hoa oải hương, nơi có một căn nhà kính nhỏ với đầy sách và những vật dụng dễ thương, nơi có những con người hiền hòa chất phát luôn gắn liền với công việc chăm vườn không cần phải lo nghĩ gì. Một nơi thật sự xinh đẹp!<br>
        - Trại mát: Tôi ghé qua nơi này vào lúc 18h chiều chỉ là để ngắm đèn của từng nhà kính lần lượt được bật lên.<br>
        - Đồi chè Cầu Đất: Ở nơi đây chẳng gì thú vị hơn là được nhìn thấy các cô các chị cặm cụi hái chè trên cánh đồng xanh bất tận.<br>
        - Đỉnh Langbiang: Để ngắm được sự hùng vĩ của vùng núi non này nơi đây là lựa chọn tốt nhât.<br>
        - Ma rừng lữ quán: Một con đường xấu một lối đi nhỏ cũng không ngăn cản được tôi đến với vùng đất xinh đẹp như thế. Nhà màu tím, hoa màu tím cả cảnh vật cũng mang một màu tím đượm buồn.<br>
        - Hồ suối Vàng: Nơi này có gì? Có một cây thông mọi người gọi là cây thông cô đơn.<br>
        - Hồ Tuyền Lâm: Mọi người thường dừng chân ở hồ để ngắm cảnh còn tôi lại chạy hết một vòng hồ để cảm nhận cái đẹp.`
    },
    {
      name: 'Nha Trang',
      stars: 4.5,
      tags: ['nhatrang', 'beach', 'great'],
      img: ['/home/1.jpg', '/place/3.jpg'],
      status: `Nơi đầy nắng và gió, Nha Trang một bãi biển xinh đẹp. Núi cao, mây trôi sóng biển dạt dào mang chút ồn ào nhưng không hề vội vã. Dòng người đông đúc qua qua lại lại nói cười trên bãi biển mới đó đâu đã thưa thớt dần đó chính là chiều tà, lúc ánh sáng mặt trời không còn chói chang cũng là lúc những ánh đèn ven biển lần lượt bật lên. Đêm muộn thêm bao nhiêu thì tiếng nói cũng thưa thớt đi bấy nhiêu chỉ còn lại một vài người trong lòng có chút tâm sự một mình trãi lòng với biển đêm. Biển đẹp nhất là khi nó chỉ một mình!`,
      description:
        `Vùng biển đã quá nhiều người biết đến, mọi thứ dường như luôn ồn ào náo nhiệt:<br>
        - Sáng được ngắm bình minh trên biển chắc có lẽ là một điều tuyệt vời.<br>
        - Nhiều hòn đảo nhỏ gần đó sẽ là địa điểm thú vị để các bạn ghé thăm.<br>
        - Đến với biển thì điều gì không thể bỏ qua, đó chính là các món hải sản tươi ngon.<br>
        - Tối đến chính là khoảng thời gian đẹp nhất để bạn ngắm nhìn sóng biển và nghe âm thanh của gió biển.`
    },
    {
      name: 'Coco Beach',
      stars: 4,
      tags: ['coco', 'beach', 'hot'],
      img: ['/home/3.jpg', '/place/2.jpg'],
      status: `Nơi có một vùng biển yên bình - Coco Beach. Không quá rực rỡ cũng không một chút ồn ào, ngày tôi đặt chân đến đây chắc có lẽ là lúc mọi thứ đã trở về đơn giản nhất. Không gian tĩnh lặng chỉ có sóng là vẫn vỗ ồ ạt gió vẫn thổi rào rào và thế là tôi đã có một kỳ nghỉ vội vàng thật sự tuyệt vời!`,
      description:
        `Nếu các bạn muốn nghỉ mát đúng nghĩa thì hãy đến nơi đây ngày trong tuần:<br>
        - Bạn sẽ cảm nhận được nét đẹp của một vùng biển vắng, cũng là biển nhưng mỗi nơi mỗi vẻ.<br>
        - Không gian xung quanh cũng không quá đông đúc luôn tạo cho bạn cảm giác yên bình.<br>
        - Và cũng đừng quên ăn hải sản khi đến vùng biển xinh đẹp này.`
    }
  ],
  galleries: [
    {
      "title": "#1",
      "name": "/gallery/1.jpg",
      "description": "Tình yêu đích thực luôn ở quanh ta, là những thứ chúng ta không cần phải tìm kiếm"
    },
    {
      "title": "#2",
      "name": "/gallery/2.jpg",
      "description": 'Hãy chân thành làm những gì bạn thích để khi nhìn về quá khứ không phải nói "giá như"'
    },
    {
      "title": "#3",
      "name": "/gallery/3.jpg",
      "description": "Trái tim của người phụ nữ là những bí mật của đại dương sâu thẳm"
    },
    {
      "title": "#4",
      "name": "/gallery/4.jpg",
      "description": "Mãi là những cái tên quên nhớ và vẫn mãi là những câu quên nói"
    },
    {
      "title": "#5",
      "name": "/gallery/5.jpg",
      "description": "Thích ánh nắng mặt trời buổi sáng cũng như là bất cứ điều gì cũng có thể một lần nữa bắt đầu."
    },
    {
      "title": "#6",
      "name": "/gallery/6.jpg",
      "description": "Quá khứ không còn là quan trọng bởi vì vốn dĩ thanh xuân là để bỏ lỡ"
    },
    {
      "title": "#7",
      "name": "/gallery/7.jpg",
      "description": "Có những việc dù có câu trả lời cũng không thay đổi được điều gì"
    },
    {
      "title": "#8",
      "name": "/gallery/8.jpg",
      "description": "Ta luôn không nhận ra giá trị của thứ gì đó cho đến khi nó mất đi"
    },
    {
      "title": "#9",
      "name": "/gallery/9.jpg",
      "description": "Biết mình có gì, biết mình cần gì và phải biết mình có thể làm gì"
    },
    {
      "title": "#10",
      "name": "/gallery/10.jpg",
      "description": "Chúng ta nghĩ mình hiểu rõ ai đó, nhưng thật sự chúng ta chỉ được biết một phiên bản tính cách mà họ thể hiện ra."
    },
    {
      "title": "#11",
      "name": "/gallery/11.jpg",
      "description": "Ai trong đời hẳn cũng từng một lần theo đuổi một thứ tình cảm không hồi đáp"
    },
    {
      "title": "#12",
      "name": "/gallery/12.jpg",
      "description": "Thời gian của mỗi người rất quý giá đừng lãng phí nó để sống vì niềm vui của người khác"
    },
    {
      "title": "#13",
      "name": "/gallery/13.jpg",
      "description": "Nếu tình yêu là gia vị cho cuộc sống thêm mặn mà thì thôi mình ăn nhạt sẽ tốt hơn cho sức khoẻ =)))"
    },
    {
      "title": "#14",
      "name": "/gallery/14.jpg",
      "description": "Mỗi con người chúng ta đều mang đến một cảm xúc riêng biệt"
    },
    {
      "title": "#15",
      "name": "/gallery/15.jpg",
      "description": "Người không hiểu được sự im lặng của bạn, chắc gì đã hiểu lời bạn nói"
    },
    {
      "title": "#16",
      "name": "/gallery/16.jpg",
      "description": "Mọi chuyện rồi sẽ ổn thôi, mà không ổn thì cũng thôi =)))"
    },
    {
      "title": "#17",
      "name": "/gallery/17.jpg",
      "description": "Cuộc sống này rất công bằng, khi bạn cho đi thứ gì bạn sẽ mất luôn thứ đó =)))"
    },
    {
      "title": "#18",
      "name": "/gallery/18.jpg",
      "description": "Thời buổi này mỗi khi thấy trái tim lên tiếng thì lý trí hãy tát cho nó một phát =)))"
    },
    {
      "title": "#19",
      "name": "/gallery/19.jpg",
      "description": "Tình yêu luôn đẹp, nhưng trong cuộc sống này đôi khi tình yêu không phải là tất cả"
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

