<template>
  <div class="">
    <div v-if="activeVer == 0">
      <div class="c-d">
        <p class="c-t">1,视频部分</p>
        <p class="c-p">列表http://域名/api.php/provide/vod/?ac=list</p>
        <p class="c-p">
          详情http://域名/api.php/provide/vod/?ac=detail
        </p>
        <p class="c-p">同样支持老板xml格式的数据</p>
        <p class="c-p">列表api.php/provide/vod/at/xml/?ac=list</p>
        <p class="c-p">详情api.php/provide/vod/at/xml/?ac=detail</p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">2,文章部分</p>
        <p class="c-p">列表http://域名/api.php/provide/art/?ac=list</p>
        <p class="c-p">
          详情http://域名/api.php/provide/art/?ac=detail
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">3,演员部分</p>
        <p class="c-p">
          列表http://域名/api.php/provide/actor/?ac=list
        </p>
        <p class="c-p">
          详情http://域名/api.php/provide/actor/?ac=detail
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">4,角色部分</p>
        <p class="c-p">列表http://域名/api.php/provide/role/?ac=list</p>
        <p class="c-p">
          详情http://域名/api.php/provide/role/?ac=detail
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">5,网址部分</p>
        <p class="c-p">
          列表http://域名/api.php/provide/website/?ac=list
        </p>
        <p class="c-p">
          详情http://域名/api.php/provide/website/?ac=detail
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">列表数据格式：</p>
        <p class="c-p">
          {"code":1,"msg":"数据列表","page":1,"pagecount":1,"limit":"20","total":15,"list":[{"vod_id":21,"vod_name":"情剑","type_id":6,"type_name":"动作片","vod_en":"qingjian","vod_time":"2018-03-29
          20:50:19","vod_remarks":"超清","vod_play_from":"youku"},{"vod_id":20,"vod_name":"暴力街区","type_id":6,"type_name":"动作片","vod_en":"baolijiequ","vod_time":"2018-03-27
          21:17:52","vod_remarks":"超清","vod_play_from":"youku"},{"vod_id":19,"vod_name":"超凡蜘蛛侠2","type_id":6,"type_name":"动作片","vod_en":"chaofanzhizhuxia2","vod_time":"2018-03-27
          21:17:51","vod_remarks":"高清","vod_play_from":"youku"},{"vod_id":18,"vod_name":"木星上行","type_id":6,"type_name":"动作片","vod_en":"muxingshangxing","vod_time":"2018-03-27
          21:17:37","vod_remarks":"高清","vod_play_from":"youku"},{"vod_id":15,"vod_name":"英雄本色2018","type_id":6,"type_name":"动作片","vod_en":"yingxiongbense2018","vod_time":"2018-03-22
          16:09:17","vod_remarks":"高清","vod_play_from":"qiyi,sinahd"},{"vod_id":13,"vod_name":"飘香剑雨","type_id":8,"type_name":"爱情片","vod_en":"piaoxiangjianyu","vod_time":"2018-03-21
          20:37:52","vod_remarks":"全36集","vod_play_from":"youku,qiyi"},{"vod_id":14,"vod_name":"怪谈之魅影惊魂","type_id":8,"type_name":"爱情片","vod_en":"guaitanzhimeiyingjinghun","vod_time":"2018-03-20
          21:32:27","vod_remarks":"高清","vod_play_from":"qiyi"},{"vod_id":12,"vod_name":"桃李劫","type_id":8,"type_name":"爱情片","vod_en":"taolijie","vod_time":"2018-03-20
          21:32:26","vod_remarks":"高清","vod_play_from":"mgtv,pptv"},{"vod_id":9,"vod_name":"胡杨的夏天","type_id":7,"type_name":"喜剧片","vod_en":"huyangdexiatian","vod_time":"2018-03-20
          21:32:00","vod_remarks":"高清","vod_play_from":"27pan,mgtv,qiyi,qq,youku"},{"vod_id":10,"vod_name":"宝贝特攻","type_id":7,"type_name":"喜剧片","vod_en":"baobeitegong","vod_time":"2018-03-20
          21:32:00","vod_remarks":"高清","vod_play_from":"mgtv,qiyi,qq,youku"},{"vod_id":11,"vod_name":"午夜劫案","type_id":7,"type_name":"喜剧片","vod_en":"wuyejiean","vod_time":"2018-03-20
          21:32:00","vod_remarks":"高清","vod_play_from":"qiyi"},{"vod_id":6,"vod_name":"密战","type_id":6,"type_name":"动作片","vod_en":"mizhan","vod_time":"2018-03-20
          21:31:41","vod_remarks":"全30集","vod_play_from":"mgtv,youku,27pan,qiyi,qq,pptv"},{"vod_id":7,"vod_name":"黑道老师","type_id":6,"type_name":"动作片","vod_en":"heidaolaoshi","vod_time":"2018-03-20
          21:31:41","vod_remarks":"高清","vod_play_from":"sohu,pptv"},{"vod_id":8,"vod_name":"跃影江湖之森罗万象","type_id":6,"type_name":"动作片","vod_en":"yueyingjianghuzhisenluowanxiang","vod_time":"2018-03-20
          21:31:41","vod_remarks":"高清","vod_play_from":"qq"},{"vod_id":4,"vod_name":"我的青春遇见你","type_id":13,"type_name":"国产剧","vod_en":"wodeqingchunyujianni","vod_time":"2018-03-20
          19:26:54","vod_remarks":"56集全","vod_play_from":"youku,xigua"}],"class":[{"type_id":1,"type_name":"电影"},{"type_id":2,"type_name":"连续剧"},{"type_id":3,"type_name":"综艺"},{"type_id":4,"type_name":"动漫"},{"type_id":5,"type_name":"资讯"},{"type_id":6,"type_name":"动作片"},{"type_id":7,"type_name":"喜剧片"},{"type_id":8,"type_name":"爱情片"},{"type_id":9,"type_name":"科幻片"},{"type_id":10,"type_name":"恐怖片"},{"type_id":11,"type_name":"剧情片"},{"type_id":12,"type_name":"战争片"},{"type_id":13,"type_name":"国产剧"},{"type_id":14,"type_name":"港台剧"},{"type_id":15,"type_name":"日韩剧"},{"type_id":16,"type_name":"欧美剧"},{"type_id":17,"type_name":"公告"},{"type_id":18,"type_name":"头条"}]}
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">列表接收参数：</p>
        <p class="c-p">ac=list</p>
        <p class="c-p">t=类别ID</p>
        <p class="c-p">pg=页码</p>
        <p class="c-p">wd=搜索关键字</p>
        <p class="c-p">h=几小时内的数据</p>
        <p class="c-p">
          例如： http://域名/api.php/provide/vod/?ac=list&t=1&pg=5 分类ID为1的列表数据第5页
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">内容数据格式：</p>
        <p class="c-p">
          {"code":1,"msg":"数据列表","page":1,"pagecount":1,"limit":"20","total":1,"list":[{"vod_id":21,"vod_name":"情剑","type_id":6,"type_name":"动作片","vod_en":"qingjian","vod_time":"2018-03-29
          20:50:19","vod_remarks":"超清","vod_play_from":"youku","vod_pic":"https:\/\/img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2259384068.jpg","vod_area":"大陆","vod_lang":"国语","vod_year":"2018","vod_serial":"0","vod_actor":"谢霆锋,钟欣潼,乔振宇,伊能静,谭耀文,赵鸿飞,周莉","vod_director":"陈咏歌","vod_content":"<p
          style=\"margin: 5px 12px; padding: 0px; color: rgb(24, 55, 120); font-family: Verdana, Arial, Helvetica,
          sans-serif;\">一位手执名剑“长光”的年轻剑客（谢霆锋
          饰）只为完成师父生前的遗愿——找到古代中原留下的九大旷世名剑，从北方蓬莱来到中原。而此前早已归顺朝廷的山东武林盟主、青萍剑客白三空（计春华
          饰）利用与年轻剑客的比武诈死，成为朝廷埋藏在武林中的黑手。白三空的外孙方宝玉（乔振宇
          饰）从小被外公禁止接触武功，然而为了替外公报仇，为了武林的正义，跟随“天下第一剑”紫衣候（谭耀文
          饰）学武，誓要杀死蓬莱剑客。生命攸关的时刻，蓬莱剑客结识了黄河狂侠王巅之女珠儿（钟欣潼
          饰），并且渐生情愫，方宝玉与紫衣候养女奔月（杨蕊 饰）两人也爱得难舍难分。青木堡少堡主木郎神君（赵鸿飞
          饰）的朝廷锦衣卫身份终于暴露，朝廷意欲借武林中人控制武林，寻找罗雅古城宝藏的目的彻底呈现出来。&nbsp;<\/p><p style=\"margin: 5px
          12px; padding: 0px; color: rgb(24, 55, 120); font-family: Verdana, Arial, Helvetica,
          sans-serif;\">　　一场武林浩劫正在上演，每一个人的立场都真相大白。在纷争中发现对方竟是同母异父亲兄亲的蓬莱剑客和宝玉决定联手对付木郎神君，然而木郎神君已经炼成了混元神功，就在那千钧一发时刻，木郎神君死在了心爱的女人——脱尘郡主（伊能静
          饰）的剑下，纷争也随之结束……<\/p><p style=\"text-align: center; margin: 5px 12px; padding: 0px; color: rgb(24, 55, 120);
          font-family: Verdana, Arial, Helvetica, sans-serif;\"><img
          src=\"http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/1.jpg\" alt=\"\"\/> <img
          src=\"http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/2.jpg\" alt=\"\"\/> <img
          src=\"http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/3.jpg\" alt=\"\"\/>
          <\/p>","vod_play_url":"正片$http:\/\/v.youku.com\/v_show\/id_XMTM0NTczNDExMg==.html"}]}
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">内容接收参数：</p>
        <p class="c-p">参数 ids=数据ID，多个ID逗号分割。</p>
        <p class="c-p">t=类型ID</p>
        <p class="c-p">pg=页码</p>
        <p class="c-p">h=几小时内的数据</p>
        <p class="c-p">
          例如: http://域名/api.php/provide/vod/?ac=detail&ids=123,567 获取ID为123和567的数据信息
        </p>
        <p class="c-p">
          http://域名/api.php/provide/vod/?ac=detail&h=24 获取24小时内更新数据信息
        </p>
      </div>
    </div>
    <div v-if="activeVer == 1">
      <div class="c-d">
        <p class="c-p">
          api接口仅供提供数据，可以直接在苹果CMS后台联盟采集中加入-并提供给他人采集。
        </p>
        <p class="c-p">
          联盟资源分配唯一标识ID，用来区别绑定分类，这个ID一般由苹果CMS官方提供，不可随意修改设置，否则造成入库分类错乱。
        </p>
      </div>
      <div class="c-d">
        <p class="c-t">列表数据格式：</p>
        <p class="c-p">{{ dataFormat }}</p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">列表接收参数：</p>
        <p class="c-p">ac=list</p>
        <p class="c-p">t=类别ID</p>
        <p class="c-p">pg=页码</p>
        <p class="c-p">wd=搜索关键字</p>
        <p class="c-p">h=几小时内的数据</p>
        <p class="c-p">
          例如： api.php?ac=list&t=1&pg=5 分类ID为1的列表数据第5页
        </p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">内容数据格式：</p>
        <p class="c-p">{{ innerFormat }}</p>
      </div>
      <div class="c-d mt40">
        <p class="c-t">内容接收参数</p>
        <p class="c-p">ac=videolist 采集数据</p>
        <p class="c-p">参数 ids=数据ID，多个ID逗号分割。</p>
        <p class="c-p">t=类型ID</p>
        <p class="c-p">pg=页码</p>
        <p class="c-p">h=几小时内的数据</p>
        <p class="c-p">
          例如: api.php?ac=videolist&ids=123,567 获取ID为123和567的数据信息
        </p>
        <p class="c-p">
          api.php?ac=videolist&h=24 获取24小时内更新数据信息
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    activeVer: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
