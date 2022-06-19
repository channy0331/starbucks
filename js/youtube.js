      // https://developers.google.com/youtube/iframe_api_reference?hl=ko 구글-youtube iframe api 검색 참조
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8',
          // 유튜브 주소 뒷부분에 유튜브의 아이디부분만 필요함
          // videoId란, 최초 재생할 유튜브 영상의 ID
          // 영상 우클릭 소스복사를 하면 재생은 가능하지만, 제어가 불가능함 (자동 재생, 반복 재생, 음소거 등)
          playerVars: {
            autoplay:true, //자동 재생 유무
            loop:true, //반복 재생 유무
            playlist: 'An6LvWQuj_8', //반복 재생할 유튜브 영상 ID목록
          }, //https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters 다양한 플레이어 매개변수 참고
          events: {
            onReady:function(event){
              event.target.mute() //음소거가 기본적으로 들어가야 함 (영상이 준비 되면, event함수가 자동으로 실행 되게 함)
            }
          }          
        });
      }