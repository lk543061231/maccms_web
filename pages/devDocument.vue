<template>
  <div class="pt-118 page-wrap">
    <commonHead />
    <div class="dev-container">
      <div class="left">
        <div class="l-top">
          <div class="lt-t">{{ activeVer }}版</div>
          <el-popover placement="bottom-end" width="150" trigger="hover">
            <div class="app-wrap">
              <p
                class="app-item"
                @click="selectVer(item)"
                v-for="(item, index) in verList"
                :key="index"
              >
                {{ item }}
              </p>
            </div>
            <img
              slot="reference"
              src="~/assets/images/devDocument/dev-1.png"
              class="d1-img"
            />
          </el-popover>
        </div>
        <div class="l-list">
          <div
            class="nav-item"
            v-for="(item, index) in navList"
            :key="index"
            :class="activeNav == index && 'activeNav'"
            @click="selectNav(item, index)"
          >
            <img v-if="activeNav == index" class="nav-img" :src="item.aimg" />
            <img v-else class="nav-img" :src="item.img" />
            <div class="nav-tit">
              <p class="zh-t">{{ item.zhTitle }}</p>
              <p class="en-t">{{ item.enTitle }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div v-if="activeVer == 'v10'">
            <div v-if="activeNav == 0">
              <div class="c-d">
                <p class="c-t">开始使用-入门指南</p>
                <p class="c-p">
                  苹果CMS程序是一套采用PHP+MYSQL环境下运行的完善而强大的快速建站系统。
                  经过近多年的开发经验和技术积累，苹果CMS程序已逐步走向成熟，在易用性和功能上已经成为同行中的佼佼者。
                  程序体积小->优化程序代码，运行速度快->高效的缓存处理，只要普通的虚拟主机就可以完美搭建起来，建站成本非常低。仿MVC模板分离，内置标签，自定义函数标签接口，强大的自定义采集功能，只要你会HTML就可以轻松做出个性化的网站。
                  程序易用性和功能上一直以来都积极采纳广大站长提出的各种好的建议，迅速响应各种紧急问题，我们的服务理念贯穿其中，保证每一位站长每一个环节都可以从容应对。
                </p>
                <p class="c-p">
                  v10采用tp5.x内核进行开发，扩展了模板处理引擎，将后台程序与html模板简单的分离出来，让设计人员与程序人员最大限度的发挥自己的优势而互不干扰，大大加快了项目有序、快速的完成。
                  即使您是第一次接触，也会在最短的时间内熟练掌握它的使用方法。后台管理模块，一目了然，操作简单，绝对不会让您眼花缭乱。
                </p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">著作权登记</p>
                <p class="c-p">
                  苹果CMS官方已经申请了软件著作权，受国家计算机软件著作权保护，请勿非法盗版篡改，否则将承担相应的法律制裁！
                </p>
                <p class="c-p">著作权登记号码：2018SR947830</p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">兼容性和面向场景</p>
                <p class="c-p">
                  1、Windows 平台： IIS/Apache + PHP(5.6 +) + MySQL(5.5 +)
                </p>
                <p class="c-p">
                  2、Linux/Unix 平台： Apache + PHP (5.6 +) + MySQL(5.5 +)
                  (PHP必须在非安全模式下运行)
                </p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">获得 苹果CMS v10</p>
                <p class="c-p">
                  你可以在我们的 官网首页 下载到 苹果CMS
                  的最新版，它经过了自动化构建，更适合用于生产环境。目录结构如下：
                </p>
                <p class="c-p">
                  2、Linux/Unix 平台： Apache + PHP (5.6 +) + MySQL(5.5 +)
                  (PHP必须在非安全模式下运行)
                </p>
              </div>
            </div>

            <div v-if="activeNav == 1">
              <div class="c-d">
                <p class="c-t">常见问题</p>
                <p class="c-p">
                  本篇将主要讲解使用过程中普遍遇到的“问题”，这些问题并非是BUG，通常是需要我们自己去注意的一些点。（会结合用户反馈持续补充）
                </p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">快速安装</p>
                <p class="c-p">
                  获得 苹果CMS
                  后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。
                </p>
                <p class="c-p">
                  输入事先准备好的mysql数据库账户密码，即可一键安装。
                </p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">常见疑问</p>
                <p class="c-p">
                  1，由于采用最新的TP框架，所以php版本建议5.6以上，上传文件时需要开启fileinfo支持库，php.ini里
                  extension=php_fileinfo.dll ；宝塔等面板里直接安装开启 。
                </p>
                <p class="c-p">
                  2，如果使用的是php5.6版本（php7版本不受影响），还需要设置php.ini开启always_populate_raw_post_data
                  = -1 这个选项，也就是去掉这项配置前面的分号即可。
                </p>
                <p class="c-p">
                  3，运行安装页面出现空白页面，该情况一般为Runtime目录没有修改写入权限**
                </p>
                <p class="c-p">
                  4，SQLSTATE[22001]: String data, right truncated: 1406 Data
                  too long for column '' at row 1 或者 Warning: 1265 Data
                  truncated for column 类似错误**
                </p>
                <p class="c-p">
                  RE:############################################
                </p>
              </div>
            </div>

            <div v-if="activeNav == 3">
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
                  例如： http://域名/api.php/provide/vod/?ac=list&t=1&pg=5
                  分类ID为1的列表数据第5页
                </p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">内容数据格式：</p>
                <p class="c-p">
                  {"code":1,"msg":"数据列表","page":1,"pagecount":1,"limit":"20","total":1,"list":[{"vod_id":21,"vod_name":"情剑","type_id":6,"type_name":"动作片","vod_en":"qingjian","vod_time":"2018-03-29
                  20:50:19","vod_remarks":"超清","vod_play_from":"youku","vod_pic":"https:\/\/img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2259384068.jpg","vod_area":"大陆","vod_lang":"国语","vod_year":"2018","vod_serial":"0","vod_actor":"谢霆锋,钟欣潼,乔振宇,伊能静,谭耀文,赵鸿飞,周莉","vod_director":"陈咏歌","vod_content":"<p
                  style=\"margin: 5px 12px; padding: 0px; color: rgb(24, 55,
                  120); font-family: Verdana, Arial, Helvetica,
                  sans-serif;\">一位手执名剑“长光”的年轻剑客（谢霆锋
                  饰）只为完成师父生前的遗愿——找到古代中原留下的九大旷世名剑，从北方蓬莱来到中原。而此前早已归顺朝廷的山东武林盟主、青萍剑客白三空（计春华
                  饰）利用与年轻剑客的比武诈死，成为朝廷埋藏在武林中的黑手。白三空的外孙方宝玉（乔振宇
                  饰）从小被外公禁止接触武功，然而为了替外公报仇，为了武林的正义，跟随“天下第一剑”紫衣候（谭耀文
                  饰）学武，誓要杀死蓬莱剑客。生命攸关的时刻，蓬莱剑客结识了黄河狂侠王巅之女珠儿（钟欣潼
                  饰），并且渐生情愫，方宝玉与紫衣候养女奔月（杨蕊
                  饰）两人也爱得难舍难分。青木堡少堡主木郎神君（赵鸿飞
                  饰）的朝廷锦衣卫身份终于暴露，朝廷意欲借武林中人控制武林，寻找罗雅古城宝藏的目的彻底呈现出来。&nbsp;<\/p><p
                  style=\"margin: 5px 12px; padding: 0px; color: rgb(24, 55,
                  120); font-family: Verdana, Arial, Helvetica,
                  sans-serif;\">　　一场武林浩劫正在上演，每一个人的立场都真相大白。在纷争中发现对方竟是同母异父亲兄亲的蓬莱剑客和宝玉决定联手对付木郎神君，然而木郎神君已经炼成了混元神功，就在那千钧一发时刻，木郎神君死在了心爱的女人——脱尘郡主（伊能静
                  饰）的剑下，纷争也随之结束……<\/p><p style=\"text-align:
                  center; margin: 5px 12px; padding: 0px; color: rgb(24, 55,
                  120); font-family: Verdana, Arial, Helvetica,
                  sans-serif;\"><img
                  src=\"http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/1.jpg\"
                  alt=\"\"\/> <img
                  src=\"http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/2.jpg\"
                  alt=\"\"\/> <img
                  src=\"http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/3.jpg\"
                  alt=\"\"\/>
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
                  例如: http://域名/api.php/provide/vod/?ac=detail&ids=123,567
                  获取ID为123和567的数据信息
                </p>
                <p class="c-p">
                  http://域名/api.php/provide/vod/?ac=detail&h=24
                  获取24小时内更新数据信息
                </p>
              </div>
            </div>

            <div v-if="activeNav == 4">
              <div class="c-d">
                <p class="c-t">更新日志</p>
                <p class="c-p" style="margin-top: 30px">
                  <el-timeline>
                    <el-timeline-item
                      :timestamp="item.timestamp"
                      placement="top"
                      v-for="(item, i) of logList"
                      :key="i"
                    >
                      <template v-if="item.type == 'single'">
                        <p>{{ item.inner }}</p>
                      </template>
                      <template v-else>
                        <p v-for="(sitem, si) of item.list" :key="si">
                          {{ sitem }}
                        </p>
                      </template>
                    </el-timeline-item>
                  </el-timeline>
                </p>
              </div>
            </div>
          </div>
          <div v-if="activeVer == 'v8'">
            <div v-if="activeNav == 3">
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
                <p class="c-p">{{dataFormat}}</p>
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
                <p class="c-p">{{innerFormat}}</p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">内容接收参数</p>
                <p class="c-p">ac=videolist 采集数据</p>
                <p class="c-p">参数 ids=数据ID，多个ID逗号分割。</p>
                <p class="c-p">t=类型ID</p>
                <p class="c-p">pg=页码</p>
                <p class="c-p">h=几小时内的数据</p>
                <p class="c-p">
                  例如: api.php?ac=videolist&ids=123,567
                  获取ID为123和567的数据信息
                </p>
                <p class="c-p">
                  api.php?ac=videolist&h=24 获取24小时内更新数据信息
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <commonFoot />
  </div>
</template>

<script>
import commonHead from "@/components/common/commonHead.vue";
import commonFoot from "@/components/common/commonFoot.vue";
export default {
  components: {
    commonHead,
    commonFoot,
  },
  data() {
    return {
      activeVer: "v10",
      verList: ["Pro", "v10", "v8"],
      navList: [
        {
          img: require("@/assets/images/devDocument/dev-5.png"),
          aimg: require("@/assets/images/devDocument/dev-5-a.png"),
          imgIndex: 5,
          zhTitle: "开始使用",
          enTitle: "Getting Started",
        },
        {
          img: require("@/assets/images/devDocument/dev-4.png"),
          aimg: require("@/assets/images/devDocument/dev-4-a.png"),
          imgIndex: 4,
          zhTitle: "常见问题",
          enTitle: "FAQ",
        },
        {
          img: require("@/assets/images/devDocument/dev-3.png"),
          aimg: require("@/assets/images/devDocument/dev-3-a.png"),
          imgIndex: 3,
          zhTitle: "模板标签",
          enTitle: "TempLate",
        },
        {
          img: require("@/assets/images/devDocument/dev-2.png"),
          aimg: require("@/assets/images/devDocument/dev-2-a.png"),
          imgIndex: 2,
          zhTitle: "API文档",
          enTitle: "API documentation",
        },
        {
          img: require("@/assets/images/devDocument/dev-6.png"),
          aimg: require("@/assets/images/devDocument/dev-6-a.png"),
          imgIndex: 5,
          zhTitle: "更新日志",
          enTitle: "Change Log",
        },
      ],
      logList: [
        {
          timestamp: "2020.1000.1060",
          type: "multiple",
          list: [
            "1，修复生成下载页的问题。",
            "2，修复过滤分集剧情html的问题。",
            "3，修复播放器导入跨站攻击的问题。",
            "4，防止上传后门关闭应用中心上传本地插件功能。",
            "5，优化后台登录验证。",
            "6，修复同步图片显示链接的问题。",
            "7，修复后台管理留言搜索的问题。",
            "8，修复词库随机插入语句的问题。",
            "9，修复发送邮件问题。",
            "10，用户中心上传头像支持base64编码方式参数名imgdata。",
            "11，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1051",
          type: "multiple",
          list: [
            "1，后台+安装界面提示信息支持多简繁体切换。",
            "2，请参考多语言说明文档可自定义显示信息。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1042",
          type: "multiple",
          list: [
            "1，新增数据库挂马检测功能。",
            "2，新增评论入库接口。",
            "3，角色入库接口支持豆瓣id对应视频。",
            "4，定时任务可以强制执行。",
            "5，支持自定义404页面模板。",
            "6，后台主要操作内容加入token限制，防止跨站攻击。",
            "7，模板编辑保存禁止出现更多关键字。",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1039",
          type: "multiple",
          list: [
            "1，新增数据库挂马检测功能。",
            "2，新增评论入库接口。",
            "3，角色入库接口支持豆瓣id对应视频。",
            "4，定时任务可以强制执行。",
            "5，支持自定义404页面模板。",
            "6，后台主要操作内容加入token限制，防止跨站攻击。",
            "7，模板编辑保存禁止出现更多关键字。",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1035",
          type: "multiple",
          list: [
            "1，优化后台数据选择父分类筛选的问题。",
            "2，分离分集剧情编辑且支持富文本。",
            "3，邮件配置新增协议选项。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1034",
          type: "multiple",
          list: [
            "1，修复站群和wap站点冲突的问题。",
            "2，修复批量操作的问题。",
            "3，修复ajax接口搜索开关问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1033",
          type: "multiple",
          list: [
            "1，修复url推送跳页问题。",
            "2，MacPlayer对象新增Id属性表示当前数据ID。",
            "3，修复默认上传提示未找到类库问题，",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1032",
          type: "multiple",
          list: [
            "1，插件化富文本编辑器功能，方便第三方整合。",
            "2，修复url推送默认显示配置项问题。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1031",
          type: "multiple",
          list: [
            "1，视频批量管理新增版权设置。",
            "2，修复自定义规则自定义字段的问题。",
            "3，修复文章密码查看的问题。",
            "4，插件化url推送功能，方便第三方开发。",
            "5，插件化email发送功能，方便第三方开发。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1029",
          type: "multiple",
          list: [
            "1，修复入库接口随机插入语句的问题。",
            "2，新增站群配置功能。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1027",
          type: "multiple",
          list: [
            "1，修复静态页获取不到vod_plot_list的问题。",
            "2，修复后台编辑模板可写入{php}tp可执行php代码的问题。",
            "3，修复缓存控制问题和非file缓存时多站共用缓存错乱的问题。",
            "4，修复静态生成问题。",
            "5，修复权限验证问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1025",
          type: "multiple",
          list: [
            "1，修复评论点顶踩的问题。",
            "2，入库接口中未整合播放下载器类型的数据地址不再入库,并且原来入库的编辑时也不会显示。",
            "3，公共js文件Macplayer新增Sid，Nid两个变量。",
            "4，优化对php7.4的支持。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1024",
          type: "multiple",
          list: [
            "1，上传支持jpeg后缀。",
            "2，修复定时推送网址提示信息。",
            "3，修复缓存时间的问题。",
            "4，优化后台显示样式兼容手机端。",
            "5，网址导航来路统计记录及查看分析。",
            "6，修复前台权限验证的问题。",
            "7，其他细节",
          ],
        },
        {
          timestamp: "2020.1000.1023",
          type: "multiple",
          list: [
            "1，项目库内不再包含转换数据的插件。",
            "2，新增加阿里巴巴、优启梦图图床插件。",
            "3，接口支持subname副标题入库。",
            "4，修复测试缓存组件连接的问题。",
            "5，修复视频配置独立播放页、下载页模板的问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1022",
          type: "multiple",
          list: [
            "1，修复网址反链检测问题。",
            "2，提高后台编辑模板安全性禁止写入php代码。",
            "3，优化后台部分数据管理列表防止xss。",
            "5，修复演员和网址导航模块的权限控制和判断。",
            "6，优化一下默认模板。",
            "7，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1021",
          type: "multiple",
          list: [
            "1，推送加入网址导航模块内容。",
            "2，修复角色同名演员入库问题。",
            "3，修改完整包默认模板首页为帮助提示信息。",
            "4，修复网址导航模块详情页功能。",
            "5，修复邮件发送内容重复名称的问题。",
            "6，优化用户日志接口新增mid和id参数方便调用数据。",
            "7，用户中心可以修改昵称啦字段user_nick_name需修改用户中心模板~~",
            "8，修复ajax接口网址模块的点击量更新、联想搜索、顶踩、评分、接口的问题。",
            "9，修复标签获取网址导航数据量的问题。",
            "10，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1020",
          type: "multiple",
          list: [
            "1，优化详情内容图片链接分析改变的问题。",
            "2，优化友情连接和网址导航的检测反链问题。",
            "3，修复上次更新造成wap端后台错位问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2020.1000.1019",
          type: "multiple",
          list: [
            "1，新增分类类型演员和网址导航模块。",
            "2，新增加网址导航模块管理内容及接口。",
            "3，新增演员表分类id、tag、扩展分类等字段。",
            "4，新增api开放接口和入库接口类型支持剧情和网址。",
            "5，新增网址导航火车头入库模块。",
            "6，优化安装操作可选是否创建演示分类数据。",
            "7，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1018",
          type: "multiple",
          list: [
            "1，修复后台已知csrf和xss等可能遇到的问题。",
            "2，修复后台图片管理科夸目录删除文件的问题。",
            "3，修复后台模板管理可创建php文件的问题。",
            "4，修复后台管理员管理可删除自己的问题。",
            "5，修复试看时刷新页面直接能播放的问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1017",
          type: "multiple",
          list: [
            "1，新增分类图标、分类封面、分类跳转url等字段。",
            "2，修复演员库收藏点问题。",
            "3，修复用户注册时邮箱手机号可以重复的问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1016",
          type: "multiple",
          list: [
            "1，修复后台视频管理中角色显示全部的问题。",
            "2，新增剧情模块的mid和aid数值，方便在模版里判断。",
            "3，新增{$maccms.controller_action}标签，更方便的在模版里判断当前页面访问路径。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1015",
          type: "single",
          inner: "修复上次更新造成采集报错的问题。",
        },
        {
          timestamp: "2019.1000.1014",
          type: "single",
          inner: "其他细节。",
        },
        {
          timestamp: "2019.1000.1013",
          type: "single",
          inner: "其他细节。",
        },
        {
          timestamp: "2019.1000.1012",
          type: "multiple",
          list: [
            "1，新增明星收藏ulog_mid=8，可方便的在用户中心里调用该明星的数据。",
            "2，用户中心新增ulog页面可传入page、limit、mid和type参数筛选数据。",
            "3，修改用户组分类权限字段为text类型，避免分类过多保存不完整的问题。",
            "4，修复自动生成tag的问题。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1011",
          type: "multiple",
          list: [
            "1，自定义资源新增数据操作、地址类型过滤等选项。可方便的控制某个资源只更新入库不新增入库；",
            "2，多组播放器只入库个别类型的资源。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1010",
          type: "multiple",
          list: [
            "1，后台新增seo信息配置可对视频、文章、明星、角色、剧情首页设置seo信息。",
            "2，修复插件配置tip提示信息显示问题。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2019.1000.1009",
          type: "multiple",
          list: [
            "1，修复开启页面缓存后评论留言本等ajax请求失败的问题。",
            "2，修复后台视频和文章管理批量移动分类父分类id不变的问题。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2019.00.00.1008",
          type: "multiple",
          list: [
            "1，新增微信QQ防红防封跳转提示和public/browser.html提示模板。",
            "2，修复分集剧情入库默认值的问题。",
            "3，新增标签$maccms.http_url获取当前网址。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2019.00.00.1007",
          type: "multiple",
          list: [
            "1，视频管理加入独立分集剧情部分、模板和标签项目。 ",
            "2，采集配置二次更新规则加入分集剧情。 ",
            "3，火车头模块加入分集剧情部分。 ",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2019.00.00.1006",
          type: "multiple",
          list: ["1，视频采集配置新增地址二更规则。 ", "2，其他细节"],
        },
        {
          timestamp: "2019.00.00.1005",
          type: "multiple",
          list: [
            "1，修复后台插件图片显示问题。 ",
            "2，修复默认模板购买使用积分提示参数错误的问题。",
            "3，修复后台上传视频返回路径的问题。 ",
            "4，修改后台添加会员隐藏上传按钮，编辑时可上传。 ",
            "5，加载系统播放器框架文件player.js,playerconfig.js时加入时间参数如?t=20190805。 ",
            "6，修复二级目录时后台显示前台页面链接错误的问题。 ",
            "7，新加入友情链接检测功能。 ",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2019.00.00.1004",
          type: "single",
          inner: "修复视频名称同义词库保存方式和只替换第一个词的问题。",
        },
        {
          timestamp: "2019.00.00.1003",
          type: "single",
          inner: "采集参数配置新增视频名称同义词替换，可有效减少重名数据",
        },
        {
          timestamp: "2019.00.00.1002",
          type: "multiple",
          list: [
            "1，修复静态生成{md5}参数的问题。 ",
            "2，优化多选项配置切换刷新页面依然选中最后选中项。",
          ],
        },
        {
          timestamp: "2019.00.00.1001",
          type: "multiple",
          list: [
            "1，修复https会员中心上传头像返回地址不对的问题。",
            "2，修复ip注册限制数量的问题。",
            "3，新增一键清理资源库绑定分类功能。",
            "4，视频采集配置二次规格新增总集数和完结状态。",
            "5，修复演员、角色独立模板不起作用的问题。",
            "6，修复采集配置关键词过滤的问题。",
            "7，后台积分日志删除报错的问题。",
            "8，后台专题内容推荐编辑时推荐默认选择的问题。",
            "9，上传视频文件后，前台使用会出现路径的问题。",
            "10，节目周期筛选支持模糊查询。",
            "11，优化by=rnd随机数据标签。",
            "12，播放器新增目标窗口target属性，方便在播放列表控制弹出还是当前页面。",
            "13，其他细节。",
          ],
        },
        {
          timestamp: "2019.03.06.1617",
          type: "multiple",
          list: [
            "1，修复微信公众号搜索乱码的问题。",
            "2，优化缓存文件处理。",
            "3，优化home.js里的MAC.Ulog.Get方法增加回调函数文档里增加说明。",
            "4，强化站外入库密码安全性判断最低16位起(火车头采集规则密码也要同步改)。",
            "5，由于api.php实现定时任务、站外入库等重要功能。可以修改文件名达到更好的安全效果。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2019.02.23.0850",
          type: "multiple",
          list: [
            "1，修复在线支付回调接口的问题。",
            "2，修复富文本上传图片显示的问题。",
            "3，修复七牛云存储上传的问题。",
            "4，联盟资源库绑定显示本地分类名字。",
            "5，修复联盟资源搜索框回车搜索的问题。",
            "6，新增会员注册IP和IP注册限制。",
            "7，新增视频幕后字段。",
            "8，视频管理列表增加版权、完结筛选项。",
            "9，修复远程图片地址显示的问题。",
            "10，其他细节。",
          ],
        },
        {
          timestamp: "2019.01.19.1001",
          type: "multiple",
          list: [
            "1，修复三级分销注册关联关系,升级会员组+积分消费分成。",
            "2，修复内容页密码验证提示参数错误的问题。",
            "3，优化支付、附件、短信、登录扩展方式，方便定制插件并且不影响程序升级。",
            "4，用户中心支付页面新增ext_list数据，返回可用支付类型，避免在模板里写死，方便制作模板。",
            "5，修复会员中心提现分页的问题。",
            "6，修复积分消费日志不记录的问题。",
            "7，静态生成分类页面增加调用父分类的{type_pid}{type_pen}。",
            "8，优化用户提现增加冻结资金，提现申请后进入冻结积分，删除或提现成功冻结积分变动。",
            "9，优化启用第三方存储后，后台富文本编辑器显示图片的问题。",
            "10，视频编辑地址的操作增加上传按钮，可上传种子、压缩包、文本、视频等文件。",
            "11，其他细节。",
          ],
        },
        {
          timestamp: "2019.0101.1001",
          type: "multiple",
          list: [
            "1，优化升级过程中数据库升级处理方法。",
            "2，视频和文章重名数据管理中增加一键删重可保留最小ID或最大ID数据。",
            "3，新增文章付款浏览。",
            "4，新增会员积分变动记录涉及到前台会员中心模板。",
            "5，新增会员积分提现功能涉及到后台配置+前台会员中心模板。",
            "6，新增会员三级分销功能涉及到后台配置+前台会员中心模板。",
            "7，新增文章内容页、视频内容页、播放页、下载页密码访问功能涉及到前台新增加的模板。",
            "8，邮件发送配置新增发件人昵称配置项。",
            "9，修复生成静态获取当前分类ID的问题，把全局变量MAC_TYPE_ID和MAC_TYPE_PID变量修改为$GLOBALS['type_id']和$GLOBALS['type_pid']。",
            "10，新增检测TP框架版本升级提示，避免有些时候大家不注意官方公告没有及时升级。",
            "11，新增视频版权提示和跳转配置，新增vod/copyright.html模板页面可控制跳转提示。",
            "12，新增分类数据转移到另一个分类的功能。",
            "13，修改删除分类时如果其下有数据则无法删除。",
            "14，修复图片水印位置不起作用的问题。",
            "15，新增网址推送定时任务类型。",
            "16，其他细节。",
          ],
        },
        {
          timestamp: "2018.12.13.2151",
          type: "multiple",
          list: [
            "1，重要TP框架安全更新到5.0.23版本,请手工升级。",
            "2，新增3种富文本编辑器,可在后台配置默认选择(umeditor,kindeditor,ckeditor)整合包需单独下载。",
            "3，home.js中新增短连接生成方法。",
            "4，api开放接口加入缓存处理,提高效率减轻负载。",
            "5，优化一些页面提示信息。",
            "6，修复多个账户重复绑定邮箱或手机号码时不自动解除之前绑定的问题。",
            "7，修复会员推广访问获取积分的问题。",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2018.12.05.0950",
          type: "multiple",
          list: [
            "1，最低版本支持php5.5.0。",
            "2，手动编辑视频和文章时新增是否自动生成tag选项。",
            "3，修复前台模板分页输入框某些情况下跳转的问题。",
            "4，修复上一集下一集变量的问题。",
            "5，修复添加专题时没有更新时间的问题。",
            "6，修复用户邮箱验证规则。",
            "7，优化分类管理名称增加链接并显示其下数据量。",
            "8，优化卡密导出选项，可导出最后一次、当天、一周、一月的。",
            "9，其他细节。",
          ],
        },
        {
          timestamp: "2018.11.18.0920",
          type: "multiple",
          list: [
            "1，修复微信支付二维码显示及回调处理。",
            "2，修复演员库和角色库同步图片。",
            "3，修复播放器序号大于1000时排序的问题。",
            "4，修复保存文章自动提取首图做为图片的问题。",
            "5，修复静态模式下模板中获取当前分类数据的问题。",
            "6，修复批量操作中的遇到问题。",
            "7，修复前台模板中没有public/jump模板时，后台某些操作提示模板不存在的问题。",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2018.10.31.1340",
          type: "multiple",
          list: [
            "1，优化api接口支持单独播放器输出。",
            "2，新增附件上传-新浪微博图床接口。",
            "3，新增用户推广访问得积分。",
            "4，新增伪静态路由配置演员ID和角色ID配置项同样支持拼音访问。",
            "5，新增{$maccms.http_type}标签，当前url访问协议，会返回 http:// 或者 https://。",
            "6，修复VIP会员登录状态保持时vip到期不会重置为普通会员的问题。",
            "7，优化导出卡密加入了字段表头和添加时间。",
            "8，优化各标签随机数据获取方法。",
            "9，其他细节。",
          ],
        },
        {
          timestamp: "2018.10.22.1200",
          type: "multiple",
          list: [
            "1，修复文章站外入库内容没变的情况下不更新的问题。",
            "2，修复后台登录次数的问题。",
            "3，修复定时生成分类时只生成第一个分类的问题。",
            "4，新增定时任务类型-清理缓存。",
            "5，站点配置行能优化新增搜索规则配置，可自定义默认搜索条件查询条件。",
            "6，站点配置预留参数新增自定义参数配置，可自己定义参数，模板里可调用。",
            "7，新增rss及sitemap支持生成多页。",
            "8，优化拼音生成去除符号，避免访问失败。",
            "9，减少微信接口输出条数，避免数量过多返回失败，另外新增返回搜索页面。",
            "10，优化ip获取方式，避免某些情况下登录失败。",
            "11，其他细节。",
          ],
        },
        {
          timestamp: "2018.10.13.1025",
          type: "multiple",
          list: [
            "1，修复文章站外入库二次更新的问题。",
            "2，修复hck支付回调更新订单的问题。",
            "3，修复部分环境下获取入口文件失败的问题。",
            "4，应对微信公共号最新规则，提供图文(1条)、文字(最多20条)两种返回方案，后台可配置。",
            "5，视频和文章的采集配置二次更新新增了一些选项。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2018.10.09.1333",
          type: "multiple",
          list: [
            "1，修复同步图片地址斜杠的问题。",
            "2，修复采集下载地址更新的问题。",
            "3，充值卡管理增加导出功能。",
            "4，优化站外入库接口返回信息不再转义汉字。",
            "5，优化后台禁止播放器前台模板里不显示该播放器组。",
            "6，新增站点配置网站和手机端logo上传，调用标签{$maccms.site_logo}、{$maccms.site_waplogo}。",
            "7，新增hck支付接口。",
            "8，优化角色入库接口，可选择入库重名判断规则，并修复配置项。",
            "9，优化视频和文章的关联数据，rel参数支持多关键字。",
            "10，修复生成全部内容页只生成第一个分类的问题。",
            "11，默认路由新增明星库筛选页actorshow和角色筛选页roleshow，需要的可参考。",
            "12，其他细节。",
          ],
        },
        {
          timestamp: "2018.09.28.0950",
          type: "multiple",
          list: [
            "1，新增自定义采集规则定时任务。",
            "2，优化url推送功能。",
            "3，优化actor标签新增starsign、blood参数。",
            "4，修复api接口分类过滤为空时的问题。",
            "5，优化上传路径每目录最多存储999个文件。",
            "6，采集参数配置新增扩展分类优化，默认过滤【片，剧】为空，可以关闭。",
            "7，新增用户注册邮箱验证。",
            "8，新增会员注册验证码、登录验证码开关。",
            "9，修复某些情况下浏览数据提示没有权限的问题。",
            "10，优化ck和dp播放器为iframe载入方式，防止错位(升级包内不提供)。",
            "11，新增采集参数配置：角色采集设置。",
            "12，新增开放api配置：演员API。",
            "13，新增自定义资源库：演员库类型。",
            "14，新增角色站外入库接口，火车头入库模块。",
            "15，其他细节。",
          ],
        },
        {
          timestamp: "2018.09.14.0850",
          type: "multiple",
          list: [
            "1，修复API接口数据按分类过滤的问题。",
            "2，新增标签comment、gbook自定义pageurl分页参数。",
            "3，新增标签comment、gbook的uid参数，可获取某个用户的数据。",
            "4，新增后台用户管理头像上传。",
            "5，优化后台视频管理播放器、下载器、服务器组按照序号排序。",
            "6，新增百度主动推送、百度熊掌号推送。",
            "7，优化获取头像方法判断头像存不存在返回默认地址。",
            "8，新增短信发送配置（内置腾讯云、阿里云短信发送）。",
            "9，新增用户注册、绑定、找回密码使用手机短信的方式；可在会员设置中开启。",
            "10，修复采集入库介绍随机插入文字的问题。",
            "11，其他细节。",
          ],
        },
        {
          timestamp: "2018.09.03.0920",
          type: "multiple",
          list: [
            "1，优化actor标签从视频传入name调用数据的排序。",
            "2，优化用户注册后将自动登录。",
            "3，优化动态模式伪静态模式下隐藏后缀也就是目录格式URL。",
            "4，修复后台会员订单管理筛选项。",
            "5，新增后台会员日志、会员订单批量删除和清空。",
            "6，修复模板中mac_url获取vod/show、art/show传入id不起作用的问题。",
            "7，优化会员升级vip会员组后无需重新登录即可享受权限。",
            "8，优化评论加载失败提示信息，无需刷新页面可重新加载。",
            "9，其他细节。",
          ],
        },
        {
          timestamp: "2018.08.25.1120",
          type: "single",
          inner: "1，紧急修复上个版本分类分页问题。",
        },
        {
          timestamp: "2018.08.24.1355",
          type: "multiple",
          list: [
            "1，修复首页分页链接跳转还是显示第一页内容的问题。",
            "2，修复视频重名管理筛选项不起作用的问题。",
            "3，修复视频文章筛选页面拼音id的问题。",
            "4，播放器配置新增宽度和高度配置支持px像素和%百分比设置，默认按100%。",
            "5，修复生成静态页面url目录格式的问题。",
            "6，优化采集入库主演、导演重名验证，满足名称重复后（只要其中1个演员或导演）就算是重复数据。",
            "7，所有maccms循环标签，支持offset、length、mod、empty等参数，使用方法参考tp5文档。",
            "8，站点配置新增后台登录验证码开关，可自定义。",
            "9，修复微信对接不支持https域名的问题。",
            "10，新增访问页面触发定时任务方案。",
            "11，修复后台留言本管理选择类型筛选报错的问题。",
            "12，修复后台一处删除任意文件的问题。",
            "13，修复文章管理中内容上移下移的问题。",
            "14，标签vod新增参数isend查询是否完结的数据。",
            "15，其他细节。",
          ],
        },
        {
          timestamp: "2018.08.14.0955",
          type: "multiple",
          list: [
            "1，修复分页按钮GO跳转的问题。",
            "2，修复会员推荐链接注册推广者无积分收入的问题。",
            "3，修复定时任务测试和执行跳过的问题。",
            "4，修复生成充值卡在某些mysql环境下报错的问题。",
            "5，修复自定义采集分类采规则导致提示分类跳过的问题。",
            "6，修复微信公共号接口关键字搜索返回空的问题。",
            "7，修复获取专题、明星库、角色库今日更新数量总数量的问题。",
            "8，修复安装sql脚本避免在某些mysql环境下安装失败的问题。",
            "9，其他细节。",
          ],
        },
        {
          timestamp: "2018.07.29.1010",
          type: "multiple",
          list: [
            "1，修复资源采集时未采集数据也会显示同步图片地址的问题。",
            "2，修复专题信息里的自动收录tag和id同时起作用。",
            "3，修复开放API条件筛选不起作用的问题。",
            "4，生成充值卡新增卡号和密码复杂程度选项。",
            "5，修复自带联想搜索插件第二次输入文字不起作用的问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2018.06.29.1425",
          type: "multiple",
          list: [
            "1，actor、art、role、vod标签pageurl参数支持自定义页面分页。",
            "2，调整rnd随机排序的缓存方式。",
            "3，修复生成文章当日数据无限循环的问题。",
            "4，新增分类扩展配置信息权限项，避免非 创始人管理员，添加数据时无法获取扩展信息的问题。",
            "5，后台视频筛选项新增地区、语言。",
            "6，修复后台站点设置保存后，邮件配置消失的问题。",
            "7，新增神马搜索Sitemap。",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2018.06.15.0910",
          type: "multiple",
          list: [
            "1，修复留言本xss脚本的问题。",
            "2，新增pathinfo分隔符设置可自定义非静态模式下访问url。",
            '3，actor标签新增name参数，可按名称调用明星信息(例如 name="刘德华,成龙")。',
            '4，role标签新增actor,name参数，可按名称调用角色信息(例如 name="花千骨,黑山老妖"; actor="葛优,范冰冰")。',
            "5，部分标签art,vod,actor,role,type,topic,link增加cachetime参数，可单独设置这一组标签的缓存时间(不设置默认按数据缓存时间)。",
            "6，新增so、sogou、bing的sitemap访问及生成。",
            "7，新增数据权限过滤设置，前台可隐藏没有权限的分类和数据。",
            "8，修复微信接口无数据时返回array的问题。",
            "9，用户中心已加入邮件找回密码。",
            "10，新增用户名注册关键字过滤功能。",
            "11，降低验证码识别难度。",
            "12，其他细节。",
          ],
        },
        {
          timestamp: "2018.06.12.1430",
          type: "multiple",
          list: [
            "1，修复发布评论的问题。",
            "2，修复积分购买点播记录的问题。",
            "3，调整优化路由处理。",
            "4，新增缓存标识、防止多站共用1个memcached或redis服务时混用的问题。",
            "5，后台专题、留言、评论加入分页。",
            "6，修复生成今日数据一值跳转的问题。",
            "7，修复一键生成内容-》分类-》首页。",
            "8，vod标签新增tv参数可调用电视频道的数据。",
            "9，修复幻兮支付成功后回调接口的问题。",
            "10，优化后台顶部主菜单权限显示。",
            "11，优化后台几个模块的列表入口，防止和前台路由冲突。",
            "12，其他细节。",
          ],
        },
        {
          timestamp: "2018.06.08.1339",
          type: "multiple",
          list: [
            "1，修复专题标签class,tag支持参数。",
            "2，修复qq一键登录的问题。",
            "3，调整微信支付接口返回二维码，并增加对应模板。",
            "4，调整后台评论管理显示关联的视频或文章数据。",
            "5，修复视频标签tag支持参数。",
            "6，新增幻兮支付接口，默认模板已经加入可参考。",
            "7，新增明星库，角色库页面的mid和aid值，已加入标签文档。",
            "8，新增mac_url_content_img函数来处理详情里的图片地址，如使用附件远程存储，mac开头的图片需要转换。",
            "9，开启支持动态页面缓存功能，并新增动态页面缓存时间配置项。",
            "10，修复随机标签rnd在开启缓存的时候每次刷新页面都变的问题。",
            "11，修复评论首页只能调用视频评论的问题。",
            "12，修复linux+nginx环境下部分用户后台搜索汉字换页错误的问题。",
            "13，新增明星库火车头入库接口和模块。",
            "14，其他细节。",
          ],
        },
        {
          timestamp: "2018.06.04.1510",
          type: "multiple",
          list: [
            "1，修复用户中心播放、下载、收藏记录列表最后一条重复的问题",
            "2，修复用户中心修改信息报错的问题。",
            "3，修复角色、明星标签的相关问题。",
            "4，修复视频批量操作删除播放组、下载组的问题。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.30.1007",
          type: "multiple",
          list: [
            "1，修复生成视频文章详情页面自定义模板不起作用的问题",
            "2，修改分类生成规则，父分类也可以多页。",
            "3，修复生成当日数据的问题。",
            "4，修改无权限提示页跳转到用户中心。",
            "5，修复会员中心播放记录的问题。",
            "6，修复压缩页面代码功能。",
            "7，新增附件FTP存储功能。",
            "8，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.22.1338",
          type: "multiple",
          list: [
            "1，修复视频批量操作设置积分的问题",
            "2，修复评论顶踩的问题。",
            "3，修复生成rss、xml后缀问题",
            "4，修复自定义页面动态模式下链接的问题",
            "5，修复专题列表设置推荐值的问题",
            "6，修复文章内容页面调用MAC_TYPE_PID的问题",
            "7，修复https下后台联盟资源库不显示的问题",
            "8，新增后台视频筛选增加空播放器下载器查询",
            "9，新增mac_friend_date函数，返回友好时间提示比如几分前，几小时前，几天前",
            "10，新增视频、文章、专题标签参数timeadd,timehits,time,hitsmonth,hitsweek,hitsday,hits来调用时间和点击量相关数据",
            "11，新增视频标签参数version资源版本,state资源类型,rel关联数据",
            "12，新增站点设置-性能优化-采集时间间隔设置项",
            "13，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.17.1050",
          type: "multiple",
          list: [
            "1，优化后台快捷菜单链接生成方式。",
            "2，修复自定义页面伪静态路由的问题。",
            "3，增加容错机制避免提示控制器不存在，方法不存在，统一跳入404提示页面。",
            "4，修复评论标签有二级回复的时候一级会多出空白行的问题。",
            "5，修复筛选参数年代区间的问题支持1990-2000或2000-1990格式。",
            "6，修复显示断点采集。",
            "7，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.15.1403",
          type: "multiple",
          list: [
            "1，新增采集参数配置，随机顶踩。",
            "2，视频筛选参数加入节目周期。",
            "3，专题新增tag参数，自动调用相同tag的视频文章。",
            "4，站点配置自适应改为单域名、多域名、不同方式自适应。",
            "5，修复{$maccms.path_ads}标签没有值的问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.11.2300",
          type: "multiple",
          list: [
            "1，修复添加广告位代码的问题。",
            "2，修改播放器管理纯数字编码会自动加入_，避免删除修改不了。",
            "3，修复https后台不显示官网升级信息、豆瓣信息等api调用的问题。",
            "4，修改会员注册名长度必须6位及以上。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.09.1320",
          type: "multiple",
          list: [
            "1，修复定时任务采集第二页报错的问题。",
            "2，优化采集入库更新判断项目，更新时间的问题。",
            "3，优化后台视频列表显示，加入显示连载数，备注信息。",
            "4，修复会员部分操作返回值。",
            "5，新加入了广告位管理，默认为当前模板的ads目录，可在模板目录中创建info.ini来单独设置adsdir广告目录。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.08.2020",
          type: "multiple",
          list: [
            "1，修复拼音ID访问时，分类页面数据问题。",
            "2，修复采集数据时，无更新内容时更新时间的问题。",
            "3，修复bmp，webp图片加水印缩略图报错的问题。",
            "4，新增mac_get_user_portrait函数获取用户头像地址的方法。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.07.1213",
          type: "multiple",
          list: [
            "1，会员中心新增绑定邮箱功能，绑定后可用邮箱登录。",
            "2，修改播放器管理排列顺序显示顺序都是按排序号倒序排列。",
            "3，修改会员中心上传头像存储和命名规则。",
            "4，修改生成拼音方法自动过滤空格等特殊符号影响url访问。",
            "5，屏蔽调式模式，避免路径泄露。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.04.1320",
          type: "multiple",
          list: [
            "1，新增定时任务管理。",
            "2，新增播放器导出导入功能。",
            "3，修复采集时同步图片的问题。",
            "4，修改admin.php入口文件，防止路由规则影响后台访问。",
            "5，修复编辑模板遇到包含textarea文本框的时候错乱的问题。",
            "6，修复非静态模式下调用会员$user标签的问题。",
            "7，修复搜索开关、搜索时间间隔的问题。",
            "8，修复播放地址混用播放类型不起作用的问题。",
            "9，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.03.0000",
          type: "multiple",
          list: [
            "1，修复游客有播放页权限还进入试看的问题。",
            "2，优化后台视频、文章、专题列表显示浏览。",
            "3，优化视频信息维护页面，播放组和下载组加入校正、排序、去前缀功能。",
            "4，优化标签加入half，用于分页数字链接显示个数。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.02.1005",
          type: "multiple",
          list: [
            "1，修复友情链接按type调用的问题。",
            "2，加强采集xml资源库的兼容性，修复json资源库请求问题。",
            "3，修复下载页面积分购买处理方式及模板。",
            "4，优化安装页面。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2018.05.01",
          type: "single",
          inner: "公测开启，前期问题可能较多，有问题及时上报！",
        },
        {
          timestamp: "2018.04.02",
          type: "single",
          inner: "内部测试工作基本完成，待完善一些细节后，就准备公开测试了！",
        },
        {
          timestamp: "2018.03.21",
          type: "single",
          inner:
            "内部测试工作稳定进行中，程序已基本稳定，模板标签页已基本固定。 下一步主要进行行能优化、兼容性优化。",
        },
        {
          timestamp: "2018.03.15",
          type: "single",
          inner: "开启第一轮内部测试工作。。。",
        },
      ],
      activeNav: 0,
      dataFormat:'<?xml version="1.0" encoding="utf-8"?><rss version="5.0"><list page="1" pagecount="23" pagesize="20" recordcount="449"><video><last>2012-05-06 13:32:28</last><id>493</id><tid>9</tid><name><![CDATA[野人来袭]]></name><type>恐怖片</type><dt>qvod</dt><note><![CDATA[]]></note><vlink><![CDATA[http://localhost/maccms7_php/vod/?493.html]]></vlink><plink><![CDATA[http://localhost/maccms7_php/vodplay/?493-1-1.html]]></plink></video></list><class><ty id="1">电影</ty><ty id="2">连续剧</ty><ty id="3">综艺</ty><ty id="4">动漫</ty><ty id="5">动作片</ty><ty id="6">喜剧片</ty><ty id="7">爱情片</ty><ty id="8">科幻片</ty><ty id="9">恐怖片</ty><ty id="10">剧情片</ty><ty id="11">战争片</ty><ty id="12">国产剧</ty><ty id="13">港台剧</ty><ty id="14">日韩剧</ty><ty id="15">欧美剧</ty></class></rss>',
      innerFormat:'<?xml version="1.0" encoding="utf-8"?><rss version="5.0"><list page="1" pagecount="1" pagesize="20" recordcount="1"><video><last>2012-05-06 13:32:28</last><id>493</id><tid>9</tid><name><![CDATA[野人来袭]]></name><type>恐怖片</type><pic>http://1img.joykk.com/Uploads/2009/11/30/20091130205750222.JPG</pic><lang>英语</lang><area>欧美</area><year>2012</year><state>0</state><note><![CDATA[]]></note><type>_9</type><actor><![CDATA[]]></actor><director><![CDATA[Ryan Schifrin]]></director><dl><dd from="qvod"><![CDATA[第1集$qvod://206850310|13CB4BC71DD6C3AA5DE0B081E1566992A1BA3F03|野人来袭_01.rmvb|#第2集$qvod://218787599|8E3EA62210F42B9B25EAFA761413587FCC4D8E14|野人来袭_02.rmvb|]]></dd></dl><des><![CDATA[<p>它已经在68个国家被目击了42000次。一个富有传奇色彩的生物，被冠以众多称呼：Yeti(雪人)、Sasquatch(萨斯科奇人)和著名的Bigfoot(大脚怪)！我们已经追捕它了很多年，但是当它决定猎捕我们时，会发生什么？　 <br /><br />　　一个从登山事故中恢复过来的家伙，被困在森林中一个偏僻的小屋里。他看见了传说中的怪物，因此必须在野兽展开血腥袭击前，说服人们相信他并拯救一群大学女生。 <br /></p>]]></des><vlink><![CDATA[http://localhost/maccms7_php/vod/?493.html]]></vlink><plink><![CDATA[http://localhost/maccms7_php/vodplay/?493-1-1.html]]></plink></video></list></rss>'
    };
  },
  methods: {
    selectVer(val) {
      this.activeVer = val;
    },
    selectNav(item, index) {
      this.activeNav = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrap {
  background: #fff;
  .dev-container {
    display: flex;
    background: #f7f8fa;
    justify-content: space-between;
    padding: 30px 260px 50px 260px;
    .left {
      width: 220px;
      height: 550px;
      background: #fff;
      padding: 30px 15px;
      .l-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 6px;
        border: 1px solid #ccc;
        padding: 10px 20px;
        .lt-t {
          font-size: 16px;
          color: #333;
        }
        .d1-img {
          display: block;
          width: 22px;
          height: 22px;
          cursor: pointer;
        }
      }
      .l-list {
        .nav-item {
          padding: 20px 0;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          .nav-img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
          .nav-tit {
            .zh-t {
              font-size: 16px;
              color: #242424;
            }
            .en-t {
              margin-top: 3px;
              font-size: 12px;
              color: #999;
            }
          }
          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            background: #eaeaea;
            bottom: 0px;
          }
          &:last-child {
            &::after {
              display: none;
            }
          }
        }
        .activeNav {
          .zh-t,
          .en-t {
            color: #f7502d !important;
          }
        }
      }
    }
    .right {
      width: 1080px;
      height: 550px;
      background: #fff;
      padding: 30px;
      .content {
        height: 100%;
        overflow-y: scroll;
        .c-d {
          .c-t {
            color: #242424;
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 10px;
          }
          .c-p {
            color: #666;
            font-size: 16px;
            margin-bottom: 10px;
            /deep/.el-timeline {
              padding-left: 1px;
              .el-timeline-item {
                padding-bottom: 25px;
                .el-timeline-item__tail {
                  border-color: #d8d8d8;
                }
                .el-timeline-item__node {
                  border: 1px solid #f7502d;
                  background: #ffffff;
                }
                .el-timeline-item__wrapper {
                  .el-timeline-item__timestamp.is-top {
                    padding-top: 2px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #242424;
                  }
                  .el-timeline-item__content {
                    p {
                      font-size: 14px;
                      color: #596371;
                      line-height: 24px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>