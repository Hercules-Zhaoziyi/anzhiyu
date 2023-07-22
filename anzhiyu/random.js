var posts=["2023/07/06/uncategorized/totime/","2021/06/18/uncategorized/guanyu/","2023/07/11/uncategorized/time-mail/","2021/08/14/reprint/themes/","2021/11/29/reprint/esp8266/","2021/08/14/share/website/","2023/01/18/html/xckjlb/","2023/06/01/uncategorized/study/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"葱苓","hundredSuffix":"","link":"https://blog.itciraos.cn","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do","siteshot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.webp"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱"},{"name":"葱苓","hundredSuffix":"","link":"https://blog.itciraos.cn","avatar":"https://gcore.jsdelivr.net/gh/ciraos/ciraos-static@main/img/2022-12-30-23-26-12.webp","descr":"Dare && Do"},{"name":"Kindle deep","hundredSuffix":"","link":"https://kindle-deep.github.io/","avatar":"https://s-sh-3436-knlde.oss.dogecdn.com/mine/avatar.png","descr":"开源改变世界"},{"name":"小染笔记","hundredSuffix":"","link":"https://xrss.cc","avatar":"https://clouds.totime.cn/2023/02/20230216093653176.jpg","descr":"遇见即是上上签."},{"name":"竹山一叶","hundredSuffix":"","link":"https://zsyyblog.com","avatar":"https://img.zsyyblog.com/favicon.jpg","descr":"来了就不想走的小家"}];
    var refreshNum = 1;
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