<template>
  <div class="pt-118 page-wrap">
    <commonHead />
    <div class="all-wrap">
    <div class="dev-container">
      <div class="left" :class="isFixed && 'fixed'">
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
      <div class="right" :class="isFixed && 'ml'">
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
                  你可以在我们的 官网首页 下载到 苹果CMS的最新版，它经过了自动化构建，更适合用于生产环境。目录结构如下：
                </p>
                <pre class="c-p">
                <textarea style="width:100%;border:none;overflow-y:hidden;font-size: 16px;color: #666;height:200px">
  │─application //应用目录
  │  │─admin //后台模块
  │  │─api //api模块
  │  │─common //公共模块
  │  │─extra //配置文件
  │  │─index //前台模块
  │  │─install //安装模块
  │─extend  //扩展目录
  │─runtime //缓存目录
  │─static //静态文件目录
  │─template //前台模板目录
  │─thinkphp //tp目录
  │─upload //附件目录
  │─vendor //第三发库目录
  └─index.php //入口文件                
                </textarea>
                </pre>
          
              </div>
            </div>

            <div v-if="activeNav == 1">
              <div class="c-d">
                <p class="c-t">快速安装</p>
                <p class="c-p">
                  获得 苹果CMS
                  后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。
                </p>
                <p class="c-p">
                  输入事先准备好的mysql数据库账户密码，即可一键安装。
                </p>
              </div>
              <div class="c-d  mt40">
                <p class="c-t">常见问题</p>
                <pre class="c-p">
1，由于采用最新的TP框架，所以php版本建议5.6以上，上传文件时需要开启fileinfo支持库，php.ini里 extension=php_fileinfo.dll ；宝塔等面板里直接安装开启 。

2，如果使用的是php5.6版本（php7版本不受影响），还需要设置php.ini开启always_populate_raw_post_data = -1 这个选项，也就是去掉这项配置前面的分号即可。

3，运行安装页面出现空白页面，该情况一般为Runtime目录没有修改写入权限**

4，SQLSTATE[22001]: String data, right truncated: 1406 Data too long for column '' at row 1  或者 Warning: 1265 Data truncated for column 类似错误**

该错误就插入字段长度超过设定的长度，一般程序会在数据库字段设置字符长度在插入之前程序很少会先判断数据长度和截取数据 这样会影响性能，所以你就需要修改你数据库的配置文件一般在MYSQL 安装目录中的my.ini中 搜索sql-mode
sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
把其中的STRICT_TRANS_TABLES,去掉 建议使用该方法
sql-mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
或者把
sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" 直接删除

5，数据库连接配置文件。
RE:手动修改数据库连接信息，数据库密码等/application/database.php

6，重新安装程序删除install.lock。
RE:需要删除/application/data/install/install.lock

7，采集联盟资源库或其他资源库为何播放不了？（资源类型是youku、tudou、iqiyi等等）第三方网址
RE:方法1，整合资源站的播放器js文件。方案2，开启全局解析或独立解析和播放器解析状态。

8，宝塔Nginx环境下，程序安装完毕后除非首页其他页面全部404的问题？
RE:方法，进入宝塔软件设置，找到对应的php版本-设置，安装扩展，找到PATH_INFO这项，点击关闭，然后重新安装一下就ok了，这个可能是宝塔的bug。

9，采集完数据后为何无法播放？？？
RE:检查采集数据的播放地址，如果是完成的http地址，则需要开启播放器的解析状态用解析播放；如果采集的数据ID可会直接用本地播放器来播放。

10，为何新增加了分类，前台页面进入提示没有权限？？？
RE:因为新加的分类默认所有会员组都是没有权限的，需要进入会员组里配置每个组的分类权限，保存一下即可。

11，路由规则改错了，页面权都打不开了，怎么恢复到默认的？？？
RE:下载完整安装包，复制application/route.php 替换到网站里，就可以打开了，然后在后台重新修改下路由规则。

12，nginx下除了首页其他都是404怎么办？
RE:修改一下伪静态规则，一般都可以解决了。 如果修改了后台文件入口admin.php，则改为对应的文件名。
if (!-e $request_filename) {
        rewrite ^/index.php(.*)$ /index.php?s=$1 last;
        rewrite ^/admin.php(.*)$ /admin.php?s=$1 last;
        rewrite ^/api.php(.*)$ /api.php?s=$1 last;
        rewrite ^(.*)$ /index.php?s=$1 last;
        break;
        }
13，安装提示“always_populate_raw_post_data”配置不支持解决方法
RE:编辑PHP-5.6 配置文件  php.ini，
查找 always_populate_raw_post_data
把前面的; 去掉保存，然后重启php5.6。
                </pre>
                <p class="c-p">
                  本篇将主要讲解使用过程中普遍遇到的“问题”，这些问题并非是BUG，通常是需要我们自己去注意的一些点。（会结合用户反馈持续补充）
                </p>
              </div>
              
              <div class="c-d mt40">
                <p class="c-t">常用sql语句</p>
                <pre class="c-p">
1.查询数据
SELECT * FROM {pre}vod   查询所有数据
SELECT * FROM {pre}vod WHERE vod_id=1000   查询指定ID数据

2.删除数据
DELETE  FROM {pre}vod   删除所有数据
DELETE  FROM {pre}vod WHERE vod_id=1000   删除指定的第几条数据
DELETE  FROM {pre}vod WHERE vod_actor LIKE '%刘德华%'   删除vod_actor字段里有"刘德华"的数据
DELETE  FROM {pre}vod WHERE vod_type=1   删除指定的分类ID的数据
DELETE  FROM {pre}vod WHERE vod_area LIKE '%台湾%'   删除指定地区的数据
DELETE  FROM {pre}vod WHERE vod_lang LIKE '%粤语%'  删除指定语言的数据

3.修改数据
UPDATE {pre}vod SET vod_hits=1   将所有vod_hits字段里的值修改成1
UPDATE {pre}vod SET vod_hits=1 WHERE vod_id=1000  指定的第几条数据把vod_hits字段里的值修改成1
4，把图片地址中的某个字符串替换为另外一个字符串
UPDATE {pre}vod SET vod_pic=REPLACE(vod_pic, '原始字符串', '替换成其他字符串')

5，删除数据库后自增ID重新从1开始
PHP： truncate {pre}vod
ASP： acc 用office打开数据库，删除数据后，压缩修复数据库即可。
          或 ALTER TABLE {pre}vod ALTER COLUMN vod_id COUNTER (1, 1)
          mssql用   TRUNCATE TABLE  {pre}vod

6，删除数据库名称重复的数据
DELETE FROM {pre}vod where vod_id not in ( SELECT vod_id FROM {pre}vod GROUP BY vod_name HAVING COUNT(*)>1)

7，修复死锁的表
REPAIR TABLE `{pre}art` ,`{pre}vod` ,`{pre}type` ,`{pre}comment` ,`{pre}gbook` ,`{pre}link` ,`{pre}admin` ,`{pre}topic` ,`{pre}user` ,`{pre}card` ,`{pre}group` ,`{pre}visit`    
                </pre>
              </div>

              <div class="c-d mt40">
                 <p class="c-t">页面提交数据后过段时间才生效？</p>
                 <pre class="c-p">
这个一般是web服务配置了缓存导致的~~
访问phpinfo(),看看是不是你开启了ZendOpcache之类的opcode缓存.ZendOpcache里面有个过期时间配置,
如opcache.revalidate_freq=60 ,表示60秒后脚本再次被访问时会检测PHP文件的时间戳,有改变则更新opcode缓存,
你可以设为0,这样每次访问都会检测文件时间戳,你的修改就能生效了.
在php.ini文件中找到
opcache.enable=1
或
opcache.enable_cli=1
改为0，重启php-fpm，done
                 </pre>
              </div>

              <div class="c-d mt40">
                 <p class="c-t">为什么播放器不能全屏？</p>
                 <pre class="c-p">
<textarea  class="why-txt" style="overflow-y:hidden;font-size: 16px;color: #666;height:200px">
<h3 class="layui-code-h3">code</h3>
<ol class="layui-code-ol">
<li>如果播放器被包含在 iframe 里，尝试在 iframe 上添加 allowfullscreen 属性。</li><li>为了完善的浏览器兼容性，它应该是这样：</li><li><iframe src="example.com" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe></li>
</ol>
</textarea> 
                 </pre>
              </div>
            </div>

            <div  v-if="activeNav == 2">
              <div class="c-d">
                <p class="c-t">模板标签</p>
                <p class="c-p">
                  本篇主要讲解v10自带系统标签和模板规范
                </p>
              </div>
  
              <div class="c-d mt40">
                <p class="c-t">模板目录</p>
                <p class="c-p">
                  系统模板系统放在/template/目录下。在后台站点设置中，可以选择当前使用的模板
                </p>
                <pre class="c-p">
  │─template/1/  模板1
  │  ├─ads   广告文件目录
  │  ├─js    js文件
  │  ├─css   css文件
  │  ├─images   图片文件
  │  └─html     模板文件目录
  │      └─art     文章模块模板目录
  │      └─comment  评论模块模板目录
  │      └─gbook    留言本模块模板目录
  │      └─index    首页模块模板目录
  │      └─label    自定义页面模块模板目录
  │      └─map      地图页模块模板目录
  │      └─public   公共页面模板目录
  │      └─rss      RSS和sitemap模板目录
  │      └─topic    专题模块模板目录
  │      └─user     用户中心模块模板目录
  │      └─vod      视频模块模板目录
  │─tempalte/2/  模板2
  │─...
  │─template/n/  模板N      
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">模板文件</p>
                <p class="c-p">
                  系统规定默认模板文件名， 其中 分类、内容、播放等页面的模板是可以自定义的。
                </p>
                <pre class="c-p">
  全站公共样式文件，建议定义如何名称存放在模板的public目录下：
  │
  public/include.html   全站公共引入文件 引入js、css样式，还有系统JS变量
  public/head.html      全站头部
  public/foot.html      全站尾部
  public/jump.html      跳转提示页模板
  public/msg.html       错误提示页模板
  public/paging.html    分页样式模板
  public/digg.html      顶踩样式模板
  public/score.html     普通评分样式模板
  public/star.html      星星评分样式模板
  │
  comment/index.html    评论调用页
  comment/ajax.html     评论页
  gbook/index.html      留言本
  gbook/report.html     报错页面
  │
  index/index.html      首页
  │
  map/rss.html          rss
  map/baidu.html        百度sitemap
  map/google.html       谷歌sitemap
  │
  topic/index.html      专题首页
  topic/detail.html     专题详情页
  │
  art/detail.html       文章内容页
  art/rss.html          文章内容rss
  art/search.html       文章搜索页
  art/type.html         文章分类页
  art/show.html         文章分类筛选页
  │
  vod/confirm.html      确认支付积分页面
  vod/detail.html       视频内容页
  vod/rss.html          视频内容rss
  vod/play.html         视频播放页
  vod/player.html       试看页面播放页
  vod/down.html         视频下载页
  vod/search.html       视频搜索页面
  vod/type.html         视频分类页面
  vod/show.html         视频分类筛选页
  │
  user/ajax_info.html   用户弹出层登录详情
  user/ajax_login.html  用户弹出层登录界面
  user/buy.html         用户中心-在线充值
  user/cards.html       用户中心-充值卡记录
  user/downs.html       用户中心-下载记录
  user/favs.html        用户中心-收藏记录
  user/findpass.html    用户中心-找回密码
  user/foot.html        用户中心-公共底部
  user/head.html        用户中心-公共头部
  user/include.html     用户中心-公共引入文件
  user/index.html       用户中心-首页
  user/info.html        用户中心-个人详情
  user/login.html       用户中心-登录页
  user/orders.html      用户中心-在线充值记录
  user/pay.html         用户中心-支付页
  user/plays.html       用户中心-点播记录
  user/popedom.html     用户中心-权限列表
  user/reg.html         用户中心-注册
  user/upgrade.html     用户中心-会员升级
  │
  actor/detail.html     明星详情页
  actor/index.html      明星首页
  actor/search.html     明星搜索页
  actor/type.html       明星分类页面
  actor/show.html       明星分类筛选页
  │
  role/detail.html      角色详情页
  role/index.html       角色首页
  role/search.html      角色搜索页
  role/type.html        角色分类页面
  role/show.html        角色分类筛选页
  │
  vod/plot.html         视频分集剧情列表
  plot/index.html       分集剧情首页
  plot/detail.html      分集剧情详情页     
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">系统内置JS、CSS说明</p>
                <p class="c-p">
                  系统模板系统放在/template/目录下。在后台站点设置中，可以选择当前使用的模板
                </p>
                <pre class="c-p">
文件：home.js
  MAC.Url当前网页地址
  MAC.Title当前网页标题
  MAC.UserAgent获取浏览器类型
  MAC.Copy(s)复制内容到剪切板
  MAC.Home(obj,url)设置网址为浏览器主页
  MAC.Fav(url,name)加入网址到收藏夹
  MAC.Open(w,h,u)弹出网址
  MAC.Cookie.Set(name,val,day)设置cookie
  MAC.Cookie.Get(name)获取cookie
  MAC.Cookie.Del(name)删除cookie
  MAC.GoBack()返回上个页面
  MAC.Qrcode() 重写class="mac_qrcode" 的图片地址为一个二维码
  MAC.Image.Lazyload.Show()异步载入图片
  MAC.Image.Lazyload.Box(id)载入指定id内部的图片
  MAC.Verify.Init() 把class="mac_verify" 的input框后边插入图片验证码class="mac_verify_img"
  MAC.PageGo()把class="mac_page_go"的按钮绑定事件切换分页
  MAC.Hits()把class="mac_hits"的元素载入点击量
  MAC.Score().Init()在class="mac_score"的内部初始化普通评分插件，class="score_btn"提交评分
  MAC.Star().Init()在class="mac_star"的元素初始化星星评分插件
  MAC.Digg.Init()在class="digg_link"的元素上绑定 点击事件
  MAC.Gbook().Init()在class="gbook_content",class="gbook_submit"绑定事件留言本使用
  MAC.Search().Init()在class="mac_search"的按钮上绑定事件，跳转到搜索页面
  MAC.Suggest().Init()在class="mac_wd"的文本框内部加入搜索联想结果功能
  MAC.History().Init()在class="mac_history"的元素上加入鼠标移入移除事件展示浏览日志
  MAC.Ulog().Init()在class="mac_ulog"的元素上初始化用户日志相关操作，包含1浏览2收藏3想看4点播5下载
  MAC.User().Init()在class="mac_user"的元素上初始化用户无刷新登录、用户详情
  MAC.Pop().Show()弹出层插件
  MAC.AdsWrap()输出占位符
  MAC.Css()加载css文件
  MAC.Desktop()跳转到保存到桌面
  MAC.Comment()评论相关功能     
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">全局标签</p>
                
                <pre class="c-p">
  {$maccms.site_name}        网站名称
  {$maccms.site_url}         网站url
  {$maccms.site_keywords}    网站关键字
  {$maccms.site_description} 网站描述
  {$maccms.site_icp}         备案号
  {$maccms.site_qq}          站长qq
  {$maccms.site_email}       站长email
  {$maccms.site_tj}          统计代码
  {$maccms.site_status}      网站状态1开启0关闭
  {$maccms.site_close_tip}   网站关闭提示信息
  {$maccms.path}             网站目录
  {$maccms.path_tpl}         当前模板目录
  {$maccms.search_hot}       热门搜索词
  {$maccms.mid}模块id，1视频2文章3专题
  {$maccms.aid}当前系统页面id
  首页1
  地图2
  rss3
  留言本4
  评论5
  用户中心6
  自定义页面7
  视频首页10
  文章首页20
  专题首页30
  视频分类页11
  视频分类筛选12
  视频搜索13
  视频详情14
  视频播放15
  视频下载16
  文章分类21
  文章分类筛选22
  文章搜索23
  文章详情24
  专题详情31   
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">引入模板文件</p>
                <p class="c-p">{include file="public/head"}</p>
              </div>

              <div class="c-d mt40">
                <p class="c-t">条件判断if标签</p>
                <pre class="c-p">
由于if标签的condition属性里面基本上使用的是php语法，尽可能使用判断标签和Switch标签会更加简洁：
    {if condition="($name == 1) OR ($name > 100) "} value1
    {elseif condition="$name eq 2"/}value2
    {else /} value3
    {/if}
empty标签用于判断某个变量是否为空，用法：
    {empty name="name"}
    name为空值
    {/empty}
如果判断没有赋值，可以使用：
    {notempty name="name"}
    name不为空
    {/notempty}
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">条件判断if标签</p>
                <pre class="c-p">
由于if标签的condition属性里面基本上使用的是php语法，尽可能使用判断标签和Switch标签会更加简洁：
    {if condition="($name == 1) OR ($name > 100) "} value1
    {elseif condition="$name eq 2"/}value2
    {else /} value3
    {/if}
empty标签用于判断某个变量是否为空，用法：
    {empty name="name"}
    name为空值
    {/empty}
如果判断没有赋值，可以使用：
    {notempty name="name"}
    name不为空
    {/notempty}
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">友情链接标签</p>
                <pre class="c-p">
参数:
    type:友情链接类型 font表示文字,pic表示图片
    num: 获取数据条数
例:
    {maccms:link num="2" type="pic"}
        {$key}序号
        {$vo.link_name}名称
        {$vo.link_url}地址
        {$vo.link_pic}图片
    {/maccms:link}
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">留言本标签</p>
                <pre class="c-p">

参数:
    num:数据条数  默认值10
    paging:是否开启分页yes
    by:数据排序依据 id,time
例:
    {maccms:gbook num="10" paging="no" order="desc" by="time"}
        {$key}序号
        {$vo.gbook_id}      编号id
        {$vo.gbook_name}    留言昵称
        {$vo.gbook_content} 留言内容
        {$vo.gbook_reply}   回复内容
        {$vo.gbook_ip}      留言者IP
        {$vo.gbook_time}    留言时间
        {$vo.gbook_replytime} 回复时间
    {/maccms:gbook}
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">评论标签</p>
                <pre class="c-p">
参数:
    num:数据条数  默认值10
    paging:是否开启分页yes
    by:数据排序依据 id,time
例:
    {maccms:comment num="10" paging="no" order="desc" by="time"}
        {$key}      排序位
        {$vo.comment_id}      编号id
        {$vo.comment_name}    评论昵称
        {$vo.comment_content} 评论内容
        {$vo.comment_ip}      评论者IP
        {$vo.comment_time}    评论时间
        {$vo.childs}    回复评论项
    {/maccms:comment}
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">分类标签(视频，文章通用)</p>
                <pre class="c-p">
参数:
    order排列顺序desc倒序，asc正序
    by排序依据
    start从第几条开始
    num获取条数
    ids指定分类parent获取一级分诶；child获取子分类；1,2,3一组指定ID；
    flag视频=vod文章=art
    {maccms:type num="10" order="asc" by="sort" ids="all"}
       内部同下方，{$obj.改为{$vo.开头即可
    {/maccms:type}
=======分类页独有标签=======
    {$obj.parent} 如果当前访问的是二级分类，这个是一级分类对象，也同样包含以下属性，如{$obj.parent.type_id}一级分类id
    {$obj.type_id}分类id
    {$obj.type_name}名称
    {$obj.type_enname}别名
    {$obj.type_sort}排序号
    {$obj.type_mid}所属模块
    {$obj.type_pid}上级id
    {$obj.type_status}状态1开启0关闭
    {$obj.type_tpl}分类页模板
    {$obj.type_tpl_list}筛选页模板
    {$obj.type_tpl_detail}详情页模板
    {$obj.type_tpl_play}播放页模板
    {$obj.type_tpl_down}下载页模板
    {$obj.type_key}关键字
    {$obj.type_des}描述信息
    {$obj.type_title}标题
    {$obj.type_extend}扩展配置json
    {:mac_url_type($obj)} 分类链接
      
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">专题列表标签</p>
                <pre class="c-p">
参数:
    order排列顺序desc倒序，asc正序
    by排序依据
    start从第几条开始
    num获取条数
    ids指定1,2,3一组指定ID；
    timeadd添加时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    timehits点击时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    time更新时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    hitsmonth月点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hitsweek周点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hitsday日点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hits总点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    paging是否分页yes
    {maccms:topic num="10" paging="no" order="asc" by="sort" ids="all"}
       内部同下方，{$obj.改为{$vo.开头即可
    {/maccms:topic}
=======专题页独有标签=======
    {$obj.topic_id}专题id
    {$obj.topic_name}名称
    {$obj.topic_en}别名
    {$obj.topic_sub}副标
    {$obj.topic_status}状态
    {$obj.topic_sort}排序号
    {$obj.topic_letter}首字母
    {$obj.topic_color}高亮颜色
    {$obj.topic_tpl}模板文件
    {$obj.topic_type}扩展分类
    {$obj.topic_pic}图片
    {$obj.topic_pic_thumb}缩略图
    {$obj.topic_pic_slide}幻灯图
    {$obj.topic_key}seo关键字
    {$obj.topic_des}seo描述
    {$obj.topic_title}seo标题
    {$obj.topic_blurb}简介
    {$obj.topic_remarks}备注
    {$obj.topic_level}推荐值
    {$obj.topic_up}顶数
    {$obj.topic_down}踩数
    {$obj.topic_score}平均分
    {$obj.topic_score_all}总评分
    {$obj.topic_score_num}总评次
    {$obj.topic_hits}总点击
    {$obj.topic_hits_day}日点击
    {$obj.topic_hits_week}周点击
    {$obj.topic_hits_month}月点击
    {$obj.topic_time}更新时间
    {$obj.topic_time_add}添加时间
    {$obj.topic_content}详细介绍
    {$obj.topic_extend}扩展配置json
    {:mac_url_topic_detail($obj)} 专题详情页链接
    {:mac_url_topic_index()}  专题首页链接
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">剧情分类、地区、语言、年代、版本、资源标签</p>
                <pre class="c-p">
剧情分类标签参数：
    order: 排序desc倒序，asc正序
    num:显示条数
    {maccms:class num="10" order="desc"}
        {$key}             序号
        {$vo.class_name}   分类名称
        {$vo.class_link}   链接
    {/maccms:class}
地区标签参数：
    order: 排序desc倒序，asc正序
    num:显示条数
    {maccms:area num="5" order="desc"}
        {$key} 排序位
        {$vo.area_name} 地区名称
        {$vo.area_link} 链接地址
    {/maccms:area}
语言标签参数：
    order:排序desc倒序，asc正序
    num:显示条数
    {maccms:lang num="5" order="desc"}
        {$key} 排序位
        {$vo.lang_name} 语言名称
        {$vo.lang_link} 链接地址
    {/maccms:lang}
年代标签参数：
    order:排序desc倒序，asc正序
    num:显示条数
    {maccms:year num="5" order="desc"}
        {$key} 排序位
        {$vo.year_name} 语言名称
        {$vo.year_link} 链接地址
    {/maccms:year}
版本标签参数：
    order:排序desc倒序，asc正序
    num:显示条数
    {maccms:version num="5" order="desc"}
        {$key} 排序位
        {$vo.version_name} 版本名称，如高清版,剧场版
        {$vo.version_link} 链接地址
    {/maccms:version}
资源标签参数：
    order:排序desc倒序，asc正序
    num:显示条数
    {maccms:state num="5" order="desc"}
        {$key} 排序位
        {$vo.state_name} 状态名称，如正片,预告片
        {$vo.state_link} 链接地址
    {/maccms:state}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">分页标签详解</p>
                <pre class="c-p">
分页标签可用在，首页、分类页、筛选页、专题首页、搜索页、文章内容页、留言本、评论
其中包含隐藏参数pageurl=""，视频默认是vod/type，文章分页默认是art/type，分页时必须加入此参数以免分页出错！！！
例如：{maccms:vod num="10" paging="yes" pageurl="vod/type" half="3"} {/maccms:vod}
视频分类页是pageurl="vod/type"
视频筛选页是pageurl="vod/show"
视频搜索页是pageurl="vod/search"
首页是pageurl="index/index"
文章分类页是pageurl="art/type"
文章筛选页是pageurl="art/show"
文章搜索页是pageurl="art/search"
其中half参数是设置显示分页数字页码的个数，不设置默认为5。
参数详解:
     系统提供了$__PAGING__分页变量，可以来进行diy定制。
     例子：
     <textarea style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:260px;border:none">
<div class="mac_pages">
    <div class="page_tip">共{$__PAGING__.record_total}条数据,当前{$__PAGING__.page_current}/{$__PAGING__.page_total}页</div>
    <div class="page_info">
        <a class="page_link" href="{$__PAGING__.page_url|str_replace='%7Bpg%7D',1,###}" title="首页">首页</a>
        <a class="page_link" href="{$__PAGING__.page_url|str_replace='%7Bpg%7D',$__PAGING__.page_prev,###}" title="上一页">上一页</a>
        {maccms:foreach name="$__PAGING__.page_num" id="num"}
        {if condition="$__PAGING__['page_current'] eq $num"}
        <a class="page_link page_current" href="javascript:;" title="第{$num}页">{$num}</a>
        {else}
        <a class="page_link" href="{$__PAGING__.page_url|str_replace='%7Bpg%7D',$num,###}" title="第{$num}页">{$num}</a>
        {/if}
        {/maccms:foreach}
        <a class="page_link" href="{$__PAGING__.page_url|str_replace='%7Bpg%7D',$__PAGING__.page_next,###}" title="下一页">下一页</a>
        <a class="page_link" href="{$__PAGING__.page_url|str_replace='%7Bpg%7D',$__PAGING__.page_total,###}" title="尾页">尾页</a>
        <input class="page_input" type="text" placeholder="页码" id="page" autocomplete="off" style="width:40px">
        <button class="page_btn" type="button" onclick="pagego('{$__PAGING__.page_url}','{$__PAGING__.page_total}')">GO</button>
    </div>
</div>
</textarea>
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频搜索页参数和标签详解</p>
                <pre class="c-p">
参数详解:
    wd:名称或主演
    ids:数据id支持多个逗号分割 1,2,3
    letter:首字母
    enname:别名
    actor:主演
    director:导演
    area:地区
    lang:语言
    year:上映年代
    version:版本
    state:资源类型
    level:推荐等级
    tid:分类id
    order:排序 desc(倒序) asc (正序)
    by:排序字段
独有标签：
    {$param.page}当前页码
    {$param.wd}关键字
    {$param.area}地区
    {$param.lang}语言
    {$param.year}年代
    {$param.actor}演员
    {$param.director}导演
    {$param.class}扩展分类
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频列表标签</p>
                <pre class="c-p">
参数
    order排列顺序desc倒序，asc正序
    by排序依据
    start从第几条开始
    num获取条数
    ids指定1,2,3一组ID；
    type指定获取分类数据 all所有；1,2,3指定；
    class指定某扩展分类 支持多个 动作,喜剧
    tag指定tag 支持多个  aaa,xxx
    level指定推荐值 支持多个  1,2
    area指定地区 支持多个  大陆,香港
    lang指定语言 支持多个  国语,粤语
    year指定年代 支持多个 2002,2003
    state资源类别 支持多个 高清版,剧场版,抢先版
    version资源版本 支持多个 正片,预告片
    weekday更新周期 支持多个  一,二,三
    rel指定关联数据 1,2,3 或 变形金刚
    timeadd添加时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    timehits点击时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    time更新时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    hitsmonth月点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hitsweek周点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hitsday日点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hits总点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    paging是否分页yes
    pageurl分页地址
    {maccms:vod num="10" paging="no" type="all" order="asc" by="sort"}
       内部同下方，{$obj.改为{$vo.开头即可
    {/maccms:vod}
=======视频内容页独有标签=======
    {$obj.vod_id} 视频id
    {$obj.type_id} 分类id
    {$obj.type_id_1} 一级分类id
    {$obj.type} 视频分类对象，二级属性可参考分类
    {$obj.type_1} 一级分类对象，二级属性可参考分类
    {$obj.group_id} 用户组id
    {$obj.vod_name} 视频名
    {$obj.vod_sub} 副标题
    {$obj.vod_en} 别名
    {$obj.vod_status} 状态0未审1已审
    {$obj.vod_letter} 首字母
    {$obj.vod_color} 颜色
    {$obj.vod_tag} tags
    {$obj.vod_class} 扩展分类
    {$obj.vod_pic} 图片
    {$obj.vod_pic_thumb} 缩略图
    {$obj.vod_pic_slide} 幻灯图
    {$obj.vod_actor} 主演
    {$obj.vod_director} 导演
    {$obj.vod_writer}编剧
    {$obj.vod_blurb} 简介
    {$obj.vod_remarks} 备注
    {$obj.vod_pubdate}上映日期
    {$obj.vod_total} 总集数
    {$obj.vod_serial} 连载数
    {$obj.vod_tv} 上映电视台
    {$obj.vod_weekday} 节目周期
    {$obj.vod_area} 地区
    {$obj.vod_lang} 语言
    {$obj.vod_year} 年代
    {$obj.vod_version} 版本-dvd,hd,720p
    {$obj.vod_state} 资源类别-正片,预告片,花絮
    {$obj.vod_author} 编辑人员
    {$obj.vod_jumpurl} 跳转url
    {$obj.vod_tpl} 独立模板
    {$obj.vod_tpl_play} 独立播放页模板
    {$obj.vod_tpl_down} 独立下载页模板
    {$obj.vod_isend} 是否完结
    {$obj.vod_lock} 锁定1
    {$obj.vod_level} 推荐级别
    {$obj.vod_points_play} 点播付费
    {$obj.vod_points_down} 下载付费
    {$obj.vod_hits} 总点击量
    {$obj.vod_hits_day} 日点击量
    {$obj.vod_hits_week} 周点击量
    {$obj.vod_hits_month} 月点击量
    {$obj.vod_duration} 时长
    {$obj.vod_up} 顶数
    {$obj.vod_down} 踩数
    {$obj.vod_score} 平均分
    {$obj.vod_score_all} 总评分
    {$obj.vod_score_num} 评分次数
    {$obj.vod_time} 更新时间
    {$obj.vod_time_add} 添加时间
    {$obj.vod_time_hits} 点击时间
    {$obj.vod_time_make} 生成时间
    {$obj.vod_trysee} 试看时长分
    {$obj.vod_reurl} 来源地址
    {$obj.vod_rel_vod} 关联视频ids
    {$obj.vod_rel_art} 关联文章ids
    {$obj.vod_content} 详细介绍
    {$obj.vod_play_from} 播放组
    {$obj.vod_play_server} 播放服务器组
    {$obj.vod_play_note} 播放备注
    {$obj.vod_play_url} 播放地址
    {$obj.vod_down_from} 下载租
    {$obj.vod_down_server} 下载服务器组
    {$obj.vod_down_note} 下载备注
    {$obj.vod_down_url} 下载地址
    {:mac_url_vod_detail($obj)}  视频详情页链接
    {:mac_url_vod_play($obj,['sid'=>1,'nid'=>1])}   视频播放页链接
    {:mac_url_vod_down($obj,['sid'=>1,'nid'=>1])}   视频下载页链接

                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频内容页、播放页标签</p>
                <pre class="c-p">
<textarea class="why-txt" style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:1280px;border:none">
列出播放地址
{maccms:foreach name="obj.vod_play_list" id="vo"}
<div class="ui-box marg" id="playlist_{$key}">
    <div class="down-title">
        <h2>{$vo.from}-在线播放</h2><span>[{$vo.player_info.tip}]</span>
    </div>
    <div class="video_list fn-clear">
        {maccms:foreach name="vo.urls" id="vo2"}
        <a href="{:mac_url_vod_play($obj,['sid'=>$vo.sid,'nid'=>$vo2.nid])}">{$vo2.title}</a>
        {/maccms:foreach}
    </div>
</div>
{/maccms:foreach}
列出下载地址
{maccms:foreach name="obj.vod_down_list" id="vo"}
<div class="ui-box marg" id="downlist_{$key}">
    <div class="down-title">
        <h2>{$vo.from}-下载</h2><span>[{$vo.player_info.tip}]</span>
    </div>
    <div class="video_list fn-clear">
        {maccms:foreach name="vo.urls" id="vo2"}
        <a href="{:mac_url_vod_down($obj,['sid'=>$vo.sid,'nid'=>$vo2.nid])}">{$vo2.title}</a>
        {/maccms:foreach}
    </div>
</div>
{/maccms:foreach}
上边循环过程中，其中获取播放器详细信息的方法是
{$vo.player_info.from} 编码
{$vo.player_info.show} 名称
{$vo.player_info.des} 备注
{$vo.player_info.tip} 提示
{$vo.player_info.sort} 排序
{$vo.player_info.parse} 解析接口
=======视频播放页独有标签=======
{$param.sid} 当前播放组序号
{$param.nid} 当前集数序号
{$obj.player_info.link_next} 下一页地址，最后一页时此链接将当前页链接
{$obj.player_info.link_pre} 上一页地址，第一页时此链接将当前页链接
{$obj['vod_play_list'][$param['sid']]} 获取当前播放组数据
{$obj['vod_play_list'][$param['sid']]['player_info']}  播放器信息
{$obj['vod_play_list'][$param['sid']]['server_info']}  服务器组信息
{$obj['vod_play_list'][$param['sid']]['url_count']} 总集数
{$obj['vod_play_list'][$param['sid']]['urls']} 集数信息
{$obj['vod_play_list'][$param['sid']]['urls'][$param['nid']]} 当前集数信息
{$obj['vod_play_list'][$param['sid']]['urls'][$param['nid']]['name']} 当前集数名称
{$obj['vod_play_list'][$param['sid']]['urls'][$param['nid']]['url']} 当前集数url
下载页获取以上信息，请把vod_play_list改为vod_down_list，其他参数不变
{$player_data} 播放数据
{$player_js} 加载播放器
=======视频分集剧情页独有标签=======
{$obj['vod_plot_list'][$param['page']]['name']}    分集剧情名称
{$obj['vod_plot_list'][$param['page']]['detail']}  分集剧情详情
mac_url_plot_detail($obj,['page'=>1])              分集剧情详情页地址
mac_url_plot_index()                               分集剧情首页，建议放一些热门剧包含剧情分类的数据
mac_url_vod_plot($obj)                             某个视频的分集剧情列表
=======获取与当前视频相关联视频和关联文章数据======
<h2>与<strong>“{$obj.vod_name}”</strong>关联的视频</h2>
<ul class="img-list dis">
    {maccms:vod num="6" rel="'.$obj['vod_rel_vod'].'" order="desc" by="time"}
        <li><a href="{:mac_url_vod_detail($vo)}" title="{$vo.vod_name}"><img src="{:mac_url_img($vo.vod_pic)}" alt="{$vo.vod_name}"><h2>{$vo.vod_name}</h2><p></p><i>{$vo.vod_version}</i><em></em></a></li>
    {/maccms:vod}
</ul>
<h2>与<strong>“{$obj.vod_name}”</strong>关联的文章</h2>
<ul class="img-list dis">
    {maccms:art num="6" rel="'.$obj['vod_rel_art'].'" order="desc" by="time"}
        <li><a href="{:mac_url_art_detail($vo)}" title="{$vo.art_name}"><img src="{:mac_url_img($vo.art_pic)}" alt="{$vo.art_name}"><h2>{$vo.art_name}</h2><p></p><i>{$vo.vod_from}</i><em></em></a></li>
    {/maccms:art}
</ul>
</textarea> 
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">文章列表标签</p>
                <pre class="c-p">
<textarea class="why-txt" style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:1280px;border:none">
参数：
    order排列顺序desc倒序，asc正序
    by排序依据
    start从第几条开始
    num获取条数
    ids指定1,2,3一组ID；
    type指定获取分类数据 all所有；1,2,3指定；
    class指定某扩展分类 支持多个
    tag指定tag 支持多个  aaa,xxx
    level指定推荐值 支持多个
    rel指定关联数据 1,2,3 或 变形金刚
    timeadd添加时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    timehits点击时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    time更新时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
    hitsmonth月点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hitsweek周点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hitsday日点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    hits总点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
    paging是否分页yes
    pageurl分页地址
    {maccms:art num="10" paging="no" type="all" order="asc" by="sort"}
       内部同下方，{$obj.改为{$vo.开头即可
    {/maccms:art}
=======文章内容页独有标签=======
    {$obj.art_id} 文章id
    {$obj.type_id} 分类id
    {$obj.type_id_1} 一级分类id
    {$obj.type} 视频分类对象，二级属性可参考分类
    {$obj.type_1} 一级分类对象，二级属性可参考分类
    {$obj.group_id} 用户组id
    {$obj.art_name} 标题
    {$obj.art_sub} 副标题
    {$obj.art_en} 别名
    {$obj.art_status} 状态0未审1已审
    {$obj.art_letter} 首字母
    {$obj.art_color} 颜色
    {$obj.art_from} 来源
    {$obj.art_author} 作者
    {$obj.art_tag} tags
    {$obj.art_class} 扩展分类
    {$obj.art_pic} 主图
    {$obj.art_pic_thumb} 缩略图
    {$obj.art_pic_slide} 幻灯图
    {$obj.art_blurb} 简介
    {$obj.art_remarks} 备注
    {$obj.art_jumpurl} 跳转url
    {$obj.art_tpl} 独立模板
    {$obj.art_level} 推荐等级
    {$obj.art_lock} 锁定
    {$obj.art_up} 顶数
    {$obj.art_down} 踩数
    {$obj.art_hits} 总点击量
    {$obj.art_hits_day} 日点击量
    {$obj.art_hits_week} 周点击量
    {$obj.art_hits_month} 月点击量
    {$obj.art_time} 更新时间
    {$obj.art_time_add} 添加时间
    {$obj.art_time_hits} 点击时间
    {$obj.art_time_make} 生成时间
    {$obj.art_score} 平均分
    {$obj.art_score_all} 总评分
    {$obj.art_score_num} 评分次数
    {$obj.art_rel_art} 关联文章
    {$obj.art_rel_vod} 关联视频
    {$obj.art_title} 页标题
    {$obj.art_note} 页备注
    {$obj.art_content} 页详细介绍
    {:mac_url_art_detail($obj)}  文章详情页链接
=======获取与当前文章相关联视频和关联文章数据======
<h2>与<strong>“{$obj.art_name}”</strong>关联的视频</h2>
<ul class="img-list dis">
    {maccms:vod num="6" ids="'.$obj['art_rel_vod'].'" order="desc" by="time"}
        <li><a href="{:mac_url_vod_detail($vo)}" title="{$vo.vod_name}"><img src="{:mac_url_img($vo.vod_pic)}" alt="{$vo.vod_name}"><h2>{$vo.vod_name}</h2><p></p><i>{$vo.vod_version}</i><em></em></a></li>
    {/maccms:vod}
</ul>
<h2>与<strong>“{$obj.art_name}”</strong>关联的文章</h2>
<ul class="img-list dis">
    {maccms:art num="6" ids="'.$obj['art_rel_art'].'" order="desc" by="time"}
        <li><a href="{:mac_url_art_detail($vo)}" title="{$vo.art_name}"><img src="{:mac_url_img($vo.art_pic)}" alt="{$vo.art_name}"><h2>{$vo.art_name}</h2><p></p><i>{$vo.vod_from}</i><em></em></a></li>
    {/maccms:art}
</ul>
</textarea>   
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">分页内容标签</p>
                <pre class="c-p">
<textarea class="why-txt" style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:600px;border:none">
分页代码可用在分类页、筛选页、搜索页、文章内容页、留言本、评论、专题首页等页面，使用前提是页面有包含paging='yes'获取分页数据的标签。
其中包含隐藏参数pageurl=""，视频默认是vod/type，文章分页默认是art/type，分页时必须加入此参数以免分页出错！！！
例如：{maccms:vod num="10" paging="yes" pageurl="vod/type"} {/maccms:vod}
视频分类页是pageurl="vod/type"
视频筛选页是pageurl="vod/show"
视频搜索页是pageurl="vod/search"
首页是pageurl="index/index"
文章分类页是pageurl="art/type"
文章筛选页是pageurl="art/show"
文章搜索页是pageurl="art/search"
<div class="mac_pages">
    <div class="page_tip">共{$__PAGING__.record_total}条数据,当前{$__PAGING__.page_current}/{$__PAGING__.page_total}页</div>
    <div class="page_info">
        <a class="page_link" href="{$__PAGING__.page_url|mac_url_page=1}" title="首页">首页</a>
        <a class="page_link" href="{$__PAGING__.page_url|mac_url_page=$__PAGING__.page_prev}" title="上一页">上一页</a>
        {maccms:foreach name="$__PAGING__.page_num" id="num"}
        {if condition="$__PAGING__['page_current'] eq $num"}
        <a class="page_link page_current" href="javascript:;" title="第{$num}页">{$num}</a>
        {else}
        <a class="page_link" href="{$__PAGING__.page_url|mac_url_page=$num}" title="第{$num}页">{$num}</a>
        {/if}
        {/maccms:foreach}
        <a class="page_link" href="{$__PAGING__.page_url|mac_url_page=$__PAGING__.page_next}" title="下一页">下一页</a>
        <a class="page_link" href="{$__PAGING__.page_url|mac_url_page=$__PAGING__.page_total}" title="尾页">尾页</a>
        <input class="page_input" type="text" placeholder="页码" id="page" autocomplete="off" style="width:40px">
        <button class="page_btn mac_page_go" type="button" data-url="{$__PAGING__.page_url}" data-total="{$__PAGING__.page_total}" data-sp="{$__PAGING__.page_sp}">GO</button>
    </div>
</div>
</textarea>
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">常用处理函数</p>
                <pre class="c-p">
允许使用多个函数，都使用|分隔开
{:mac_data_count(0,'all','vod')} 获取视频总数量
{:mac_data_count(0,'today','vod')} 获取今日更新视频总数量
{:mac_data_count(0,'all','art')} 获取文章总数量
{:mac_data_count(0,'today','art')} 获取今日更新文章总数量
{:mac_data_count(1,'all')} 获取某个分类下的数据总量，支持视频和文章,传入分类ID
{:mac_data_count(1,'today')} 获取某个分类下的今日更新数据总量，支持视频和文章,传入分类ID
{:mac_url('map/index')} 获取站内链接,参数代表 模块/页面
{$vo.vod_pic|mac_url_img}  自动转换图片地址
{$vo.vod_content|mac_substring=100}返回截取字符串100个字
{$vo.vod_content|mac_filter_html}返回没有html代码的内容
{$vo.actor|mac_url_create='actor','vod','search'}把,号相连的一串字符生成N个搜索链接,后2个参数可以不填写默认是生成vod模块搜索链接。 例子是创建演员搜索链接。支持演员、导演、tag、扩展分类等字段
{$vo.vod_time|mac_day} 自动返回日期
{$vo.vod_time|mac_friend_date} 友好时间提醒 几秒前，几分前，几小时前，几天前。。。
{$vo.vod_year|mac_default='未知'}如果字符串为空，则返回默认字符串
{$user.user_login_ip|mac_long2ip}返回格式化ip地址
                </pre>
              </div>


              <div class="c-d mt40">
                <p class="c-t">预留ajax数据接口，方便瀑布流加载</p>
                <pre class="c-p">
参数
mid:模块1视频2文章3专题
limit:每页条数，支持10,20,30
page:页码，最多不超过20页，防止非法采集
接口地址是index.php/ajax/data.html?mid=1&page=1&limit=10
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">常用标签技巧</p>
                <pre class="c-p">
1，在循环中获取每个分类的数据量
{maccms:type ids="1,2,3,4" order="asc" by="sort" id="vo1" key="key1"}
分成：{$vo1.type_name}；总数量： {$vo1.type_id|mac_data_count=all}；今日数量：{$vo1.type_id|mac_data_count=today}。
{/maccms:type}
2，嵌套循环外层分类内部视频或文章,重点在于外部和内部标签各自设置 id 和 key，系统默认都是vo不适合会导致数据冲掉。
{maccms:type ids="1,2,3,4" order="asc" by="sort" id="vo1" key="key1"}
    {maccms:vod num="10" type="'.$vo1['type_id'].'" order="desc" by="time" id="vo2" key="key2"}
        {$vo1.type_name}:{$vo2.vod_name}；
    {/maccms:vod}
{/maccms:type}
                </pre>
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
            <div v-if="activeNav == 0">
              <div class="c-d">
                <p class="c-t">开始使用-入门指南</p>
                <p class="c-p">
                  苹果CMS程序是一套采用PHP+MYSQL环境下运行的完善而强大的快速建站系统。 经过近多年的开发经验和技术积累，苹果CMS程序已逐步走向成熟，在易用性和功能上已经成为同行中的佼佼者。 程序体积小->优化程序代码，运行速度快->高效的缓存处理，只要普通的虚拟主机就可以完美搭建起来，建站成本非常低。仿MVC模板分离，内置标签，自定义函数标签接口，强大的自定义采集功能，只要你会HTML就可以轻松做出个性化的网站。 程序易用性和功能上一直以来都积极采纳广大站长提出的各种好的建议，迅速响应各种紧急问题，我们的服务理念贯穿其中，保证每一位站长每一个环节都可以从容应对。</p>
                <p class="c-p">
                  v8采用自行开发的模板处理引擎，将后台程序与html模板简单的分离出来，让设计人员与程序人员最大限度的发挥自己的优势而互不干扰，大大加快了项目有序、快速的完成。 即使您是第一次接触，也会在最短的时间内熟练掌握它的使用方法。后台管理模块，一目了然，操作简单，绝对不会让您眼花缭乱</p>
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
                  1、Windows 平台： IIS/Apache + PHP(5.0 +) + MySQL(5.0 +)
                </p>
                <p class="c-p">
                  2、Linux/Unix 平台： Apache + PHP (5.0 +) + MySQL(5.0 +) (PHP必须在非安全模式下运行)
                </p>
              </div>
              <div class="c-d mt40">
                <p class="c-t">获得 苹果CMS v8</p>
                <p class="c-p">
                  你可以在我们的 官网首页 下载到 苹果CMS 的最新版，它经过了自动化构建，更适合用于生产环境。目录结构如下：
                </p>
                <p class="c-p">
                  <pre>
    │─admin //后台管理目录
    │─cache  //缓存文件目录
    │─images //图片资源目录（苹果CMS系统自带）
    │─inc //模块核心目录
    │─js //js模块目录
    │─player //播放器文件目录
    │─template //前台模板目录
    │─upload //附件目录
    └─index.php //入口文件
                  </pre>
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
                <p class="c-t">常用sql语句</p>
                <p class="c-p">
                  <pre>
    1.查询数据
    SELECT * FROM {pre}vod   查询所有数据
    SELECT * FROM {pre}vod WHERE d_id=1000   查询指定ID数据
    2.删除数据
    DELETE  FROM {pre}vod   删除所有数据
    DELETE  FROM {pre}vod WHERE d_id=1000   删除指定的第几条数据
    DELETE  FROM {pre}vod WHERE d_starring LIKE '%刘德华%'   删除d_starring字段里有"刘德华"的数据
    DELETE  FROM {pre}vod WHERE d_type=1   删除指定的分类ID的数据
    DELETE  FROM {pre}vod WHERE d_area LIKE '%台湾%'   删除指定地区的数据
    DELETE  FROM {pre}vod WHERE d_language LIKE '%粤语%'  删除指定语言的数据
    3.修改数据
    UPDATE {pre}vod SET d_hits=1   将所有d_hits字段里的值修改成1
    UPDATE {pre}vod SET d_hits=1 WHERE d_id=1000  指定的第几条数据把d_hits字段里的值修改成1
    4，把图片地址中的某个字符串替换为另外一个字符串
    UPDATE {pre}vod SET d_pic=REPLACE(d_pic, '原始字符串', '替换成其他字符串')
    5，删除数据库后自增ID重新从1开始
    PHP： truncate {pre}vod
    ASP： acc 用office打开数据库，删除数据后，压缩修复数据库即可。
              或 ALTER TABLE {pre}vod ALTER COLUMN d_id COUNTER (1, 1)
              mssql用   TRUNCATE TABLE  {pre}vod
    6，删除数据库名称重复的数据
    DELETE FROM {pre}vod where d_id not in ( SELECT d_id FROM {pre}vod GROUP BY d_name HAVING COUNT(*)>1)
    7，php 7x 版本修复死锁的表
    REPAIR TABLE `{pre}art` ,`{pre}art_topic` ,`{pre}art_type` ,`{pre}comment` ,`{pre}gbook` ,`{pre}link` ,
    `{pre}manager` ,`{pre}mood` ,`{pre}user` ,`{pre}user_card` ,`{pre}user_group` ,`{pre}user_visit` ,`{pre}vod` ,
    `{pre}vod_topic` ,`{pre}vod_type`
                  </pre>
                </p>
              </div>
            </div>

            <div v-if="activeNav == 2">
              <div class="c-d">
                <p class="c-t">模板标签</p>
                <p class="c-p">本篇主要讲解V8自带系统标签和模板规范</p>
              </div>

              <div class="c-d mt40">
                <p class="c-t">模板目录</p>
                <p class="c-p">系统模板系统放在/template/目录下。在后台站点设置中，可以选择当前使用的模板</p>
                <pre class="c-p">
  │─template/1/  模板1
  │  ├─ads   广告文件目录
  │  ├─js    js文件
  │  ├─css   css文件
  │  ├─images   图片文件
  │  └─html     模板文件
  │─tempalte/2/  模板2
  │─...
  │─template/n/  模板N
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">模板文件</p>
                <p class="c-p">系统规定默认模板文件名， 其中 分类、内容、播放等页面的模板是可以自定义的。</p>
                <pre class="c-p">
home_include.html    全站公共引入文件 引入js、css样式，还有系统JS变量
home_head.html       全站头部
home_foot.html       全站尾部
home_gbook.html      留言本
home_comment.html    评论
label_   开头的都是自定义页面
art_detail.html      文章内容页
art_index.html       文章首页
art_list.html        文章分类筛选页
art_map.html         文章地图页
art_search.html      文章搜索页
art_topicindex.html  文章专题首页
art_topiclist.html   文章专题数据列表页
art_type.html        文章分类页
vod_detail.html      视频内容页
vod_index.html       视频首页
vod_list.html        视频分类筛选页
vod_map.html         视频地图页
vod_play.html        视频播放页
vod_playopen.html    视频弹窗播放页
vod_search.html      视频搜索页面
vod_topicindex.html  视频专题首页
vod_topiclist.html   视频专题数据列表页
vod_type.html        视频分类页面
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">系统内置JS、CSS说明</p>
                <pre class="c-p">
<textarea class="why-txt" style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:310px;border:none">
文件：js/home.js
MAC.Url         当前网页的链接
MAC.Title       当前网页的标题
MAC.Copy(s)     复制内容到剪切板; s=字符串
MAC.Home(o,u)   设置默认主页;     onclick="MAC.Home(this,'http://www.maccms.cn')"
MAC.Fav(u,s)    加入浏览器收藏夹;  onclick="MAC.FAV('http://www.maccms.cn','苹果CMS')"
MAC.Open(u,w,h)  弹出网页;u=网址,w=宽度,h=高度
MAC.Cookie.Set(name,value,days)   设置cookie的值; name=cookie名称,value=cookie值,days=过期时间
MAC.Cookie.Get(name)              获取cookie的值; name=cookie名称
MAC.Cookie.Del(name)              删除cookie的值; name=cookie名称
MAC.AdsWrap(w,h,n)                预留广告位占位; w=宽度,h=高度,n=名称
自动加载设置项：
html元素ID为history：  自动设置为鼠标移动滑入滑出  显示隐藏 历史记录。
html元素ID为wd： 自动设置联想搜索功能。
延迟加载图片： img元素不要使用src调用图片地址，而是用data-original。  < img class="lazy" data-original="[vod:pic]" src="{maccms:path}images/blank.png" />
</textarea>
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">全局标签</p>
                <pre class="c-p">
{maccms:runtime}       页面运行时间、查询次数、占用内存
{maccms:date}          当前日期
{maccms:siteaid}       当前所在模块ID
{maccms:url}           网站域名
{maccms:name}          网站名称
{maccms:keywords}      网站关键字
{maccms:description}   网站描述信息
{maccms:icp}           网站备案号
{maccms:qq}            网站管理QQ
{maccms:email}         网站管理Email
{maccms:visits}        网站统计代码
{maccms:path}          安装目录
{maccms:path_ads}      当前模版广告文件目录
{maccms:path_tpl}      当前模版HTML文件目录
{maccms:suffix}        文件后缀名
{maccms:link_gbook}      留言本链接
{maccms:link_search_vod}  视频搜索页链接
{maccms:link_search_art}  文章搜索页链接
{maccms:link_index}      视频首页链接
{maccms:link_index_art}   文章首页链接
{maccms:link_map_vod}     视频地图链接
{maccms:link_map_art}     文章地图链接
{maccms:link_topic_vod}   视频专题首页链接
{maccms:link_topic_art}   文章专题首页链接
{maccms:link_map_rss}     RSS链接
{maccms:link_map_baidu}   Baidu SiteMap链接
{maccms:link_map_google}  Google SiteMap链接
{maccms:count_vod_all}    视频数据总量
{maccms:count_vod_day}    视频当天更新数据量
{maccms:count_art_all}    文章数据总量
{maccms:count_art_day}    文章当天更新数据量
{maccms:count_user_all}      会员总数
{maccms:count_user_day}   会员当天注册数量
{maccms:userid}         当前登录会员ID
{maccms:username}       当前登录会员名
{maccms:usergroupid}    当前登录会员组ID,如果没有登录则是空
{maccms:curvodtypeid}  视频当前分类ID
{maccms:curvodtypepid}  视频当前分类的父分类ID
{maccms:curvodtopicid} 视频当前专题ID
{maccms:curarttypeid}  文章当前分类ID
{maccms:curarttypepid} 文章当前分类的父分类ID
{maccms:curarttopicid} 文章当前专题ID
{maccms:load label.html}     载入自定义页面内容
{maccms:getlink label.html}  获取自定义页面的链接
{maccms:siteaid}  当前所在系统模版id
视频首页 10
视频地图页 11
视频分类，筛选页  12
视频专题首页 13
视频专题数据列表 14
视频搜索页   15
视频内容页   16
视频播放页   17
视频下载页   18
文章首页 20
文章地图页  21
文章分类，筛选页  22
文章专题首页  23
文章专题数据列表  24
文章搜索页  25
文章内容页  26
系统留言本  30
系统评论    31
系统用户中心  40
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">条件判断if标签</p>
                <pre class="c-p">
if标签,支持多重嵌套,每个层级的if标签不能相同
例:
{if-A:[vod:num] > 1 }....{endif-A}
{if-A:[vod:num] mod 2=0}....{else-A}....{endif-A}
{if-A:[vod:num] mod 2=0}....{elseif-A}....{else-A}....{endif-A}
{if-A:not isN("[vod:remarks]")}
   [vod:remarks]
{elseif-A:[vod:state]=0}
   [完结]
{elseif-A:[vod:state]>0}
{if-B:[vod:state]>10000}
[连载[vod:state]]期
{else-B}
[连载[vod:state]]集
{endif-B}
{else-A}
{endif-A}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">用户登陆页面标签</p>
                <pre class="c-p">
用户登录窗口iframe调用:
src="{maccms:path}index.php?m=user-iframe.html"
特有标签:
{maccms:userid}        会员ID
{maccms:username}      会员名
{maccms:userqq}        QQ号码
{maccms:useremail}     email地址
{maccms:userphone}     电话
{maccms:userregtime}   注册时间
{maccms:userpoints}    剩余点数
{maccms:userlogintime}   最后登录时间
{maccms:userloginnum}    总登录次数
{maccms:usertj}          推荐人数
{maccms:usergroupid}     会员组ID
{maccms:usergroupname}   会员组名称
{maccms:userloginip}     最后登录IP
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">友情链接标签</p>
                <pre class="c-p">
参数:
type:友情链接类型 font表示文字,pic表示图片
        num: 获取数据条数
例:
{maccms:link type=pic num=2}
[link:num]序号
[link:name]名称，支持长度控制[link:name len=10]
[link:link]地址
[link:pic]图片
{/maccms:link}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">留言本标签</p>
                <pre class="c-p">
参数:
num:数据条数  默认值10，非分页时使用
pagesize:每页数据条数,分页时使用
by:数据排序依据 id,time
例:
{maccms:gbook num=10 order=desc by=time}
[gbook:num]      排序位
[gbook:numfill] 自动补位序号，个位数前补0
[gbook:numjoin] 如使用start参数，则自动从start开始计数
[gbook:id]      编号id
[gbook:name]    留言昵称
[gbook:content] 留言内容
[gbook:reply]   回复内容
[gbook:ip]      留言者IP
[gbook:time]    留言时间
[gbook:replytime] 回复时间
[gbook:color]     随机颜色
{/maccms:gbook}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">评论标签</p>
                <pre class="c-p">
参数:
num:数据条数  默认值10，非分页时使用
pagesize:每页数据条数,分页时使用
by:数据排序依据 id,time
例:
{maccms:comment num=10 order=desc by=time}
[comment:num]      排序位
[comment:numfill] 自动补位序号，个位数前补0
[comment:numjoin] 如使用start参数，则自动从start开始计数
[comment:id]      编号id
[comment:name]    评论昵称
[comment:content] 评论内容
[comment:ip]      评论者IP
[comment:time]    评论时间
[comment:color]   随机颜色
{/maccms:comment}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">数据区域块标签(首页、地图页的栏目块双层循环)</p>
                <pre class="c-p">
参数:
type: all获取所有分类包含父子，parent获取所有父分类，child获取所有子分类, 1,2,3 指定分类id
by:数据排序依据 id,sort 默认sort
order: 数据排序方式 desc(倒序) asc (正序)
table:必有参数vod则调用视频分类,art调用文章分类。
例: 调用视频分类
{maccms:matrix type=1,2,6 table=vod}
[matrix:num]:序号
[matrix:id]:id
[matrix:name]:名称
[matrix:title]:seo标题
[matrix:key]:seo关键字
[matrix:des]:seo描述
[matrix:count]:包含数据量
[matrix:link]:链接
   {maccms:vod num=5 type=[matrix:id] start=1 order=desc by=time}
   {/maccms:vod}
{/maccms:matrix}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">分类标签(视频，文章通用)</p>
                <pre class="c-p">
参数:
type:all获取所有分类包含父子，parenet获取所有父分类，child获取所有子分类 ,auto 在分类页、搜索页使用（将进入分类筛选页面和搜索筛选页，自动筛选一二级分类）
by:数据排序依据 id,sort 默认sort
order: 数据排序方式 desc(倒序) asc (正序)
parent: 父栏目ID, 0表示所有顶级栏目, 具体id表示调用指定分类的子分类菜单
num:取分类数目，按照排序顺序。 6表示取得排序前6个分类。
table:必有参数vod则调用视频分类,art调用文章分类。
例:视频单级别分类调用:
{maccms:menu type=parent order=asc table=vod}
[menu:num]:序号
[menu:id]:id
[menu:pid]:父分类id
[menu:name]:名称
[menu:key]:seo关键字
[menu:des]:seo描述
[menu:title]:seo标题
[menu:link]:链接
{/maccms:menu}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">专题列表标签(视频，文章通用)</p>
                <pre class="c-p">
参数:
num:数据条数  默认值10，非分页时使用
pagesize:每页数据条数,分页时使用
id:all表示调出所有专题;id为指定专题ID表示调出某个专题;调出指定多个专题使用英文逗号隔开;默认值为all
by:数据排序依据 id,hits总点击,dayhits日点击,weekhits周点击,monthhits月点击,addtime添加时间,time更新时间,up顶,down踩
order: 数据排序方式 desc(倒序) asc (正序)
table:必有参数vod则调用视频专题,art调用文章专题
例:
{maccms:topic num=3 id=all/特定值/1,3 table=vod}
[topic:num]      排序位
[topic:numfill] 自动补位序号，个位数前补0
[topic:numjoin] 如使用start参数，则自动从start开始计数
[topic:id]      编号id
[topic:name]    专题名称,支持长度控制 len
[topic:count]   专题包含的影片数量
[topic:pic]     专题图片
[topic:sort]    专题排序号
[topic:link]    专题链接
[topic:key]     专题seo关键字
[topic:des]     专题seo描述
[topic:title]   专题seo标题
[topic:level]     推荐值
[topic:hits]       总人气
[topic:dayhits]    日人气
[topic:weekhits]   周人气
[topic:monthhits]  月人气
[topic:addtime]     添加时间:可控时间格式 yy-m-d ,y-m-d , m-d
[topic:time]        更新时间:可控时间格式 yy-m-d ,y-m-d , m-d
[topic:content]     专题描述,支持长度控制 len
[topic:contenttext] 过滤html代码后专题描述
[topic:remarks]     专题备注
[topic:link]        专题链接
{/maccms:topic}
特有标签：
{page:hits}     动态载入专题的点击量
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">剧情小分类标签(视频)</p>
                <pre class="c-p">
参数:
type:指定视频顶级分类ID ,auto 在分类页、搜索页使用（将进入分类筛选页面和搜索筛选页，自动筛选一二级分类）
by:数据排序依据 id,sort 默认sort
order: 数据排序方式 desc(倒序) asc (正序)
id: 指定小分类id。多个用逗号连接1,2,3,4
num:取分类数目，按照排序顺序。 6表示取得排序前6个分类。
例:调用ID为1的视频顶级分类的下的 所有剧情分类:
{maccms:class type=1 order=asc}
[class:num]:序号
[class:id]:id
[class:pid]:父分类id
[class:name]:名称
[class:link]:链接
{/maccms:class
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频地区、语言、年代标签</p>
                <pre class="c-p">
<textarea style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:620px;border:none">
  地区标签参数：
order: 排序desc倒序，asc正序
        type:auto时，分类筛选、搜索页面使用、自动补齐筛选参数
{maccms:area order=desc type=auto}
[area:num] 排序位
[area:name] 地区名称
[area:link] 搜索链接地址
{/maccms:area}
例如：
{maccms:area order=desc type=auto}
<a target="_blank" href="[area:link]">[area:name]</a>
{/maccms:area}
语言标签参数：
order:排序desc倒序，asc正序
type:auto时，分类筛选、搜索页面使用、自动补齐筛选参数
{maccms:lang order=desc}
[lang:num] 排序位
[lang:id] 语言id
[lang:name] 语言名称
[lang:link] 搜索链接地址
{/maccms:lang}
例如：
{maccms:lang order=desc type=auto}
<a href="[lang:link]">[lang:name]</a>
{/maccms:lang}
年代标签参数：
order:排序desc倒序，asc正序
start:起始年代
end:结束年代
type:auto时，分类筛选、搜索页面使用、自动补齐筛选参数
例如：
{maccms:year order=desc type=auto start=2000 end=2012}
<a href="[year:link]">[year:name]</a>
{/maccms:year}
</textarea>
                </pre>
              </div>

              <div class="c-d mt40">
                <p class="c-t">视频搜索参数和标签详解</p>
                <pre class="c-p">
参数详解:
wd:名称或主演
ids:数据id支持多个逗号分割 1,2,3
letter:首字母
pinyin:拼音
starring:主演
directed:导演
area:地区
lang:语言
year:上映日期
typeid:所属分类
classid:所属剧情分类
order:排序 desc(倒序) asc (正序)
by:排序字段
例如：
index.php?m=vod-search-wd-火影   搜索名称为火影的数据
index.php?m=vod-search-ids-123,567      搜索数据id为 123和567的数据，可以多条，逗号分割
index.php?m=vod-search-starring-刘德华   搜索主演为刘德华的数据
index.php?m=vod-search-letter-A      搜索首字母为A的数据
index.php?m=vod-search-typeid-1-wd-海贼   搜素分类ID为1下属的名称为海贼的数据
index.php?m=vod-search-wd-火影-order-desc-by-hits   搜索名称为火影的数据按照 总人气倒序排列
支持标签:
{page:key}       搜索关键字
{page:des}       搜索关键字描述
{page:wd}        搜索的名称
{page:wdencode}  url编码后的名称
{page:pinyin}    搜索的拼音
{page:letter}    搜索的首字母
{page:starring}        搜索的主演
{page:starringencode}  url编码后的主演
{page:directed}        搜索的导演
{page:directedencode}  url编码后的导演
{page:area}            搜索的地区
{page:areaencode}      url编码后的地区
{page:language}        搜索的语言
{page:languageencode}  url编码后的语言
{page:year}      搜索的年代
{page:typeid}    搜索的分类id
{page:now}         当前页数
{page:datacount}   搜索结果总数量
{page:size}        搜索结果每页显示数量
{page:count}       搜索数据分页总数
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">分类列表页参数详解</p>
                <pre class="c-p">
参数详解:
id:分类id
pg:页码
支持标签:
{page:id}     当前分类id
{page:pid}    当前分类的父级id
{page:name}   当前分类名称
{page:name}   当前分类拼音名称
{page:key}    当前分类seo关键字
{page:des}    当前分类seo描述
{page:title}  当前分类seo标题
{page:link}   当前分类链接
{page:textlink}    当前位置导航链接  例如当前位置:首页  >>  电影 >> 动作片
{page:linkbytime}  进入分页筛选页面，按照时间排序链接
{page:linkbyhits}  进入分页筛选页面，按照人气排序链接
{page:linkbyscore} 进入分页筛选页面，按照评分排序链接
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频分类筛选页参数详解</p>
                <pre class="c-p">
参数详解:
id:数据id
pg:页码
letter:首字母
area:地区
lang:语言
year:上映日期
order:排序 desc(倒序) asc (正序)
by:排序字段 time时间,hits点击,score评分
例如:
index.php?m=vod-list-id-5-pg-1-order-desc-by-hits-year-2013-letter-B-area-大陆-lang-国语
筛选分类为5，第1页，倒序，按人气排序，2013年上映，首字母B，地区大陆，语言国语
支持标签:
{page:id}     当前分类id
{page:pid}    当前分类的父级id
{page:name}   当前分类名称
{page:name}   当前分类拼音名称
{page:key}    当前分类seo关键字
{page:des}    当前分类seo描述
{page:title}  当前分类seo标题
{page:link}   当前分类链接
{page:textlink} 当前位置导航链接  例如当前位置:首页  >>  电影 >> 动作片
{page:year}      筛选参数-上映年代
{page:lang}          筛选参数-语言
{page:langencode}    筛选参数-语言url编码
{page:area}          筛选参数-地区
{page:areaencode}    筛选参数-地区url编码
{page:letter}    筛选参数-首字母
{page:classid}  剧情分类id
{page:classname}  剧情分类名称
{page:linkyear}    筛选链接-年代-全部
{page:linkletter}  筛选链接-首字母-全部
{page:linkarea}    筛选链接-地区-全部
{page:linklang}    筛选链接-语言-全部
{page:linkbytime}  筛选链接-按照时间排序
{page:linkbyhits}  筛选链接-按照人气排序
{page:linkbyscore} 筛选链接-按照评分排序
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">分页标签详解</p>
                <pre class="c-p">
<textarea style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:200px;border:none">
  分页标签可用在，首页、分类页、筛选页、专题首页、专题数据列表、搜索页、文章内容页、留言本、评论
参数详解:
len:显示几个数字链接
linktype:分类类型,只在首页分页时用到linktype=index
请自行在模版的css样式表中设计分页样式
例如:
<div class="page">{maccms:pages len=6}</div>
解析后:
<div class="page">共10002条数据 当前:1/834页 <em>首页</em> <em>上一页</em> <span class="pagenow">1</span> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-2.html">2</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-3.html">3</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-4.html">4</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-5.html">5</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-6.html">6</a> <a target="_self" href="?m=vod-type-id-1-pg-2.html" class="pagelink_a">下一页</a> <a target="_self" href="?m=vod-type-id-1-pg-834.html" class="pagelink_a">尾页</a> <input type="input" name="page" id="page" size="4" class="pagego"><input type="button" value="跳 转" onclick="pagego('?m=vod-type-id-1-pg-{pg}.html',834)" class="pagebtn"></div>
</textarea>
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频列表标签</p>
                <pre class="c-p">
num:数据条数  默认值10，非分页时使用
pagesize:每页数据条数,分页时使用
state: 影片连载 series(连载)
level：推荐种类 1,2,3,4,5 /all
by:数据排序依据 id,addtime添加时间,time更新时间,hits总点击,dayhits日点击,weekhits周点击,monthhits月点击,level推荐值,up顶数,down踩数,score评分,scoreall评分总数,scorenum评分次数, rnd随机数据
order: 数据排序方式 desc(倒序) asc (正序)
type:数据所在分类,可调出多个分类数据,如 1,2,3/all,current列表页当前分类,默认为全部
topic:指定专题 1,2,3/all可调多个  默认无
start:起点位置  1  默认1
day: 单天数据, 0当天数据. 1表示昨天的数据，2表示前天的数据
days:截止到今日数据， 0当天数据，1昨天到今天的数据，2前天到今天的数据
year:上映年代   2014
area: 所属地区   港台
lang: 所属语言   粤语
letter: 首字母   B
starring:调用主演的数据，如starring=刘德华
similar:调用相似相关数据 starring主演相似，directed导演相似、tag相似、name名称相似
label:自定义页面名称，不带label_前缀,如 hot.html； 只在自定义页面中使用，可生成自定义页面的分页.
maxpage:自定义页面中，最大分页数量。
例如:
{maccms:vod num=15 order=desc by=time type=all topic=1,2,3 level=1,2 start=5 area=大陆 lang=粤语 letter=A}
[vod:num] 序号
[vod:numfill] 自动补位序号，个位数前补0
[vod:numjoin] 如使用start参数，则自动从start开始计数
[vod:id] 编号
[vod:name] 名称:可控长度
[vod:encodename] 名称:urlencode编码，可用于搜索
[vod:colorname] 带颜色名称:可控长度
[vod:subname] 副标名称:可控长度
[vod:enname] 拼音名:可控长度
[vod:ennamelink] 拼音名搜索链接
[vod:letter] 首字母
[vod:letterlink] 首字母搜索链接
[vod:state]  状态
[vod:color]  颜色
[vod:pic]  图片
[vod:picthumb]  缩略图片
[vod:picslide]  幻灯图片
[vod:tag]     TAG
[vod:taglink]  TAG链接
[vod:starring] 主演:可控长度
[vod:starringlink] 主演搜索链接
[vod:directed] 导演:可控长度
[vod:directedlink] 导演搜索链接
[vod:year] 发行日期
[vod:yearlink] 发行日期搜索链接
[vod:area] 发行地区
[vod:arealink] 发行地区搜索链接
[vod:language] 发行语言
[vod:languagelink] 语言搜索链接
[vod:level]  推荐值
[vod:stint] 播放每集所需积分
[vod:stintdown] 下载每集所需积分
[vod:hits]  总点击量
[vod:dayhits]  今天点击量
[vod:weekhits]  本星期点击量
[vod:monthhits]  本月点击量
[vod:content]  描述:可控长度
[vod:contenttext]  过滤html后的描述:可控长度
[vod:remarks]备注
[vod:good] 顶数
[vod:bad] 踩数
[vod:score] 平局分
[vod:scoreall]  总评分数
[vod:scorenum] 评分次数
[vod:duration] 数据播放时长
[vod:addtime style=y-m-d]  添加时间:可控时间格式 yy-m-d ,y-m-d , m-d
[vod:time style=y-m-d]  更新时间:可控时间格式 yy-m-d ,y-m-d , m-d
[vod:from] 播放类型
[vod:fromdown] 下载类型
[vod:link] 链接
[vod:playlink] 播放链接，默认是第1组播放器的第1条数据
[vod:playlinks] 播放链接组，所有播放组的第1条数据链接
[vod:downlink] 下载链接，默认是第1组下载器的第1条数据
[vod:downlinks] 下载链接组，所有下载组的第1条数据链接
[vod:type] 分类ID
[vod:typepid]  父分类ID
[vod:typelink] 父分类链接
[vod:typepname]  父分类名
[vod:typepenname]  父分类拼音名
[vod:typepkey]  父分类seo关键字
[vod:typepdes]  父分类seo描述
[vod:typeptitle]  父分类seo标题
[vod:typelink] 分类链接
[vod:typeexpandlink] 扩展分类链接
[vod:typename]  分类名
[vod:typeenname]  分类拼音名
[vod:typekey]  分类seo关键字
[vod:typedes]  分类seo描述
[vod:typetitle]  分类seo标题
[vod:classname] 剧情分类名称，多个用空格连接
[vod:classlink] 剧情分类链接，多个用空格连接
[vod:topiclink]  专题链接
[vod:userfav]   用户收藏链接
{/maccms:vod}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">视频内容页、播放页标签</p>
                <pre class="c-p">
<textarea style="overflow-y:hidden;font-size: 16px;color: #666;width:100%;height:1670px;border:none">
调用当前视频数据的标签，同vod标签, 例如[vod:id]  [vod:name]
支持标签:
[vod:comment] 评论
[vod:hits] 动态载入点击量并更新点击量，如不使用该标签点击量将不会增加
[vod:fav] 收藏到浏览器链接
[vod:share] 分享当前地址链接，复制到剪切板
[vod:error] 报错链接
[vod:digg] 顶踩功能
[vod:history] 历史记录标签，使用该标签才会记录浏览历史，否则不记录
[vod:scoremark1]  星星评分功能
[vod:scoremark2]  普通评分功能
[vod:prelink] 上一条记录
[vod:nextlink] 下一跳记录
[vod:textlink] 当前位置导航链接  例如当前位置:首页  >>  电影 >> 动作片 >> 火影忍者
播放页特有标签:
[vod:playerinfo]
[vod:player]      这2个是播放器代码，必须有。
-------------------非静态单播放页模式可以用标签--------------
[vod:playnum]  当前第几集
[vod:playname]  当前集数名称
[vod:playurlpath]  当前播放数据的真实播放地址
[vod:playfrom]  当前播放数据的来源标记  例如：youku
[vod:playshow] 当前播放数据的来源显示名称 例如：优酷视频
-------------------------------------------------------------
下载页特有标签:
[vod:downinfo]
[vod:downer]    这2个是必须调用的代码。
-------------------非静态单下载页模式可以用标签--------------
[vod:downnum]      当前第几集
[vod:downname]     当前集数名称
[vod:downurlpath]  当前数据的真实播放地址
[vod:downfrom]     当前数据的来源标记  例如：xunlei
[vod:downshow] 当前数据的来源显示名称 例如： 迅雷下载
-------------------------------------------------------------
播放列表标签，下载列表标签
参数:
from:current 在播放页面可以只获取当前组的列表,不能用在静态模式生成单页中。
{maccms:play}
[play:num] 序号
[play:count] 共有几组播放地址
[play:urlcount] 当前播放租共有多少条播放地址
[play:from] 播放组来源
[play:sort] 播放组排序号
[play:tip] 播放组提示说明
[play:show] 播放组名称
[play:server] 播放组-服务器组名称
[play:serversort] 播放组-服务器组排序号
[play:serverurl] 播放组-服务器组地址
[play:servertip] 播放组-服务器组提示信息
{maccms:url order=desc}     desc倒序,  asc正序
[url:num] 顺序号
[url:name]集数名称
[url:link]播放链接
[url:path]播放片源地址
        {/maccms:url}
{/maccms:play}
模式2：竖排显示
{maccms:play type=mode2 order=asc}
<li><span>[play:num].[play:name]</span>
{maccms:url order=asc}
<a class="play_ico play_ico_[url:from]" title="[url:name]" href="[url:link]">  </a>
{/maccms:url}
</li>
{/maccms:play}
显示效果是：每一行显示添加的所有播放组
第一集： 优酷 土豆 快播 百度
第二集： 优酷 土豆 快播 百度
备注：
此模式建议关闭播放器的头部和列表，以达到最佳显示效果。
添加时候的时候需要注意，需要某组播放器的某集数据暂缺的话，请把当前集数的地址设置为no，正常数据的[url:from]为播放类型如youku,baidu，暂缺数据的播放类型+no如youkuno,qvodno, 用此来区别显示图片。
系统默认模板那只了这套模式的图片和css，play_mode2.css , play_mode2.gif 有需要的可自行修改。
参数:
from:current 在播放页面可以只获取当前组的列表,不能用在静态模式生成单页中。
{maccms:down}
[down:num] 序号
[down:count] 共有几组播放地址
[down:urlcount] 当前播放租共有多少条播放地址
[down:from] 播放组来源
[down:sort] 播放组排序号
[down:tip] 播放组提示说明
[down:show] 播放组名称
[down:server] 播放组-服务器组名称
[down:serversort] 播放组-服务器组排序号
[down:serverurl] 播放组-服务器组地址
[down:servertip] 播放组-服务器组提示信息
{maccms:url order=desc}     desc倒序,  asc正序
[url:num] 顺序号
[url:name] 集数名称
[url:link] 下载链接
[url:path] 下载片源地址
        {/maccms:url}
{/maccms:down}
</textarea>
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">文章分类列表页参数详解</p>
                <pre class="c-p">
参数详解:
id:分类id
pg:页码
支持标签:
{page:id}     当前分类id
{page:pid}    当前分类的父级id
{page:name}   当前分类名称
{page:name}   当前分类拼音名称
{page:key}    当前分类seo关键字
{page:des}    当前分类seo描述
{page:title}  当前分类seo标题
{page:link}   当前分类链接
{page:textlink}    当前位置导航链接  例如当前位置:首页  >>  电影 >> 动作片
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">文章列表标签</p>
                <pre class="c-p">
参数：
    num:数据条数  默认值10，非分页时使用
pagesize:每页数据条数,分页时使用
by:数据排序依据 id,hits总点击,dayhits日点击,weekhits周点击,monthhits月点击,addtime添加时间,time更新时间
order: 数据排序方式 desc(倒序) asc (正序)
start:起点位置  1  默认1
        type:文章分类id  1,2/all
topic:文章专题id   1,2/all
day: 单天数据, 0当天数据. 1表示昨天的数据，2表示前天的数据
days:截止到今日数据， 0当天数据，1昨天到今天的数据，2前天到今天的数据
similar:调用相似相关数据 tag相似、name名称相似
letter: 首字母
level：推荐种类 1,2,3,4,5 /all
例:
{maccms:art num=3 order=desc by=time type=1}
[art:num]       排序位
[art:numfill]   自动补位序号，个位数前补0
[art:numjoin]   如使用start参数，则自动从start开始计数
[art:id]        编号id
[art:name]      标题:可控长度
[art:encodename]  url编码后的标题
[art:enname]    拼音标题:可控长度
[art:letter]    首字母
[art:subname]     副标题:可控长度
[art:colorname]   带颜色标题:可控长度
[art:from]      来源
[art:content]   内容
[art:contenttext] 过滤html代码后内容
[art:author]    作者
[art:color]     颜色
[art:level]     推荐值
[art:hits]       总人气
[art:dayhits]    日人气
[art:weekhits]   周人气
[art:monthhits]  月人气
[art:addtime]   添加时间:可控时间格式 yy-m-d ,y-m-d , m-d
[art:time]      更新时间:可控时间格式 yy-m-d ,y-m-d , m-d
[art:pic]       图片
[art:type]      分类ID
[art:typepid]   父分类ID
[art:typepname]   父分类名称
[art:typeplink]   父分类链接
[art:typepkey]    父分类seo关键字
[art:typepdes]    父分类seo描述
[art:typeptitle]  父分类seo标题
        [art:typename]   分类名称
[art:typelink]   分类链接
[art:typekey]    分类seo关键字
[art:typedes]    分类seo描述
[art:typetitle]  分类seo标题
[art:link]      链接
{/maccms:art}
                </pre>
              </div>
              <div class="c-d mt40">
                <p class="c-t">文章内容页标签</p>
                <pre class="c-p">
调用当前视频数据的标签，同art标签, 例如[art:id]  [art:name]
[art:comment]     评论
[art:hits]        动态载入点击量并更新点击量，如不使用该标签点击量将不会增加
[art:prelink]     上一条记录
[art:nextlink]    下一条记录
[art:fav]         收藏到浏览器链接
[art:share]       分享当前地址链接，复制到剪切板
[art:digg]        顶踩功能
[art:prelink]     上一条记录
[art:nextlink]    下一跳记录
[art:textlink]    当前位置导航链接  例如当前位置:首页  >>  新闻 >> 第一条文章
                </pre>
              </div>
            </div>
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
            <div v-if="activeNav == 4">
              <div class="c-d">
                <p class="c-t">更新日志</p>
                <p class="c-p" style="margin-top: 30px">
                  <el-timeline>
                    <el-timeline-item
                      :timestamp="item.timestamp"
                      placement="top"
                      v-for="(item, i) of logListV8"
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
        </div>
      </div>
    </div>
    <commonFoot />
    </div>
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
      whyTxt:'<h3 class="layui-code-h3">code</h3><ol class="layui-code-ol">',
      verList: [ "v10", "v8"],
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
      logListV8: [
        {
          timestamp: "2020.1026",
          type: "multiple",
          list: [
            "1，加强后台表单token安全验证，防止跨站攻击。",
            "2，修复支持php7.2+。",
            "3，优化后台挂马清理功能。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2020.1023",
          type: "multiple",
          list: [
            "1，新增全局解析接口配置和player/parse.js文件。",
            "2，新增独立解析接口配置。",
            "3，优化播放器代码player.js,playerconfig.js.bak务必替换并更新缓存。",
            "4，优化点击量更新。",
            "5，其他细节",
          ],
        },
        {
          timestamp: "2020.1022",
          type: "multiple",
          list: [
            "1，优化mysql5.7+安装问题。",
            "2，优化php7.2+使用问题。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2020.1021",
          type: "multiple",
          list: [
            "1，修复站群模式下页面缓存冲突的问题。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2020.1018",
          type: "multiple",
          list: [
            "1，新增memcached缓存配置。",
            "2，入库接口支持subname副标字段入库。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2020.1017",
          type: "multiple",
          list: [
            "1，修复选择多个数据操作失败的问题。",
            "2，安装时默认站外入库密码改为随机10位。",
            "3，其他细节",
          ],
        },
        {
          timestamp: "2020.1015",
          type: "multiple",
          list: [
            "1，修复生成的拼音中丢失数字的问题。",
            "2，优化if标签解析防止死循环。",
            "3，优化采集入库过滤防止if标签入库(后台和定时任务)。",
            "4，优化后台参数配置-常用新增安全过滤字段功能配置，改为默认开启状态。",
            "5，优化后台挂马检测清理新型if后门。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2020.1010",
          type: "multiple",
          list: [
            "1，修复preg_match另一个原因引起的注入问题。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2020.1006",
          type: "multiple",
          list: [
            "1，修复上次升级在线更新导致低版本php报错的问题。",
            "2，加强后台安全限制防止写入不安全内容。",
            "3，前台标签和api接口将自动过滤html和if标签。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2019.1003",
          type: "multiple",
          list: [
            "1，修复php函数preg_match字符串过长引起的安全过滤脚本失效的问题。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2019.1002",
          type: "multiple",
          list: [
            "1，修复自动生成tag的问题。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2019.1001",
          type: "multiple",
          list: [
            "1，修改更新服务地址。",
            "2，新增加自定义资源库管理。",
            "3，整合站群插件。",
            "4，其他细节",
          ],
        },
        {
          timestamp: "2018.10.30",
          type: "multiple",
          list: [
            "1，优化数据库挂马清理功能。",
            "2，视频编辑页面新增获取豆瓣数据信息。",
            "3，微信对接新增返回搜索页面。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2018.10.13",
          type: "multiple",
          list: [
            "1，应对微信公共号最新规则，提供图文(1条)、文字(最多20条)两种返回方案，后台可配置。",
            "2，修复后台https时不显示官方更新提示的问题。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2018.10.08",
          type: "multiple",
          list: [
            "1，修复使用远程存储图片时微信接口显示图片的问题，并且本地图片自适应http和https协议。",
            "2，优化后台数据库挂马检测功能。",
            "3，修复定时任务边采集边同步图片的问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2018.09.25",
          type: "multiple",
          list: [
            "1，修复部分环境下配置定时任务报错的问题。",
            "2，新增json格式api接口v10可用。",
            "3，修复上个版本边采集边同步图片有时候会重复的问题。",
            "4，新增数据库挂马代码检测功能，可减轻新手查杀数据库挂马的工作。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2018.09.18",
          type: "multiple",
          list: [
            "1，调整API解析xml的方式增强兼容性。",
            "2，更新安全拦截脚本。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2018.09.13",
          type: "multiple",
          list: [
            "1，调整将所有展示到模板里的数据名称过滤掉html元素展示，减少挂马影响，包括分类名、专题名等等。",
            "2，很多站长还在用18年之前的版本，鉴于安全考虑，请更新到最新版本。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2018.08.10",
          type: "multiple",
          list: [
            "1，累积性更新。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2018.02.04",
          type: "multiple",
          list: [
            "1，修改采集资源库时将过滤html避免被挂暗链。",
            "2，修改入口文件逻辑判断。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2017.09.27",
          type: "multiple",
          list: [
            "1，修复采集插件兼容性问题。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2017.06.26",
          type: "multiple",
          list: [
            "1，修复自动生成tags的问题。",
            "2，修复生成静态页面和定时生成当天数据的问题。",
            "3，优化安全过滤，防止误拦截。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2017.05.05",
          type: "multiple",
          list: [
            "1，全面支持PHP7+内核，运行速度更快。",
            "2，优化安全过滤，防止误拦截。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2017.04.30",
          type: "multiple",
          list: [
            "1，优化程序安全过滤，增强防范，减少误拦截。",
            "2，其他细节。",
          ],
        },
        {
          timestamp: "2017.04.07",
          type: "multiple",
          list: [
            "1，播放器宽度支持自适应 0为自适应。",
            "2，增加手机播放器宽度和高度设置。",
            "3，增加手机模板自动显示功能。",
            "4，增加API收费选项。",
            "5，增加微信公共号接口。",
            "6，修复https图片不显示的问题。",
            "7，修复1处安全漏洞，重要！",
            "8，注意：由于新增配置项，更新后请进入后台保存【播放器设置-输入手机播放大小】【站点设置】。",
          ],
        },
        {
          timestamp: "2017.02.04",
          type: "multiple",
          list: [
            "1，重要更新，修复一处安全隐患。",
            "2，优化系统过滤脚本。",
            "3，修复文章搜索筛选条件不起作用的问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2017.01.25",
          type: "multiple",
          list: [
            "1，修复模板解析的一处问题。",
            "2，修复火车头接口的一处问题。",
            "3，为了安全，限制必须修改后台默认admin目录名。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2016.11.30",
          type: "multiple",
          list: [
            "1，搜索支持副标题模糊查询。",
            "2，url的参数自动去除前后空格。",
            "3，火车头发布数据自动生成html静态文件。",
            "4，修复联盟资源采集，火车头采集不覆盖图片的问题。",
            "5，其他细节",
          ],
        },
        {
          timestamp: "2015.05.30",
          type: "multiple",
          list: [
            "1，修复重要安全补丁，请务必更新！。",
            "2，修复上次更新出现的问题。",
          ],
        },
        {
          timestamp: "2015.05.23",
          type: "multiple",
          list: [
            "1，累计更新修复部分bug。",
            "2，优化安全脚本，增强sql注入检测拦截，增强安全性。",
          ],
        },
        {
          timestamp: "2015.04.10",
          type: "multiple",
          list: [
            "1，优化部分sql语句，提高查询效率。",
            "2，优化vod、art的similar参数，可按name调用相似数据，可在视频调用相似名称的文章。",
            "3，优化静态生成功能，避免显示超时。",
            "4，修改播放器禁用后前台不显示播放组，后台显示【禁用】字样。",
            "5，增加泥巴影音播放器。",
            "6，增加[vod:classname]调用剧情分类，只显示名称。",
            "7，修复已知BUG。",
            "8，其他细节的调整。",
            "9，注意：更新完毕后，请点击【 更新数据缓存 】。",
          ],
        },
        {
          timestamp: "2015.02.09",
          type: "multiple",
          list: [
            "1，修复vod标签topic参数解析失败的问题。",
            "2，修复用户组权限判断的问题。",
            "3，修复后台编辑视频，可看用户组显示不正确的问题。",
            "4，修复用户推广可以刷分的问题。",
            "5，修复开启缓存时文章分页只显示第一页内容的问题。",
            "6，新增vod标签调用相似相关数据的similar参数，支持tag、主演、导演。",
            "7，优化站外入库脚本，增强容错能力。",
            "8，采集参数配置二次更新规则增加副标题选项。",
            "9，其他细节的调整。",
            ],
        },
        {
          timestamp: "2015.01.24",
          type: "multiple",
          list: [
            "1，修复自定义视频和文章首页静态文件名不启作用的问题。",
            "2，修复同步远程图片每目录保存500文件不启作用的问题。",
            "3，修复定时生成脚本xml和rss报错的问题。",
            "4，修复保存统计代码的问题。",
            "5，集数列表标签(play,down)更新，支持多组播放器并排横版排列模式，参数type=mode2。",
            "6，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.12.02",
          type: "multiple",
          list: [
            "1，修复前台某些操作提示quote的错误。",
            "2，修复播放页面评论显示的问题。",
            "3，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.11.17",
          type: "multiple",
          list: [
            "1，增强安全性，修复某个sql注入漏洞。",
            "2，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.11.07",
          type: "multiple",
          list: [
            "1，新增播放地址和下载地址区域的批量上传附件功能。",
            "2，修复[vod:playfrom][vod:playshow]标签显示的问题。",
            "3，修复更新采集和定时采集文件。",
            "4，评论管理点击显示所属数据。",
            "5，后台登录验证由cookie改为session。",
          ],
        },
        {
          timestamp: "2014.10.18",
          type: "multiple",
          list: [
            "1，新增肥佬影音、非凡影音播放器。",
            "2，更新采集类型转换，避免联盟资源库采集的数据播放类型转换失败。",
            "3，更新定时任务采集脚本，支持采集多页。",
            "4，link、 menu 、class 标签支持num参数（限制调用数量）。",
            "5，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.10.10",
          type: "multiple",
          list: [
            "1，修复 搜狐，搜狐高清，风行，pptv 播放器。",
            "2，新增迅雷看看调用看看客户端播放器。",
            "3，更新360防护脚本，修复一个sleep函数注入引发mysql拒绝服务的漏洞。",
            "4，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.09.21",
          type: "multiple",
          list: [
            "1，修复后台视频管理地区和语言筛选的问题。",
            "2，修复用户中心密码可以为空的问题。",
            "3，修复视频下载地址服务器组无法保存的问题。",
            "4，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.08.30",
          type: "multiple",
          list: [
            "1，修复静态生成当天文章提示无数据的问题。",
            "2，修复搜索页面的一个sql注入漏洞。",
            "3，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.08.09",
          type: "multiple",
          list: [
            "1，修复备份数据库无法备份class剧情分类表的问题。",
            "2，修复开启缓存后剧情分类筛选显示同样内容的问题。",
            "3，其他细节的调整。",
          ],
        },
        {
          timestamp: "2014.07.18",
          type: "multiple",
          list: [
            "1，修复一个xss跨站脚本漏洞。",
            "2，修改播放器代码，避免被360拦截。",
          ],
        },
        {
          timestamp: "2014.07.16",
          type: "multiple",
          list: [
            "1，部分代码细节的调整。",
          ],
        },
        {
          timestamp: "2014.07.14",
          type: "multiple",
          list: [
            "1，站点配置新增搜索时间间隔配置项。",
            "2，修复批量生成数据时内容页面会被下载页面覆盖的问题。",
            "3，其他细节调整。",
          ],
        },
        {
          timestamp: "2014.07.06",
          type: "multiple",
          list: [
            "1，修复站外入库遇到多个大分类下有重复名称时剧情小分类入库的问题。",
          ],
        },
        {
          timestamp: "2014.07.02",
          type: "multiple",
          list: [
            "1，修复一个在缓存目录下创建任意目录的漏洞。",
          ],
        },
        {
          timestamp: "2014.06.27",
          type: "multiple",
          list: [
            "1，优化sql注入防护脚本，防止多个注入漏洞。",
          ],
        },
        {
          timestamp: "2014.06.02",
          type: "multiple",
          list: [
            "1，部分细节处理。",
          ],
        },
        {
          timestamp: "2014.06.01",
          type: "multiple",
          list: [
            "1，部分细节处理。",
          ],
        },
        {
          timestamp: "2014.05.23",
          type: "multiple",
          list: [
            "1，紧急修复多个系统漏洞，包含多个SQL注入和后台getshell问题。",
            "2，修复开启自动生成缩略图后部分图片出错的问题。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2014.05.14",
          type: "multiple",
          list: [
            "1，修复调用小分类标签链接不对的问题。",
            "2，增加视频批量操作功能，可批量删除和设置数据。",
            "3，站外入库接口增加剧情分类d_class字段。",
            "4，搜索页面{page:class}修改为{page:classid}。",
            "5，其他细节。",
          ],
        },
        {
          timestamp: "2014.05.10",
          type: "multiple",
          list: [
            "1，开放剧情小分类功能。",
            "2，开源部分代码，方便大家二次开发。",
            "3，其他细节。",
          ],
        },
        {
          timestamp: "2014.05.01",
          type: "multiple",
          list: [
            "1，修复生成百度、谷歌地图时间不对的问题。",
            "2，修复开启缓存时评论留言本显示的问题。",
            "3，新增{maccms:php type=code} 标签支持页面内嵌入php代码。",
            "4，修复报错功能，在留言管理中可看到。",
          ],
        },
        {
          timestamp: "2014.04.16",
          type: "multiple",
          list: [
            "1，优化vod和art的day参数，改为day和days两个参数，day调用指定某1天的数据，days调用指定某天以来的数据。",
            "2，新增[vod:playlinks]和[vod:downlinks]标签，可以显示出所有的播放组链接。",
            "3，修复部分环境下数据库管理的备份列表只显示1个的问题。",
            "4，修复qq登陆后，登陆框还是显示登录不切换显示的问题。",
            "5，升级播放地址功能，可在一个播放组里添加不同类型的数据，例如可以在优酷播放组里添加土豆、快播数据。播放地址支持2段或3段格式： 集数名称$播放地址$指定播放类型。",
            "6，新增加西瓜影音和先锋影音播放器。",
            "7，修复迅播gvod播放器。",
          ],
        },
        {
          timestamp: "2014.04.06",
          type: "multiple",
          list: [
            "1，采集配置增加是否开启随机评分功能。",
            "2，修复恢复分卷数据库的功能。",
            "3，修复联盟资源库采集某些接口地址无法播放的问题。",
            "4，其他细节的调整优化。",
          ],
        },
        {
          timestamp: "2014.03.30",
          type: "multiple",
          list: [
            "1，修复专题管理没有显示分页的问题。",
            "2，加强留言和评论内容的验证，无中文不可留言。",
            "3，增加是否压缩输出html代码的功能，减少页面大小提高访问速度。",
            "4，其他细节的调整优化。",
          ],
        },
        {
          timestamp: "2014.03.17",
          type: "multiple",
          list: [
            "1，修复静态生成当天内容的问题。",
            "2，修复多个sql注入漏洞。",
            "3，完善在线更新程序分为3步骤：1，文件更新；2，数据库更新；3，缓存更新。",
            "4，商业版增加剧情小分类功能。",
            "5，播放页静态模式下自动下一集的问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2014.03.12",
          type: "multiple",
          list: [
            "1，修复开启缓存后搜索页面显示数据的问题。",
            "2，修复文章内容翻页显示数据的问题。",
            "3，修复文章内容页点击量显示的问题。",
            "4，修复采集入库随机评分的问题。",
            "5，修复部分安全性问题。",
            "6，其他细节。",
          ],
        },
        {
          timestamp: "2014.02.20",
          type: "multiple",
          list: [
            "1，修复文章内容标签html内容被过滤的问题。",
            "2，修复同步下载图片错乱的问题。",
            "3，修复QQ登录按钮转向到普通注册页面的问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2014.01.14",
          type: "multiple",
          list: [
            "1，更新百度、快播、酷播播放器文件，兼容更多浏览器。",
            "2，修复生成分类列表静态页面10页以后分页链接错误的问题。",
            "3，修复播放器管理保存特殊字符转码的问题。",
            "4，其他细节。",
          ],
        },
        {
          timestamp: "2014.01.03",
          type: "multiple",
          list: [
            "1，更新在线升级文件，支持php5.2和php5.3两个版本程序在线更新。",
            "2，修复文章content,contenttext len参数的问题。",
            "3，修复文章tag标签的问题。",
            "4，修复rewrite规则和配置路径。",
            "5，其他细节。",
          ],
        },
      ],
      activeNav: 0,
      dataFormat:'<?xml version="1.0" encoding="utf-8"?><rss version="5.0"><list page="1" pagecount="23" pagesize="20" recordcount="449"><video><last>2012-05-06 13:32:28</last><id>493</id><tid>9</tid><name><![CDATA[野人来袭]]></name><type>恐怖片</type><dt>qvod</dt><note><![CDATA[]]></note><vlink><![CDATA[http://localhost/maccms7_php/vod/?493.html]]></vlink><plink><![CDATA[http://localhost/maccms7_php/vodplay/?493-1-1.html]]></plink></video></list><class><ty id="1">电影</ty><ty id="2">连续剧</ty><ty id="3">综艺</ty><ty id="4">动漫</ty><ty id="5">动作片</ty><ty id="6">喜剧片</ty><ty id="7">爱情片</ty><ty id="8">科幻片</ty><ty id="9">恐怖片</ty><ty id="10">剧情片</ty><ty id="11">战争片</ty><ty id="12">国产剧</ty><ty id="13">港台剧</ty><ty id="14">日韩剧</ty><ty id="15">欧美剧</ty></class></rss>',
      innerFormat:'<?xml version="1.0" encoding="utf-8"?><rss version="5.0"><list page="1" pagecount="1" pagesize="20" recordcount="1"><video><last>2012-05-06 13:32:28</last><id>493</id><tid>9</tid><name><![CDATA[野人来袭]]></name><type>恐怖片</type><pic>http://1img.joykk.com/Uploads/2009/11/30/20091130205750222.JPG</pic><lang>英语</lang><area>欧美</area><year>2012</year><state>0</state><note><![CDATA[]]></note><type>_9</type><actor><![CDATA[]]></actor><director><![CDATA[Ryan Schifrin]]></director><dl><dd from="qvod"><![CDATA[第1集$qvod://206850310|13CB4BC71DD6C3AA5DE0B081E1566992A1BA3F03|野人来袭_01.rmvb|#第2集$qvod://218787599|8E3EA62210F42B9B25EAFA761413587FCC4D8E14|野人来袭_02.rmvb|]]></dd></dl><des><![CDATA[<p>它已经在68个国家被目击了42000次。一个富有传奇色彩的生物，被冠以众多称呼：Yeti(雪人)、Sasquatch(萨斯科奇人)和著名的Bigfoot(大脚怪)！我们已经追捕它了很多年，但是当它决定猎捕我们时，会发生什么？　 <br /><br />　　一个从登山事故中恢复过来的家伙，被困在森林中一个偏僻的小屋里。他看见了传说中的怪物，因此必须在野兽展开血腥袭击前，说服人们相信他并拯救一群大学女生。 <br /></p>]]></des><vlink><![CDATA[http://localhost/maccms7_php/vod/?493.html]]></vlink><plink><![CDATA[http://localhost/maccms7_php/vodplay/?493-1-1.html]]></plink></video></list></rss>',
      isFixed:false
    };
  },
  mounted(){
    document.addEventListener("scroll", e => {
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (scrollTop > 110) {
        this.isFixed=true
      } else {
        this.isFixed=false
      }
    });
  },
  methods: {
    selectVer(val) {
      this.activeVer = val;
      window.scrollTo(0,0)
    },
    selectNav(item, index) {
      window.scrollTo(0,0)
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
    // justify-content: space-between;
    padding: 30px 260px 50px 260px;
    .left {
      width: 220px;
      height: 550px;
      background: #fff;
      flex-shrink: 0;
      padding: 30px 15px;
      margin-right: 50px;
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
      // height: 550px;
      background: #fff;
      padding: 30px;
      .content {
        height: auto;
        // overflow-y: scroll;
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
            line-height: 24px;
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
            .why-txt{
              width: 100%;
              border: none;
            }
          }
        }
      }
    }
    .fixed{
      position: fixed;
      top: 135px;
      width: 220px;
    }
    .ml{
      margin-left: 270px;
    }
  }
}
</style>