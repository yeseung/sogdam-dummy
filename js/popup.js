

const sogdamElement = document.getElementById('sogdam');

const proverbs = [
    "99퍼센트까지는 노력, 1퍼센트가 재능이다.",
    "9년 홍수에 햇빛 기다리듯 하다.",
    "가까이 있는 사람을 기쁘게 하고, 멀리서 사람이 찾아오게 하라.",
    "가난 때문에 슬퍼하지 않는다면 가난도 즐거울 수 있다.",
    "가난은 수치가 아니다. 다만 불편할 뿐이다.",
    "가는 세월 오는 백발.",
    "가늘게 흐르는 작은 시내는 굽이굽이 누구의 노래입니까?",
    "가랑비에 옷 젖는 줄 모른다.",
    "가랑잎이 솔잎더러 바스락거린다고 한다.",
    "가루 팔러가니 바람이 불고, 소금 팔러가니 이슬비 온다.",
    "가루는 칠수록 고와지고, 말은 할수록 거칠어진다.",
    "가르마 같은 논길을 따라 꿈속을 가듯 걸어만 간다.",
    "가르치는 것은 두 번 배우는 일이다.",
    "가뭄에 콩 나듯.",
    "가을에는 기도하게 하소서.",
    "가장 높이 나는 갈매기가 가장 멀리 본다.",
    "가장 바쁜 사람이 가장 많은 시간을 가진다.",
    "가장 아름다운 화음은 불협화음에서 만들어진다",
    "가장 현명한 사람이란 자기가 현명하다고는 전혀 생각하지 않는 사람이다.",
    "가장 황량한 날이란 한번도 웃지 않았던 날이다.",
    "가재는 게 편이다.",
    "가지 많은 나무에 바람 잘 날 없다.",
    "간에 기별도 안 간다.",
    "갈수록 태산이라.",
    "갈치가 갈치 꼬리 문다.",
    "감나무 밑에 누워 연시 입 안에 떨어지기 바란다.",
    "감사하며 받는 사람만이 넉넉한 수확을 할 수 있다.",
    "강나루 건너서 밀밭 길을 구름에 달 가듯이 가는 나그네.",
    "강냉이가 익걸랑 함께 와 자셔도 좋소.",
    "강물이 돌을 굴리지는 못한다.",
    "강태공이 세월 낚듯 한다.",
    "강한 사람이란 적을 친구로 만들 수 있는 사람이다.",
    "같은 세계이지만 마음이 다르면 지옥도 되고 천국도 된다.",
    "개구리 올챙이 적 생각을 못 한다.",
    "개구리 주저앉는 뜻은 멀리 뛰자는 뜻이다.",
    "개밥에 도토리.",
    "개천에서 용 난다.",
    "거미도 줄을 쳐야 벌레를 잡는다.",
    "거적문에 돌쩌귀.",
    "거짓말은 다리가 짧다.",
    "걱정도 팔자.",
    "건강이란 건전한 육체에 깃들이는 건전한 정신을 말한다.",
    "건강할 때는 병들었을 때를, 조용한 날에는 폭풍의 날을 잊어서는 안 된다.",
    "건넛산 보고 꾸짖기.",
    "걷기도 전에 뛰려고 한다.",
    "겉 다르고 속 다르다.",
    "게으른 선비 책장 넘기기.",
    "겨울 바람이 봄바람보고 춥다고 한다.",
    "겨울이 다 되어야 솔이 푸른 줄 안다.",
    "겨울이 오면 봄도 멀지 않다.",
    "겨울이 지나지 않고 봄이 오랴.",
    "결혼은 하늘에서 맺어지고 땅에서 완성되는 것이다.",
    "겸손은 힘에 바탕을 두고, 거만은 무력에 바탕을 둔다.",
    "경험은 숱한 실수를 저질러야 비로소 천천히 가르쳐 준다.",
    "고기 보고 부럽거든 가서 그물을 떠라.",
    "고기도 먹어 본 사람이 많이 먹는다.",
    "고기도 저 놀던 물이 좋다고 한다.",
    "고기로 배를 채운들 소화되지 않으면 무슨 소용이 있겠는가?",
    "고독은 방문하기에는 좋은 장소이나, 머물러 있기에는 쓸쓸한 장소이다.",
    "고래 싸움에 새우 등 터진다.",
    "고양이 목에 방울 달기.",
    "고양이 죽은 데 쥐 눈물만큼.",
    "곡식 이삭은 잘 될수록 고개를 숙인다.",
    "곤란을 극복하는 것은 승리의 기회가 된다.",
    "공기와 빛과 친구의 사랑, 이것만 남아 있다면 실망할 것이 없다.",
    "공든 탑이 무너지랴?",
    "공손함이 예절에 맞는다면 치욕은 멀어진다.",
    "공인은 자주 업을 바꾸면 그 공을 잃는다.",
    "과거를 생각하며 현재에 일하고, 미래에 즐긴다.",
    "교사는 가르치는 사람이 아니라 도와주는 사람이다.",
    "구름이나 소나기가 없이는 결코 무지개가 뜨지 않는다.",
    "구멍에 든 뱀 길이를 모른다.",
    "구멍은 깎을수록 커진다.",
    "구슬이 서 말이라도 꿰어야 보배다.",
    "구하라! 그러면 얻을 것이다.",
    "국수 잘 하는 솜씨가 수제비 못하랴?",
    "군자는 정의에 밝고, 소인은 이익에 밝다.",
    "군자의 사귐은 담담하기가 물과 같다.",
    "굼벵이가 지붕에서 떨어질 때는 생각이 있어서 떨어진다.",
    "굿이나 보고 떡이나 먹지.",
    "귀신은 경문에 막히고, 사람은 인정에 막힌다.",
    "귀에 걸면 귀걸이, 코에 걸면 코걸이.",
    "귀한 자식 매 한 대 더 때리고, 미운 자식 떡 한 개 더 준다.",
    "그 곳은 아름다운 별과 나의 사랑하는 창이 열린 길이다.",
    "그대 자신에게 진실하라, 그대가 남을 속이지 않듯이.",
    "그대의 몸과 그대의 일을 소중히 여겨라.",
    "금강산도 식후경.",
    "급하기는 우물에 가서 숭늉 달라겠다.",
    "기름 먹인 가죽이 부드럽다.",
    "기쁨은 남에게 알리면 두 배가 되고, 고통은 남에게 알리면 반이 된다.",
    "기슭에는 채송화가 무더기로 피어서 생의 감각을 흔들어 주었다.",
    "기와 한 장 아껴서 대들보 썩인다.",
    "기회는 새와 같은 것이다. 날아가기 전에 붙잡으라.",
    "기회는 하느님의 또 다른 별명이다.",
    "길로 가라 하니까 뫼로 간다.",
    "길은 갈 탓, 말은 할 탓.",
    "길이 아니거든 가지를 말고, 말이 아니거든 듣지를 말라.",
    "김 안 나는 숭늉이 더 뜨겁다.",
    "깊던 물도 얕아지면 오던 고기도 아니 온다.",
    "까마귀 날자 배 떨어진다.",
    "깨어진 그릇 맞추기.",
    "꼬리 먼저 친 개가 밥은 나중 먹는다.",
    "꼬리가 길면 밟힌다.",
    "꽁지 빠진 새 같다.",
    "꽃가루와 같이 부드러운 고양이의 털에 고운 봄의 향기가 어리우도다.",
    "꿈보다 해몽이 낫다.",
    "꿩 먹고 알 먹는다.",
    "나날이 새롭고 또 날로 새롭다.",
    "나는 너에게, 너는 나에게 잊혀지지 않는 하나의 의미가 되고 싶다.",
    "나는 바담 풍 해도, 너는 바람 풍 해라.",
    "나는 새도 떨어뜨리고, 달리는 짐승도 못 가게 한다.",
    "나는 생각한다. 그러므로 나는 존재한다.",
    "나는 왕이로소이다. 나는 왕이로소이다.",
    "나는 잠의 쪽배를 타고 꿈을 낚는 어부다.",
    "나라 상감님도 늙은이 대접은 한다.",
    "나라가 부패하면 할수록 이에 비례하여 법률이 늘어난다.",
    "나무에 올라 고기를 구한다.",
    "나물 먹고 물 마시고 팔을 베개하고 살더라도 즐거움이 그 가운데 있다.",
    "나보기가 역겨워 가실 때에는 죽어도 아니 눈물 흘리오리다.",
    "나쁜 곡식에서 좋은 씨앗이 나올 수 없다.",
    "나와 하늘과 하늘 아래 푸른 산뿐이로다.",
    "나와 함께 그 새빨간 능금을 또옥 똑 따지 않으렵니까?",
    "나의 마음은 고요한 물결.",
    "나의 웃음을 만드신 후에 새로이 나의 눈물을 지어 주시다.",
    "나의 집이 비록 작더라도 진정한 친구로 채울 수만 있다면 만족하겠노라.",
    "나이 이길 장사 없다.",
    "나중 꿀 한 그릇보다 지금 엿 한 가락이 더 달다.",
    "낙동강에 오리알 떨어지듯 한다.",
    "낙숫물이 돌을 뚫는다.",
    "낙타가 바늘구멍 찾는 격.",
    "날카로운 혀는 쉬지 않고 쓰면 더욱 예리해지는 칼날의 도구이다.",
    "남 떡 먹는 데 팥고물 떨어지는 걱정한다.",
    "남에게 베푼 이익을 기억하지 말라. 그러나 남에게서 받은 은혜는 잊지 말라.",
    "남을 위해 구덩이를 파는 자는 자기 자신이 그 구덩이에 빠진다.",
    "남을 이기려는 사람은 반드시 먼저 자기를 이겨라.",
    "남의 눈 속의 티만 보지 말고, 자기 눈 속의 대들보를 보라.",
    "남의 발에 버선 신긴다.",
    "남의 밥에 든 콩이 굵어 보인다.",
    "남의 상처에 웃는 사람은 상처의 아픔을 모르는 사람이다.",
    "남의 잔칫상에 감 놓아라 배 놓아라 한다.",
    "남의 집 불 구경 않는 군자 없다.",
    "남의 흉이 한 가지면 제 흉이 열 가지라.",
    "남이 나를 사랑하지 않거든 나의 사랑에 부족함이 없었는가를 살펴보라.",
    "남이 서울 간다니, 저도 서울 간단다.",
    "낮말은 새가 듣고, 밤말은 쥐가 듣는다.",
    "내 고장 칠월은 청포도가 익어 가는 시절.",
    "내 고향 남쪽 바다, 그 파란 물 눈에 보이네.",
    "내 돈 서 푼만 알고, 남의 돈 칠 푼은 모른다.",
    "내 마음은 낙엽이요, 잠깐 그대의 뜰에 머무르게 하오.",
    "내 마음은 호수요, 그대 저어 오오.",
    "내 비록 서투르나마 그대의 곡조에 내 악기를 맞춰보리.",
    "내 코가 석 자.",
    "내용이 없는 사상은 빈 껍데기이며 개념이 없는 직관은 맹목이다.",
    "냉수 먹고 이 쑤신다.",
    "너무 높게 솟아올라서 떨어지기보다는, 솟아나기 위해 몸을 굽히고 있어라.",
    "너희는 세상의 소금이니, 소금이 만일 그 맛을 잃으면 무엇으로 짜게 하리요.",
    "네 콩이 크니, 내 콩이 크니 한다.",
    "네모진 구멍에 둥근 마개, 둥근 구멍에 네모진 마개.",
    "노동이 육체를 굳세게 하는 것과 같이 가난은 정신을 굳세게 한다.",
    "노루 꼬리가 길면 얼마나 길까?",
    "노병은 죽지 않는다. 다만 사라질 뿐이다.",
    "녹슬어 못 쓰게 하기보다는 써서 닳게 하는 것이 낫다.",
    "논밭은 잡초 때문에 손해를 보고, 사람은 탐욕 때문에 손해를 본다.",
    "놀았던 자취는 없어도, 공부한 공은 남는다.",
    "놓친 고기가 더 크다.",
    "누구나 다 날씨에 대해 말하지만, 아무도 날씨를 어떻게 하지는 못한다.",
    "누구나 미래에 대하여 지금 준비해야 한다.",
    "누구든지 자기를 높이는 자는 낮아지고, 자기를 낮추는 자는 높아지리라.",
    "누구에게나 칭찬해 주는 사람은 아무도 칭찬하는 것이 아니다.",
    "누구의 주제런가, 맑고 고운 산.",
    "누울 자리를 보아가며 발 뻗는다.",
    "누워서 떡 먹기.",
    "눈 가리고 아웅한다.",
    "눈 먹던 토끼, 얼음 먹던 토끼가 다 각각이다.",
    "눈 위에 서리 친다.",
    "눈 코 뜰 사이 없다.",
    "눈먼 말 타고 벼랑을 간다.",
    "눈물 아롱아롱 피리 불고 가신 님의 밟으신 길은.",
    "눈물과 함께 빵을 먹은 사람이 아니면 인생의 참 맛을 모른다.",
    "눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리로다.",
    "눈에 넣어도 아프지 않겠다.",
    "눈이 아무리 밝아도 제 코는 안 보인다.",
    "눈치가 빠르면 절에 가서도 새우젓을 얻어먹는다.",
    "님은 갔습니다. 아아 사랑하는 나의 님은 갔습니다.",
    "다른 사람을 다스리고자 하면 먼저 자기를 다스려라.",
    "달 밝은 밤이 흐린 낮보다 못하다.",
    "달걀도 굴러가다 서는 모가 있다.",
    "달도 차면 기운다.",
    "달리는 말에 채찍질한다.",
    "달리는 사슴 보고 얻은 토끼 잃는다.",
    "달면 삼키고 쓰면 뱉는다.",
    "달무리한 지 사흘이면 비가 온다.",
    "닭 잡아 겪을 나그네 소 잡아 겪는다.",
    "닭 잡아먹고 오리발 내민다.",
    "닭 쫓던 개 지붕이나 쳐다본다.",
    "닭이 천이면 봉이 한 마리.",
    "당신 마음의 정원에 인내를 심어라. 그 뿌리는 써도 그 열매는 달다.",
    "당신 자신이 확신이 없는 것은 아이에게 가르치지 말라.",
    "대천 바다도 건너봐야 안다.",
    "더도 덜도 말고 늘 한가위만 같아라.",
    "더위 먹은 소, 달만 보아도 헐떡인다.",
    "덕은 외롭지 않으니 반드시 이웃이 있다.",
    "도깨비도 수풀이 있어야 모인다.",
    "도끼가 제 자루 못 찍는다.",
    "도둑고양이더러 제물 지켜 달란다.",
    "도둑이 도둑질로 부자가 되는 일은 거의 없다.",
    "도랑 치고 가재 잡는다.",
    "도마 위에 올려진 고기가 칼을 무서워하랴?",
    "도시 소식을 들으려면 시골로 가거라.",
    "독 안에 든 쥐.",
    "독서가 정신에 대함은 준비 운동이 육체에 대함과 마찬가지이다.",
    "독서만큼 값이 싸면서도 오랫동안 즐거움을 누릴 수 있는 것은 없다.",
    "돌다리도 두드려 보고 건너라.",
    "돌담에 속삭이는 햇발같이, 풀 아래 웃음짓는 샘물같이.",
    "돌도 십년을 보고 있으면 구멍이 뚫린다.",
    "돌을 차면 제 발부리만 아프다.",
    "동쪽 먼 심해선 밖의 한 점 섬, 울릉도로 갈거나.",
    "되로 주고 말로 받는다.",
    "될성부른 나무는 떡잎부터 알아본다.",
    "두뇌를 압도하기보다는 마음을 얻어냄이 더 확고한 정복이다.",
    "뒤주 밑이 긁히면 밥맛이 더 난다.",
    "뒷간에 갈 적 마음 다르고, 올 적 마음 다르다.",
    "드는 줄은 몰라도 나는 줄은 안다.",
    "드문드문 걸어도 황소걸음.",
    "듣기 좋은 이야기도 늘 들으면 싫다.",
    "들으면 병이요, 안 들으면 약이다.",
    "등잔 밑이 어둡다.",
    "딱딱하기는 삼 년 묵은 박달나무 같다.",
    "땅 짚고 헤엄치기.",
    "때린 사람은 다리 못 뻗고 자도, 맞은 사람은 다리 뻗고 잔다.",
    "떡 본 김에 제사 지낸다.",
    "떡 줄 사람은 생각도 않는데, 김칫국부터 마신다.",
    "뜻을 세우는 데에 너무 늦었다는 법은 없다.",
    "마른하늘에 날벼락 맞는다.",
    "마음 한 번 잘 먹으면, 북두칠성이 굽어본다.",
    "마음을 빼앗기면 눈은 아무것도 못 본다.",
    "마음이 즐거우면 발도 가볍다.",
    "마지막에 웃는 자가 가장 잘 웃는 자이다.",
    "마파람에 게눈 감추듯 한다.",
    "마파람에 곡식이 혀를 빼물고 자란다.",
    "마흔 살이 넘은 사람은 자기의 얼굴에 책임을 져야 한다.",
    "만약 신이 존재하지 않는다면 신을 발명할 필요가 있을 것이다.",
    "만족은 가난한 사람을 넉넉하게 하고, 넉넉한 사람을 가난하게 한다.",
    "만족은 대개 궁전보다 오막살이에 자리잡는다.",
    "만족한 돼지보다는 불만족한 소크라테스가 되는 것이 낫다.",
    "많이 배웠다고 뽐내는 것은 지식이요, 그것을 겸손해 하는 것은 지혜이다.",
    "많이 사랑하면 반드시 크게 낭비하고, 많이 소장하면 반드시 크게 잃는다.",
    "말 많은 집은 장맛도 쓰다.",
    "말 속에 말 들었다.",
    "말만 잘하면 천 냥 빚도 갚는다.",
    "말뿐이고 행동이 없는 사람은 잡초가 무성한 정원과 같다.",
    "말싸움은 결점이 한 쪽에만 있을 때는 오래 가지 않을 것이다.",
    "말은 해야 맛이고 고기는 씹어야 맛이다.",
    "말이 고마우면 비지 사러 갔다가 두부 사 온다.",
    "말이 많으면 쓸 말이 적다.",
    "말이란 '아'해 다르고 '어'해 다르다.",
    "맛없는 음식이 뜨겁기만 하다.",
    "망치가 가벼우면 못이 솟는다.",
    "매도 먼저 맞는 사람이 낫다.",
    "매사는 먼저 알기 쉽고 하기 쉬운 것부터 시작하라.",
    "먹기 위해서 살지 말고, 살기 위해서 먹어라.",
    "먹지 못할 풀이 오월에 겨우 난다.",
    "먼 사촌보다 가까운 이웃이 낫다.",
    "메뚜기도 오뉴월이 한철이다.",
    "명예와 거울은 입김만으로도 흐려진다.",
    "모가지가 길어서 슬픈 짐승이여, 언제나 점잖은 편 말이 없구나.",
    "모국을 사랑하는 사람은 인류를 미워할 수 없다.",
    "모기도 모이면 천둥소리가 난다.",
    "모란이 피기까지는, 나는 아직 나의 봄을 기다리고 있을 테요.",
    "모래 위에 물 쏟은 격이라.",
    "목마른 사람이 우물 판다.",
    "몸에만 꼭 맞는 옷을 입기보다는 양심에 꼭 맞는 옷을 입어야 한다.",
    "무쇠도 갈면 바늘이 된다.",
    "무엇을 참고 견디었느냐보다는 어떻게 참고 견디었느냐가 중요하다.",
    "문제는 어떻게 죽느냐는 것이 아니고 어떻게 사느냐 하는 것이다.",
    "문틈으로 보나 열고 보나 보기는 매일반이다.",
    "묻히리랏다. 청산에 묻히리랏다.",
    "물 부어 샐 틈 없다.",
    "물고기는 물을 떠나 살 수 없다.",
    "물고기는 언제나 입으로 낚인다. 사람도 역시 입으로 걸려든다.",
    "물불을 가리지 않는다.",
    "물에 빠지면 지푸라기라도 잡는다.",
    "물은 깊을수록 소리가 안 난다.",
    "물이 맑으면 고기가 아니 산다.",
    "물이 아니면 건너지 말고, 인정이 아니면 사귀지 말라.",
    "미래에 대한 최선의 예언자는 과거이다.",
    "믿는 도끼에 발등 찍힌다.",
    "밀가루 장사하면 바람이 불고, 소금 장사하면 비가 온다.",
    "밀밭에만 지나가도 주정한다.",
    "밑빠진 가마에 물 붓기.",
    "바늘 간 데 실 간다.",
    "바늘 구멍으로 하늘 보기.",
    "바늘 도둑이 황소 도둑 된다.",
    "바늘 방석에 앉은 것 같다.",
    "바다가 보이는 산길이, 난 좋아.",
    "바다는 메워도 사람의 욕심은 못 메운다.",
    "바다는 모든 강을 받아 준다.",
    "바다와 같이 넓은 마음에는 복수심이 깃들일 수 없다.",
    "바쁘게 찧는 방아에도 손 놀 틈이 있다.",
    "발 없는 말이 천리 간다.",
    "방귀 뀌고 성낸다.",
    "배보다 배꼽이 더 크다.",
    "배우고 나서 때때로 그것을 익히면 또한 기쁘지 않겠는가.",
    "배울 틈이 없다는 사람은 틈이 있어도 배우지 못한다.",
    "배움이 있다고 해서 모두가 현명한 것은 아니다.",
    "백 번 듣는 것이 한 번 보는 것만 못하다.",
    "백성의 소리는 신의 소리이다.",
    "백지장도 맞들면 낫다.",
    "뱁새가 황새를 따라 가려면 가랑이가 찢어진다.",
    "번갯불에 콩 볶아 먹기.",
    "범 없는 골에 토끼가 스승이라.",
    "베 돌던 닭도 때가 되면 홰 안에 찾아든다.",
    "벼룩의 등에 육간 대청을 짓겠다.",
    "벼르던 제사에 물도 못 떠놓는다.",
    "별 하나에 시와 별 하나에 어머니, 어머니.",
    "병 주고 약 준다.",
    "병에 찬 물은 저어도 소리가 안 난다.",
    "보기 좋은 떡이 먹기도 좋다.",
    "보리밭 사잇길로 걸어가면, 뉘 부르는 소리 있어.",
    "복은 쌍으로 안 오고, 화는 홀로 안 온다.",
    "볶은 콩에 싹이 날까?",
    "봄에 깐 병아리 가을에 와서 세어 본다.",
    "봇짐 내어 주며 하룻밤 더 묵어라 한다.",
    "부귀 빈천이 물레바퀴 돌 듯 한다.",
    "부귀한 자리에 있을 때는 빈천한 사람의 고통을 알아야 한다.",
    "부는 바닷물과 같은 것. 많이 마시면 마실수록 갈증을 느낀다.",
    "부드러운 말 한 마디가 냉수 한 모금보다 사람의 마음을 진정시킨다.",
    "부드럽게 계획하고 열렬하게 밀고 나가라.",
    "부뚜막의 소금도 집어 넣어야 짜다.",
    "부모가 착해야 효자가 난다.",
    "부모는 생명을 주고, 스승은 생명을 보람있게 하는 법을 가르쳐 준다.",
    "부자의 겸손은 가난한 사람의 벗이 된다.",
    "부잣집 맏며느리 같다.",
    "북은 칠수록 소리가 난다.",
    "불만은 결핍에서 오는 것보다 욕망에서 생기는 일이 많다.",
    "불은 쇠를 단련시키고 역경은 강한 사람을 단련시킨다.",
    "비 온 뒤에 땅이 굳어진다.",
    "비가 옵니다. 다정한 손님같이 비가 옵니다.",
    "비를 드니 마당을 쓸라고 한다.",
    "빈 수레가 더 요란하다.",
    "빈곤은 가정을 파괴하기보다는 오히려 단결시킨다.",
    "빛 좋은 개살구.",
    "빼앗긴 들에도 봄은 오는가?",
    "사공이 많으면 배가 산으로 올라간다.",
    "사람 위에 사람 없고, 사람 밑에 사람 없다.",
    "사람 한평생이 물레바퀴 돌 듯 한다.",
    "사람들은 당신에게 비평해 달라지만 칭찬을 바랄 뿐이다.",
    "사람에 버릴 사람 없고, 물건에 버릴 물건 없다.",
    "사람은 누구나 자기 자신의 척도로 남을 판단하다.",
    "사람은 다른 사람의 어리석음을 보고 현명하게 되는 법을 배운다.",
    "사람은 달과 같이 저마다 감추려는 구석이 있다.",
    "사람은 손에 넣는 것보다도 기대하는 것을 좋아한다.",
    "사람은 어렸을 때부터 좋은 습관을 들이는 것이 중요하다.",
    "사람은 언제나 잘못을 저지른 뒤라야 고칠 수 있게 된다.",
    "사람은 자기 자신을 의탁할 자기의 세계를 가지고 있어야 한다.",
    "사람은 자기가 행복하다는 것을 모르기 때문에 불행한 것이다.",
    "사람은 자연에서 가장 약한 갈대에 불과하나, 그는 생각하는 갈대이다.",
    "사람은 죽으면 이름을 남기고, 범은 죽으면 가죽을 남긴다.",
    "사람을 판단하는 데는 그의 친구는 물론이거니와 그의 적을 봐야 한다.",
    "사람의 일생은 선과 악으로 짠 그물이다.",
    "사람의 천성은 서로 가까우나 습성에 의하여 서로 멀어진다.",
    "사람이 먼 앞일을 생각하지 않으면 반드시 가까운 근심이 생긴다.",
    "사람이 사랑을 할 때는 누구나 시인이 된다.",
    "사람이 오래면 지혜가 되고, 물건이 오래면 귀신이 된다.",
    "사랑 받지 못하는 것은 슬프지만, 사랑할 수 없는 것은 더욱 슬프다.",
    "사랑과 연기는 감출 수 없다.",
    "사랑할 수 있다는 것은 모든 것을 할 수 있다는 것이다.",
    "사랑했다가 잃은 것은 전혀 사랑해 본 일이 없는 것보다 낫다.",
    "사자가 새끼 양을 어르면 새끼 양은 반드시 사자를 따르기 마련이다.",
    "산 너머 남촌에는 누가 살길래. 해마다 봄바람이 남으로 오네.",
    "산 넘어 산이다.",
    "산 밖에 난 범이오, 물 밖에 난 고기다.",
    "산 사람의 입에 거미줄 치랴?",
    "산 속의 도둑을 파하는 것은 쉽지만 마음속의 도둑을 파하는 것은 어렵다.",
    "산다는 것은 생각하는 것이다.",
    "산에 가야 꿩을 잡고, 바다에 가야 고기를 잡는다.",
    "산에서 우는 작은 새여, 꽃이 좋아 산에서 사노라네.",
    "산은 모든 자연 풍경의 시작이요, 끝이다.",
    "산이 나에게 오지 않는다면, 내가 산으로 가겠다.",
    "산이 높아야 골이 깊다.",
    "산전 수전 다 겪었다.",
    "살 것인가 죽을 것인가, 그것이 문제로다.",
    "삶의 목적을 가진 사람은 어떠한 역경도 견디어 낼 수 있다.",
    "새발의 피.",
    "새벽 달 보려고 어스름 달 안 보랴?",
    "샘이 깊은 물은 가뭄을 아니 탄다.",
    "생각에 있어서 그러하듯, 행동에서 위대하라.",
    "생각을 하지 않으면서 독서하는 것은 음식을 씹지 않고 먹는 것과 같다.",
    "생일날 잘 먹자고 이레를 굶을까?",
    "서당개 삼년이면 풍월을 읊는다.",
    "서로의 작은 결점을 용서할 수 있어야 온전한 우애를 이룰 수 있다.",
    "서투른 도둑이 첫날밤에 들킨다.",
    "성실은 어디에서나 통용되는 유일한 화폐이다.",
    "세 사람만 우기면, 없는 호랑이도 만들어 낼 수 있다.",
    "세 사람이 갈 때는 반드시 그 중에 나의 스승이 있다.",
    "세 살 적 버릇이 여든까지 간다.",
    "세계의 역사는 세계를 재판하는 곳이다.",
    "세상은 아지랑이와 같고, 세상은 물거품과 같다.",
    "세상의 큰 일은 언제나 작은 데서 시작된다.",
    "소 잃고 외양간 고친다.",
    "소년은 늙기 쉽고 학문은 이루기 어렵다.",
    "소년이여! 큰 뜻을 품어라.",
    "소도 언덕이 있어야 비빈다.",
    "소문난 잔치에 먹을 것 없다.",
    "손뼉도 마주쳐야 소리가 난다.",
    "손상은 모욕보다 더욱 빨리 잊혀진다.",
    "손수 일해서 얻은 빵만큼 맛있는 것은 없다.",
    "솔잎이 새파라니까 오뉴월만 여긴다.",
    "송충이가 갈잎을 먹으면 떨어진다.",
    "송화가루 날리는 외딴 봉우리.",
    "쇠귀에 경 읽기.",
    "쇠뿔도 단김에 빼라.",
    "수박 겉 핥기.",
    "수염이 석 자라도 먹어야 양반.",
    "술에 술 탄 듯, 물에 물 탄 듯.",
    "숭어가 뛰니까, 망둥이도 뛴다.",
    "숯이 검정 나무란다.",
    "쉽게 믿어 버리는 것은 어른에게는 약점, 어린이에게는 힘이다.",
    "습관은 인간 생활의 위대한 안내자이다.",
    "습관은 제2의 천성이 되고, 천성의 10배가 되는 힘을 지닌다.",
    "시간은 인간이 소비하는 것 중 가장 가치 있는 것이다.",
    "시작하는 재주는 위대하지만, 마무리짓는 재주는 더욱 위대하다.",
    "시장이 반찬이다.",
    "신선놀음에 도끼자루 썩는 줄 모른다.",
    "신은 이 세상의 온갖 걱정거리의 보상으로서 희망과 수면을 주셨다.",
    "신체발부는 부모에게서 받은 것이니 감히 훼손하지 않는 것이 효의 시작이다.",
    "실 엉킨 것은 풀어도, 노 얽힌 것은 못 푼다.",
    "실뱀 한 마리가 온 바닷물을 흐린다.",
    "십년이면 강산도 변한다.",
    "싸움은 말리고, 흥정은 붙이랬다.",
    "쌀은 쏟고 주워도, 말은 하고 못 줍는다.",
    "쏘아 놓은 살이요, 엎지른 물이다.",
    "아는 게 병이요, 모르는 게 약이다.",
    "아니 땐 굴뚝에 연기 나랴?",
    "아닌 밤중에 홍두깨.",
    "아랫돌 빼어 윗돌 괴고, 윗돌 빼어 아랫돌 괴기.",
    "아름다움은 전적으로 보는 사람의 눈에 달려 있다.",
    "아무것도 가진 것이 없으니, 아무것도 잃을 것이 없다.",
    "아무것도 바라지 않는 사람은 복 받을지어다, 그는 실망하지 않을 것이나니.",
    "아무리 바빠도 바늘 허리 매어 쓰지 못한다.",
    "아버지가 되기는 쉬우나 아버지답기는 어렵다.",
    "아버지는 자식을 위해 감추고 자식은 아버지를 위해 감춘다.",
    "아버지의 덕행은 최고의 유산이다.",
    "아이는 어려서는 엄하게 꾸짖고 자란 다음에는 꾸짖지 말아라.",
    "아이들에게는 비평가보다도 본보기가 필요하다.",
    "아직 삶도 알지 못하는데 어찌 죽음을 알겠는가?",
    "아첨은 비굴의 표시이다.",
    "아침 강에 안개가 자욱 끼어 있다.",
    "아침 놀 저녁 비요, 저녁 놀 아침 비라.",
    "아침에 생각하고, 낮에 행동하고, 저녁에 먹고, 밤에 잠자라.",
    "아침이면, 세상은 개벽을 한다.",
    "악법도 법이다.",
    "악을 갚는 데 있어서 악으로 하면 악을 더하는 것이다.",
    "악이 그릇에 가득 차면 하늘은 반드시 이것을 깨뜨린다.",
    "앓던 이가 빠진 것 같다.",
    "약방에 감초라.",
    "약속을 쉽게 하는 사람은 그 실천에는 충실하지 못한다.",
    "얇은 사 하이얀 고깔은 고이 접어서 나빌레라.",
    "얌전한 고양이 부뚜막에 먼저 올라간다.",
    "양귀비꽃보다도 더 붉은 그 마음 흘러라.",
    "양지가 음지 되고, 음지가 양지 된다.",
    "어느 머언 곳의 그리운 소식이기에 이 한밤 소리없이 흩날리느뇨.",
    "어느 새든지 자기의 둥지를 가장 좋아한다.",
    "어느 장단에 춤추랴?",
    "어느 집 질화로엔 밤알이 토실토실 익겠다.",
    "어떤 사람은 슬픔을 딛고 서고, 어떤 사람은 슬픔 밑에 깔린다.",
    "어떤 장미에도 가시가 있듯, 인생에는 슬픔이 따른다.",
    "어려서 겸손하라. 젊어서 온화하라. 장년에 공정하라. 늙어서는 신중하라.",
    "어리석은 사람은 물을 퍼내고, 현명한 사람은 고기를 잡는다.",
    "어리석은 자의 분명한 증거는 자기의 생각을 고집하여 흥분하는 것이다.",
    "어린이는 부모의 행위를 비추는 거울이다.",
    "어머니의 눈물에는 과학으로 분석할 수 없는 깊고 귀한 애정이 담겨 있다.",
    "어물전 망신은 꼴뚜기가 시킨다.",
    "엄마야 누나야 강변 살자. 뜰에는 반짝이는 금모래빛.",
    "엎드려 절 받기.",
    "엎어지면 코 닿을 데.",
    "엎친 데 덮치기.",
    "여름에 하루 놀면 겨울에 열흘 굶는다.",
    "여행은 정신을 다시 젊어지게 하는 샘이다.",
    "여행은 진실에 의해 상상을 규제하고, 사물을 있는 그대로 보는 것이다.",
    "열 번 찍어 안 넘어가는 나무 없다.",
    "열 사람 형리를 사귀지 말고, 한 가지 죄를 범하지 말라.",
    "열 손가락에 어느 손가락 깨물어 안 아플까?",
    "염불에는 마음이 없고 잿밥에만 마음이 있다.",
    "예술은 길고 인생은 짧다.",
    "예술은 때때로 실수를 하지만 자연은 실수하는 법이 없다.",
    "옛것을 익히고 새것을 알면 능히 남의 스승이 될 수 있다.",
    "오는 말이 고와야 가는 말도 곱다.",
    "오늘 밤에도 별이 바람에 스치운다.",
    "오랜 친구보다 나은 거울은 없다.",
    "오르막과 내리막은 하나의 같은 언덕이다.",
    "오월의 창공이여! 나의 태양이여!",
    "옥에도 티가 있다.",
    "온몸에는 젊음이, 판단에는 노련함이.",
    "옷은 새것 이상이 없고, 사람은 오랜 것 이상이 없다.",
    "욕망의 절반이 실현되면 고생은 두 배가 될 것이다.",
    "욕심은 눈을 어둡게 한다.",
    "용기는 공포에의 저항이며 극복이지만 공포심을 없애는 것은 아니다.",
    "용서하는 곳에 사랑이 있다.",
    "우는 아이 젖 준다.",
    "우리가 때때로 역경을 겪지 않는다면 번영도 별로 즐겁지 않을 것이다.",
    "우리는 이치로써만이 아니라 가슴을 통해서도 진리를 터득한다.",
    "우리들 자신에 대한 법률은 우리들의 이성이다.",
    "우리들의 이 소중한 꿈을 꼭 안아 지키게 해 주십시오.",
    "우매한 사람은 지껄이지만, 현명한 사람은 이야기한다.",
    "우물 안 개구리.",
    "우물가에 보내 놓은 어린애 같다.",
    "우물을 파도 한 우물을 파라.",
    "우수 경칩에 대동강이 풀린다.",
    "우정은 초목에 물이 필요하듯 이따금 애정을 부어 주어야 한다.",
    "운명은 우리를 행복하게도 불행하게도 하지 않는다.",
    "운은 우리에게서 부를 빼앗을 수는 있어도 용기를 빼앗을 수는 없다.",
    "울며 겨자 먹기.",
    "웃는 낯에 침 뱉으랴?",
    "원님 덕에 나팔 분다.",
    "원수는 외나무다리에서 만난다.",
    "원인의 10퍼센트를 억제하면 결과의 90퍼센트를 지배할 수 있다.",
    "위험 없이 정복할 때 우리의 승리는 영광을 잃는다.",
    "윗물이 맑아야 아랫물이 맑다.",
    "유식한 바보야말로 무식한 바보보다 더욱 바보이다.",
    "의심하지 않는 신념은 신념이 아니다.",
    "이것은 소리없는 아우성.",
    "이따금 그대의 즐거움을 그대의 진지한 직업에 동참시켜라.",
    "이러매 눈감아 생각해 볼 밖에, 겨울은 강철로 된 무지갠가 보다.",
    "인간에 대한 학대 가운데서 가장 나쁜 것은 마음을 헐뜯는 것이다.",
    "인간은 만물의 척도이다.",
    "인간은 어떤 일에도 길들여지는 유순한 동물이다.",
    "인간은 얼마나 오래 사느냐가 아니고, 어떻게 사느냐가 문제인 것이다.",
    "인간의 가장 놀라운 특성의 한 가지는 부족함을 넉넉함으로 바꾸는 힘이다.",
    "인간의 순수한 기쁨의 하나는 근로 후의 휴식이다.",
    "인간의 진실한 부는 이 세상에서 행하는 착한 일이다.",
    "인간이여, 스스로를 알라. 모든 지혜는 그대 자신에게 집중되어 있다.",
    "인내는 쓰나 그 열매는 달다.",
    "인명은 재천이다.",
    "인사를 다하고 천명을 기다린다.",
    "인생에 있어서 어려운 것은 선택이다.",
    "인생은 몇 번인가의 죽음과 몇 번인가의 부활이 반복하면서 연속하는 것이다.",
    "인생은 빈손으로 왔다가 빈손으로 가는 것이다.",
    "인생은 한바탕의 봄의 꿈처럼 허무한 것이다.",
    "인생은 행복한 사람에게는 너무나 길고, 불행한 사람에게는 너무나 짧다.",
    "인생의 반이 지나서야 그것이 무엇인가를 알게 된다.",
    "인은 사람이 간직해야 할 마음이요, 의는 사람이 마땅히 걸어야 할 길이다.",
    "인을 행함에 있어서는 스승에게도 양보하지 말아야 한다.",
    "일유봉은 해 뜨는 곳, 월유봉은 달 뜨는 곳.",
    "일은 권태, 악덕, 탐욕의 삼대 악에서 우리를 멀리한다.",
    "일은 민첩하게 하고 말은 신중하게 해야 한다.",
    "일이 즐겁다면 인생은 낙원이다.",
    "일찍 일어나는 새가 벌레를 잡는다.",
    "일찍 자고 일찍 일어나는 것은 건강과 부귀와 지혜를 만든다.",
    "입술에 침이나 바르지.",
    "입이 열이라도 할 말이 없다.",
    "입이 하나 귀가 둘인 이유는 듣기를 배로 하라는 것이다.",
    "자기가 자신을 가지면 남의 신뢰도 얻는다.",
    "자기의 고난은 참아야 하고, 남의 고난은 돌보아 주어야 한다.",
    "자다가 봉창 두드린다.",
    "자라 보고 놀란 가슴 솥뚜껑 보고 놀란다.",
    "자리가 높으면 걱정이 많다.",
    "자발 없는 귀신은 물도 못 얻어먹는다.",
    "자식 둔 골은 범도 돌아본다.",
    "자식을 길러 봐야 부모 은공을 안다.",
    "자식을 보기에 아비만한 눈이 없고, 제자를 보기에 스승만한 눈이 없다.",
    "자신의 실력이 불충분하다는 것을 아는 것이 자신의 실력을 충실하게 한다.",
    "자신이 원하지 않는 것을 남에게 베풀지 말라.",
    "자에도 모자랄 적이 있고, 치에도 넉넉할 적이 있다.",
    "자연과 책의 주인은 그것을 보는 사람이다.",
    "자연은 가장 좋은 의사이다.",
    "자연은 그것을 사랑하는 사람의 마음을 배반하는 짓은 절대로 하지 않는다.",
    "자연은 뛰어 넘으면서 전진하지 않는다.",
    "자연은 우리에게 신을 보여주는 거울이다.",
    "자연은 자연을 사랑한 마음을 결코 기만하지 않는다.",
    "자연의 모든 것은 법칙과 일치해 움직인다.",
    "자유를 달라, 그렇지 않으면 죽음을 달라.",
    "작년에 괸 눈물 금년에 떨어진다.",
    "작은 고추가 더 맵다.",
    "작은 불은 쉽게 발로 뭉개지지만, 그냥 두면 강물이라도 끄지 못한다.",
    "작은 이익에는 눈이 밝고 큰 이익에는 눈이 멀어진다.",
    "작은 일에 너무 열중하는 사람은 대개 큰 일을 하지 못한다.",
    "잘 짖는다고 해서 좋은 개가 아니며, 말을 잘 한다고 해서 현인이 아니다.",
    "장래를 염려하지 말라. 지금 할 일을 하라.",
    "장미는 핀 꽃보다 봉오리가 더 아름답다.",
    "재는 넘을수록 험하고, 내는 건널수록 깊다.",
    "재능이란 자기 자신을, 자신의 힘을 믿는 것이다.",
    "재주를 갖고 어리석은 사람은 있어도, 판단력을 갖고 어리석은 사람은 없다.",
    "저 재를 넘어가는 저녁 해의 엷은 광선들이 섭섭해합니다.",
    "전당 잡은 촛대 같고, 꾸어 온 보릿자루 같다.",
    "전쟁은 인류를 괴롭히는 최대의 질병이다.",
    "전체는 개인을 위해, 개인은 전체를 위해 존재한다.",
    "절대로 실수하지 않는 사람은 아무 일도 하지 않는 사람뿐이다.",
    "젊은 사람은 아름답다. 그렇지만 늙은 사람은 더욱 아름답다.",
    "젊은이 망령은 홍두깨로 고치고 늙은이 망령은 곰국으로 고친다.",
    "젊은이는 희망에 살고, 노인은 추억에 산다.",
    "젊음은 그 자체가 하나의 빛이다.",
    "접동, 접동, 아우래비 접동.",
    "정성이 지극하면 돌 위에 풀이 난다.",
    "정이월에 큰항아리 터진다.",
    "제 곡조를 못 이기는 사랑의 노래는 님의 침묵을 휩싸고 돕니다.",
    "제 꾀에 제가 넘어간다.",
    "제 부모를 위하려면 남의 부모를 위해야 한다.",
    "조금 배운 것은 위험한 것이다.",
    "조약돌 피하니까 수마석을 만난다.",
    "존재하는 것은 무엇이라도 그것대로 정당한 원인이 있다.",
    "종로에서 뺨 맞고 한강에 가서 눈 흘긴다.",
    "종이에 쓰지 말고 마음에 써서 남기라.",
    "좋게 말하기는 쉬워도 참으로 찬미하기는 어렵다.",
    "좋은 것이 때묻었을 때가, 좋지 않은 것이 때묻었을 때 보다 훨씬 더럽다.",
    "좋은 약은 입에 쓰지만 병에 이롭고, 충고는 귀에 거슬려도 행함에 이롭다.",
    "좋은 얼굴이 추천장이라면 좋은 마음은 신용장이다.",
    "좋은 집을 사기보다 좋은 이웃을 얻어야 한다.",
    "주러 와도 미운 사람 있고, 받으러 와도 고운 사람 있다.",
    "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를.",
    "죽어 석잔 술이 살아 한 잔 술만 못하다.",
    "중이 제 머리 못 깎는다.",
    "쥐구멍에도 볕들 날이 있다.",
    "쥐면 꺼질까 불면 날아갈까?",
    "증오는 그 마음을 품는 자에게 다시 돌아간다.",
    "지금 눈 내리고, 매화 향기 홀로 아득하니.",
    "지나가던 구름이 하나, 새빨간 노을에 젖어 있었다.",
    "지나온 것은 알 수 있으나, 미래는 느낄 수 있을 뿐이다.",
    "지나치게 긴 휴식은 지나치게 짧은 휴식과 같이 사람을 피로하게 한다.",
    "지렁이도 밟으면 꿈틀한다.",
    "지성이면 감천이다.",
    "지식은 옅으면 곧 잃어버린다.",
    "지위가 높을수록 마음은 낮추어 먹어라.",
    "지자는 물을 즐기고, 인자는 산을 즐긴다.",
    "지키는 사람 열이 훔치는 사람 하나를 못 당한다.",
    "질서의 미는 모든 미관 중 가장 아름답다.",
    "짧은 인생은 시간의 낭비에 의해 더욱 짧아진다.",
    "찬물도 위아래가 있다.",
    "참새가 방앗간을 그냥 지나가지 못 한다.",
    "참을 인자 셋이면 살인도 피한다.",
    "책이 학문을 따를지언정 학문이 책을 따라서는 안 된다.",
    "처음의 큰 웃음보다는 마지막의 미소가 더 낫다.",
    "천 길 물 속은 알아도 한 길 사람 속은 모른다.",
    "천냥 빚도 말 한 마디로 갚는다.",
    "천리 길도 한 걸음부터.",
    "천재라는 것은 참을성을 갖춘 위대한 소질에 불과하다.",
    "첫 술에 배 부르랴?",
    "청노루 맑은 눈에 도는 구름.",
    "초가 지붕에 박넝쿨 올리고, 삼밭에 오이랑 호박을 놓고.",
    "초가삼간 다 타도 빈대 죽는 것만 시원하다.",
    "초년 고생은 양식 지고 다니며 한다.",
    "최대 다수의 최대 행복.",
    "최후의 승리는 출발선이 아니라, 결승점에 이르기까지의 끈기와 노력이다.",
    "충고를 해 줄 수는 있으나, 행동하도록 영감을 불어넣지는 못한다.",
    "친구가 필요 없을 만큼 잘난 부자는 없다.",
    "친구란 두 개의 육체에 깃들인 하나의 영혼이다.",
    "친구에게 속는 것보다 그를 믿지 못하는 것이 더욱 창피하다.",
    "커도 한 그릇, 작아도 한 그릇.",
    "콩 심은 데 콩 나고, 팥 심은 데 팥 난다.",
    "콩으로 메주를 쑨다 해도 곧이 안 듣는다.",
    "크고 훌륭한 그릇은 많은 시간과 각고 끝에 만들어진다.",
    "큰 방죽도 개미구멍으로 무너진다.",
    "큰 인물일수록 어린아이의 순진성을 지니고 있다.",
    "큰 일이면 작은 일로 두 번 치러라.",
    "타인의 자유를 부인하는 자는 그 자신도 자유를 누릴 가치가 없다.",
    "태양이 아무리 찬란하게 빛나도 지기 마련이다.",
    "태어나려는 자는 한 세계를 파괴해야 한다.",
    "티끌 모아 태산이라.",
    "파아란 하늘에 백로가 노래하고, 이른 봄 잔디밭에 스며드는 햇볕처럼.",
    "팔십 노인도 세 살 먹은 아이한테 배울 것이 있다.",
    "평등은 사랑의 가장 단단한 끈이다.",
    "평양 감사도 저 싫으면 그만이다.",
    "평양성에 해 안 뜬대두, 난 모르오. 웃은 죄밖에.",
    "평화로운 가정에는 행복이 제 발로 찾아온다.",
    "필요는 발명의 어머니다.",
    "핑계 없는 무덤 없다.",
    "하나를 보면 열을 안다.",
    "하나만 알고 둘은 모른다.",
    "하나의 성격을 심어라, 그러면 하나의 운명을 거둔다.",
    "하나의 오늘은 둘의 내일보다 낫다.",
    "하느님의 광장 같은 새파란 아침 하늘에.",
    "하늘 밑 푸른 바다가 가슴을 열고, 흰 돛 단 배가 곱게 밀려서 오면.",
    "하늘로 올라갔나 땅으로 들어갔나.",
    "하늘은 스스로 돕는 자를 돕는다.",
    "하늘이 만든 화는 피할 수 있으나 제가 만든 화는 피할 수 없다.",
    "하늘이 무너져도 솟아날 구멍이 있다.",
    "하룻강아지 범 무서운 줄 모른다.",
    "학문과 덕이 높은 사람은 말에는 더디고자 하고, 행동함에는 빠르고자 한다.",
    "한 개의 양초로 많은 양초에 불을 옮겨 붙이더라도 그 빛은 흐려지지 않는다.",
    "한 방울의 이슬일지라도 그 속에는 하늘이 들어있다.",
    "한 번 실수는 병가지상사.",
    "한 번 웃으면 한 번 젊어진다.",
    "한 부모는 열 자식을 거느려도 열 자식은 한 부모를 못 거느린다.",
    "한 사람이 한 숟가락씩 모으면 밥 한 그릇이 된다.",
    "한 푼 장사에 두 푼 밑져도 팔아야 장사.",
    "한날 한시에 난 손가락도 길고 짧다.",
    "한송이의 국화꽃을 피우기 위해, 봄부터 소쩍새는 그렇게 울었나 보다.",
    "할 일이 없으면 혼자 있지 말고, 혼자 있거든 할 일을 찾아라.",
    "해안을 시야에서 놓칠 용기가 없다면 새로운 대양을 발견하지 못한다.",
    "해야 솟아라. 해야 솟아라. 말갛게 씻은 얼굴 고운 해야 솟아라.",
    "행동은 말보다도 소리가 크다.",
    "행동하는 것은 바로 고뇌하는 것이고, 고뇌하는 것은 바로 행동하는 것이다.",
    "행복과 불행은 모두 자신의 마음에 달려 있다.",
    "행복한 마음은 아름다운 얼굴을 만든다.",
    "행위란 사람이 자기 모습을 비치는 거울이다.",
    "행할 수 있는 자는 행하고, 행할 수 없는 자는 가리킨다.",
    "향기 없는 꽃은 진짜 꽃이 아니듯 매력 없는 문학은 좋은 문학이 될 수 없다.",
    "헌 짚신도 짝이 있다.",
    "혀는 뼈가 없지만 뼈를 부러뜨릴 수 있다.",
    "현명하게 속돼라. 속되게 현명하지는 말라.",
    "호기심은 활기찬 마음의 영원하고 확실한 특징 중의 하나이다.",
    "호랑이 굴에 가야 호랑이 새끼를 잡는다.",
    "호랑이는 죽어서 가죽을 남기고, 사람은 죽어서 이름을 남긴다.",
    "호랑이에게 물려가도 정신만 차려라",
    "호미로 막을 것을 가래로 막는다.",
    "호박이 넝쿨째로 굴러 떨어졌다.",
    "혹 떼러 갔다가 혹 붙여 온다.",
    "화가 치밀거든 말하기 전에 열까지 세어라.",
    "화낼 줄 모르는 것은 어리석다. 그렇지만 화를 참는 사람은 현명하다",
    "환경이 인간을 만드는 것이 아니라, 인간이 환경을 만드는 것이다.",
    "흘러가는 물도 떠 주면 공이라.",
    "희망은 사람을 성공으로 이끄는 신앙이다.",
    "힘없는 정의는 도움이 안 되고, 정의 없는 힘은 폭군적이다."
];

const getRandomSogdam = () => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    return proverbs[randomIndex];
};

const create = async () => {
    sogdamElement.innerText = getRandomSogdam();
};

const copyClipBoard = async (text) => {
    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
        } else {
            let t = document.createElement("textarea");
            document.body.appendChild(t);
            t.value = text;
            t.select();
            document.execCommand("Copy");
            document.body.removeChild(t);
        }
        return true
    } catch (error) {
        return false
    }
}


document.addEventListener('DOMContentLoaded', create);
document.getElementById('refresh_btn').addEventListener('click', create);
document.getElementById('copy_btn').addEventListener('click', () => {
    copyClipBoard(sogdamElement.value);
});