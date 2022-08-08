import axios from "axios";

const API_URL = "http://0.0.0.0:8000/movies/";

export async function getMovieApi() {
  try {
    const res = await axios.get(`${API_URL}`);
    console.log("success getting Movie api");
    return res.data;
  } catch (e) {
    const res = SAMPLE_MOVIE_API;
    console.log("falied getting Movie api - replaced with mockup");
    return res;
  }
}

export async function getDetailApi(movieID) {
  try {
    const res = await axios.get(`${API_URL}${movieID}`);
    console.log("success getting Detail api");
    return res.data;
  } catch (e) {
    const res = SAMPLE_DETAIL_API;
    console.log("falied getting Detail api - replaced with mockup");
    return res;
  }
}

export async function postCommentApi(movieID, comment) {
  try {
    await axios.post(`${API_URL}comments/${movieID}`, comment);
    const res = await getCommentApi(movieID);
    console.log("success posting Comment");
    console.log(res);
    return res;
  } catch (e) {
    console.log("failed posting Comment");
    const res = await getCommentApi(movieID);
    console.log(res);
    return res;
  }
}

export async function getCommentApi(movieID) {
  try {
    const res = await axios.get(`${API_URL}comments/${movieID}`);
    console.log("success getting Comment api");
    return res.data;
  } catch (e) {
    const res = SAMPLE_COMMENT_API;
    console.log("falied getting Comment api - replaced with mockup");
    return res;
  }
}

const SAMPLE_MOVIE_API = {
  movies: [
    {
      title_kor: "로스트 도터",
      title_eng: "THE LOST DAUGHTER, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220714_114/1657780525423jmTpw_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.78",
      rating_cri: "6.86",
      rating_net: "7.69",
      genre: "드라마",
      showtimes: "122분",
      release_date: "2022.07.14 개봉",
      rate: "15세 관람가",
      summary:
        "그리스로 혼자 휴가를 떠난 대학 교수 레다는\n 딸을 가진 젊은 여자 니나를 보고 단번에 시선을 빼앗긴다.\n 매일 같은 해변에서 시간을 보내며 서로를 응시하던 두 사람,\n 갑자기 니나의 딸이 사라지고 레다는 옛 기억을 떠올린다.",
      staff: [
        {
          name: "매기 질렌할",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000056%2FPM5699_115943_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "올리비아 콜맨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001304%2FPM130405_171757_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "다코타 존슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002412%2FPM241245_160350_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "제시 버클리",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004236%2FPM423602_141322_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "폴 메스칼",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460116_174423_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "피터 사스가드",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000065%2FPM6527_141135_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "메모리",
      title_eng: "Memory, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220701_119/1656638283242mAjqJ_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.50",
      rating_cri: "",
      rating_net: "7.55",
      genre: "범죄,액션,스릴러",
      showtimes: "114분",
      release_date: "2022.07.14 개봉",
      rate: "15세 관람가",
      summary:
        "단 한번의 실패도 실수도 용납할 수 없는 킬러 ‘알렉스’(리암 니슨)\n 어느 날, 그에게 새로운 의뢰가 들어온다.\n \n 오직 자신의 신념에 따라 움직인 그는\n 이 사건에 한 소녀가 연관되어 있음을 알게 되고 단칼에 거절한다.\n \n 의뢰를 거절했다는 이유로, 모두의 표적이 되어버린 그는\n 오래된 병으로 인해 희미해져 가는 기억을 붙잡고,\n 소녀와 자신을 지키기 위해 의뢰에 연관된 모든 것들을 응징하기로 한다.\n \n 한편, 멕시코 국경에서 사건을 맹렬히 쫓던\n FBI 요원 ‘빈센트’(가이 피어스)는 ‘알렉스’를 만나게 되고,\n 두 사람은 이 사건의 거대한 비밀과 마주하게 되는데…\n \n 사라지는 기억, 더욱 선명해지는 정의!\n 마지막 응징이 시작된다!",
      staff: [
        {
          name: "마틴 캠벨",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000026%2FPM2632_172722_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "리암 니슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F187%2F202207131022237361.png&type=u111_139&quality=95",
        },
        {
          name: "가이 피어스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000021%2FPM2147_175323_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "모니카 벨루치",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000028%2FPM2866_103529_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "레이 스티븐슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000446%2FPM44688_115128_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "군다",
      title_eng: "Gunda, 2020",
      poster_url:
        "https://movie-phinf.pstatic.net/20220628_282/1656381331221VmPay_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.00",
      rating_cri: "7.50",
      rating_net: "8.05",
      genre: "다큐멘터리",
      showtimes: "93분",
      release_date: "2022.07.14 개봉",
      rate: "전체 관람가",
      summary: "돼지, 소, 닭의 평온한 일상은\n 인간을 대자연의 세계로 초대한다",
      staff: [
        {
          name: "빅토르 코사코프스키",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003103%2FPM310322_143545_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "섹스 앤 퓨리",
      title_eng: "Syysprinssi, Love and Fury, 2016",
      poster_url:
        "https://movie-phinf.pstatic.net/20220602_186/16541343618350olGv_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "0.00",
      genre: "멜로/로맨스,드라마",
      showtimes: "90분",
      release_date: "2022.07.14 개봉",
      rate: "15세 관람가",
      summary:
        "기성 문화에 맞서 젊은 에너지로 문화를 바꿔보려는 두 작가 ‘잉카’와 ‘유하나’\n 뜨거운 사랑을 나눔과 동시에 서로의 뮤즈가 되어 각자의 글을 써 내려간다.\n 그렇게 사랑을 키워가던 중 ‘잉카’의 책은 베스트셀러가 된 반면\n 여전히 책을 완성하지 못한 ‘유하나’는 열등감에 휩싸여 삐뚤어진 사랑 표현을 하고.\n 계속 타오를 것 같던 두 사람의 관계에 금이 가기 시작한다..",
      staff: [
        {
          name: "앨리 하파살로",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "로라 비른",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001857%2FPM185736_134238_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "로리 틸카넨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002376%2FPM237688_161901_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "명탐정 코난: 할로윈의 신부",
      title_eng:
        "名探偵コナン: ハロウィンの花嫁, Detective Conan: The Bride of Halloween, 202...",
      poster_url:
        "https://movie-phinf.pstatic.net/20220704_246/16569027452369rlGb_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.10",
      rating_cri: "7.00",
      rating_net: "9.52",
      genre: "애니메이션",
      showtimes: "110분",
      release_date: "2022.07.13 개봉",
      rate: "12세 관람가",
      summary:
        "극악무도한 폭파범 ‘플라먀’에 의해 교묘한 함정에 빠진 아무로 토오루!\n 모든 것이 베일에 가려진 ‘플라먀’,\n 유일한 단서는 아무로 토오루가 그의 경찰 동기들과 마지막으로 함께 했던 하루.\n 이와 동시에 결혼식의 신부가 된 경시청의 사토 형사는 불길한 예감을 감출 수 없는데…\n \n 도시 전체를 인질로 삼은 ‘플라먀’,\n 그리고 이를 막으려 하는 아무로 토오루와 명탐정 코난의 숨 막히는 공조!\n 다시 시작된 카운트다운, 할로윈의 밤이 광란으로 빛난다!",
      staff: [
        {
          name: "미츠나카 스스무",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "엘비스",
      title_eng: "ELVIS, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220701_282/1656663610600xPG8g_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.73",
      rating_cri: "6.50",
      rating_net: "8.83",
      genre: "드라마",
      showtimes: "159분",
      release_date: "2022.07.13 개봉",
      rate: "15세 관람가",
      summary:
        "미국 남부 멤피스에서 트럭을 몰며 음악의 꿈을 키우던 19살의 무명 가수 ‘엘비스’.\n 지역 라디오의 작은 무대에 서게 된 ‘엘비스’는 어디서도 본 적 없는 몸짓과 퍼포먼스로 무대를 압도하고,\n 그에게 매료된 관객들에게 뜨거운 환호성을 받는다.\n 쇼 비즈니스 업계에서 일하던 ‘톰 파커’는 이를 목격하고\n ‘엘비스’에게 스타로 만들어주겠다고 약속하며 함께할 것을 제안한다.\n \n 자신이 자라난 동네에서 보고 들은 흑인음악을 접목시킨\n 독특한 음색과 리듬, 강렬한 퍼포먼스, 화려한 패션까지\n 그의 모든 것이 대중을 사로잡으며 ‘엘비스’는 단숨에 스타의 반열에 올라선다.\n 그러나 시대를 앞서 나간 치명적이고 반항적인 존재감은 혼란스러운 시대 상황과 갈등을 빚게 되고\n 지금껏 쌓아온 모든 것이 한순간에 무너질 수 있다고 압박하는 ‘톰 파커’까지 가세해\n ‘엘비스’는 그의 뜻과는 다른 선택을 하게 된다.\n 이로 인해 평생을 함께한 매니저 ‘톰 파커’와의 관계도 조금씩 어긋나기 시작하는데…",
      staff: [
        {
          name: "바즈 루어만",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000001%2FPM125_153626_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "오스틴 버틀러",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002686%2FPM268679_212401_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "톰 행크스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F62%2F20220706104149181.png&type=u111_139&quality=95",
        },
        {
          name: "올리비아 더용",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003021%2FPM302134_153544_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "켈빈 해리슨 주니어",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003981%2FPM398149_120910_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "데이비드 웬햄",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F12%2F201611231559576851.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "더 킬러: 죽어도 되는 아이",
      title_eng: "THE KILLER _ A GIRL WHO DESERVES TO DIE, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220713_233/16576932321555t5fq_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.19",
      rating_cri: "",
      rating_net: "8.24",
      genre: "액션",
      showtimes: "95분",
      release_date: "2022.07.13 개봉",
      rate: "청소년 관람불가",
      summary:
        "은퇴 후 성공적인 재테크로 호화롭게 생활하는 전설의 킬러 ‘의강’이\n 제멋대로 행동하는 여고생 ‘윤지’를 떠맡게 된다.\n \n 단기간 보호자 역할만 하면 될 거라고 가볍게 여긴 순간\n ‘윤지’가 납치되는 사건이 일어나는데…\n \n “걔는 다치면 안 되는 아이야”\n 애써 잠재운 ‘의강’의 본능이 깨어난다!",
      staff: [
        {
          name: "최재훈",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000744%2FPM74414_101850_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "장혁",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202101%2F20210128110200229.jpg&type=u111_139&quality=95",
        },
        {
          name: "브루스 칸",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201901%2F20190104140732380.jpg&type=u111_139&quality=95",
        },
        {
          name: "이서영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004542%2FPM454234_151048_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "그레이 맨",
      title_eng: "The Gray Man, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220707_187/165715990860275QAG_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.02",
      rating_cri: "",
      rating_net: "8.40",
      genre: "액션,스릴러",
      showtimes: "127분",
      release_date: "2022.07.13 개봉",
      rate: "15세 관람가",
      summary:
        "그 누구도 실체를 몰라 `그레이 맨`으로 불리는 CIA의 암살 전문 요원이 우연히 CIA의 감추고 싶은 비밀을 알게 되고, CIA의 사주를 받은 소시오패스 전 동료에게 쫓기며 시작되는 액션 블록버스터",
      staff: [
        {
          name: "앤서니 루소",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F185%2F202207111035175201.png&type=u111_139&quality=95",
        },
        {
          name: "라이언 고슬링",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000057%2FPM5751_144824_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "크리스 에반스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F110%2F202206081151278971.png&type=u111_139&quality=95",
        },
        {
          name: "아나 데 아르마스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001712%2FPM171281_181850_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "레게장 페이지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F37%2F202012241413274941.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "섹스 앤 퓨리",
      title_eng: "Syysprinssi, Love and Fury, 2016",
      poster_url:
        "https://movie-phinf.pstatic.net/20220602_186/16541343618350olGv_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "0.00",
      genre: "멜로/로맨스,드라마",
      showtimes: "90분",
      release_date: "2022.07.14 개봉",
      rate: "15세 관람가",
      summary:
        "기성 문화에 맞서 젊은 에너지로 문화를 바꿔보려는 두 작가 ‘잉카’와 ‘유하나’\n 뜨거운 사랑을 나눔과 동시에 서로의 뮤즈가 되어 각자의 글을 써 내려간다.\n 그렇게 사랑을 키워가던 중 ‘잉카’의 책은 베스트셀러가 된 반면\n 여전히 책을 완성하지 못한 ‘유하나’는 열등감에 휩싸여 삐뚤어진 사랑 표현을 하고.\n 계속 타오를 것 같던 두 사람의 관계에 금이 가기 시작한다..",
      staff: [
        {
          name: "앨리 하파살로",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "로라 비른",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001857%2FPM185736_134238_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "로리 틸카넨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002376%2FPM237688_161901_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "명탐정 코난: 할로윈의 신부",
      title_eng:
        "名探偵コナン: ハロウィンの花嫁, Detective Conan: The Bride of Halloween, 202...",
      poster_url:
        "https://movie-phinf.pstatic.net/20220704_246/16569027452369rlGb_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.10",
      rating_cri: "7.00",
      rating_net: "9.52",
      genre: "애니메이션",
      showtimes: "110분",
      release_date: "2022.07.13 개봉",
      rate: "12세 관람가",
      summary:
        "극악무도한 폭파범 ‘플라먀’에 의해 교묘한 함정에 빠진 아무로 토오루!\n 모든 것이 베일에 가려진 ‘플라먀’,\n 유일한 단서는 아무로 토오루가 그의 경찰 동기들과 마지막으로 함께 했던 하루.\n 이와 동시에 결혼식의 신부가 된 경시청의 사토 형사는 불길한 예감을 감출 수 없는데…\n \n 도시 전체를 인질로 삼은 ‘플라먀’,\n 그리고 이를 막으려 하는 아무로 토오루와 명탐정 코난의 숨 막히는 공조!\n 다시 시작된 카운트다운, 할로윈의 밤이 광란으로 빛난다!",
      staff: [
        {
          name: "미츠나카 스스무",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "엘비스",
      title_eng: "ELVIS, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220701_282/1656663610600xPG8g_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.73",
      rating_cri: "6.50",
      rating_net: "8.83",
      genre: "드라마",
      showtimes: "159분",
      release_date: "2022.07.13 개봉",
      rate: "15세 관람가",
      summary:
        "미국 남부 멤피스에서 트럭을 몰며 음악의 꿈을 키우던 19살의 무명 가수 ‘엘비스’.\n 지역 라디오의 작은 무대에 서게 된 ‘엘비스’는 어디서도 본 적 없는 몸짓과 퍼포먼스로 무대를 압도하고,\n 그에게 매료된 관객들에게 뜨거운 환호성을 받는다.\n 쇼 비즈니스 업계에서 일하던 ‘톰 파커’는 이를 목격하고\n ‘엘비스’에게 스타로 만들어주겠다고 약속하며 함께할 것을 제안한다.\n \n 자신이 자라난 동네에서 보고 들은 흑인음악을 접목시킨\n 독특한 음색과 리듬, 강렬한 퍼포먼스, 화려한 패션까지\n 그의 모든 것이 대중을 사로잡으며 ‘엘비스’는 단숨에 스타의 반열에 올라선다.\n 그러나 시대를 앞서 나간 치명적이고 반항적인 존재감은 혼란스러운 시대 상황과 갈등을 빚게 되고\n 지금껏 쌓아온 모든 것이 한순간에 무너질 수 있다고 압박하는 ‘톰 파커’까지 가세해\n ‘엘비스’는 그의 뜻과는 다른 선택을 하게 된다.\n 이로 인해 평생을 함께한 매니저 ‘톰 파커’와의 관계도 조금씩 어긋나기 시작하는데…",
      staff: [
        {
          name: "바즈 루어만",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000001%2FPM125_153626_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "오스틴 버틀러",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002686%2FPM268679_212401_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "톰 행크스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F62%2F20220706104149181.png&type=u111_139&quality=95",
        },
        {
          name: "올리비아 더용",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003021%2FPM302134_153544_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "켈빈 해리슨 주니어",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003981%2FPM398149_120910_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "데이비드 웬햄",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F12%2F201611231559576851.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "더 킬러: 죽어도 되는 아이",
      title_eng: "THE KILLER _ A GIRL WHO DESERVES TO DIE, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220713_233/16576932321555t5fq_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.19",
      rating_cri: "",
      rating_net: "8.24",
      genre: "액션",
      showtimes: "95분",
      release_date: "2022.07.13 개봉",
      rate: "청소년 관람불가",
      summary:
        "은퇴 후 성공적인 재테크로 호화롭게 생활하는 전설의 킬러 ‘의강’이\n 제멋대로 행동하는 여고생 ‘윤지’를 떠맡게 된다.\n \n 단기간 보호자 역할만 하면 될 거라고 가볍게 여긴 순간\n ‘윤지’가 납치되는 사건이 일어나는데…\n \n “걔는 다치면 안 되는 아이야”\n 애써 잠재운 ‘의강’의 본능이 깨어난다!",
      staff: [
        {
          name: "최재훈",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000744%2FPM74414_101850_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "장혁",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202101%2F20210128110200229.jpg&type=u111_139&quality=95",
        },
        {
          name: "브루스 칸",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201901%2F20190104140732380.jpg&type=u111_139&quality=95",
        },
        {
          name: "이서영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004542%2FPM454234_151048_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "그레이 맨",
      title_eng: "The Gray Man, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220707_187/165715990860275QAG_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.02",
      rating_cri: "",
      rating_net: "8.40",
      genre: "액션,스릴러",
      showtimes: "127분",
      release_date: "2022.07.13 개봉",
      rate: "15세 관람가",
      summary:
        "그 누구도 실체를 몰라 `그레이 맨`으로 불리는 CIA의 암살 전문 요원이 우연히 CIA의 감추고 싶은 비밀을 알게 되고, CIA의 사주를 받은 소시오패스 전 동료에게 쫓기며 시작되는 액션 블록버스터",
      staff: [
        {
          name: "앤서니 루소",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F185%2F202207111035175201.png&type=u111_139&quality=95",
        },
        {
          name: "라이언 고슬링",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000057%2FPM5751_144824_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "크리스 에반스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F110%2F202206081151278971.png&type=u111_139&quality=95",
        },
        {
          name: "아나 데 아르마스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001712%2FPM171281_181850_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "레게장 페이지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F37%2F202012241413274941.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "멘",
      title_eng: "MEN, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220707_165/1657169975163XPUtD_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "6.73",
      rating_cri: "6.75",
      rating_net: "6.33",
      genre: "드라마,공포,SF",
      showtimes: "100분",
      release_date: "2022.07.13 개봉",
      rate: "청소년 관람불가",
      summary:
        "남편의 죽음 이후, 마음을 치유하기 위해\n 평화롭고 아름다운 영국 시골 마을을 찾은 '하퍼'\n \n 어느 순간부터 집 주변의 숲에서 온 정체 모를 누군가,\n 아니 '무언가'가 그를 따라다니기 시작한다.\n \n 공포에 질린 '하퍼'는 마을 사람들에게 도움을 청하지만\n 경찰관, 목사, 바텐더, 심지어 어린 소년까지\n 그들 모두 기묘한 반응을 보이는데…",
      staff: [
        {
          name: "알렉스 가랜드",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000114%2FPM11454_105943_000.png&type=u111_139&quality=95",
        },
        {
          name: "제시 버클리",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004236%2FPM423602_141322_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "로리 키니어",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001308%2FPM130807_181628_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "체리마호: 30살까지 동정이면 마법사가 될 수 있대",
      title_eng:
        "チェリまほ THE MOVIE 30歳まで童貞だと魔法使いになれるらしい, CHERRY MAGIC! TH...",
      poster_url:
        "https://movie-phinf.pstatic.net/20220617_88/1655433224572NW3gA_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.93",
      rating_cri: "4.00",
      rating_net: "9.04",
      genre: "판타지,멜로/로맨스",
      showtimes: "104분",
      release_date: "2022.07.13 개봉",
      rate: "12세 관람가",
      summary:
        "30살까지 ‘동정’이라는 이유로 사람의 마음을 읽는 마법사가 된 ‘아다치’와\n 이로 인해 7년 짝사랑의 진심을 들켜버린 ‘쿠로사와’는 그 누구보다 달달한 사내 연애 중이다.\n 하지만 비밀스럽고도 행복한 시간도 잠시, ‘아다치’의 갑작스러운 전근으로 장거리 커플이 된 둘은\n 연애 최대 위기를 맞게 되고, 서로가 없는 미래는 상상할 수 없다는 것을 깨닫게 된다.\n \n 두근거리는 동거의 시작… 이대로 평생 함께?\n \n 알콩달콩한 동거 생활이 시작됐지만, 두 사람의 사랑은 여전히 산 넘어 산!\n 우리 연애 이대로 괜찮을까…?\n \n 마법이 이어준 소중한 마음♥\n 심장에는 유해한, BUT 세상 가장 무해한\n 순도 100% 하트워밍 로맨스가 온다!",
      staff: [
        {
          name: "카자마 히로키",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004293%2FPM429302_184122_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아카소 에이지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004214%2FPM421414_145240_000.png&type=u111_139&quality=95",
        },
        {
          name: "마치다 케이타",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003188%2FPM318898_183859_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "유타로",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460111_113356_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아사카 코다이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003310%2FPM331062_113207_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "프리! 더 파이널 스트로크 후편",
      title_eng: "Free! - the Final Stroke - the second volume, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220615_181/16552812707039HIoY_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.94",
      rating_cri: "6.00",
      rating_net: "8.16",
      genre: "애니메이션",
      showtimes: "107분",
      release_date: "2022.06.30 개봉",
      rate: "전체 관람가",
      summary:
        "처음 나간 세계 대회가 끝난 후,\n 하루카는 《절대 왕자》 알베르트의 수영에 사로잡혀\n 자유를 잃고 만다.\n 「너는 왜 수영을 하고 있는 거지?」\n 수영의 의미, 그리고 자신과 물의 관계에 대해 고민하며\n 하루카는 괴로움에 발버둥 치면서\n 혼자 어두운 물 밑바닥으로 가라앉아 간다.\n \n 마음이 에이는 듯한 충동에 내몰려\n 혹독한 훈련을 선택하고\n 오로지 연습에만 몰두하는 하루카.\n 몸도 마음도 혹사하고 있다는 건\n 하루카 자신도 이미 충분히 느끼고 있었기에\n 동료들은 그런 하루카를 믿고 지켜볼 수밖에 없었다.\n \n 뇌리에 선명하게 떠오르는\n 알베르트의 차갑고 건조한 수영.\n 좀 더 빠르고 좀 더 강해져야 해.\n 다시 한번 알베르트와 싸워야만 해.\n \n 하루카의 뻗어 나가는 스트로크가\n 무겁고 냉연한 물을 가른다.\n 그런 하루카에게 다가가는 동료들.\n 헤엄친 그 끝에 하루카가 보게 된 풍경은-!",
      staff: [
        {
          name: "카와나미 에이사쿠",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "시마자키 노부나가",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003137%2FPM313794_133150_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "스즈키 타츠히사",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003174%2FPM317421_155624_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "미야노 마모루",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000462%2FPM46249_180731_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "우치야마 코우키",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "컴온 컴온",
      title_eng: "C'mon C'mon, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220614_201/1655192237871xmy9i_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.69",
      rating_cri: "7.00",
      rating_net: "7.78",
      genre: "드라마",
      showtimes: "109분",
      release_date: "2022.06.30 개봉",
      rate: "12세 관람가",
      summary:
        "어린이의 삶과 미래에 대해 인터뷰하는 라디오 저널리스트 조니.\n 어머니의 죽음 이후 오랜 시간 등돌리고 살던 여동생 비브의 부탁으로\n 육아 난이도 극상에 어디로 튈지 모르는 9살 조카 제시를 돌보게 된다.\n 뜻하지 않게 즐거운 시간과 슬픔의 시간,\n 조용한 밤과 흥미로운 낮 시간을 함께하게 된 둘.\n 조니는 제시에게도 인터뷰를 시도하지만\n 도리어 질문 세례를 받고 마음 깊은 곳에 숨겨둔 과거를 꺼내게 되는데...\n 이 변화무쌍한 세상 속에 어쩐지 우리, 진짜 가족이 된 것만 같다!",
      staff: [
        {
          name: "마이크 밀스",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000228%2FPM22833_162337_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "호아킨 피닉스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F195%2F201807031748145311.jpg&type=u111_139&quality=95",
        },
        {
          name: "우디 노먼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460119_150108_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "가비 호프만",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000047%2FPM4703_172903_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "토르: 러브 앤 썬더",
      title_eng: "Thor: Love and Thunder, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220706_263/1657071698045SKrKH_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "6.81",
      rating_cri: "5.14",
      rating_net: "6.56",
      genre: "액션,모험,판타지",
      showtimes: "119분",
      release_date: "2022.07.06 개봉",
      rate: "12세 관람가",
      summary:
        "슈퍼 히어로 시절이여, 안녕!\n 이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 ‘토르’\n \n 그러나, 우주의 모든 신들을 몰살하려는 신 도살자 ‘고르’의 등장으로\n ‘토르’의 안식년 계획은 산산조각 나버린다.\n \n ‘토르’는 새로운 위협에 맞서기 위해,\n ‘킹 발키리’, ‘코르그’, 그리고 전 여자친구 ‘제인’과 재회하게 되는데,\n 그녀가 묠니르를 휘두르는 ‘마이티 토르’가 되어 나타나 모두를 놀라게 한다.\n \n 이제, 팀 토르는 ‘고르’의 복수에 얽힌 미스터리를 밝히고\n 더 큰 전쟁을 막기 위한 전 우주적 스케일의 모험을 시작하는데...\n \n 우주 최고의 ‘갓’ 매치가 시작된다!",
      staff: [
        {
          name: "타이카 와이티티",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000633%2FPM63332_144736_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "크리스 헴스워스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001485%2FPM148568_110408_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "나탈리 포트만",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000020%2FPM2078_161738_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "테사 톰슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000901%2FPM90191_173218_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "크리스찬 베일",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000022%2F00000002246-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "타이카 와이티티",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000633%2FPM63332_144736_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "빅샤크4 : 바다공룡 대모험",
      title_eng:
        "Happy Little Submarine : Journey to the Center of the Deep Ocean, 2020",
      poster_url:
        "https://movie-phinf.pstatic.net/20220613_262/1655087253405K7CkW_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.60",
      rating_cri: "6.00",
      rating_net: "6.03",
      genre: "애니메이션,모험",
      showtimes: "85분",
      release_date: "2022.07.06 개봉",
      rate: "전체 관람가",
      summary:
        "빅샤크와 바닷속 친구들은 마법의 돌 매직스톤을 찾아 바다 끝 세계로 모험을 떠난다.\n 하지만 곧 엄청난 해저 소용돌이에 휩쓸리고 마는데\n 그 곳은 바로 전설 속 거대한 바다공룡이 사는 신비세계.\n 거대한 공룡과 살아있는 삼엽충, 대왕 바다전갈에 몬스터 물고기까지...\n 빅샤크와 친구들은 온갖 고생대 해양생물들의 위협을 피해 무사히 바다왕국으로 돌아갈 수 있을까?\n 스케일이 다른, 5억만년 전의 신비한 해저세계가 눈앞에 가득 펼쳐진다!",
      staff: [
        {
          name: "장초",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004541%2FPM454106_134755_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "김용",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004481%2FPM448166_135001_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "김소희",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004144%2FPM414439_101014_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "박시윤",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F165%2F202107021236126651.jpg&type=u111_139&quality=95",
        },
        {
          name: "서정익",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F46%2F202104131431345781.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "큐어",
      title_eng: "キュア, Cure, 1997",
      poster_url:
        "https://movie-phinf.pstatic.net/20220616_130/16553712403865Gw57_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.66",
      rating_cri: "9.67",
      rating_net: "8.28",
      genre: "범죄,스릴러",
      showtimes: "111분",
      release_date: "2022.07.06 개봉",
      rate: "15세 관람가",
      summary:
        "도쿄 지역에서 동일한 방식의 엽기적인 연쇄 살인사건이 발생한다.\n 놀라운 것은 체포된 범인들이 하나같이 회사원, 교사, 경찰, 의사 등 평범한 사람들이라는 것.\n 평소 아무 문제가 없던 사람들이 똑같은 방식으로 살인을 저지른 것에 의문을 품은\n 다카베 형사(야쿠쇼 고지)는 이들이 모두 한 남자를 만난 후\n 범행을 저질렀다는 사실을 알게 된다.",
      staff: [
        {
          name: "구로사와 기요시",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000008%2F00000000891-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "야쿠쇼 코지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000008%2F00000000894-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "하기와라 마사토",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000024%2FPM2460_145728_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "우지키 츠요시",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "나카가와 안나",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "오스기 렌",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000012%2FPM1288_110721_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "프리! 더 파이널 스트로크 후편",
      title_eng: "Free! - the Final Stroke - the second volume, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220615_181/16552812707039HIoY_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.94",
      rating_cri: "6.00",
      rating_net: "8.16",
      genre: "애니메이션",
      showtimes: "107분",
      release_date: "2022.06.30 개봉",
      rate: "전체 관람가",
      summary:
        "처음 나간 세계 대회가 끝난 후,\n 하루카는 《절대 왕자》 알베르트의 수영에 사로잡혀\n 자유를 잃고 만다.\n 「너는 왜 수영을 하고 있는 거지?」\n 수영의 의미, 그리고 자신과 물의 관계에 대해 고민하며\n 하루카는 괴로움에 발버둥 치면서\n 혼자 어두운 물 밑바닥으로 가라앉아 간다.\n \n 마음이 에이는 듯한 충동에 내몰려\n 혹독한 훈련을 선택하고\n 오로지 연습에만 몰두하는 하루카.\n 몸도 마음도 혹사하고 있다는 건\n 하루카 자신도 이미 충분히 느끼고 있었기에\n 동료들은 그런 하루카를 믿고 지켜볼 수밖에 없었다.\n \n 뇌리에 선명하게 떠오르는\n 알베르트의 차갑고 건조한 수영.\n 좀 더 빠르고 좀 더 강해져야 해.\n 다시 한번 알베르트와 싸워야만 해.\n \n 하루카의 뻗어 나가는 스트로크가\n 무겁고 냉연한 물을 가른다.\n 그런 하루카에게 다가가는 동료들.\n 헤엄친 그 끝에 하루카가 보게 된 풍경은-!",
      staff: [
        {
          name: "카와나미 에이사쿠",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "시마자키 노부나가",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003137%2FPM313794_133150_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "스즈키 타츠히사",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003174%2FPM317421_155624_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "미야노 마모루",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000462%2FPM46249_180731_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "우치야마 코우키",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "미친 능력",
      title_eng: "The Unbearable Weight of Massive Talent, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220629_258/1656487699800P8KI1_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.49",
      rating_cri: "6.00",
      rating_net: "7.72",
      genre: "범죄,액션,코미디",
      showtimes: "107분",
      release_date: "2022.06.29 개봉",
      rate: "15세 관람가",
      summary:
        "왕년에 잘나가던 슈퍼스타에서\n 누구에게도 인정받지 못하는 빚쟁이 신세가 된 ‘닉 케이지’\n \n 그런 그에게 생일 파티 참석을 조건으로\n 기꺼이 백만 달러를 주겠다는 슈퍼팬 ‘하비’(페드로 파스칼)가 등장한다.\n \n 스타로서의 자존심과 어마어마한 제안 사이에서 갈등하던 ‘닉 케이지’는\n 결국 생일 파티가 열리는 곳으로 향한다.\n \n 도착과 동시에 초호화 환대를 받고 행복한 휴양을 보내던 그는\n 의문의 CIA로부터 납치되고, ‘하비’가 악명 높은 수배범인 사실을 듣게 된다.\n \n CIA로부터 가족을 빌미로 위험한 미션을 강요 받은 ‘닉 케이지’는\n 설상가상 예기치 못한 사건들에 휘말리게 되는데…\n \n 감당 불가! 방심 금물!\n 참을 수 없는 초대형 코믹 액션이 온다! 레디 액션!",
      staff: [
        {
          name: "톰 고미칸",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "니콜라스 케이지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000011%2F00000001160-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "페드로 파스칼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F95%2F201611291550089071.jpg&type=u111_139&quality=95",
        },
        {
          name: "닐 패트릭 해리스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F178%2F201612131435207811.jpg&type=u111_139&quality=95",
        },
        {
          name: "티파니 해디쉬",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002804%2FPM280425_095625_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "러브: 무삭제판",
      title_eng: "LOVE, 2015",
      poster_url:
        "https://movie-phinf.pstatic.net/20220707_271/1657180651444q8mIt_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "6.67",
      rating_cri: "",
      rating_net: "6.67",
      genre: "멜로/로맨스",
      showtimes: "134분",
      release_date: "2022.06.30 개봉",
      rate: "청소년 관람불가",
      summary: "",
      staff: [
        {
          name: "가스파 노에",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000004%2F00000000471-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "칼 글루스맨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003726%2FPM372614_174247_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아오미 뮈요크",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003726%2FPM372615_102136_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "클라라 크리스틴",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003726%2FPM372616_102213_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "비노잇 데비",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001288%2FPM128869_114130_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "빈센트 마라블",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002048%2FPM204801_114158_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "니얼굴",
      title_eng: "Please Make Me Look Pretty, 2020",
      poster_url:
        "https://movie-phinf.pstatic.net/20220523_118/1653272228021DOt1t_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.78",
      rating_cri: "7.00",
      rating_net: "9.52",
      genre: "다큐멘터리",
      showtimes: "86분",
      release_date: "2022.06.23 개봉",
      rate: "전체 관람가",
      summary:
        "어느 뜨거운 여름, 집에서 뜨개질만 하던 은혜씨가\n 양평 문호리리버마켓의 인기 셀러로 거듭난다\n \n “예쁘게 그려주세요”\n “원래 예쁜데요 뭘~”\n \n 예쁜 얼굴도 안 예쁘게 그려주는 은혜씨 앞에\n 4천 명의 사람들이 환하게 웃음 짓는다",
      staff: [
        {
          name: "서동일",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000805%2FPM80548_110819_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "정은혜",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001249%2FPM124984_174729_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "장차현실",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004606%2FPM460632_110707_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "모어",
      title_eng: "I am More, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220607_79/1654593346304cTwrD_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.41",
      rating_cri: "7.38",
      rating_net: "9.22",
      genre: "다큐멘터리",
      showtimes: "81분",
      release_date: "2022.06.23 개봉",
      rate: "15세 관람가",
      summary:
        "발레리나, 뮤지컬 배우, 안무가, 작가\n 누군가의 자식, 친구, 연인\n 성소수자, 드랙퀸, 끼순이\n 그리고 토슈즈 신는 미친X…\n 이 세상 어디에도 속할 수 없는 나\n 인생은 쇼, 내 이름은 모어!\n \n 진짜 튀는 무대를 보여줄게!",
      staff: [
        {
          name: "이일하",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F171%2F201510161701468221.gif&type=u111_139&quality=95",
        },
        {
          name: "모지민",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F180%2F202206231416395341.jpg&type=u111_139&quality=95",
        },
        {
          name: "존 카메론 미첼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F53%2F201403201548228751.jpg&type=u111_139&quality=95",
        },
        {
          name: "예브게니 슈테판",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460128_114157_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "위대한 침묵",
      title_eng: "Great silence, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220602_213/1654135914421oLx11_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.20",
      rating_cri: "",
      rating_net: "9.11",
      genre: "다큐멘터리",
      showtimes: "124분",
      release_date: "2022.06.29 개봉",
      rate: "12세 관람가",
      summary:
        "2017년 3월 10일\n 대한민국 제18대 대통령 박근혜 탄핵 결정\n \n 국민들은 빙산의 일각과도 같은 언론의 정보 속에\n 진정한 ‘알 권리’를 잃었다\n \n 대한민국 역사상 초유의 사태 속에서\n 우리가 놓친 것은 무엇인가?\n \n 아직 공개되지 않은 국과수와 검찰 조사자료\n 아무도 모르는 모든 증거들이 낱낱이 공개된다!",
      staff: [
        {
          name: "송상민",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202002%2F20200205165007528.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "미친 능력",
      title_eng: "The Unbearable Weight of Massive Talent, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220629_258/1656487699800P8KI1_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.49",
      rating_cri: "6.00",
      rating_net: "7.72",
      genre: "범죄,액션,코미디",
      showtimes: "107분",
      release_date: "2022.06.29 개봉",
      rate: "15세 관람가",
      summary:
        "왕년에 잘나가던 슈퍼스타에서\n 누구에게도 인정받지 못하는 빚쟁이 신세가 된 ‘닉 케이지’\n \n 그런 그에게 생일 파티 참석을 조건으로\n 기꺼이 백만 달러를 주겠다는 슈퍼팬 ‘하비’(페드로 파스칼)가 등장한다.\n \n 스타로서의 자존심과 어마어마한 제안 사이에서 갈등하던 ‘닉 케이지’는\n 결국 생일 파티가 열리는 곳으로 향한다.\n \n 도착과 동시에 초호화 환대를 받고 행복한 휴양을 보내던 그는\n 의문의 CIA로부터 납치되고, ‘하비’가 악명 높은 수배범인 사실을 듣게 된다.\n \n CIA로부터 가족을 빌미로 위험한 미션을 강요 받은 ‘닉 케이지’는\n 설상가상 예기치 못한 사건들에 휘말리게 되는데…\n \n 감당 불가! 방심 금물!\n 참을 수 없는 초대형 코믹 액션이 온다! 레디 액션!",
      staff: [
        {
          name: "톰 고미칸",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "니콜라스 케이지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000011%2F00000001160-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "페드로 파스칼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F95%2F201611291550089071.jpg&type=u111_139&quality=95",
        },
        {
          name: "닐 패트릭 해리스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F178%2F201612131435207811.jpg&type=u111_139&quality=95",
        },
        {
          name: "티파니 해디쉬",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002804%2FPM280425_095625_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "리멤버 미",
      title_eng: "True North, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220609_47/1654764087353HdGyl_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.00",
      rating_cri: "5.67",
      rating_net: "9.73",
      genre: "애니메이션",
      showtimes: "94분",
      release_date: "2022.06.29 개봉",
      rate: "12세 관람가",
      summary:
        "가족들과 평화로운 일상을 보내던 평양에 사는 9살 소년 ‘요한’.\n \n 어느 날 갑자기 아빠가 사라지고,\n 그날 밤 ‘요한’은 집에 들이닥친 정부 관리자들에 의해\n 남은 가족들과 함께 어디론가 끌려가게 되는데…\n \n 수많은 증언이 있었지만\n 아무도 보지 못했고, 믿지 못했던 그곳\n \n 세상에서 가장 잔인한 죽음의 땅 ‘북한 정치범 수용소’\n \n 모든 것을 잃은 그곳에서 ‘희망’이란 조각을 찾기 위한\n 소년 ‘요한’의 여정이 시작된다!",
      staff: [
        {
          name: "시미즈 에이지 한",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004374%2FPM437487_104252_000.JPG&type=u111_139&quality=95",
        },
        {
          name: "새미 앤더슨",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "재클린 팜퀴스트",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "마이클 사사키",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "조엘 서튼",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "탑건: 매버릭",
      title_eng: "Top Gun: Maverick, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.60",
      rating_cri: "8.44",
      rating_net: "9.77",
      genre: "액션",
      showtimes: "130분",
      release_date: "2022.06.22 개봉",
      rate: "12세 관람가",
      summary:
        "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다.\n 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다.\n \n 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자\n 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…",
      staff: [
        {
          name: "조셉 코신스키",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001744%2FPM174408_145627_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "톰 크루즈",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F191%2F202206131034174801.png&type=u111_139&quality=95",
        },
        {
          name: "마일즈 텔러",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002559%2FPM255989_115402_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "제니퍼 코넬리",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F189%2F202206131044363451.png&type=u111_139&quality=95",
        },
        {
          name: "존 햄",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000490%2FPM49014_112219_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "에드 해리스",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000003%2FPM379_175907_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "모어",
      title_eng: "I am More, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220607_79/1654593346304cTwrD_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.41",
      rating_cri: "7.38",
      rating_net: "9.22",
      genre: "다큐멘터리",
      showtimes: "81분",
      release_date: "2022.06.23 개봉",
      rate: "15세 관람가",
      summary:
        "발레리나, 뮤지컬 배우, 안무가, 작가\n 누군가의 자식, 친구, 연인\n 성소수자, 드랙퀸, 끼순이\n 그리고 토슈즈 신는 미친X…\n 이 세상 어디에도 속할 수 없는 나\n 인생은 쇼, 내 이름은 모어!\n \n 진짜 튀는 무대를 보여줄게!",
      staff: [
        {
          name: "이일하",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F171%2F201510161701468221.gif&type=u111_139&quality=95",
        },
        {
          name: "모지민",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F180%2F202206231416395341.jpg&type=u111_139&quality=95",
        },
        {
          name: "존 카메론 미첼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F53%2F201403201548228751.jpg&type=u111_139&quality=95",
        },
        {
          name: "예브게니 슈테판",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460128_114157_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "우스운게 딱! 좋아!",
      title_eng: "2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220530_1/1653896440794fECn8_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.43",
      rating_cri: "6.00",
      rating_net: "8.06",
      genre: "드라마,코미디",
      showtimes: "101분",
      release_date: "2022.06.23 개봉",
      rate: "15세 관람가",
      summary:
        "눈치 없는 성구 때문에 울화통이 치미는 현,\n 전 남자친구에게 청첩장을 받은 소연,\n 서로 자기 말만 하는 가족들과 하루종일 지지고 볶는 민정,\n 죽은 친구의 은밀한 물건을 숨겨야 하는 소연.\n \n 웃기고 열받고 공감되고 손에 땀을 쥐게 하는,\n 본격 MZ 고군분투 코미디!\n \n 우리 인생에서 가장 발칙한 순간들을 만난다.",
      staff: [
        {
          name: "김현",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003883%2FPM388329_154248_000.png&type=u111_139&quality=95",
        },
        {
          name: "이민구",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202111%2F20211119182135221.jpg&type=u111_139&quality=95",
        },
        {
          name: "김휘규",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004050%2FPM405004_155120_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "이태희",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F77%2F20210615161809371.jpg&type=u111_139&quality=95",
        },
        {
          name: "신소연",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F154%2F202205041646527211.jpg&type=u111_139&quality=95",
        },
        {
          name: "탁이온",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202207%2F20220718101522741.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "경아의 딸",
      title_eng: "Gyeong-ah’s Daughter, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220607_114/1654565233313wzQgI_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.12",
      rating_cri: "6.20",
      rating_net: "8.77",
      genre: "",
      showtimes: "119분",
      release_date: "2022.06.16",
      rate: "15세 관람가",
      summary:
        "홀로 살아가는 경아에게 힘이 되어주는 유일한 존재인\n 딸 연수는 독립한 뒤로 얼굴조차 보기 어렵다.\n \n 그러던 어느 날, 헤어진 남자친구가 유출한 동영상 하나에 연수의 평범한 일상이 무너져버리고\n 이 사건은 잔잔했던 모녀의 삶에 걷잡을 수 없는 파동을 일으키는데…\n \n “엄마 탓 아니야. 내 탓도 아니고”",
      staff: [
        {
          name: "김정은",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003675%2FPM367518_173840_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "김정영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202112%2F20211207105500644.jpg&type=u111_139&quality=95",
        },
        {
          name: "하윤경",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202004%2F20200429175355874-375329.jpg&type=u111_139&quality=95",
        },
        {
          name: "김우겸",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004177%2FPM417730_103003_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "박혜진",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004236%2FPM423633_112525_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "임형태",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001008%2FPM100854_140853_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "그대라는기억 연숙씨",
      title_eng: "The memory of you, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220527_156/1653618993375JMp9q_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.00",
      rating_cri: "5.00",
      rating_net: "9.00",
      genre: "다큐멘터리",
      showtimes: "81분",
      release_date: "2022.06.16 개봉",
      rate: "전체 관람가",
      summary:
        "알츠하이머 치매라는 진단을 받고 차츰 병이 악화되는 아내 연숙씨,\n 기억은 사라지고 말을 잊기 시작했으며 음식을 먹으면 씹어야 한다는 사실조차\n 잊혀진 그녀의 시간은 거꾸로 흘러가고 있다.\n 그녀의 곁을 지킨 사람은 남편 규홍씨, 모든 걸 다 잊어도 유일하게 아내가 기억하는\n 사람은 남편뿐. 하루를 온전히 아내를 위해 보내는 남편은 어느 날 시한부 선고를 받는다.\n 13년을 자신보다 아내가 먼저였던 남편. 아내는 기억을 잃어가고, 남편은 기운을 잃어간다.\n \n 하나뿐인 딸은, 충격으로 아버지의 상태가 급격히 나빠질까 고민한다.\n 이 사실을 어떻게 전해야 할까?\n 자신이 암이라는 사실을 알게 된다면 남편은 어떤 결정을 내리게 될까?",
      staff: [
        {
          name: "심미희",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004573%2FPM457337_134559_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "탑건: 매버릭",
      title_eng: "Top Gun: Maverick, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.60",
      rating_cri: "8.44",
      rating_net: "9.77",
      genre: "액션",
      showtimes: "130분",
      release_date: "2022.06.22 개봉",
      rate: "12세 관람가",
      summary:
        "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다.\n 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다.\n \n 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자\n 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…",
      staff: [
        {
          name: "조셉 코신스키",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001744%2FPM174408_145627_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "톰 크루즈",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F191%2F202206131034174801.png&type=u111_139&quality=95",
        },
        {
          name: "마일즈 텔러",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002559%2FPM255989_115402_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "제니퍼 코넬리",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F189%2F202206131044363451.png&type=u111_139&quality=95",
        },
        {
          name: "존 햄",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000490%2FPM49014_112219_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "에드 해리스",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000003%2FPM379_175907_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "룸 쉐어링",
      title_eng: "My Perfect Roommate, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220608_157/1654654613441kSez5_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "5.83",
      rating_cri: "5.00",
      rating_net: "8.59",
      genre: "드라마",
      showtimes: "93분",
      release_date: "2022.06.22 개봉",
      rate: "전체 관람가",
      summary:
        "새벽부터 다시 새벽까지 알바 스케줄로 꽉 찬 대학생 '지웅'은\n 월세를 아끼려 룸 쉐어링을 신청한다.\n \n 도착하자마자 보게 된 건 온갖 라인으로 꽉 채워진 집안 꼬락서니.\n 그리고 까다롭고 별난 할머니 '금분'의 각종 금기 사항(?)들!\n \n '금분'은 밥은 각자 해결, 물과 전기 절약 필수,\n 정갈하게 구분해둔 알록달록 각자의 라인 안에서만 생활하기 등\n 나혼산 라이프를 꿈꾸던 '지웅'에게는 너무나 불가능한 규칙들을 읊기 시작하고,\n '지웅'은 울며 겨자 먹기로 깐깐한 규칙들을 받아들이기로 하는데...\n \n 어디 하나 닮은 구석 없는\n '금분'과 '지웅'의 물러설 수 없는 동거가 시작된다!\n \n \"두~~~~~~~~~~~~~~~~~~~~~~~~~~~둥\"",
      staff: [
        {
          name: "이순성",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000732%2FPM73258_114659_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "나문희",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201804%2F20180409112608589-9128865.jpg&type=u111_139&quality=95",
        },
        {
          name: "최우성",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460126_162216_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "최선자",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F188%2F201105160853522481.jpg&type=u111_139&quality=95",
        },
        {
          name: "김강민",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004597%2FPM459791_174426_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "문동혁",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210601092415681.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "버즈 라이트이어",
      title_eng: "Lightyear, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220616_274/1655363103107UB9nG_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.51",
      rating_cri: "6.83",
      rating_net: "7.58",
      genre: "애니메이션,액션,모험",
      showtimes: "105분",
      release_date: "2022.06.15 개봉",
      rate: "전체 관람가",
      summary:
        "미션 #1\n 나, 버즈 라이트이어.\n 인류 구원에 필요한 자원을 감지하고 현재 수많은 과학자들과 미지의 행성으로 향하고 있다.\n 이번 미션은 인류의 역사를 새롭게 쓸 것이라 확신한다.\n \n 미션 #2\n 잘못된 신호였다.\n 이곳은 삭막하고 거대한 외계 생물만이 살고 있는 폐허의 땅이다.\n 나의 실수로 모두가 이곳에 고립되고 말았다.\n 모두를 구하기 위해서 모든 것을 제자리에 돌려 놔야 한다.\n \n 미션 #3\n 실수를 바로잡기 위한 탈출 미션을 위해 1년의 준비를 마쳤다.\n 어쩌다 한 팀이 된 정예 부대와 이 미션을 수행할 예정이다.\n 우주를 집어삼킬 ‘저그’와 대규모 로봇 군사의 위협이 계속되지만\n 나는 절대 포기할 수 없다.\n 그런데… 여긴 또 어디지? 시간 속에 갇힌 건가?",
      staff: [
        {
          name: "앤거스 맥클레인",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "크리스 에반스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F110%2F202206081151278971.png&type=u111_139&quality=95",
        },
        {
          name: "타이카 와이티티",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000633%2FPM63332_144736_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "피터 손",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F48%2F202206091017516621.png&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "경아의 딸",
      title_eng: "Gyeong-ah’s Daughter, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220607_114/1654565233313wzQgI_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.12",
      rating_cri: "6.20",
      rating_net: "8.77",
      genre: "",
      showtimes: "119분",
      release_date: "2022.06.16",
      rate: "15세 관람가",
      summary:
        "홀로 살아가는 경아에게 힘이 되어주는 유일한 존재인\n 딸 연수는 독립한 뒤로 얼굴조차 보기 어렵다.\n \n 그러던 어느 날, 헤어진 남자친구가 유출한 동영상 하나에 연수의 평범한 일상이 무너져버리고\n 이 사건은 잔잔했던 모녀의 삶에 걷잡을 수 없는 파동을 일으키는데…\n \n “엄마 탓 아니야. 내 탓도 아니고”",
      staff: [
        {
          name: "김정은",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003675%2FPM367518_173840_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "김정영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202112%2F20211207105500644.jpg&type=u111_139&quality=95",
        },
        {
          name: "하윤경",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202004%2F20200429175355874-375329.jpg&type=u111_139&quality=95",
        },
        {
          name: "김우겸",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004177%2FPM417730_103003_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "박혜진",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004236%2FPM423633_112525_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "임형태",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001008%2FPM100854_140853_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "브로커",
      title_eng: "Broker, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220511_189/1652251073330PXNoG_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "6.70",
      rating_cri: "6.63",
      rating_net: "5.52",
      genre: "드라마",
      showtimes: "129분",
      release_date: "2022.06.08 개봉",
      rate: "12세 관람가",
      summary:
        "세탁소를 운영하지만 늘 빚에 시달리는 ‘상현’(송강호)과\n 베이비 박스 시설에서 일하는 보육원 출신의 ‘동수’(강동원).\n 거센 비가 내리는 어느 날 밤,\n 그들은 베이비 박스에 놓인 한 아기를 몰래 데려간다.\n 하지만 이튿날, 생각지 못하게 엄마 ‘소영’(이지은)이 아기 ‘우성’을 찾으러 돌아온다.\n 아기가 사라진 것을 안 소영이 경찰에 신고하려 하자 솔직하게 털어놓는 두 사람.\n 우성이를 잘 키울 적임자를 찾아 주기 위해서 그랬다는 변명이 기가 막히지만\n 소영은 우성이의 새 부모를 찾는 여정에 상현, 동수와 함께하기로 한다.\n \n 한편 이 모든 과정을 지켜본 형사 ‘수진’(배두나)과 후배 ‘이형사’(이주영).\n 이들을 현행범으로 잡고 반 년째 이어온 수사를 마무리하기 위해 조용히 뒤를 쫓는다.\n \n 베이비 박스,\n 그곳에서 의도치 않게 만난 이들의\n 예기치 못한 특별한 여정이 시작된다.",
      staff: [
        {
          name: "고레에다 히로카즈",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F94%2F202205301622389051.png&type=u111_139&quality=95",
        },
        {
          name: "송강호",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202102%2F20210222160936234.jpg&type=u111_139&quality=95",
        },
        {
          name: "강동원",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F37%2F201604181854386741.jpg&type=u111_139&quality=95",
        },
        {
          name: "배두나",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201904%2F20190430154004636-1290127.jpg&type=u111_139&quality=95",
        },
        {
          name: "아이유",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202206%2F20220608134249333.jpg&type=u111_139&quality=95",
        },
        {
          name: "이주영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F64%2F201911121202446441.png&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "윤시내가 사라졌다",
      title_eng: "Missing Yoon, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220517_243/1652769352705tetHN_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.57",
      rating_cri: "6.67",
      rating_net: "8.21",
      genre: "드라마",
      showtimes: "107분",
      release_date: "2022.06.08 개봉",
      rate: "12세 관람가",
      summary:
        "전설적인 가수의 실종으로 대한민국이 떠들썩한 가운데,\n 20년 간 이미테이션 가수 ‘연시내’로 활동해온 순이(오민애)는\n ‘윤시내’와 함께할 뻔한 꿈의 무대도, 일자리도 잃어 좌절에 빠진다.\n 한편, 사람들의 관심이 고픈 유튜버 ‘짱하’(이주영)는\n 라이브 방송 중 우연히 찍힌 엄마 ‘연시내’ 영상의 조회수가 떡상하자\n 대박 콘텐츠를 꿈꾸며 ‘윤시내’를 찾는 여정에 따라 나서는데…\n 동료 가수 ‘운시내’(노재원)와 함께 가시내, 윤신애, 윤사내까지 모두 만나며\n 사라진 ‘윤시내’의 행방을 수소문하기 시작한 동상이몽 두 모녀는 과연 ‘진짜’를 만날 수 있을까?",
      staff: [
        {
          name: "김진화",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004194%2FPM419465_183228_000.jpeg&type=u111_139&quality=95",
        },
        {
          name: "이주영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202110%2F20211005182315874.png&type=u111_139&quality=95",
        },
        {
          name: "오민애",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F55%2F202109141730212151.jpg&type=u111_139&quality=95",
        },
        {
          name: "노재원",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202204%2F20220425134315302.png&type=u111_139&quality=95",
        },
        {
          name: "김재화",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F53%2F202011091417415431.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "실종",
      title_eng: "さがす, Missing, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220520_113/1653016295848sqpsY_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.73",
      rating_cri: "7.33",
      rating_net: "7.72",
      genre: "스릴러",
      showtimes: "123분",
      release_date: "2022.06.15 개봉",
      rate: "청소년 관람불가",
      summary:
        "수배 중인 연쇄살인마를 목격한 후 포상금을 탈 생각에 들떠있던 아빠 ‘사토시’\n 어느 날, 아무런 흔적도 없이 사라져버린다.\n 딸 ‘카에데’는 유일한 가족인 아빠를 찾아 나서고,\n 아빠의 일터에서 아빠의 이름을 쓰고 있는 한 남자를 발견한다.\n 그리고 그가 바로 아빠가 사라지기 전 목격한\n 연쇄살인마라는 사실을 알게 되고 그를 쫓기 시작하는데…",
      staff: [
        {
          name: "가타야마 신조",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001644%2FPM164421_112602_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "사토 지로",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000481%2F00000048187-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "이토 아오이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003931%2FPM393171_163928_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "시미즈 히로야",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003579%2FPM357926_150057_000.JPG&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "극장판 포켓몬스터DP: 기라티나와 하늘의 꽃다발 쉐이미",
      title_eng: "ダイヤモンド&パ-ル ギラティナと氷空の花束シェイミ, 2008",
      poster_url:
        "https://movie-phinf.pstatic.net/20220504_257/1651659031710cXQVx_PNG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.12",
      rating_cri: "6.00",
      rating_net: "7.44",
      genre: "애니메이션",
      showtimes: "96분",
      release_date: "2022.06.01 개봉",
      rate: "전체 관람가",
      summary:
        "끝나지 않은 전설의 포켓몬들의 배틀로\n 위험에 빠진 반전 세계와 현실 세계를 구하기 위해\n 감사포켓몬 ‘쉐이미’와 ‘지우’, ‘피카츄’가 나서면서 시작되는 모험 이야기",
      staff: [
        {
          name: "유야마 쿠니히코",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000727%2FPM72736_153559_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "이선호",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201411%2F20141113232553957.jpeg&type=u111_139&quality=95",
        },
        {
          name: "김영선",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F192%2F201601300035406741.jpg&type=u111_139&quality=95",
        },
        {
          name: "마츠모토 리카",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000076%2FPM7610_121835_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "오오타니 이쿠에",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000620%2FPM62053_121927_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "우에다 유지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000625%2FPM62532_183244_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "카시오페아",
      title_eng: "Cassiopeia, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220504_120/16516585530998rJUJ_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.43",
      rating_cri: "6.50",
      rating_net: "9.08",
      genre: "드라마",
      showtimes: "102분",
      release_date: "2022.06.01 개봉",
      rate: "12세 관람가",
      summary:
        "이혼 후 변호사, 엄마로 완벽한 삶을 살아가려고 노력하는 수진은 하나뿐인 딸 지나의 미국 유학을 준비하고 있다. 정신없이 바쁜 수진을 위해 아빠 인우가 손녀를 돌보게 되면서 세 사람은 함께 살게 된다. 얼마 후 수진은 교통사고를 당하고, 병원에서 알츠하이머라는 뜻밖의 결과를 듣게 된다. 사랑하는 딸을 잊을까 봐 두려워하는 수진을 위해 아빠 인우는 수진의 곁을 지키고, 기억을 잊어도 살아갈 수 있도록 이들 부녀만의 애틋한 동행이 시작된다.",
      staff: [
        {
          name: "신연식",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F33%2F201502161621118311.jpg&type=u111_139&quality=95",
        },
        {
          name: "안성기",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F21%2F201302271816087311.jpg&type=u111_139&quality=95",
        },
        {
          name: "서현진",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201811%2F20181120162300125-5080869.jpg&type=u111_139&quality=95",
        },
        {
          name: "주예림",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F69%2F201901251624565311.jpg&type=u111_139&quality=95",
        },
        {
          name: "김다흰",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "홍성춘",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "쥬라기 월드: 도미니언",
      title_eng: "Jurassic World: Dominion, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220516_144/1652687286550mcE4G_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "6.81",
      rating_cri: "6.17",
      rating_net: "6.18",
      genre: "액션,모험",
      showtimes: "147분",
      release_date: "2022.06.01 개봉",
      rate: "12세 관람가",
      summary:
        "공룡들의 터전이었던 이슬라 누블라 섬이 파괴된 후,\n 마침내 공룡들은 섬을 벗어나 세상 밖으로 출몰한다.\n 지상에 함께 존재해선 안 될 위협적 생명체인 공룡의 등장으로\n 인류 역사상 겪어보지 못한 사상 최악의 위기를 맞이한 인간들.\n 지구의 최상위 포식자 자리를 걸고 인간과 공룡의 최후의 사투가 펼쳐진다.",
      staff: [
        {
          name: "콜린 트레보로우",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F148%2F202202041037225131.jpg&type=u111_139&quality=95",
        },
        {
          name: "크리스 프랫",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F124%2F201712061512278391.jpg&type=u111_139&quality=95",
        },
        {
          name: "브라이스 달라스 하워드",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F37%2F20161103153341551.png&type=u111_139&quality=95",
        },
        {
          name: "드완다 와이즈",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001811%2FPM181178_190202_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "로라 던",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000020%2FPM2084_144119_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "제프 골드브럼",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F10%2F202202041043281191.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "오마주",
      title_eng: "Hommage, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220426_287/1650950769337jn9SY_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.93",
      rating_cri: "7.25",
      rating_net: "8.29",
      genre: "드라마",
      showtimes: "108분",
      release_date: "2022.05.26 개봉",
      rate: "12세 관람가",
      summary:
        "엄마 영화는 재미없다는 아들과 늘상 밥타령인 남편,\n 잇따른 흥행 실패로 슬럼프에 빠진 중년의 영화감독 지완.\n 아르바이트 삼아 60년대에 활동한 한국 두 번째 여성 영화감독\n 홍은원 감독의 작품 <여판사>의 필름을 복원하게 된다.\n \n 사라진 필름을 찾아 홍감독의 마지막 행적을 따라가던 지완은\n 정체를 알 수 없는 모자 쓴 여성의 그림자와 함께\n 그 시간 속을 여행하게 되는데...\n \n 어쩐지, 희미해진 꿈과 영화에 대한 열정이 되살아나는 것만 같다.",
      staff: [
        {
          name: "신수원",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F70%2F201402251359183891.jpg&type=u111_139&quality=95",
        },
        {
          name: "이정은",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202001%2F20200122131108914.jpg&type=u111_139&quality=95",
        },
        {
          name: "권해효",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201911%2F20191111003403582-5489424.gif&type=u111_139&quality=95",
        },
        {
          name: "탕준상",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F104%2F201912041356435851.jpg&type=u111_139&quality=95",
        },
        {
          name: "이주실",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F104%2F202107301534359411.png&type=u111_139&quality=95",
        },
        {
          name: "김호정",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201801%2F2018010811344895-7582098.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "그대가 조국",
      title_eng: "The Red Herring, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220510_209/1652173423913czGcU_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.68",
      rating_cri: "5.00",
      rating_net: "7.06",
      genre: "다큐멘터리",
      showtimes: "124분",
      release_date: "2022.05.25 개봉",
      rate: "12세 관람가",
      summary:
        "대한민국은 민주공화국인가 검찰공화국인가\n 검찰의 칼날이 그대에게 향하지 않는다고 자신할 수 있는가\n 사냥이 시작됐다. 검찰이 던진 좌표를 따라 언론은 몰려들고 소문은 꼬리를 문다. 분노한 대중 앞에 검찰은 칼을 휘두른다. 저기 쫓기는 자는 누구인가. 그대가 아니라고 자신할 수 있는가.",
      staff: [
        {
          name: "이승준",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F6%2F202001141820275171.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "범죄도시2",
      title_eng: "the roundup, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220516_144/1652665409592Chvey_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.03",
      rating_cri: "6.56",
      rating_net: "9.43",
      genre: "범죄,액션",
      showtimes: "106분",
      release_date: "2022.05.18 개봉",
      rate: "15세 관람가",
      summary:
        "가리봉동 소탕작전 후 4년 뒤,\n 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다.\n \n 괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고,\n 그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다.\n \n ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며\n 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데...\n \n 나쁜 놈들 잡는 데 국경 없다!\n 통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!",
      staff: [
        {
          name: "이상용",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001684%2FPM168441_111851_000.JPEG&type=u111_139&quality=95",
        },
        {
          name: "마동석",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202012%2F20201207192857469.jpg&type=u111_139&quality=95",
        },
        {
          name: "손석구",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202010%2F20201008145307583.jpg&type=u111_139&quality=95",
        },
        {
          name: "최귀화",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201907%2F20190704112907168.jpg&type=u111_139&quality=95",
        },
        {
          name: "박지환",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F189%2F202204291033491471.jpg&type=u111_139&quality=95",
        },
        {
          name: "허동원",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202004%2F20200406133740398.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "아치의 노래, 정태춘",
      title_eng: "Song of the Poet, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220426_22/165094050059393Lij_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.35",
      rating_cri: "6.50",
      rating_net: "9.44",
      genre: "다큐멘터리",
      showtimes: "113분",
      release_date: "2022.05.18 개봉",
      rate: "전체 관람가",
      summary:
        "10대 가수상, 가요 사전심의 철폐운동\n 그리고 음악시장을 홀연히 떠나기까지\n \n 어디서도 들어보지 못한 노랫말과\n 서정적인 음율로 시대와 함께한 뮤지션\n \n 데뷔 40주년, 우리가 몰랐던\n 정태춘의 음악과 삶을 만나다!",
      staff: [
        {
          name: "고영재",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201407%2F20140731174542794.jpg&type=u111_139&quality=95",
        },
        {
          name: "정태춘",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F132%2F201202241759074091.jpg&type=u111_139&quality=95",
        },
        {
          name: "박은옥",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004588%2FPM458866_175203_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "유지연",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004586%2FPM458636_152131_000.png&type=u111_139&quality=95",
        },
        {
          name: "김용환",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004586%2FPM458635_152049_000.png&type=u111_139&quality=95",
        },
        {
          name: "이영미",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "나를 만나는 길",
      title_eng: "Walk with Me, 2017",
      poster_url:
        "https://movie-phinf.pstatic.net/20220513_185/1652431243958UlCdr_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.06",
      rating_cri: "5.67",
      rating_net: "8.82",
      genre: "다큐멘터리",
      showtimes: "94분",
      release_date: "2022.05.12 개봉",
      rate: "전체 관람가",
      summary:
        "전 세계인에게 평화와 행복의 가르침을 남긴 이 시대의 스승 ‘틱낫한’ 스님\n 그가 프랑스 보르도 근교에 설립한 명상 공동체 ‘플럼 빌리지’\n 아름다운 자연 속에서 함께 걷고, 먹고, 일하고, 차를 마시는 그곳에서\n 3년에 걸쳐 최초로 기록한 마음챙김의 일상",
      staff: [
        {
          name: "마크 J. 프랜시스",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000926%2FPM92604_180103_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "우연과 상상",
      title_eng: "偶然と想像, Wheel of Fortune and Fantasy, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220504_174/1651648935473f0HAe_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.36",
      rating_cri: "8.29",
      rating_net: "8.15",
      genre: "드라마,멜로/로맨스",
      showtimes: "121분",
      release_date: "2022.05.04 개봉",
      rate: "15세 관람가",
      summary:
        "‘메이코’는 집으로 돌아가는 택시 안에서 친구에게 새로운 연애 상대 이야기를 듣는다.\n 여대생 ‘나오’는 교수 앞에서 그가 쓴 소설의 일부를 낭독한다.\n 20년 만에 고향을 찾은 ‘나츠코’는 그토록 만나고 싶던 동창생과 재회한다.\n \n 우연이 만들어내는, 조용히 아주 크게 움직이는 인생의 순간들이 있다.\n 이 영화는 그에 대한 상상의 결과물이다.",
      staff: [
        {
          name: "하마구치 류스케",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001731%2FPM173167_161027_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "후루카와 코토네",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004411%2FPM441162_103442_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "현리",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003428%2FPM342873_141618_000.JPG&type=u111_139&quality=95",
        },
        {
          name: "나카지마 아유무",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003707%2FPM370722_101941_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "모리 카츠키",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004175%2FPM417593_103507_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "시부카와 키요히코",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000973%2FPM97393_103535_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "닥터 스트레인지: 대혼돈의 멀티버스",
      title_eng: "Doctor Strange in the Multiverse of Madness, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220504_33/165164173504831gKe_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.77",
      rating_cri: "6.80",
      rating_net: "7.25",
      genre: "액션,판타지,모험",
      showtimes: "126분",
      release_date: "2022.05.04 개봉",
      rate: "12세 관람가",
      summary:
        "끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며\n 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.\n 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….",
      staff: [
        {
          name: "샘 레이미",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000014%2F00000001404-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "베네딕트 컴버배치",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F44%2F202104191650506431.png&type=u111_139&quality=95",
        },
        {
          name: "엘리자베스 올슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002964%2FPM296467_172833_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "베네딕트 웡",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F138%2F201611241406565231.jpg&type=u111_139&quality=95",
        },
        {
          name: "레이첼 맥아담스",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F39%2F201311081448211311.jpg&type=u111_139&quality=95",
        },
        {
          name: "치웨텔 에지오포",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000133%2FPM13362_181103_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "소설가의 영화",
      title_eng: "The Novelist’s Film, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220331_64/1648705552483Riog5_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.78",
      rating_cri: "8.00",
      rating_net: "7.79",
      genre: "드라마",
      showtimes: "92분",
      release_date: "2022.04.21 개봉",
      rate: "12세 관람가",
      summary:
        "여소설가가 잠적한 후배의 책방으로 먼 길을 찾아옵니다.\n 그리고 혼자 타워를 오르고 영화감독 부부를 만나고 공원을 산책하다 여배우를 만나게 되고,\n 여배우에게 당신과 영화를 만들고 싶다 설득을 합니다.\n 둘이 분식집에서 뭘 먹고, 다시 찾게 되는 후배의 책방에서 술자리가 깊어지고\n 여배우는 취해 잠이 드는데…",
      staff: [
        {
          name: "홍상수",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F63%2F201404171451029001.jpg&type=u111_139&quality=95",
        },
        {
          name: "이혜영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F70%2F201205041824002031.jpg&type=u111_139&quality=95",
        },
        {
          name: "김민희",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201408%2F20140825155028107-6430364.jpg&type=u111_139&quality=95",
        },
        {
          name: "서영화",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F145%2F202006181535585631.png&type=u111_139&quality=95",
        },
        {
          name: "박미소",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210603143622505.png&type=u111_139&quality=95",
        },
        {
          name: "권해효",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201911%2F20191111003403582-5489424.gif&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "아치의 노래, 정태춘",
      title_eng: "Song of the Poet, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220426_22/165094050059393Lij_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.35",
      rating_cri: "6.50",
      rating_net: "9.44",
      genre: "다큐멘터리",
      showtimes: "113분",
      release_date: "2022.05.18 개봉",
      rate: "전체 관람가",
      summary:
        "10대 가수상, 가요 사전심의 철폐운동\n 그리고 음악시장을 홀연히 떠나기까지\n \n 어디서도 들어보지 못한 노랫말과\n 서정적인 음율로 시대와 함께한 뮤지션\n \n 데뷔 40주년, 우리가 몰랐던\n 정태춘의 음악과 삶을 만나다!",
      staff: [
        {
          name: "고영재",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201407%2F20140731174542794.jpg&type=u111_139&quality=95",
        },
        {
          name: "정태춘",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F132%2F201202241759074091.jpg&type=u111_139&quality=95",
        },
        {
          name: "박은옥",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004588%2FPM458866_175203_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "유지연",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004586%2FPM458636_152131_000.png&type=u111_139&quality=95",
        },
        {
          name: "김용환",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004586%2FPM458635_152049_000.png&type=u111_139&quality=95",
        },
        {
          name: "이영미",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "그리스도 디 오리진",
      title_eng: "THE SAVIOR, 2013",
      poster_url:
        "https://movie-phinf.pstatic.net/20220329_218/1648541811424eaDaO_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "4.00",
      rating_cri: "4.50",
      rating_net: "6.64",
      genre: "드라마",
      showtimes: "148분",
      release_date: "2022.04.14 개봉",
      rate: "12세 관람가",
      summary:
        "폭력과 탄압으로 세상을 지배하던 로마 시대\n 예수는 12제자와 함께 하나님의 말씀을 전하고\n 고통받던 사람들을 사랑으로 치유한다.\n 위기를 느낀 로마는 예수를 십자가에 처형한다.\n 3일 후, 예수는 자신의 예언과 같이 부활하는데…\n \n 위대한 인류 구원의 역사가 시작된다!",
      staff: [
        {
          name: "로버트 사보",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "레드 로켓",
      title_eng: "RED ROCKET, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20211220_257/1639964611985Vhtgr_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.25",
      rating_cri: "",
      rating_net: "7.40",
      genre: "드라마,코미디",
      showtimes: "131분",
      release_date: "2022.03.12 개봉",
      rate: "청소년 관람불가",
      summary:
        "L.A에서 포르노 배우로 활동하던 마이키는 빈털터리가 되자 별거 중이었던 아내의 집으로 돌아온다. 아무런 말 없이 자신을 버렸던 남편의 뻔뻔함에 혀를 내두르는 아내와 장모, 하지만 막무가내로 사정하는 마이키에게 집세를 분담하는 조건으로 잠시 머무르는 것을 허락하게 된다. 며칠 동안 잠잠하던 마이키, 어느 날 도넛츠 가게에서 일하는 십 대 소녀를 만나게 되고 그의 못된 ‘옛 버릇’이 다시 살아나기 시작하는데...\n \n [제26회 부산국제영화제]",
      staff: [
        {
          name: "션 베이커",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F131%2F201802131114537271.jpg&type=u111_139&quality=95",
        },
        {
          name: "사이먼 렉스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000181%2F00000018172-t.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "닥터 스트레인지: 대혼돈의 멀티버스",
      title_eng: "Doctor Strange in the Multiverse of Madness, 2022",
      poster_url:
        "https://movie-phinf.pstatic.net/20220504_33/165164173504831gKe_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.77",
      rating_cri: "6.80",
      rating_net: "7.25",
      genre: "액션,판타지,모험",
      showtimes: "126분",
      release_date: "2022.05.04 개봉",
      rate: "12세 관람가",
      summary:
        "끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며\n 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.\n 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….",
      staff: [
        {
          name: "샘 레이미",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000014%2F00000001404-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "베네딕트 컴버배치",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F44%2F202104191650506431.png&type=u111_139&quality=95",
        },
        {
          name: "엘리자베스 올슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002964%2FPM296467_172833_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "베네딕트 웡",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F138%2F201611241406565231.jpg&type=u111_139&quality=95",
        },
        {
          name: "레이첼 맥아담스",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F39%2F201311081448211311.jpg&type=u111_139&quality=95",
        },
        {
          name: "치웨텔 에지오포",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000133%2FPM13362_181103_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "소설가의 영화",
      title_eng: "The Novelist’s Film, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220331_64/1648705552483Riog5_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.78",
      rating_cri: "8.00",
      rating_net: "7.79",
      genre: "드라마",
      showtimes: "92분",
      release_date: "2022.04.21 개봉",
      rate: "12세 관람가",
      summary:
        "여소설가가 잠적한 후배의 책방으로 먼 길을 찾아옵니다.\n 그리고 혼자 타워를 오르고 영화감독 부부를 만나고 공원을 산책하다 여배우를 만나게 되고,\n 여배우에게 당신과 영화를 만들고 싶다 설득을 합니다.\n 둘이 분식집에서 뭘 먹고, 다시 찾게 되는 후배의 책방에서 술자리가 깊어지고\n 여배우는 취해 잠이 드는데…",
      staff: [
        {
          name: "홍상수",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F63%2F201404171451029001.jpg&type=u111_139&quality=95",
        },
        {
          name: "이혜영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F70%2F201205041824002031.jpg&type=u111_139&quality=95",
        },
        {
          name: "김민희",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201408%2F20140825155028107-6430364.jpg&type=u111_139&quality=95",
        },
        {
          name: "서영화",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F145%2F202006181535585631.png&type=u111_139&quality=95",
        },
        {
          name: "박미소",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210603143622505.png&type=u111_139&quality=95",
        },
        {
          name: "권해효",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201911%2F20191111003403582-5489424.gif&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "중경삼림",
      title_eng: "重慶森林: Chungking Express, 1994",
      poster_url:
        "https://movie-phinf.pstatic.net/20210208_255/1612760227924x9jop_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.08",
      rating_cri: "",
      rating_net: "8.90",
      genre: "드라마",
      showtimes: "102분",
      release_date:
        "2022.04.20 재개봉, 2021.03.04 재개봉, 2013.11.28 재개봉, 1995.09.02 개봉",
      rate: "15세 관람가",
      summary:
        '1994년 홍콩,\n \n “내 사랑의 유통기한은 만 년으로 하고 싶다”\n 만우절의 이별 통보가 거짓말이길 바라며 술집을 찾은 경찰 223\n 고단한 하루를 보내고 술집에 들어온 금발머리의 마약밀매상\n \n "그녀가 떠난 후 이 방의 모든 것들이 슬퍼한다"\n 여자친구가 남긴 이별 편지를 외면하고 있는 경찰 663\n 편지 속에 담긴 그의 아파트 열쇠를 손에 쥔 단골집 점원 페이\n \n 네 사람이 만들어낸 두 개의 로맨스\n 새로운 사랑을 만나는 방법에 대한 독특한 상상력',
      staff: [
        {
          name: "왕가위",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000018%2F00000001866-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "임청하",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000019%2F00000001938-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "양조위",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F8%2F202108241035244741.jpg&type=u111_139&quality=95",
        },
        {
          name: "왕페이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000024%2F00000002448-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "금성무",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000017%2FPM1704_185545_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "주가령",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000019%2F00000001990-t.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "빌리 홀리데이",
      title_eng: "The United States vs. Billie Holiday, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20211013_136/1634105930478RTCeH_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.48",
      rating_cri: "6.00",
      rating_net: "7.76",
      genre: "드라마,뮤지컬",
      showtimes: "130분",
      release_date: "2021.11.04 개봉",
      rate: "청소년 관람불가",
      summary:
        "팝 보컬의 예술을 영원히 바꿔 놓은 재즈의 초상 ‘빌리 홀리데이’\n 무대 위에선 모두의 박수를 받는 ‘레이디 데이’였지만\n 무대 아래에선 시대의 폭력과 광기에 끝없이 시달렸다.\n \n 도망칠 곳 없이 어둠으로 내몰린 삶 속에서도\n 그녀가 포기할 수 없었던 두 가지\n 세상을 위한 단 하나의 노래\n 그녀를 위한 단 하나의 사랑.\n \n Stay tuned for LADY DAY!",
      staff: [
        {
          name: "리 다니엘스",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001115%2F00000111542-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "앤드라 데이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F63%2F201601201118574861.jpg&type=u111_139&quality=95",
        },
        {
          name: "트래반트 로즈",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003197%2FPM319713_171628_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "가렛 헤드룬드",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000150%2FPM15056_161908_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "나타샤 리온",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F83%2F201611221525527121.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "코다",
      title_eng: "CODA, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20220408_230/1649404582189RuAGA_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.81",
      rating_cri: "6.33",
      rating_net: "9.13",
      genre: "드라마",
      showtimes: "111분",
      release_date: "2021.08.31 개봉",
      rate: "12세 관람가",
      summary:
        "24/7 함께 시간을 보내며 소리를 들을 수 없는 가족을 세상과 연결하는 코다 '루비'는\n 짝사랑하는 '마일스'를 따라간 합창단에서 노래하는 기쁨과 숨겨진 재능을 알게 된다.\n \n 합창단 선생님의 도움으로 마일스와의 듀엣 콘서트와 버클리 음대 오디션의 기회까지 얻지만\n 자신 없이는 어려움을 겪게 될 가족과 노래를 향한 꿈 사이에서 루비는 망설이는데…",
      staff: [
        {
          name: "션 헤이더",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003267%2FPM326755_145712_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "에밀리아 존스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F194%2F202002111612026871.png&type=u111_139&quality=95",
        },
        {
          name: "퍼디아 월시-필로",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003834%2FPM383425_154239_000.jpeg&type=u111_139&quality=95",
        },
        {
          name: "트로이 코처",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002364%2FPM236420_150553_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "다니엘 듀런트",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004505%2FPM450515_150353_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "말리 매트린",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000010%2FPM1014_103056_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "스파이의 아내",
      title_eng: "スパイの妻, Wife of a Spy, 2020",
      poster_url:
        "https://movie-phinf.pstatic.net/20210308_237/1615171952260dkz3u_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.67",
      rating_cri: "8.00",
      rating_net: "8.13",
      genre: "서스펜스,멜로/로맨스",
      showtimes: "116분",
      release_date: "2021.03.25 개봉",
      rate: "12세 관람가",
      summary:
        "아시아에 전운이 감돌던 1940년, 무역상 유사쿠는 사업차 만주국으로 향한다. 이곳에서 벌어지는 갖가지 참상을 목격한 유사쿠는 현실을 바꾸기 위해 직접 나서고, 유사쿠의 이러한 위험한 행동은 일본에 살고 있는 아내 사토코의 일상에도 영향을 미친다. NHK TV 드라마를 영화로 다시 만든 작품으로 2020년 베니스영화제에서 감독상을 수상했다.",
      staff: [
        {
          name: "구로사와 기요시",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000008%2F00000000891-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "아오이 유우",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F32%2F202103241734295881.png&type=u111_139&quality=95",
        },
        {
          name: "타카하시 잇세이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000689%2FPM68932_101001_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "히가시데 마사히로",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003127%2FPM312782_181101_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "반도 류타",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "츠네마츠 유리",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003772%2FPM377220_174536_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "교실 안의 야크",
      title_eng: "Lunana: A Yak in the Classroom, 2019",
      poster_url:
        "https://movie-phinf.pstatic.net/20200910_92/1599711981305fdQMq_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.07",
      rating_cri: "7.00",
      rating_net: "9.37",
      genre: "드라마",
      showtimes: "109분",
      release_date: "2020.09.30 개봉",
      rate: "전체 관람가",
      summary:
        "행복지수 1위 은둔의 나라 부탄의 수도 팀푸에서 신임교사로 일하는 유겐은 교사가 영 적성에 맞지 않는다. 교육부는 호주로의 이민을 꿈꾸는 그를 인구 56명에 불과한 전 세계에서 가장 외딴 벽지학교로 전근시킨다. 전기도 들어오지 않고 모든 것이 불편하기만 한 고도 4,800m의 낯선 오지 마을에서 유겐은 겨울이 오기 전까지 학생들을 가르쳐야 한다. 매사가 불평불만인 그이지만 때 묻지 않은 아름다운 자연의 경관과 순수한 마을 주민들의 환대, 그리고 배움에 대한 아이들의 열정을 마주하며 서서히 달라지기 시작한다.",
      staff: [
        {
          name: "파우 초이닝 도르지",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004327%2FPM432749_160136_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "셰랍 도르지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440575_141506_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "펨 잠",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440574_141625_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "켈든 라모 구룽",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440572_141854_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "유겐 노르부 렌덥",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440566_142249_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "체링 도르지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440573_101457_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "호수의 이방인",
      title_eng: "L'Inconnu du lac, Stranger by the Lake, 2013",
      poster_url:
        "https://movie-phinf.pstatic.net/20140402_100/13964171645968bgAl_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.30",
      rating_cri: "",
      rating_net: "7.29",
      genre: "드라마,스릴러",
      showtimes: "97분",
      release_date: "2021.11.15 재개봉, 2016.07.07 개봉",
      rate: "피에르 델라돈챔프스",
      summary:
        "아름다운 호수를 배경으로 에로틱한 정사와 히치콕식의 도망자 스릴러가 뒤섞이는 동성애 영화. 남자들만의 특별한 공간인 한 호숫가에서 느긋한 성격의 프랑크는 치명적인 매력의 옴므 파탈 미셸에게 빠져든다. 그는 결국 사랑과 죽음의 불안한 기로에 서게 된다.\n \n [제18회 부산국제영화제]",
      staff: [
        {
          name: "알랭 기로디",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F157%2F20180424163737661.jpg&type=u111_139&quality=95",
        },
        {
          name: "피에르 델라돈챔프스",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "크리스토프 파오우",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "파트리크 다쉼사오",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "제롬 차파테",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "마티유 베르비슈",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "빌리 홀리데이",
      title_eng: "The United States vs. Billie Holiday, 2021",
      poster_url:
        "https://movie-phinf.pstatic.net/20211013_136/1634105930478RTCeH_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "7.48",
      rating_cri: "6.00",
      rating_net: "7.76",
      genre: "드라마,뮤지컬",
      showtimes: "130분",
      release_date: "2021.11.04 개봉",
      rate: "청소년 관람불가",
      summary:
        "팝 보컬의 예술을 영원히 바꿔 놓은 재즈의 초상 ‘빌리 홀리데이’\n 무대 위에선 모두의 박수를 받는 ‘레이디 데이’였지만\n 무대 아래에선 시대의 폭력과 광기에 끝없이 시달렸다.\n \n 도망칠 곳 없이 어둠으로 내몰린 삶 속에서도\n 그녀가 포기할 수 없었던 두 가지\n 세상을 위한 단 하나의 노래\n 그녀를 위한 단 하나의 사랑.\n \n Stay tuned for LADY DAY!",
      staff: [
        {
          name: "리 다니엘스",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001115%2F00000111542-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "앤드라 데이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F63%2F201601201118574861.jpg&type=u111_139&quality=95",
        },
        {
          name: "트래반트 로즈",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003197%2FPM319713_171628_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "가렛 헤드룬드",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000150%2FPM15056_161908_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "나타샤 리온",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F83%2F201611221525527121.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "모리의 정원",
      title_eng: "モリのいる場所, Mori, The Artist's Habitat, 2018",
      poster_url:
        "https://movie-phinf.pstatic.net/20200316_196/15843230714220iTGt_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.38",
      rating_cri: "6.33",
      rating_net: "7.67",
      genre: "드라마",
      showtimes: "99분",
      release_date: "2020.03.26 개봉",
      rate: "전체 관람가",
      summary:
        "30년 동안 정원을 벗어난 적 없는, 작은 것들의 화가 모리카즈\n 아내 히데코와 조용하게 소소한 일상을 누리며 아름다운 것들만 보고 싶지만\n 그의 정원에 자꾸만 예기치 못한 손님들이 찾아오기 시작하는데..\n 햇살, 바람, 새소리.. 자연의 아름다움이 담긴 모리의 정원으로 초대합니다",
      staff: [
        {
          name: "오키타 슈이치",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001748%2FPM174819_135503_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "야마자키 츠토무",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000041%2F00000004160-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "키키 키린",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000372%2FPM37203_181124_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "카세 료",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F169%2F202010281641592301.png&type=u111_139&quality=95",
        },
        {
          name: "요시무라 카이토",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003959%2FPM395966_140303_000.png&type=u111_139&quality=95",
        },
        {
          name: "키타로",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000386%2FPM38691_162618_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "녹색 광선",
      title_eng: "Le Rayon Vert, The Green Ray, 1986",
      poster_url:
        "https://movie-phinf.pstatic.net/20220420_48/1650422631213w8Sy0_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.49",
      rating_cri: "",
      rating_net: "8.44",
      genre: "멜로/로맨스,드라마",
      showtimes: "98분",
      release_date: "2019.07.04 재개봉, 1990.04 개봉",
      rate: "12세 관람가",
      summary:
        "여름 휴가를 이용해 멋진 로맨스를 찾아나선 한 아가씨의 여정을 통해 젊은 날의 소망과 그 성취를 상징하는 '녹색 광선'의 의미를 아름답기 그지없는 시선으로 그린 작품. 사랑에 대한 기대로 관객을 부풀게 만드는 싱그러운 작품이자 노감독 로메르가 사랑에 관한 젊은 날의 혼란과 열망을 느슨한 이야기 속에서 풀어낸 작품으로 평가받고 있다. 86년 베니스 영화제에서 그랑프리인 금곰상을 수상한 이 영화는 국내엔 90년 봄 변두리 극장에서 소문없이 개봉해 1주일만에 문을 닫았다. 영화를 '공부'하려는 사람들을 위한 영화.\n  감독 에릭 로메르(Eric Rohmer)는 프랑소와 튀르포, 쟝 루크 고다르, 클로드 샤브롤, 쟝 리베트 등 프랑스 신세대 영화 작가들의 등용문이 된 영화 전문지 '까이에 뒤 시네마(Cahiers De Cinema)'가 배출한 또 한 명의 뛰어난 영화 감독이다. 그는 항상 거의 아마츄어에 가까운 비전문 배우들을 기용해서 일상 속에서 보여지는 보통 사람들의 삶의 모습을 진지하면서도 잔잔하게 그려내고 있다. 이 영화도 그러한 범주에서 벗어나지 않는다. 어느 평론가는 그의 영화를 'Elegant Simplicity'라는 표현으로 요약하고 있다. 그런 그의 작품성을 가장 극명하게 드러낸 영화가 바로 이것이다.\n  청순한 소녀 델핀느(Delphine: 마리 라비에르 분)는 여름휴가를 맞이하지만 친구들로부터 함께 휴가를 보낼 기회를 거절당한다. 내성적이고 소심한 그녀는 휴가 기간을 혼자 보내야 하는 외로운 처지에 놓이게 된다. 남자 친구를 구할 수 있기를 내심 바리지만 자신의 성격탓으로 뜻대로 되질 않는다. 그러나 델핀느는 희망을 잃지 않고 있다. 얼마전 친구로부터 녹색은 그녀에게 행운을 가져다 줄거라는 이야기를 들었기 때문이다.\n  좋은 일이 생길지 모른다는 친구의 권유에 따라 노르망디에 있는 친구집에서 휴가를 보낸다. 거기에서 델핀느는 남자를 사귀기는 고사하고 그곳 사람들과 잘 어울리지 못하고 불편함을 느낀다. 실망 속에서 델핀느는 집으로 돌아간다. 우연히 비아리츠역에서 만난 한 남자와 몇마디의 대화로 서로가 쉽게 통할 수가 있게 된 델핀느는 그에게 호감을 갖게 된다. 해변에 대양이 바다 수평선 너머로 사라지고 있는 일몰때 둘이는 보기 힘들 정도로 녹색빛을 발하는 바닷가에 지는 태양을 응시하고 있다. 빛의 굴절로 인해 일시적으로 녹색광선 발한다. 델핀느는 녹색의 빛을 향하여 감탄의 소리를 지른다. 결국 그는 꿈을 이룬 것이다.",
      staff: [
        {
          name: "에릭 로메르",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000025%2FPM2527_110921_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "마리 리비에르",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000838%2FPM83856_152714_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아미라 셰마키",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "실비 리셰즈",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "리자 에레디아",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "교실 안의 야크",
      title_eng: "Lunana: A Yak in the Classroom, 2019",
      poster_url:
        "https://movie-phinf.pstatic.net/20200910_92/1599711981305fdQMq_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.07",
      rating_cri: "7.00",
      rating_net: "9.37",
      genre: "드라마",
      showtimes: "109분",
      release_date: "2020.09.30 개봉",
      rate: "전체 관람가",
      summary:
        "행복지수 1위 은둔의 나라 부탄의 수도 팀푸에서 신임교사로 일하는 유겐은 교사가 영 적성에 맞지 않는다. 교육부는 호주로의 이민을 꿈꾸는 그를 인구 56명에 불과한 전 세계에서 가장 외딴 벽지학교로 전근시킨다. 전기도 들어오지 않고 모든 것이 불편하기만 한 고도 4,800m의 낯선 오지 마을에서 유겐은 겨울이 오기 전까지 학생들을 가르쳐야 한다. 매사가 불평불만인 그이지만 때 묻지 않은 아름다운 자연의 경관과 순수한 마을 주민들의 환대, 그리고 배움에 대한 아이들의 열정을 마주하며 서서히 달라지기 시작한다.",
      staff: [
        {
          name: "파우 초이닝 도르지",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004327%2FPM432749_160136_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "셰랍 도르지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440575_141506_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "펨 잠",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440574_141625_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "켈든 라모 구룽",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440572_141854_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "유겐 노르부 렌덥",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440566_142249_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "체링 도르지",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440573_101457_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "남매의 여름밤",
      title_eng: "Moving On, 2019",
      poster_url:
        "https://movie-phinf.pstatic.net/20200721_100/1595307510654a6eNC_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.07",
      rating_cri: "7.83",
      rating_net: "8.96",
      genre: "드라마",
      showtimes: "104분",
      release_date: "2020.08.20 개봉",
      rate: "전체 관람가",
      summary:
        "방학 동안, 아빠와 함께 할아버지 집에서 지내게 된 남매 옥주와 동주,\n 그렇게 오래된 2층 양옥집에서의 여름이 시작되고\n 한동안 못 만났던 고모까지 합세하면서\n 기억에 남을 온 가족의 이야기가 펼쳐진다.\n \n 제24회 토론토릴아시안국제영화제 오슬러 최우수 장편 영화상 (2020)\n 제17회 홍콩아시안영화제 뉴탤런트상 (2020)\n 제38회 이탈리아토리노영화제 최고 작품상 (2020)",
      staff: [
        {
          name: "윤단비",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003744%2FPM374438_182027_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "최정운",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202206%2F2022060314210289.jpg&type=u111_139&quality=95",
        },
        {
          name: "양흥주",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003598%2FPM359802_103811_000.jpeg&type=u111_139&quality=95",
        },
        {
          name: "박현영",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000438%2FPM43802_104319_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "박승준",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004319%2FPM431958_150749_000.jpeg&type=u111_139&quality=95",
        },
        {
          name: "김상동",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004386%2FPM438632_145414_000.png&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "뮤지컬 브로드웨이 42번가",
      title_eng: "42nd Street: The Musical, 2019",
      poster_url:
        "https://movie-phinf.pstatic.net/20200207_176/15810629125632wKOD_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "8.20",
      genre: "뮤지컬,공연실황",
      showtimes: "135분",
      release_date: "2020.07.08 개봉",
      rate: "전체 관람가",
      summary:
        "시골 출신의 페기는 브로드웨이의 댄서가 되는 게 꿈이다. 불황에 빠진 공연계에서 ‘프리티 레이디’라는 작품으로 재기하려는 연출가 줄리안 마쉬가 진행하는 오디션에 응시하려 하지만 두려움에 주춤거리다 오디션 시간에 늦게 되어 좌절하게 되는데...",
      staff: [
        {
          name: "마크 브램블",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002600%2FPM260051_103552_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "보니 랭포드",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000327%2FPM32774_103653_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "자스나 이브",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004325%2FPM432564_135624_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "애슐리 데이",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004325%2FPM432563_135804_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "톰 리스터",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004325%2FPM432562_135911_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "클레어 할세",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004325%2FPM432561_140022_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "뮤지컬 홀리데이 인",
      title_eng: "Holiday Inn, the New Irving Berlin Musical: Live, 2017",
      poster_url:
        "https://movie-phinf.pstatic.net/20171116_47/1510818233829wzzEH_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.50",
      rating_cri: "",
      rating_net: "8.06",
      genre: "공연실황,뮤지컬",
      showtimes: "122분",
      release_date: "2017.12.20 개봉",
      rate: "전체 관람가",
      summary:
        "주인공 짐은 베스트 프랜드인 테드와 그의 피앙새와 함께 뉴욕에서 잘나가는 배우지만\n 화려한 배우로서의 삶을 내려놓고 약혼녀와 함께 시골에서의 평화롭고 한적한\n 새로운 삶을 원한다. 뉴욕에서의 마지막 공연이 끝나고 짐은 약혼녀에게 프로포즈를 하지만\n 6개월만 더 배우로 살고 싶은 피앙새를 뒤로하고 짐은 먼저 시골로 내려와\n 꿈꾸던 새로운 삶을 시작하게 되는데.. 시골 농장에서의 삶은 짐이 꿈꾸던 것처럼\n 호락하지만은 않지만 새로운 친구들을 만나며 또 오랜친구들의 농장 방문으로\n 짐의 평범했던 농장에서의 삶이 변하기 시작하는데..",
      staff: [
        {
          name: "데이빗 혼",
          role: "감독",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "브라이스 핑크햄",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004062%2FPM406212_141346_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "로라 리 게이어",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004062%2FPM406211_141442_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "메간 시코라",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004062%2FPM406210_141613_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "코빈 블루",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000378%2FPM37884_145619_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "메간 로렌스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004062%2FPM406209_141710_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "녹색 광선",
      title_eng: "Le Rayon Vert, The Green Ray, 1986",
      poster_url:
        "https://movie-phinf.pstatic.net/20220420_48/1650422631213w8Sy0_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.49",
      rating_cri: "",
      rating_net: "8.44",
      genre: "멜로/로맨스,드라마",
      showtimes: "98분",
      release_date: "2019.07.04 재개봉, 1990.04 개봉",
      rate: "12세 관람가",
      summary:
        "여름 휴가를 이용해 멋진 로맨스를 찾아나선 한 아가씨의 여정을 통해 젊은 날의 소망과 그 성취를 상징하는 '녹색 광선'의 의미를 아름답기 그지없는 시선으로 그린 작품. 사랑에 대한 기대로 관객을 부풀게 만드는 싱그러운 작품이자 노감독 로메르가 사랑에 관한 젊은 날의 혼란과 열망을 느슨한 이야기 속에서 풀어낸 작품으로 평가받고 있다. 86년 베니스 영화제에서 그랑프리인 금곰상을 수상한 이 영화는 국내엔 90년 봄 변두리 극장에서 소문없이 개봉해 1주일만에 문을 닫았다. 영화를 '공부'하려는 사람들을 위한 영화.\n  감독 에릭 로메르(Eric Rohmer)는 프랑소와 튀르포, 쟝 루크 고다르, 클로드 샤브롤, 쟝 리베트 등 프랑스 신세대 영화 작가들의 등용문이 된 영화 전문지 '까이에 뒤 시네마(Cahiers De Cinema)'가 배출한 또 한 명의 뛰어난 영화 감독이다. 그는 항상 거의 아마츄어에 가까운 비전문 배우들을 기용해서 일상 속에서 보여지는 보통 사람들의 삶의 모습을 진지하면서도 잔잔하게 그려내고 있다. 이 영화도 그러한 범주에서 벗어나지 않는다. 어느 평론가는 그의 영화를 'Elegant Simplicity'라는 표현으로 요약하고 있다. 그런 그의 작품성을 가장 극명하게 드러낸 영화가 바로 이것이다.\n  청순한 소녀 델핀느(Delphine: 마리 라비에르 분)는 여름휴가를 맞이하지만 친구들로부터 함께 휴가를 보낼 기회를 거절당한다. 내성적이고 소심한 그녀는 휴가 기간을 혼자 보내야 하는 외로운 처지에 놓이게 된다. 남자 친구를 구할 수 있기를 내심 바리지만 자신의 성격탓으로 뜻대로 되질 않는다. 그러나 델핀느는 희망을 잃지 않고 있다. 얼마전 친구로부터 녹색은 그녀에게 행운을 가져다 줄거라는 이야기를 들었기 때문이다.\n  좋은 일이 생길지 모른다는 친구의 권유에 따라 노르망디에 있는 친구집에서 휴가를 보낸다. 거기에서 델핀느는 남자를 사귀기는 고사하고 그곳 사람들과 잘 어울리지 못하고 불편함을 느낀다. 실망 속에서 델핀느는 집으로 돌아간다. 우연히 비아리츠역에서 만난 한 남자와 몇마디의 대화로 서로가 쉽게 통할 수가 있게 된 델핀느는 그에게 호감을 갖게 된다. 해변에 대양이 바다 수평선 너머로 사라지고 있는 일몰때 둘이는 보기 힘들 정도로 녹색빛을 발하는 바닷가에 지는 태양을 응시하고 있다. 빛의 굴절로 인해 일시적으로 녹색광선 발한다. 델핀느는 녹색의 빛을 향하여 감탄의 소리를 지른다. 결국 그는 꿈을 이룬 것이다.",
      staff: [
        {
          name: "에릭 로메르",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000025%2FPM2527_110921_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "마리 리비에르",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000838%2FPM83856_152714_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아미라 셰마키",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "실비 리셰즈",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "리자 에레디아",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "철벽선생",
      title_eng: "センセイ君主, MY TEACHER, MY LOVE, 2018",
      poster_url:
        "https://movie-phinf.pstatic.net/20190228_283/155134405390874Svp_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.44",
      rating_cri: "6.00",
      rating_net: "7.72",
      genre: "멜로/로맨스,코미디",
      showtimes: "104분",
      release_date: "2019.03.14 개봉",
      rate: "12세 관람가",
      summary:
        "얼굴 천재 엘리트, 난공불락 철벽남 ‘히로미츠’.\n 그에게 첫눈에 반한 열여섯 소녀 ‘사마룬’은\n 그를 무장해제 시키기 위해 진격을 시작한다.\n \n “거절은 거절한다!”\n \n 포기를 모르는 연애열정 만수르 ‘사마룬’의\n 거부할수록 빠져드는 무근본 하이텐션 로코맨스!",
      staff: [
        {
          name: "츠키카와 쇼",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001364%2FPM136462_101421_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "타케우치 료마",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003065%2FPM306572_162257_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "하마베 미나미",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F46%2F202204071107243311.png&type=u111_139&quality=95",
        },
        {
          name: "사토 타이키",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004148%2FPM414897_162333_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "카와에이 리나",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003440%2FPM344067_112024_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "신카와 유아",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003164%2FPM316428_180926_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "순응자",
      title_eng: "Il Conformista, The Conformist, 1970",
      poster_url:
        "https://movie-phinf.pstatic.net/20160118_84/1453095134946tOUiL_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.46",
      rating_cri: "8.33",
      rating_net: "8.33",
      genre: "드라마",
      showtimes: "111분",
      release_date: "2016.01.28 개봉",
      rate: "청소년 관람불가",
      summary:
        "로마의 유복한 집안에서 자란 마르첼로는 어린 시절의 트라우마와 정신병원에 입원해 있는 아버지로 인해 불안에 시달린다. 남들처럼 평범하게 살아가는 것이 유일한 목적인 그는 평범한 가정을 이루고자 중산층 집안의 줄리아와 결혼하고, 대중의 강력한 지지를 받는 무솔리니 정권의 비밀경찰에 자원한다. 첫 임무로, 자신의 스승이자 프랑스에서 정치적 망명 중인 반독재 인사 콰드리 교수의 암살을 지시받은 마르첼로는 파리로 신혼여행을 떠나 콰드리 교수와 그의 아내 안나에게 접근한다. 처음엔 경계와 의심을 늦추지 않던 이들 부부는 그를 차차 신뢰하게 되지만, 안나에게 걷잡을 수 없이 끌리게 된 마르첼로는 자신의 본심과 임무 사이에서 혼란을 겪게 되는데…",
      staff: [
        {
          name: "베르나르도 베르톨루치",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F105%2F201711151227277811.jpg&type=u111_139&quality=95",
        },
        {
          name: "장-루이 트린티냥",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000005%2FPM541_174823_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "스테파니아 산드렐리",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000214%2F00000021482-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "도미니크 샌다",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000166%2FPM16642_174038_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "개스톤 모스친",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "엔조 타라스시오",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "울보 권투부",
      title_eng: "A Crybaby Boxing Club, 2014",
      poster_url:
        "https://movie-phinf.pstatic.net/20150918_209/1442541240377Yv4lp_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.12",
      rating_cri: "6.42",
      rating_net: "8.47",
      genre: "다큐멘터리",
      showtimes: "86분",
      release_date: "2015.10.29 개봉",
      rate: "12세 관람가",
      summary:
        "땀범벅, 눈물범벅, 콧물범벅이 된 채\n고교생활의 마지막 단체경기를 준비하는 소년들이 있다.\n타고난 체력 zero, 뛰어난 기술 zero, 막강한 파워 zero…\n이 녀석들 정말 권투부가 맞는 걸까?",
      staff: [
        {
          name: "이일하",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F171%2F201510161701468221.gif&type=u111_139&quality=95",
        },
        {
          name: "도꾜 조선 중고급학교 권투부",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "김상수",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "대니 콜린스",
      title_eng: "Danny Collins, 2015",
      poster_url:
        "https://movie-phinf.pstatic.net/20150924_289/1443059652774W2ovk_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.04",
      rating_cri: "6.00",
      rating_net: "8.83",
      genre: "드라마",
      showtimes: "106분",
      release_date: "2015.09.30 개봉",
      rate: "15세 관람가",
      summary:
        "40살 연하의 여자친구에 요일별 슈퍼카까지\n 최고의 부와 명예를 누리며 살아가던 슈퍼스타 ‘대니 콜린스’.\n 우연히 40년 전 ‘존 레논’이 자신에게 보낸 편지를 받은 후 새로운 삶을 살기로 결심한다.\n \n 월드투어를 취소하고 매니저에게 더 이상 지금까지 해온 노래는 하지 않겠다는 폭탄선언 후,\n 홀연히 뉴저지의 한적한 호텔에 투숙해 새로운 인생을 찾아 나가게 되는데…",
      staff: [
        {
          name: "댄 포겔맨",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001037%2FPM103781_143239_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "알 파치노",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000000%2FPM15_135411_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아네트 베닝",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000000%2FPM84_175812_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "제니퍼 가너",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F20%2F201402261341484111.jpg&type=u111_139&quality=95",
        },
        {
          name: "바비 카나베일",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000137%2FPM13706_154442_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "크리스토퍼 플러머",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000030%2FPM3072_174145_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "인사이드 르윈",
      title_eng: "Inside Llewyn Davis, 2013",
      poster_url:
        "https://movie-phinf.pstatic.net/20131226_276/1388024023837qG7Pl_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.27",
      rating_cri: "8.86",
      rating_net: "8.18",
      genre: "드라마",
      showtimes: "105분",
      release_date: "2014.01.29 개봉",
      rate: "15세 관람가",
      summary:
        "뉴욕의 시린 겨울에 코트도 없이 기타 하나 달랑 매고 매일밤 지인들의 집을 전전하는 무일푼 뮤지션 르윈. 듀엣으로 노래하던 파트너는 자살을 하고, 솔로앨범은 팔리지 않은 채 먼지만 쌓여간다. 우연히 떠맡게 된 고양이 한 마리처럼 계속 간직하기에는 점점 버거워지는 그의 꿈을 포기해야 하는 지 고민하던 중, 유명 음악 프로듀서인 버드 그로스맨이 주최하는 오디션에 참여하기 위해 시카고를 향한 여정에 오르게 되는데...",
      staff: [
        {
          name: "조엘 코엔",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F136%2F201910081154499841.jpg&type=u111_139&quality=95",
        },
        {
          name: "오스카 아이삭",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001119%2FPM111922_151520_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "캐리 멀리건",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000786%2FPM78688_142331_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "저스틴 팀버레이크",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F63%2F202108261040291101.jpg&type=u111_139&quality=95",
        },
        {
          name: "존 굿맨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000007%2FPM754_174042_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "가렛 헤드룬드",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000150%2FPM15056_161908_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "올드보이",
      title_eng: "Oldboy, 2003",
      poster_url:
        "https://movie-phinf.pstatic.net/20131114_260/1384391087931T5Yx8_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.92",
      rating_cri: "8.50",
      rating_net: "9.04",
      genre: "드라마,미스터리,범죄,스릴러",
      showtimes: "120분",
      release_date: "2013.11.21 재개봉, 2003.11.21 개봉",
      rate: "청소년 관람불가",
      summary:
        "술 좋아하고 떠들기 좋아하는 오.대.수. 본인의 이름풀이를 '오늘만 대충 수습하며 살자'라고 이죽거리는 이 남자는 아내와 어린 딸아이를 가진 지극히 평범한 샐러리맨이다. 어느 날, 술이 거나하게 취해 집에 돌아가는 길에 존재를 알 수 없는 누군가에게 납치, 사설 감금방에 갇히게 되는데.\n  언뜻 보면 싸구려 호텔방을 연상케 하는 감금방. 중국집 군만두만을 먹으며 8평이라는 제한된 공간에서 그가 할 수 있는 일이라곤, 텔레비전 보는 게 전부. 그렇게 1년이 지났을 무렵, 뉴스를 통해 나오는 아내의 살해소식. 게다가 아내의 살인범으로 자신이 지목되고 있음을 알게 된 오대수는 자살을 감행하지만 죽는 것조차 그에겐 용납 되지 않는다. 오대수는 복수를 위해 체력단련을 비롯, 자신을 가둘만한 사람들, 사건들을 모조리 기억 속에서 꺼내 '악행의 자서전'을 기록한다. 한편, 탈출을 위해 감금방 한쪽 구석을 쇠젓가락으로 파기도 하는데.. 감금 15년을 맞이하는 해, 마침내 사람 몸 하나 빠져나갈 만큼의 탈출구가 생겼을 때, 어이없게도 15년 전 납치됐던 바로 그 장소로 풀려나 있는 자신을 발견하게 된다.\n  우연히 들른 일식집에서 갑자기 정신을 잃어버린 오대수는 보조 요리사 미도 집으로 가게 되고, 미도는 오대수에게 연민에서 시작한 사랑의 감정을 키워나가게 된다. 한편 감금방에서 먹던 군만두에서 나온 '청룡'이란 전표 하나로 찾아낸 7.5층 감금방의 정체를 찾아내고...\n  마침내, 첫 대면을 하는 날 복수심으로 들끓는 대수에게 우진은 너무나 냉정하게 게임을 제안한다. 자신이 가둔 이유를 5일 안에 밝혀내면 스스로 죽어주겠다는 것. 대수는 이 지독한 비밀을 풀기 위해, 사랑하는 연인, 미도를 잃지 않기 위해 5일간의 긴박한 수수께끼를 풀어나가야 한다. 도대체 이우진은 누구이며? 이우진이 오대수를 15년 동안이나 감금한 이유는 뭘까? 밝혀진 비밀 앞에 두 남자의 운명은 과연 어떻게 되는 것일까?",
      staff: [
        {
          name: "박찬욱",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F30%2F201405092025014301.jpg&type=u111_139&quality=95",
        },
        {
          name: "최민식",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201607%2F20160706172032800.jpg&type=u111_139&quality=95",
        },
        {
          name: "유지태",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201805%2F20180525164620979.jpg&type=u111_139&quality=95",
        },
        {
          name: "강혜정",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201311%2F20131105165131411-6015925.jpg&type=u111_139&quality=95",
        },
        {
          name: "김병옥",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202008%2F20200825163408806-9083800.jpg&type=u111_139&quality=95",
        },
        {
          name: "오달수",
          role: "조연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202112%2F20211222155527494.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "홀리 모터스",
      title_eng: "Holy Motors, 2012",
      poster_url:
        "https://movie-phinf.pstatic.net/20210929_185/1632899232930DuPoL_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.42",
      rating_cri: "8.84",
      rating_net: "7.36",
      genre: "드라마",
      showtimes: "115분",
      release_date: "2013.04.04 개봉",
      rate: "청소년 관람불가",
      summary:
        "유능한 사업가 오스카(드니 라방)의 하루는 이른 아침, 고급 리무진 홀리 모터스에 오르면서 시작된다. 홀리 모터스는 그와 그의 비서 셀린(에디뜨 스콥)을 태운 채 새벽부터 해질녘까지 파리 곳곳을 누빈다. 유능한 사업가, 가정적인 아버지에서 광대, 걸인, 암살자, 광인에 이르기까지, 홀리 모터스가 멈추는 곳마다 전혀 다른 아홉 명의 인물이 내리는데…\n \n 레오스 카락스와 드니 라방이 만나 완성한 13년 만의 컴백작!\n 당신이 만난 오늘의 오스카씨는 누구인가요?",
      staff: [
        {
          name: "레오 카락스",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000009%2FPM923_113155_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "드니 라방",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000003%2FPM347_162620_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "카일리 미노그",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F0%2F200807071123131871.jpg&type=u111_139&quality=95",
        },
        {
          name: "에바 멘데스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F105%2F201210221351301041.jpg&type=u111_139&quality=95",
        },
        {
          name: "에디뜨 스꼽",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000111%2F00000011199-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "엘리스 루모",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "울보 권투부",
      title_eng: "A Crybaby Boxing Club, 2014",
      poster_url:
        "https://movie-phinf.pstatic.net/20150918_209/1442541240377Yv4lp_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.12",
      rating_cri: "6.42",
      rating_net: "8.47",
      genre: "다큐멘터리",
      showtimes: "86분",
      release_date: "2015.10.29 개봉",
      rate: "12세 관람가",
      summary:
        "땀범벅, 눈물범벅, 콧물범벅이 된 채\n고교생활의 마지막 단체경기를 준비하는 소년들이 있다.\n타고난 체력 zero, 뛰어난 기술 zero, 막강한 파워 zero…\n이 녀석들 정말 권투부가 맞는 걸까?",
      staff: [
        {
          name: "이일하",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F171%2F201510161701468221.gif&type=u111_139&quality=95",
        },
        {
          name: "도꾜 조선 중고급학교 권투부",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "김상수",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "성냥공장 소녀",
      title_eng: "Tulitikkutehtaan Tytto, The Match Factory Girl, 1989",
      poster_url:
        "https://movie-phinf.pstatic.net/20111223_200/1324589287130hKXUt_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "7.88",
      genre: "드라마,코미디",
      showtimes: "69분",
      release_date: "2001.04.28 개봉",
      rate: "15세 관람가",
      summary:
        "성냥 공장에서 근무하는 이리스의 고난을 그린 작품. 안데르센의 동화 '성냥팔이 소녀'에서 제목을 따오고 동화의 해피 엔딩 구조를 철저하게 비틀어 처음부터 끝까지 불행한 최후를 맞는 소녀의 이야기를 건조하고도 처절하게 극단적으로 처리했다.\n  그녀 이리스는 빨간 성냥알 만큼이나 항상 울 준비가 되어있는 그다지 예쁘지 않은 아니 한마디로 볼품없는 소녀이다. 그녀의 일상 역시 우울하다. 무능력하고 무표정한 얼굴의 엄마와 계부의 생활비를 위해 매일같이 선얀공장에서 기계처럼 일하고 퇴근하면 집안일을 해야하는 단조롭고 팍팍한 삶이다. 그녀에겐 생일선물마저도 매년 똑같은 제목의 낡은 책 한권이 전부. 그런 그녀에게도 꿈은 있다. 성냥불꽃처럼 호나히 빛났다가 금세 사라져버릴 것 같은. 그녀는 저녁이면 가끔 댄스클럽에 나간다. 온기가 느껴지는 누군가를 만나기 위해 하지만 그녀는 언제나 붙박이 의자 신세다.우울한 얼굴과 후줄근한 옷차림의 그녀에게 누구도 먼저 손을 먼저 내밀지 않는다. 그러던 어느 날 화사한 빨간색 원피스를 사 입고 들른 그곳에는 그녀가 가슴에 기대고픈 누군가가 기다리고 있는데... 행복한 하룻밤의 기대는 한갖 유희로 끝나고 그녀에게는 아기가 찾아온다. 그러나 예쁜 옷을 입혀줄 수 있을 딸이길 행복하게 소원하는 그녀는 그와 가족들로부터 버림만 받게 된다. 세상은 성냥공장처럼 냉혹하고 비인간적이다. 이제 한개피 성냥처럼 자신을 모두 태울수 있었던 그녀의 인간다움, 자유를 향한 욕망의 선택은?",
      staff: [
        {
          name: "아키 카우리스마키",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F154%2F201301251155214911.jpg&type=u111_139&quality=95",
        },
        {
          name: "카티 오우티넨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000792%2FPM79208_172748_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "엘리너 살로",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "에스코 니카리",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "베사 비에릭코",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "오티 마엔파",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "여름 이야기",
      title_eng: "Conte d'Ete, A Summer's Tale, 1996",
      poster_url:
        "https://movie-phinf.pstatic.net/20220420_38/1650422766596Xyhxu_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.13",
      rating_cri: "6.00",
      rating_net: "8.12",
      genre: "코미디,멜로/로맨스",
      showtimes: "114분",
      release_date: "1998.06.13 개봉",
      rate: "12세 관람가",
      summary:
        "가스파르(Gaspard: 멜빌 포포드 분)는 여름날 혼자 해변에 간다. 여자 친구 레나(Lena: 오렐리아 놀린 분)가 도착하기를 기다리던 그는 식당에서 일하던 마고(Margot: 아만다 랑렛 분)와 사귄다. 가스파르는 애정공세를 펼치는 마고의 친구 솔렌느(Solene: 그웬넬리 사이몬 분)에게서도 매력을 느낀다. 레나마저 도착하자 가스파르는 세 여자 사이에서 고민한다.",
      staff: [
        {
          name: "에릭 로메르",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000025%2FPM2527_110921_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "멜빌 푸포",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000197%2FPM19768_172327_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아만다 랑글렛",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "그웨낼 시몬",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "오렐리아 놀린",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "펄프 픽션",
      title_eng: "Pulp Fiction, 1994",
      poster_url:
        "https://movie-phinf.pstatic.net/20111221_33/1324474363727fxRgN_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.79",
      rating_cri: "",
      rating_net: "8.77",
      genre: "범죄,드라마,코미디,스릴러",
      showtimes: "154분",
      release_date: "1994.09.10 개봉",
      rate: "청소년 관람불가",
      summary:
        "어느 식당에 두 남녀 건달(팀 로스, 아만다 플러머 분)이 손님을 상대로 강도행각을 벌이는 사건으로부터 영화는 시작된다.\n  암스테르담에서 돌아온 빈센트(존 트라볼타 분)는 동료 건달 쥴스(사무엘 L. 잭슨 분)와 함께 건달 두목 마르세러스(빙 라메스 분)의 금가방을 찾기 위하여 다른 건달이 사는 집으로 찾아간다. 건달들의 일상의 대화 속에 이들의 생활이 진솔하게 그려진다. 쥴스는 마르셀러스를 속인 일당을 죽일 때 성경 구절을 암송한다. 그러나 이 사건도 중간까지만 전개되고 다음의 에피소드로 넘어간다.\n  마르셀러스는 부치를 불러 5라운드에서 상대 선수에게 져 주라고 돈을 건네준다. 한편, 빈센트는 마르셀러스의 부탁으로 마르셀러스의 아내 미아와 저녁을 먹으러 갔다가 미아가 약물과다 복용으로 죽어가는 것을 천신만고의 노력으로 구해낸다. 부치는 어렸을 때 증조 할아버지로부터 물려 받은 시계의 내력에 관한 꿈을 꾸고는 마르셀러스와 맺은 약속을 지키기는 커녕 상대 선수를 때려 눕혀 결국 사망에까지 이르자 도망친다. 마르셀러스는 부치를 잡아오라고 명령을 내리고, 부치는 애인 화비안과 도망을 가려는 중 자신에게 남다른 사연과 내력이 있는 시계를 두고 온 것을 알고는 살던 아파트로 향한다.\n  [스포일러] 아파트에는 빈센트가 부치를 잡으려고 잠복하고 있었는데, 부치는 운이 좋아 예상외로 쉽게 빈센트를 죽여 버린다.(결국 이 사건은 영화의 맨 마지막 장면 다음에 일어난 사건임을 알 수 있다. 이 영화의 매력적인 특이한 구성 구조로 인하여 이러한 사건의 순서가 가능하다) 부치는 화비안을 만나러 가다가 마르셀러스를 우연히 만나 쫓고 쫓기던 중 다른 변태 건달들에게 잡혀 수난을 당한다. 결국 부치가 마르셀러스를 구해 준 대가로 둘은 협정을 맺어 용서를 받고, 화비안과 함께 무사히 뒷골목의 건달 세계를 빠져 나간다.\n  빈센트와 쥴스는 마르셀러스의 금이 든 가방을 찾아오다가 그만 오발 사고로 사람을 죽여서 곤경에 처한다. 마르셀러스는 해결사 울프(하비 키이텔 분)를 보내 이들을 돕는다. 쥴스는 여러 곤경에서 살아 온 경험에서 신의 섭리를 느꼈다면서, 건달의 세계에서 손을 씻겠다고 다짐을 한다. 빈센트와 쥴스가 아침 식사를 하고 있는 식당에서 바로 영화의 첫 사전의 강도 행각이 벌어진다. 쥴스는 식당 강도인 풋내기 좀도둑 커플 하니버니와 펌킨을 붙잡아 훈계를 하고 풀어준다. 쥴스와 빈센트는 금가방을 가지고 마르셀러스에게 돌아간다.",
      staff: [
        {
          name: "쿠엔틴 타란티노",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F47%2F201408281150512631.jpg&type=u111_139&quality=95",
        },
        {
          name: "존 트라볼타",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000007%2FPM780_111321_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "사무엘 L. 잭슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000014%2FPM1408_190406_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "우마 서먼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000015%2FPM1579_151814_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "하비 케이틀",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F155%2F201510071859445151.jpg&type=u111_139&quality=95",
        },
        {
          name: "팀 로스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000020%2FPM2077_185649_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "홀리 모터스",
      title_eng: "Holy Motors, 2012",
      poster_url:
        "https://movie-phinf.pstatic.net/20210929_185/1632899232930DuPoL_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "9.42",
      rating_cri: "8.84",
      rating_net: "7.36",
      genre: "드라마",
      showtimes: "115분",
      release_date: "2013.04.04 개봉",
      rate: "청소년 관람불가",
      summary:
        "유능한 사업가 오스카(드니 라방)의 하루는 이른 아침, 고급 리무진 홀리 모터스에 오르면서 시작된다. 홀리 모터스는 그와 그의 비서 셀린(에디뜨 스콥)을 태운 채 새벽부터 해질녘까지 파리 곳곳을 누빈다. 유능한 사업가, 가정적인 아버지에서 광대, 걸인, 암살자, 광인에 이르기까지, 홀리 모터스가 멈추는 곳마다 전혀 다른 아홉 명의 인물이 내리는데…\n \n 레오스 카락스와 드니 라방이 만나 완성한 13년 만의 컴백작!\n 당신이 만난 오늘의 오스카씨는 누구인가요?",
      staff: [
        {
          name: "레오 카락스",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000009%2FPM923_113155_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "드니 라방",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000003%2FPM347_162620_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "카일리 미노그",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F0%2F200807071123131871.jpg&type=u111_139&quality=95",
        },
        {
          name: "에바 멘데스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F105%2F201210221351301041.jpg&type=u111_139&quality=95",
        },
        {
          name: "에디뜨 스꼽",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000111%2F00000011199-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "엘리스 루모",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "7년만의 외출",
      title_eng: "The Seven Year Itch, 1955",
      poster_url:
        "https://movie-phinf.pstatic.net/20111222_87/1324492026737LAAcU_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "7.62",
      genre: "코미디",
      showtimes: "105분",
      release_date: "1957.01.12 개봉",
      rate: "15세 관람가",
      summary:
        '편집인인 리처드(Richard Sherman: 톰 이웰 분)는 부인과 아들을 피서지에 보낸 후, 오랜만에 혼자 생활을 하며 해방감을 맛본다. 그때 불현듯 그의 마음을 사로잡은 생각이 "만약 내가 바람을 피워본다면"이라는 것. 마침 같은 아파트 2층에 말할 수 없이 아름다운 금발 미녀가 이사를 온다. 우여곡절 끝에 그녀를 자기 아파트로 초대하는데, 리처드에겐 선천적으로 과대망상벽이 있다. 아가씨를 초대해놓고 그녀가 나타나길 기다리는 동안, 그는 혼자 간호원과 연애를 한다거나 자기 여비서와 맹렬한 사랑에 빠지는 등의 황당무계한 망상에 빠져든다.\n  한편 금발 미녀와의 이상한 상상에도 탐닉해 있을 즈음, 피서지의 아내로부터 전화가 걸려온다. 아내는 그곳에서 리처드의 친구인 탐을 만났다고 말한다. 리처드는 이제 아내의 거동을 불안하게 느끼고 별의별 망상을 다한다. 다음날 리처드는 자기망상의 원인을 한 의사의 연구 논문에서 찾아낸다. 그 의사는 "모든 남자는 결혼 7년째에 이르면 바람을 피고 싶은 충동에 시달린다"고 주장한다. 그의 망상벽은 한층 심해진다. 그가 금발 아가씨에 대한 관심을 갖게 되면서부터, 망상의 불안하고 그로테스크한 정도가 심화되는 것 같았다. 예컨대, 금발 미녀가 갑자기 TV방송에 나와 자기와 리처드와의 수상한 관계를 까발리는 등의 망상은 리처드를 완전히 녹초상태에 빠지게 한다. 초조해진 그는 아가씨를 유혹해 함께 영화를 보러간다. 영화관에서 나온 직후, 유명한 지하철 통풍구 씬이 등장한다.\n  그날밤 금발 미녀는 날씨가 너무 덥다고 냉방장치가 있는 리처드의 방으로 와서 하루밤을 지내게 되나 두 사람 사이에는 아무 일도 없었다. 하지만 리처드는 이번엔 아내가 자신에게 피스톨을 쏘는 망상때문에 실신지경이 되고 만다. 다음날 상냥하고 마음씨 친절한 아가씨의 보살핌으로 겨우 기력을 회복한 리처드. 입에 아가씨가 찍어놓은 감사의 키스 마크를 간직한 채, 모든 망상을 청산하고 유쾌히 아내와 아들이 있는 피서지에 합세하러 떠난다.',
      staff: [
        {
          name: "빌리 와일더",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000001%2F00000000151-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "마릴린 먼로",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F150%2F201403241524031211.jpg&type=u111_139&quality=95",
        },
        {
          name: "톰 이웰",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "에벌린 케이스",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "소니 터프츠",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "로버트 스트라우스",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "성냥공장 소녀",
      title_eng: "Tulitikkutehtaan Tytto, The Match Factory Girl, 1989",
      poster_url:
        "https://movie-phinf.pstatic.net/20111223_200/1324589287130hKXUt_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "7.88",
      genre: "드라마,코미디",
      showtimes: "69분",
      release_date: "2001.04.28 개봉",
      rate: "15세 관람가",
      summary:
        "성냥 공장에서 근무하는 이리스의 고난을 그린 작품. 안데르센의 동화 '성냥팔이 소녀'에서 제목을 따오고 동화의 해피 엔딩 구조를 철저하게 비틀어 처음부터 끝까지 불행한 최후를 맞는 소녀의 이야기를 건조하고도 처절하게 극단적으로 처리했다.\n  그녀 이리스는 빨간 성냥알 만큼이나 항상 울 준비가 되어있는 그다지 예쁘지 않은 아니 한마디로 볼품없는 소녀이다. 그녀의 일상 역시 우울하다. 무능력하고 무표정한 얼굴의 엄마와 계부의 생활비를 위해 매일같이 선얀공장에서 기계처럼 일하고 퇴근하면 집안일을 해야하는 단조롭고 팍팍한 삶이다. 그녀에겐 생일선물마저도 매년 똑같은 제목의 낡은 책 한권이 전부. 그런 그녀에게도 꿈은 있다. 성냥불꽃처럼 호나히 빛났다가 금세 사라져버릴 것 같은. 그녀는 저녁이면 가끔 댄스클럽에 나간다. 온기가 느껴지는 누군가를 만나기 위해 하지만 그녀는 언제나 붙박이 의자 신세다.우울한 얼굴과 후줄근한 옷차림의 그녀에게 누구도 먼저 손을 먼저 내밀지 않는다. 그러던 어느 날 화사한 빨간색 원피스를 사 입고 들른 그곳에는 그녀가 가슴에 기대고픈 누군가가 기다리고 있는데... 행복한 하룻밤의 기대는 한갖 유희로 끝나고 그녀에게는 아기가 찾아온다. 그러나 예쁜 옷을 입혀줄 수 있을 딸이길 행복하게 소원하는 그녀는 그와 가족들로부터 버림만 받게 된다. 세상은 성냥공장처럼 냉혹하고 비인간적이다. 이제 한개피 성냥처럼 자신을 모두 태울수 있었던 그녀의 인간다움, 자유를 향한 욕망의 선택은?",
      staff: [
        {
          name: "아키 카우리스마키",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F154%2F201301251155214911.jpg&type=u111_139&quality=95",
        },
        {
          name: "카티 오우티넨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000792%2FPM79208_172748_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "엘리너 살로",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "에스코 니카리",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "베사 비에릭코",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "오티 마엔파",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "여름 이야기",
      title_eng: "Conte d'Ete, A Summer's Tale, 1996",
      poster_url:
        "https://movie-phinf.pstatic.net/20220420_38/1650422766596Xyhxu_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.13",
      rating_cri: "6.00",
      rating_net: "8.12",
      genre: "코미디,멜로/로맨스",
      showtimes: "114분",
      release_date: "1998.06.13 개봉",
      rate: "12세 관람가",
      summary:
        "가스파르(Gaspard: 멜빌 포포드 분)는 여름날 혼자 해변에 간다. 여자 친구 레나(Lena: 오렐리아 놀린 분)가 도착하기를 기다리던 그는 식당에서 일하던 마고(Margot: 아만다 랑렛 분)와 사귄다. 가스파르는 애정공세를 펼치는 마고의 친구 솔렌느(Solene: 그웬넬리 사이몬 분)에게서도 매력을 느낀다. 레나마저 도착하자 가스파르는 세 여자 사이에서 고민한다.",
      staff: [
        {
          name: "에릭 로메르",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000025%2FPM2527_110921_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "멜빌 푸포",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000197%2FPM19768_172327_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "아만다 랑글렛",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "그웨낼 시몬",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "오렐리아 놀린",
          role: "조연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
      ],
    },
    {
      title_kor: "펄프 픽션",
      title_eng: "Pulp Fiction, 1994",
      poster_url:
        "https://movie-phinf.pstatic.net/20111221_33/1324474363727fxRgN_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "8.79",
      rating_cri: "",
      rating_net: "8.77",
      genre: "범죄,드라마,코미디,스릴러",
      showtimes: "154분",
      release_date: "1994.09.10 개봉",
      rate: "청소년 관람불가",
      summary:
        "어느 식당에 두 남녀 건달(팀 로스, 아만다 플러머 분)이 손님을 상대로 강도행각을 벌이는 사건으로부터 영화는 시작된다.\n  암스테르담에서 돌아온 빈센트(존 트라볼타 분)는 동료 건달 쥴스(사무엘 L. 잭슨 분)와 함께 건달 두목 마르세러스(빙 라메스 분)의 금가방을 찾기 위하여 다른 건달이 사는 집으로 찾아간다. 건달들의 일상의 대화 속에 이들의 생활이 진솔하게 그려진다. 쥴스는 마르셀러스를 속인 일당을 죽일 때 성경 구절을 암송한다. 그러나 이 사건도 중간까지만 전개되고 다음의 에피소드로 넘어간다.\n  마르셀러스는 부치를 불러 5라운드에서 상대 선수에게 져 주라고 돈을 건네준다. 한편, 빈센트는 마르셀러스의 부탁으로 마르셀러스의 아내 미아와 저녁을 먹으러 갔다가 미아가 약물과다 복용으로 죽어가는 것을 천신만고의 노력으로 구해낸다. 부치는 어렸을 때 증조 할아버지로부터 물려 받은 시계의 내력에 관한 꿈을 꾸고는 마르셀러스와 맺은 약속을 지키기는 커녕 상대 선수를 때려 눕혀 결국 사망에까지 이르자 도망친다. 마르셀러스는 부치를 잡아오라고 명령을 내리고, 부치는 애인 화비안과 도망을 가려는 중 자신에게 남다른 사연과 내력이 있는 시계를 두고 온 것을 알고는 살던 아파트로 향한다.\n  [스포일러] 아파트에는 빈센트가 부치를 잡으려고 잠복하고 있었는데, 부치는 운이 좋아 예상외로 쉽게 빈센트를 죽여 버린다.(결국 이 사건은 영화의 맨 마지막 장면 다음에 일어난 사건임을 알 수 있다. 이 영화의 매력적인 특이한 구성 구조로 인하여 이러한 사건의 순서가 가능하다) 부치는 화비안을 만나러 가다가 마르셀러스를 우연히 만나 쫓고 쫓기던 중 다른 변태 건달들에게 잡혀 수난을 당한다. 결국 부치가 마르셀러스를 구해 준 대가로 둘은 협정을 맺어 용서를 받고, 화비안과 함께 무사히 뒷골목의 건달 세계를 빠져 나간다.\n  빈센트와 쥴스는 마르셀러스의 금이 든 가방을 찾아오다가 그만 오발 사고로 사람을 죽여서 곤경에 처한다. 마르셀러스는 해결사 울프(하비 키이텔 분)를 보내 이들을 돕는다. 쥴스는 여러 곤경에서 살아 온 경험에서 신의 섭리를 느꼈다면서, 건달의 세계에서 손을 씻겠다고 다짐을 한다. 빈센트와 쥴스가 아침 식사를 하고 있는 식당에서 바로 영화의 첫 사전의 강도 행각이 벌어진다. 쥴스는 식당 강도인 풋내기 좀도둑 커플 하니버니와 펌킨을 붙잡아 훈계를 하고 풀어준다. 쥴스와 빈센트는 금가방을 가지고 마르셀러스에게 돌아간다.",
      staff: [
        {
          name: "쿠엔틴 타란티노",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F47%2F201408281150512631.jpg&type=u111_139&quality=95",
        },
        {
          name: "존 트라볼타",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000007%2FPM780_111321_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "사무엘 L. 잭슨",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000014%2FPM1408_190406_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "우마 서먼",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000015%2FPM1579_151814_000.jpg&type=u111_139&quality=95",
        },
        {
          name: "하비 케이틀",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F155%2F201510071859445151.jpg&type=u111_139&quality=95",
        },
        {
          name: "팀 로스",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000020%2FPM2077_185649_000.jpg&type=u111_139&quality=95",
        },
      ],
    },
    {
      title_kor: "이 생명 다하도록",
      title_eng: "To The Death, 1960",
      poster_url:
        "https://movie-phinf.pstatic.net/20111223_197/1324638441010VNdPg_JPEG/movie_image.jpg?type=m203_290_2",
      rating_aud: "",
      rating_cri: "",
      rating_net: "8.29",
      genre: "드라마",
      showtimes: "108분",
      release_date: "1960.07.01 개봉",
      rate: "NR",
      summary:
        "제12회 베를린 영화제 아동특별연기상(전영선) 수상.\n 한국전쟁에 참전 중인 김대위는 하반신 불구가 되어 후송된다. 아내 혜경은 그의 재기를 격려하며 간호한다. 피난지 대구에서 만난 병선과 영선 남매는 혜경에게 새로운 삶을 계획하게 하는데, 양공주였던 영선은 사회사업을 부탁하며 모은 돈을 남기고 자살한다. 전세가 회복되고 서울로 돌아온 혜경과 김대위는 전쟁 미망인 구호사업을 시작한다.",
      staff: [
        {
          name: "신상옥",
          role: "감독",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F175%2F201405141448357611.jpg&type=u111_139&quality=95",
        },
        {
          name: "최은희",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F176%2F201407031127292371.jpg&type=u111_139&quality=95",
        },
        {
          name: "김진규",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000152%2F00000015267-t.jpg&type=u111_139&quality=95",
        },
        {
          name: "전영선",
          role: "주연",
          image_url:
            "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png",
        },
        {
          name: "남궁원",
          role: "주연",
          image_url:
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F37%2F201402241803085101.jpg&type=u111_139&quality=95",
        },
      ],
    },
  ],
};

const SAMPLE_DETAIL_API = {
  id: 2,
  title_kor: "로스트 도터",
  title_eng: "THE LOST DAUGHTER, 2021",
  poster_url:
    "https://movie-phinf.pstatic.net/20220714_114/1657780525423jmTpw_JPEG/movie_image.jpg?type=m203_290_2",
  rating_aud: "7.78",
  rating_cri: "6.86",
  rating_net: "7.69",
  genre: "드라마",
  showtimes: "122분",
  release_date: "2022.07.14 개봉",
  summary:
    "그리스로 혼자 휴가를 떠난 대학 교수 레다는\n 딸을 가진 젊은 여자 니나를 보고 단번에 시선을 빼앗긴다.\n 매일 같은 해변에서 시간을 보내며 서로를 응시하던 두 사람,\n 갑자기 니나의 딸이 사라지고 레다는 옛 기억을 떠올린다.",
  staff: [
    {
      name: "매기 질렌할",
      role: "감독",
      image_url:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000056%2FPM5699_115943_000.jpg&type=u111_139&quality=95",
    },
    {
      name: "올리비아 콜맨",
      role: "주연",
      image_url:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001304%2FPM130405_171757_000.jpg&type=u111_139&quality=95",
    },
    {
      name: "다코타 존슨",
      role: "주연",
      image_url:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002412%2FPM241245_160350_000.jpg&type=u111_139&quality=95",
    },
    {
      name: "제시 버클리",
      role: "주연",
      image_url:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004236%2FPM423602_141322_000.jpg&type=u111_139&quality=95",
    },
    {
      name: "폴 메스칼",
      role: "조연",
      image_url:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004601%2FPM460116_174423_000.jpg&type=u111_139&quality=95",
    },
    {
      name: "피터 사스가드",
      role: "조연",
      image_url:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000065%2FPM6527_141135_000.jpg&type=u111_139&quality=95",
    },
  ],
};

const SAMPLE_COMMENT_API = [
  { id: 2, author: 2, movie: 2, body: "우와 재밌다" },
];
