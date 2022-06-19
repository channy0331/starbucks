const searchEl=document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')
searchEl.addEventListener('click',function(){
  // Input요소 자체를 선택하지 않고 Input요소를 가지고 있는 Seacrch라는 div요소 아무곳을 선택해도 focus되도록 함
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  // 클래스명에 focused를 추가함
  searchInputEl.setAttribute('placeholder','통합검색');
  // html속성을 지정함
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  // 클래스명에 focused를 제거함 - blur
  searchInputEl.setAttribute('placeholder','');
  // html속성을 지정함
});

const badgeEl=document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY>500){
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    // gsap.to(요소, 지속시간, 옵션);
    // badgeEl.style.display='none'
    // 배지 숨기기
    // style속성을 사용하면 css속성값을 넣을 수 있음
    gsap.to('#to-top', .2, {
      x:0
    });
    // 버튼 보이기!
  } else {
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    // badgeEl.style.display='block'
    // 배지 보이기
    gsap.to('#to-top', .2, {
      x:100
    });
    // 버튼 숨기기!
  }
},300));
/*윈도우는 화면 자체에 대한 명령을 넣을 수 있다. (scroll등)
스크롤 할 때 함수를 많이 실행하면 화면이 버벅일 수 있기 떄문에 함수를 외부에서 가져오도록 제어해야함
google에 lodash cdn검색 -> js라이브러리 연결하고, lodash사용법은 lodash.com에서 확인
https://cdnjs.com/libraries/lodash.js
0.3초 단위로 부하를 줘서 함수가 우르르 실행되는것을 방지하기위해 lodash의 기능을 사용함.
_.throttle(함수,시간)라는 메소드를 실행하여 첫 번째 인수로 함수를 넣어주고 밀리세컨드(300) 단위로 시간을 넣어준다.*/

// const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
  // widow객체는 화면자체를 의미함. scrollTo는 0~1사이의 값을 넣을 수 있음
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
gsap.to(fadeEl, 1, {
  delay:(index+1)*.7, //0.7초에 첫번째 요소, 1.4초에 두번째 요소, 2.1 세번째, 2.7 네번째 동작
  opacity:1
});
});
/*fadeEls라는 변수명으로 fade-in 클래스를 가진 여러 요소들을 fadeEls안에 집어넣고
querySelectorAll로 모든 선택자를 선택하여 fadeEls에 할당한다. '.visual이라는 문자 데이터의 후손 선택자 .fade-in클래스를 모두 찾아서 fadeEls에 할당함. 
fadeEls는 반복적으로 애니메이션(페이드인 효과)를 주기 위해 forEach라는 매소드를 사용함.
인수로 함수를 넣고 첫번째는 fadeEl요소를 넣고, 두번째 매개변수는 반복되는 횟수를 index(=0)라는 매개변수로 넣을 수 있다. 위 두개의 매개변수를 가진 함수가 반복적으로(forEach) 실행될 때, gsap의 .to매소드(애니메이션 라이브러리)를 실행해 준다. 첫 번째 인수로는 처리할 요소, 두번째는 지속시간, 세번째는 옵션을 넣어야함. 첫번째 요소는 fadeEl을 넣고 반복시간은 1초, 옵션은 기본적으로 객체 데이터 형태'{}'이다. 그안에 opacity, delay등을 넣을 수 있음. 순차적으로 화면에 출력하기 위해 gsap라이브러리에서 제공하는 delay를 사용할 수 있음. index는 0이기 때문에 처음은 (0+1)*0.7=0.7이 되고, 두번 째 요소는 (1+1)*0.7=1.4초, 세번째는 (2+1)*0.7=2.1, 네번째는 (3+1)*0.7=2.7 이런식으로 순차적으로 1초동안 투명도가 변하게 된다.
*/

// new Swiper(선택자, 옵션)
// new라는 키워드를 사용한단건 자바스크립트만의 생성자(클래스) 개념임
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

new Swiper('.promotion .swiper-container', {
  // direction:'horizontal',(기본값이라 명시할 필요없음)
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides : true, //1번 슬라이드가 가운데 보이게 하기
  loop:true,
  autoplay:{
    delay:5000
     // 5000=5초 (기본값 3초)
   },
  pagination: {
    el:'.promotion .swiper-pagination', //페이지 번호 불렛(bullet) 요소 선택자
    clickable : true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  // direction:'horizontal' 기본값
  autoplay: true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  // 하나의 화면에 몇개의 슬라이드를 보여줄 것인가
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

/*TOGGLE*/
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion=!isHidePromotion
  // 느낌표라는 것은, 느낌표가 있는 부분을 반대로 만들어주세요~(true) 가 됨 즉, 특정 변수값을 지속적으로 반대값으로 반환해주는 값.
  if(isHidePromotion){
    // 숨김 처리 (hide클래스 추가)
    promotionEl.classList.add('hide');
  }
  else{
    promotionEl.classList.remove('hide');
    // 보임 처리 (hide클래스 제거)
  }
})

/*YOUTUBE ANIMATION */

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  // gsap.to() 사용법 : https://greensock.com/docs/v3/GSAP/gsap.to()
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat : -1, //-1은 무한 반복을 의미함
    yoyo: true, //한번 재생된 애니메이션을 뒤로 다시 재생함
    ease: Power1.easeInOut,
    //https://greensock.com/docs/v2/Easing : gsap easing 코드 복사
    delay:random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    // 보여짐 여부를 감시할 요소를 지정 (spyEl)
    triggerHook : .8,
    // 뷰포트가 시작하는부분을 0이고 끝나는 부분을 1로 ScrollMagic이 판단함.
    /* triggerHook에 0.8을 넣으면 80%지점에 훅(갈고리) 트리거를 걸어서 
    감시하고 있다가 스크롤을 80%이상 내리면 어떠한 내용을 실행(setClasstoggle)하도록 함 */
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
  // Scene이란, ScrollMagic이라는 자바스크립트 라이브러리를 통해 특정한 요소를 감시하는 옵션을 지정하는 매소드
  // setClassToggle()란, Html의 클래스 속성을 넣었다 뺐다 제어할 수 있도록 함
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//2022