var posts=["posts/a1e8a28a.html","posts/26085cd3.html","posts/26f85308.html","posts/26899d4f.html","posts/2848558a.html","posts/dc5e24b.html","posts/63c968f8.html","posts/60f3e884.html","posts/1d9f6f5b.html","posts/18c784a3.html","posts/de7f0b92.html","posts/9c9d8f45.html","posts/117143e8.html","posts/21112f40.html","posts/f7b7688c.html","posts/8d6987bf.html","posts/b4cf8c77.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"葱苓","hundredSuffix":"","link":"https://blog.itciraos.cn","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do","siteshot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.webp"},{"name":"小植同学","hundredSuffix":"","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"https://xiaoztx.top/xiaozhi-blog-static/img/xiaoztx-web.png","descr":"生生不息，好运不止"},{"name":"青桔气球","hundredSuffix":"","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"},{"name":"葱苓","hundredSuffix":"","link":"https://blog.itciraos.cn","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do"},{"name":"Kindle deep","hundredSuffix":"","link":"https://kindle-deep.github.io/","avatar":"https://s-sh-3436-knlde.oss.dogecdn.com/mine/avatar.png","descr":"开源改变世界"},{"name":"小染笔记","hundredSuffix":"","link":"https://xrss.cc","avatar":"https://clouds.totime.cn/2023/02/20230216093653176.jpg","descr":"遇见即是上上签."},{"name":"竹山一叶","hundredSuffix":"","link":"https://zsyyblog.com","avatar":"https://img.zsyyblog.com/favicon.jpg","descr":"来了就不想走的小家"},{"name":"小植同学","hundredSuffix":"","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","descr":"生生不息，好运不止"},{"name":"青桔气球","hundredSuffix":"","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活"},{"name":"柠萌の部落","hundredSuffix":"","link":"https://www.lemonbuluo.eu.org","avatar":"https://www.lemonbuluo.eu.org/img/lemonsuka.webp","descr":"一个闲聊萌新动漫技术交流站"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };