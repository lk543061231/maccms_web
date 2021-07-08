module.exports = {
  feq0: [
    {
      title: '快速安装',
      label: [
        '获得 MacCMS 后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。',
        '输入事先准备好的mysql数据库账户密码，即可一键安装。'
      ]
    },
    {
      title: '常见问题',
      con: [
        '1，由于采用最新的TP框架，所以php版本建议5.6以上，上传文件时需要开启fileinfo支持库，php.ini里 extension=php_fileinfo.dll ；宝塔等面板里直接安装开启 。',
        '2，如果使用的是php5.6版本（php7版本不受影响），还需要设置php.ini开启always_populate_raw_post_data = -1 这个选项，也就是去掉这项配置前面的分号即可。',
        '3，运行安装页面出现空白页面，该情况一般为Runtime目录没有修改写入权限**',
        '4，SQLSTATE[22001]: String data, right truncated: 1406 Data too long for column "" at row 1  或者 Warning: 1265 Data truncated for column 类似错误**',
        '该错误就插入字段长度超过设定的长度，一般程序会在数据库字段设置字符长度在插入之前程序很少会先判断数据长度和截取数据 这样会影响性能，所以你就需要修改你数据库的配置文件一般在MYSQL 安装目录中的my.ini中 搜索sql-modesql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"把其中的STRICT_TRANS_TABLES,去掉 建议使用该方法sql-mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"或者把sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" 直接删除',
        '5，数据库连接配置文件。 \n RE:手动修改数据库连接信息，数据库密码等/application/database.php',
        `6，重新安装程序删除install.lock。\n RE:需要删除/application/data/install/install.lock`,
        '7，采集联盟资源库或其他资源库为何播放不了？（资源类型是youku、tudou、iqiyi等等）第三方网址.\n RE:方法1，整合资源站的播放器js文件。方案2，开启全局解析或独立解析和播放器解析状态。',
        '8，宝塔Nginx环境下，程序安装完毕后除非首页其他页面全部404的问题？RE:方法，进入宝塔软件设置，找到对应的php版本-设置，安装扩展，找到PATH_INFO这项，点击关闭，然后重新安装一下就ok了，这个可能是宝塔的bug。',
        '9，采集完数据后为何无法播放？？？\n RE:检查采集数据的播放地址，如果是完成的http地址，则需要开启播放器的解析状态用解析播放；如果采集的数据ID可会直接用本地播放器来播放。',
        '10，为何新增加了分类，前台页面进入提示没有权限？？？\n RE:因为新加的分类默认所有会员组都是没有权限的，需要进入会员组里配置每个组的分类权限，保存一下即可。',
        '11，路由规则改错了，页面权都打不开了，怎么恢复到默认的？？？\n RE:下载完整安装包，复制application/route.php 替换到网站里，就可以打开了，然后在后台重新修改下路由规则。',
        '12，nginx下除了首页其他都是404怎么办？\n RE:修改一下伪静态规则，一般都可以解决了。 如果修改了后台文件入口admin.php，则改为对应的文件名。',
        {
          pre: `if (!-e $request_filename) {
rewrite ^/index.php(.*)$ /index.php?s=$1 last;
rewrite ^/admin.php(.*)$ /admin.php?s=$1 last;
rewrite ^/api.php(.*)$ /api.php?s=$1 last;
rewrite ^(.*)$ /index.php?s=$1 last;
break;
}`
        },
        '13，安装提示“always_populate_raw_post_data”配置不支持解决方法 \n RE:编辑PHP-5.6 配置文件  php.ini， \n 查找 always_populate_raw_post_data \n 把前面的; 去掉保存，然后重启php5.6。',
        '本篇将主要讲解使用过程中普遍遇到的“问题”，这些问题并非是BUG，通常是需要我们自己去注意的一些点。（会结合用户反馈持续补充）'
      ]
    },
    {
      title: '常用sql语句',
      pre: `
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
REPAIR TABLE \`{pre}art\` ,\`{pre}vod\` ,\`{pre}type\` ,\`{pre}comment\` ,\`{pre}gbook\` ,\`{pre}link\` ,\`{pre}admin\` ,\`{pre}topic\` ,\`{pre}user\` ,\`{pre}card\` ,\`{pre}group\` ,\`{pre}visit\``
    },
    {
      title: '页面提交数据后过段时间才生效？',
      label: [
        '这个一般是web服务配置了缓存导致的~~\n访问phpinfo(),看看是不是你开启了ZendOpcache之类的opcode缓存.ZendOpcache里面有个过期时间配置,如opcache.revalidate_freq=60 ,表示60秒后脚本再次被访问时会检测PHP文件的时间戳,有改变则更新opcode缓存,你可以设为0,这样每次访问都会检测文件时间戳,你的修改就能生效了.在php.ini文件中找到opcache.enable=1或opcache.enable_cli=1改为0，重启php-fpm，done'
      ]
    },
    {
      title: '为什么播放器不能全屏？',
      label: [
        `如果播放器被包含在 iframe 里，尝试在 iframe 上添加 allowfullscreen 属性。为了完善的浏览器兼容性，它应该是这样：</li><li><iframe src="example.com" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>`
      ]
    }
  ],
  feq02: [
    {
      title: '常见问题',
      label: ['本篇将主要讲解使用过程中普遍遇到的“问题”，这些问题并非是BUG，通常是需要我们自己去注意的一些点。（会结合用户反馈持续补充）']
    },
    {
      title: '快速安装',
      label: [
        '获得 MacCMS后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。',
        '输入事先准备好的mysql数据库账户密码，即可一键安装。'
      ]
    },
    {
      title: '常用sql语句',
      pre: `
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
REPAIR TABLE \`{pre}art\` ,\`{pre}art_topic\` ,\`{pre}art_type\` ,\`{pre}comment\` ,\`{pre}gbook\` ,\`{pre}link\` ,
\`{pre}manager\` ,\`{pre}mood\` ,\`{pre}user\` ,\`{pre}user_card\` ,\`{pre}user_group\` ,\`{pre}user_visit\` ,\`{pre}vod\` ,
\`{pre}vod_topic\` ,\`{pre}vod_type\`
`
    }
  ],
  feq1: [
    {
      title: '入库接口说明',
      label: [
        'api接口仅供提供数据。',
        '资源分配唯一标识ID，用来区别绑定分类，这个ID一般，不可随意修改设置，否则造成入库分类错乱。视频接口同时支持老板xml格式的数据，增加参数 &at=xml即可。'
      ]
    },
    {
      title: '1,视频部分',
      label: [
        '列表http://域名/api.php/provide/vod/?ac=list',
        '详情http://域名/api.php/provide/vod/?ac=detail',
        '同样支持老板xml格式的数据',
        '列表api.php/provide/vod/at/xml/?ac=list',
        '详情api.php/provide/vod/at/xml/?ac=detail'
      ]
    },
    {
      title: '2,文章部分',
      label: ['列表http://域名/api.php/provide/art/?ac=list', '详情http://域名/api.php/provide/art/?ac=detail']
    },
    {
      title: '3,演员部分',
      label: ['列表http://域名/api.php/provide/actor/?ac=list', '详情http://域名/api.php/provide/actor/?ac=detail']
    },
    {
      title: '4,角色部分',
      label: ['列表http://域名/api.php/provide/role/?ac=list', '详情http://域名/api.php/provide/role/?ac=detail']
    },
    {
      title: '5,网址部分',
      label: ['列表http://域名/api.php/provide/website/?ac=list', '详情http://域名/api.php/provide/website/?ac=detail']
    },
    {
      title: '列表数据格式：',
      pre: `{
"code":1,
“msg”:“数据列表”
,page,
pagecount,
“limit”:“20”,
total,
“list”:[{"vod_id":21,“vod_name”:“情剑”,type_id,“type_name”:“动作片”,“vod_en”:“qingjian”,“vod_time”:“2018-03-29 20:50:19”,“vod_remarks”:“超清”,“vod_play_from”:"youku"},{"vod_id":20,“vod_name”:“暴力街区”,type_id,“type_name”:“动作片”,“vod_en”:“baolijiequ”,“vod_time”:“2018-03-27 21:17:52”,“vod_remarks”:“超清”,“vod_play_from”:"youku"},{"vod_id":19,“vod_name”:“超凡蜘蛛侠2”,type_id,“type_name”:“动作片”,“vod_en”:“chaofanzhizhuxia2”,“vod_time”:“2018-03-27 21:17:51”,“vod_remarks”:“高清”,“vod_play_from”:"youku"},{"vod_id":18,“vod_name”:“木星上行”,type_id,“type_name”:“动作片”,“vod_en”:“muxingshangxing”,“vod_time”:“2018-03-27 21:17:37”,“vod_remarks”:“高清”,“vod_play_from”:"youku"},{"vod_id":15,“vod_name”:“英雄本色2018”,type_id,“type_name”:“动作片”,“vod_en”:“yingxiongbense2018”,“vod_time”:“2018-03-22 16:09:17”,“vod_remarks”:“高清”,“vod_play_from”:“qiyi,sinahd”},{"vod_id":13,“vod_name”:“飘香剑雨”,type_id,“type_name”:“爱情片”,“vod_en”:“piaoxiangjianyu”,“vod_time”:“2018-03-21 20:37:52”,“vod_remarks”:“全36集”,“vod_play_from”:“youku,qiyi”},{"vod_id":14,“vod_name”:“怪谈之魅影惊魂”,type_id,“type_name”:“爱情片”,“vod_en”:“guaitanzhimeiyingjinghun”,“vod_time”:“2018-03-20 21:32:27”,“vod_remarks”:“高清”,“vod_play_from”:"qiyi"},{"vod_id":12,“vod_name”:“桃李劫”,type_id,“type_name”:“爱情片”,“vod_en”:“taolijie”,“vod_time”:“2018-03-20 21:32:26”,“vod_remarks”:“高清”,“vod_play_from”:“mgtv,pptv”},{"vod_id":9,“vod_name”:“胡杨的夏天”,type_id,“type_name”:“喜剧片”,“vod_en”:“huyangdexiatian”,“vod_time”:“2018-03-20 21:32:00”,“vod_remarks”:“高清”,“vod_play_from”:“27pan,mgtv,qiyi,qq,youku”},{"vod_id":10,“vod_name”:“宝贝特攻”,type_id,“type_name”:“喜剧片”,“vod_en”:“baobeitegong”,“vod_time”:“2018-03-20 21:32:00”,“vod_remarks”:“高清”,“vod_play_from”:“mgtv,qiyi,qq,youku”},{"vod_id":11,“vod_name”:“午夜劫案”,type_id,“type_name”:“喜剧片”,“vod_en”:“wuyejiean”,“vod_time”:“2018-03-20 21:32:00”,“vod_remarks”:“高清”,“vod_play_from”:"qiyi"},{"vod_id":6,“vod_name”:“密战”,type_id,“type_name”:“动作片”,“vod_en”:“mizhan”,“vod_time”:“2018-03-20 21:31:41”,“vod_remarks”:“全30集”,“vod_play_from”:“mgtv,youku,27pan,qiyi,qq,pptv”},{"vod_id":7,“vod_name”:“黑道老师”,type_id,“type_name”:“动作片”,“vod_en”:“heidaolaoshi”,“vod_time”:“2018-03-20 21:31:41”,“vod_remarks”:“高清”,“vod_play_from”:“sohu,pptv”},{"vod_id":8,“vod_name”:“跃影江湖之森罗万象”,type_id,“type_name”:“动作片”,“vod_en”:“yueyingjianghuzhisenluowanxiang”,“vod_time”:“2018-03-20 21:31:41”,“vod_remarks”:“高清”,“vod_play_from”:"qq"},{"vod_id":4,“vod_name”:“我的青春遇见你”,type_id,“type_name”:“国产剧”,“vod_en”:“wodeqingchunyujianni”,“vod_time”:“2018-03-20 19:26:54”,“vod_remarks”:“56集全”,“vod_play_from”:“youku,xigua”}],“class”:[{"type_id":1,“type_name”:"电影"},{"type_id":2,“type_name”:"连续剧"},{"type_id":3,“type_name”:"综艺"},{"type_id":4,“type_name”:"动漫"},{"type_id":5,“type_name”:"资讯"},{"type_id":6,“type_name”:"动作片"},{"type_id":7,“type_name”:"喜剧片"},{"type_id":8,“type_name”:"爱情片"},{"type_id":9,“type_name”:"科幻片"},{"type_id":10,“type_name”:"恐怖片"},{"type_id":11,“type_name”:"剧情片"},{"type_id":12,“type_name”:"战争片"},{"type_id":13,“type_name”:"国产剧"},{"type_id":14,“type_name”:"港台剧"},{"type_id":15,“type_name”:"日韩剧"},{"type_id":16,“type_name”:"欧美剧"},{"type_id":17,“type_name”:"公告"},{"type_id":18,“type_name”:"头条"}]}`
    },
    {
      title: '列表接收参数：',
      label: [
        'ac=list',
        't=类别ID',
        'pg=页码',
        'wd=搜索关键字',
        'h=几小时内的数据',
        '例如： http://域名/api.php/provide/vod/?ac=list&t=1&pg=5 分类ID为1的列表数据第5页'
      ]
    },
    {
      title: '内容数据格式：',
      pre: `{
"code":1,
“msg”:“数据列表”,
page,
pagecount,
“limit”:“20”,
total,
“list”:[
  {"vod_id":21,“vod_name”:“情剑”,type_id,“type_name”:“动作片”,“vod_en”:“qingjian”,“vod_time”:“2018-03-29 20:50:19”,“vod_remarks”:“超清”,“vod_play_from”:“youku”,“vod_pic”:“https:\/\/img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2259384068.jpg”,“vod_area”:“大陆”,“vod_lang”:“国语”,“vod_year”:“2018”,“vod_serial”:“0”,“vod_actor”:“谢霆锋,钟欣潼,乔振宇,伊能静,谭耀文,赵鸿飞,周莉”,“vod_director”:“陈咏歌”,“vod_content”:“”margin: 5px 12px; padding: 0px; color: rgb(24, 55, 120); font-family: Verdana, Arial, Helvetica, sans-serif;\“>一位手执名剑“长光”的年轻剑客（谢霆锋 饰）只为完成师父生前的遗愿——找到古代中原留下的九大旷世名剑，从北方蓬莱来到中原。而此前早已归顺朝廷的山东武林盟主、青萍剑客白三空（计春华 饰）利用与年轻剑客的比武诈死，成为朝廷埋藏在武林中的黑手。白三空的外孙方宝玉（乔振宇 饰）从小被外公禁止接触武功，然而为了替外公报仇，为了武林的正义，跟随“天下第一剑”紫衣候（谭耀文 饰）学武，誓要杀死蓬莱剑客。生命攸关的时刻，蓬莱剑客结识了黄河狂侠王巅之女珠儿（钟欣潼 饰），并且渐生情愫，方宝玉与紫衣候养女奔月（杨蕊 饰）两人也爱得难舍难分。青木堡少堡主木郎神君（赵鸿飞 饰）的朝廷锦衣卫身份终于暴露，朝廷意欲借武林中人控制武林，寻找罗雅古城宝藏的目的彻底呈现出来。 <\/p>”margin: 5px 12px; padding: 0px; color: rgb(24, 55, 120); font-family: Verdana, Arial, Helvetica, sans-serif;\“>　　一场武林浩劫正在上演，每一个人的立场都真相大白。在纷争中发现对方竟是同母异父亲兄亲的蓬莱剑客和宝玉决定联手对付木郎神君，然而木郎神君已经炼成了混元神功，就在那千钧一发时刻，木郎神君死在了心爱的女人——脱尘郡主（伊能静 饰）的剑下，纷争也随之结束……<\/p>”text-align: center; margin: 5px 12px; padding: 0px; color: rgb(24, 55, 120); font-family: Verdana, Arial, Helvetica, sans-serif;\“>”http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/1.jpg\" alt=\“\”\/> <img src=\“http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/2.jpg\” alt=\“\”\/> <img src=\“http:\/\/dy2.fahai1.club\/dianying\/dongzuopian\/qingjian\/3.jpg\” alt=\“\”\/> <\/p>",“vod_play_url”:“正片$http:\/\/v.youku.com\/v_show\/id_XMTM0NTczNDExMg==.html”}]
}`
    },
    {
      title: '内容接收参数：',
      label: [
        '参数 ids=数据ID，多个ID逗号分割。',
        't=类型ID',
        'pg=页码',
        'h=几小时内的数据',
        '例如: http://域名/api.php/provide/vod/?ac=detail&ids=123,567 获取ID为123和567的数据信息',
        'http://域名/api.php/provide/vod/?ac=detail&h=24 获取24小时内更新数据信息'
      ]
    }
  ],
  feq2: [
    {
      title: '多语言包支持说明',
      label: [
        'v10在1036版本之后增加了多语言的支持，方便更多全球友人使用，系统内所有显示和提示的信息完全由语言包控制。',
        '系统默认内置了简体中文，繁体中文 语言包，安装的时候选择切换您熟悉的语言即可在 安装、后台中完全显示对应的语言，所有模块提示信息也将显示对应语言。',
        '后续还将内置或提供更多的语言包扩展，也欢迎大家友情提供。',
        '建议不要修改公共语言包，如果想替换公共语言包里的内容，可以到对应的模块语言包下创建同样key的内容即可自动加载替换。',

        '==语言包结构='
      ],
      pre: `│─application/
│ ├─lang/ 公共语言包
│ ├──zh-cn.php 简体中文
│ ├──zh-tw.php 繁体中文
│─…
│ ├─admin/lang/ admin模块自定义语言包
│ ├──zh-cn.php
│ ├──zh-tw.php
│─…
│ ├─api/lang/ api模块自定义语言包
│ ├──zh-cn.php
│ ├──zh-tw.php
│─…
等等…`
    }
  ],
  feq3: [
    {
      title: '定时任务说明',
      label: [
        '执行文件：选择 采集资源库collect',
        '附加参数：可从联盟资源库，自定义资源列表中获取（在采集今日，采集本周，采集全部 右键复制链接）截取参数部分即可。',
        '例如：',
        '任务名称：cj_day',
        '任务描述：采集当天数据',
        '附加参数：ac=cjall&h=24&xt=1&ct=&cjflag=b9c546ba925d22ed654927b44638df34&cjurl=http://cj.tv6.com/mox/inc/youku.php'
      ]
    },
    {
      title: '2，生成静态',
      label: [
        '执行文件：选择生成make',
        '附加参数：',
        '例如：',
        '生成首页 ac=index',
        '生成地图页 ac=map',
        '生成rss ac=rss',
        '生成百度sitemap ac=rss&ac2=baidu',
        '生成谷歌sitemap ac=rss&ac2=google',
        '生成专题首页 ac=topic_index',
        '生成专题详情页 ac=topic_info&topic=1,2,3,4',
        '生成视频分类页 ac=type&tab=vod&vodtype=1,2',
        '生成当日有更新数据的视频分类 ac=type&tab=vod&ac2=day',
        '生成文章分类页 ac=type&tab=art&arttype=3,4',
        '生成当日有更新数据的文章分类 ac=type&tab=art&ac2=day',
        '生成自定义页面 ac=label&label=rand.html',
        '生成视频详情页 ac=info&tab=vod&ids=1,2,3',
        '生成未生成视频详情页 ac=info&tab=vod&ac2=nomake',
        '生成文章详情页 ac=info&tab=art&ids=1,2,3',
        '生成未生成文章详情页 ac=info&tab=art&ac2=nomake'
      ]
    },
    {
      title: '3，采集规则',
      label: ['执行文件：选择 采集规则cj', '参数id=1，参数就是当前采集自定义采集规则的编号。', '为了不影响服务器性能，目前仅采集第一页。']
    },
    {
      title: '4，清理缓存',
      label: ['执行文件：选择 清理缓存cache', '无需参数']
    },
    {
      title: '5，网址推送',
      label: [
        '执行文件：选择 网址推送urlsend',
        '附加参数：',
        '百度主动推送当天视频 ac=baidu_push&ac2=today&mid=1',
        '百度主动推送当天文章 ac=baidu_push&ac2=today&mid=2',
        '百度主动推送当天专题 ac=baidu_push&ac2=today&mid=3',
        '百度主动推送当天演员 ac=baidu_push&ac2=today&mid=8',
        '百度主动推送当天角色 ac=baidu_push&ac2=today&mid=9',
        '百度熊掌号推送当天视频 ac=baidu_bear&ac2=today&type=realtime&mid=1',
        '百度熊掌号推送当天文章 ac=baidu_bear&ac2=today&type=realtime&mid=2',
        '百度熊掌号推送当天专题 ac=baidu_bear&ac2=today&type=realtime&mid=3',
        '百度熊掌号推送当天演员 ac=baidu_bear&ac2=today&type=realtime&mid=8',
        '百度熊掌号推送当天角色 ac=baidu_bear&ac2=today&type=realtime&mid=9'
      ]
    }
  ],
  tem: [
    {
      title: '模板标签',
      label: ['本篇主要讲解v10自带系统标签和模板规范']
    },
    {
      title: '模板目录',
      label: ['本篇主要讲解v10自带系统标签和模板规范']
    },
    {
      title: '模板标签',
      label: [
        '系统模板系统放在/template/目录下。在后台站点设置中，可以选择当前使用的模板',
        {
          pre: {
            cls: 'h500',
            con: `│─template/1/  模板1
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
│─template/n/  模板N `
          }
        }
      ]
    },
    {
      title: '模板文件',
      label: [
        '系统规定默认模板文件名， 其中 分类、内容、播放等页面的模板是可以自定义的。',
        {
          pre: {
            cls: 'h1000',
            con: `全站公共样式文件，建议定义如何名称存放在模板的public目录下：
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
plot/detail.html      分集剧情详情页 `
          }
        }
      ]
    },
    {
      title: '系统内置JS、CSS说明',
      label: [
        '系统模板系统放在/template/目录下。在后台站点设置中，可以选择当前使用的模板',
        {
          pre: {
            cls: 'h800',
            con: `文件：home.js
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
MAC.Comment()评论相关功能 `
          }
        }
      ]
    },
    {
      title: '全局标签',
      pre: {
        cls: 'h1000',
        con: `{$maccms.site_name}        网站名称
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
专题详情31`
      }
    },
    {
      title: '引入模板文件',
      label: ['{include file="public/head"}']
    },
    {
      title: '条件判断if标签',
      pre: {
        cls: 'h400',
        con: `由于if标签的condition属性里面基本上使用的是php语法，尽可能使用判断标签和Switch标签会更加简洁：
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
      {/notempty}`
      }
    },
    {
      title: '友情链接标签',
      pre: {
        cls: 'h300',
        con: `参数:
type:友情链接类型 font表示文字,pic表示图片
num: 获取数据条数。例:
      {maccms:link num="2" type="pic"}
          {$key}序号
          {$vo.link_name}名称
          {$vo.link_url}地址
          {$vo.link_pic}图片
      {/maccms:link}`
      }
    },
    {
      title: '留言本标签',
      pre: {
        cls: 'h500',
        con: `参数:
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
      {/maccms:gbook}`
      }
    },
    {
      title: '评论标签',
      pre: {
        cls: 'h400',
        con: `参数:
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
            {/maccms:comment}`
      }
    },
    {
      title: '分类标签(视频，文章通用)',
      pre: {
        cls: 'h800',
        con: `参数:
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
      {:mac_url_type($obj)} 分类链接`
      }
    },
    {
      title: '专题列表标签',
      pre: {
        cls: 'h1000',
        con: `参数:
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
      {:mac_url_topic_index()}  专题首页链接`
      }
    },
    {
      title: '剧情分类、地区、语言、年代、版本、资源标签',
      pre: {
        cls: 'h1000',
        con: `
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
      {/maccms:state}`
      }
    },
    {
      title: '分页标签详解',
      pre: {
        cls: 'h500',
        con: `
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
           例子：`
      }
    },
    {
      title: '视频搜索页参数和标签详解',
      pre: {
        cls: 'h500',
        con: `
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
    {$param.class}扩展分类`
      }
    },
    {
      title: '视频列表标签',
      pre: {
        cls: 'h1000',
        con: `
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
    {:mac_url_vod_down($obj,['sid'=>1,'nid'=>1])}   视频下载页链接`
      }
    },
    {
      title: '视频内容页、播放页标签',
      pre: {
        cls: 'h1000',
        con: `
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
    `
      }
    },
    {
      title: '文章列表标签',
      pre: {
        cls: 'h1000',
        con: `
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
      `
      }
    },
    {
      title: '分页内容标签',
      pre: {
        cls: 'h600',
        con: `
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
      `
      }
    },
    {
      title: '常用处理函数',
      pre: {
        cls: 'h500',
        con: `允许使用多个函数，都使用|分隔开
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
      {$user.user_login_ip|mac_long2ip}返回格式化ip地址`
      }
    },
    {
      title: '预留ajax数据接口，方便瀑布流加载',
      pre: {
        cls: 'h200',
        con: `参数
      mid:模块1视频2文章3专题
      limit:每页条数，支持10,20,30
      page:页码，最多不超过20页，防止非法采集
      接口地址是index.php/ajax/data.html?mid=1&page=1&limit=10`
      }
    },
    {
      title: '常用标签技巧',
      pre: {
        cls: 'h300',
        con: `1，在循环中获取每个分类的数据量
      {maccms:type ids="1,2,3,4" order="asc" by="sort" id="vo1" key="key1"}
      分成：{$vo1.type_name}；总数量： {$vo1.type_id|mac_data_count=all}；今日数量：{$vo1.type_id|mac_data_count=today}。
      {/maccms:type}
      2，嵌套循环外层分类内部视频或文章,重点在于外部和内部标签各自设置 id 和 key，系统默认都是vo不适合会导致数据冲掉。
      {maccms:type ids="1,2,3,4" order="asc" by="sort" id="vo1" key="key1"}
          {maccms:vod num="10" type="'.$vo1['type_id'].'" order="desc" by="time" id="vo2" key="key2"}
              {$vo1.type_name}:{$vo2.vod_name}；
          {/maccms:vod}
      {/maccms:type}`
      }
    }
  ],
  tem2: [
    {
      title: '模板标签',
      label: ['本篇主要讲解V8自带系统标签和模板规范']
    },
    {
      title: '模板目录',
      label: ['系统模板系统放在/template/目录下。在后台站点设置中，可以选择当前使用的模板'],
      pre: {
        cls: 'h300',
        con: `  │─template/1/  模板1
      │  ├─ads   广告文件目录
      │  ├─js    js文件
      │  ├─css   css文件
      │  ├─images   图片文件
      │  └─html     模板文件
      │─tempalte/2/  模板2
      │─...
      │─template/n/  模板N`
      }
    },
    {
      title: '模板文件',
      label: ['系统规定默认模板文件名， 其中 分类、内容、播放等页面的模板是可以自定义的。'],
      pre: {
        cls: 'h600',
        con: `home_include.html    全站公共引入文件 引入js、css样式，还有系统JS变量
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
      vod_type.html        视频分类页面`
      }
    },
    {
      title: '系统内置JS、CSS说明',
      label: [''],
      pre: {
        cls: 'h500',
        con: `文件：js/home.js
      MAC.Url         当前网页的链接
      MAC.Title       当前网页的标题
      MAC.Copy(s)     复制内容到剪切板; s=字符串
      MAC.Home(o,u)   设置默认主页;     onclick="MAC.Home(this,'http://www.maccms.cn')"
      MAC.Fav(u,s)    加入浏览器收藏夹;  onclick="MAC.FAV('http://www.maccms.cn','MacCMS')"
      MAC.Open(u,w,h)  弹出网页;u=网址,w=宽度,h=高度
      MAC.Cookie.Set(name,value,days)   设置cookie的值; name=cookie名称,value=cookie值,days=过期时间
      MAC.Cookie.Get(name)              获取cookie的值; name=cookie名称
      MAC.Cookie.Del(name)              删除cookie的值; name=cookie名称
      MAC.AdsWrap(w,h,n)                预留广告位占位; w=宽度,h=高度,n=名称
      自动加载设置项：
      html元素ID为history：  自动设置为鼠标移动滑入滑出  显示隐藏 历史记录。
      html元素ID为wd： 自动设置联想搜索功能。
      延迟加载图片： img元素不要使用src调用图片地址，而是用data-original。  < img class="lazy" data-original="[vod:pic]" src="{maccms:path}images/blank.png" />`
      }
    },
    {
      title: '全局标签',
      label: [''],
      pre: {
        cls: 'h1000',
        con: `{maccms:runtime}       页面运行时间、查询次数、占用内存
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
      系统用户中心  40`
      }
    },
    {
      title: '条件判断if标签',
      label: [''],
      pre: {
        cls: 'h500',
        con: `if标签,支持多重嵌套,每个层级的if标签不能相同
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
      {endif-A}`
      }
    },
    {
      title: '用户登陆页面标签',
      label: [''],
      pre: {
        cls: 'h500',
        con: `用户登录窗口iframe调用:
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
      {maccms:userloginip}     最后登录IP`
      }
    },
    {
      title: '友情链接标签',
      label: [''],
      pre: {
        cls: 'h300',
        con: `参数:
      type:友情链接类型 font表示文字,pic表示图片
              num: 获取数据条数
      例:
      {maccms:link type=pic num=2}
      [link:num]序号
      [link:name]名称，支持长度控制[link:name len=10]
      [link:link]地址
      [link:pic]图片
      {/maccms:link}`
      }
    },
    {
      title: '留言本标签',
      label: [''],
      pre: {
        cls: 'h300',
        con: `参数:
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
      {/maccms:gbook}`
      }
    },
    {
      title: '评论标签',
      label: [''],
      pre: {
        cls: 'h500',
        con: `参数:
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
      {/maccms:comment}`
      }
    },
    {
      title: '数据区域块标签(首页、地图页的栏目块双层循环)',
      label: [``],
      pre: {
        cls: 'h500',
        con: `参数:
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
      {/maccms:matrix}`
      }
    },
    {
      title: '分类标签(视频，文章通用)',
      label: [''],
      pre: {
        cls: 'h500',
        con: `参数:
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
      {/maccms:menu}`
      }
    },
    {
      title: '专题列表标签(视频，文章通用)',
      label: [''],
      pre: {
        cls: 'h800',
        con: `参数:
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
      {page:hits}     动态载入专题的点击量`
      }
    },
    {
      title: '剧情小分类标签(视频)',
      pre: {
        cls: 'h500',
        con: `参数:
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
      {/maccms:class`
      }
    },
    {
      title: '视频地区、语言、年代标签',
      pre: {
        cls: 'h800',
        con: `  地区标签参数：
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
      {/maccms:year}`
      }
    },
    {
      title: '视频搜索参数和标签详解',
      pre: {
        cls: 'h1000',
        con: `参数详解:
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
      {page:count}       搜索数据分页总数`
      }
    },
    {
      title: '分类列表页参数详解',
      pre: {
        cls: 'h500',
        con: `参数详解:
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
      {page:linkbyscore} 进入分页筛选页面，按照评分排序链接`
      }
    },
    {
      title: '视频分类筛选页参数详解',
      pre: {
        cls: 'h800',
        con: `参数详解:
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
      {page:linkbyscore} 筛选链接-按照评分排序`
      }
    },
    {
      title: '分页标签详解',
      pre: {
        cls: 'h500',
        con: `  分页标签可用在，首页、分类页、筛选页、专题首页、专题数据列表、搜索页、文章内容页、留言本、评论
      参数详解:
      len:显示几个数字链接
      linktype:分类类型,只在首页分页时用到linktype=index
      请自行在模版的css样式表中设计分页样式
      例如:
      <div class="page">{maccms:pages len=6}</div>
      解析后:
      <div class="page">共10002条数据 当前:1/834页 <em>首页</em> <em>上一页</em> <span class="pagenow">1</span> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-2.html">2</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-3.html">3</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-4.html">4</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-5.html">5</a> <a target="_self" class="pagelink_b" href="?m=vod-type-id-1-pg-6.html">6</a> <a target="_self" href="?m=vod-type-id-1-pg-2.html" class="pagelink_a">下一页</a> <a target="_self" href="?m=vod-type-id-1-pg-834.html" class="pagelink_a">尾页</a> <input type="input" name="page" id="page" size="4" class="pagego"><input type="button" value="跳 转" onclick="pagego('?m=vod-type-id-1-pg-{pg}.html',834)" class="pagebtn"></div>`
      }
    },
    {
      title: '视频列表标签',
      pre: {
        cls: 'h1000',
        con: `num:数据条数  默认值10，非分页时使用
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
      {/maccms:vod}`
      }
    },
    {
      title: '视频内容页、播放页标签',
      pre: {
        cls: 'h1000',
        con: `调用当前视频数据的标签，同vod标签, 例如[vod:id]  [vod:name]
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
      {/maccms:down}`
      }
    },
    {
      title: '文章分类列表页参数详解',
      pre: {
        cls: 'h500',
        con: `参数详解:
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
      {page:textlink}    当前位置导航链接  例如当前位置:首页  >>  电影 >> 动作片`
      }
    },
    {
      title: '文章列表标签',
      pre: {
        cls: 'h500',
        con: `参数：
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
  {/maccms:art}`
      }
    },
    {
      title: '文章内容页标签',
      pre: {
        cls: 'h500',
        con: `调用当前视频数据的标签，同art标签, 例如[art:id]  [art:name]
      [art:comment]     评论
      [art:hits]        动态载入点击量并更新点击量，如不使用该标签点击量将不会增加
      [art:prelink]     上一条记录
      [art:nextlink]    下一条记录
      [art:fav]         收藏到浏览器链接
      [art:share]       分享当前地址链接，复制到剪切板
      [art:digg]        顶踩功能
      [art:prelink]     上一条记录
      [art:nextlink]    下一跳记录
      [art:textlink]    当前位置导航链接  例如当前位置:首页  >>  新闻 >> 第一条文章`
      }
    }
  ],
  api: [
    {
      title: '1,视频部分',
      label: [
        '列表http://域名/api.php/provide/vod/?ac=list',
        '详情http://域名/api.php/provide/vod/?ac=detail',
        '同样支持老板xml格式的数据',
        '列表api.php/provide/vod/at/xml/?ac=list',
        '详情api.php/provide/vod/at/xml/?ac=detail'
      ]
    },

    {
      title: '2,文章部分',
      label: ['列表http://域名/api.php/provide/art/?ac=list', '详情http://域名/api.php/provide/art/?ac=detail']
    },
    {
      title: '3,演员部分',
      label: [' 列表http://域名/api.php/provide/actor/?ac=list', '详情http://域名/api.php/provide/actor/?ac=detail']
    },
    {
      title: '4,角色部分',
      label: ['列表http://域名/api.php/provide/role/?ac=list', '详情http://域名/api.php/provide/role/?ac=detail']
    },
    {
      title: '5,网址部分',
      label: ['列表http://域名/api.php/provide/website/?ac=list', '详情http://域名/api.php/provide/website/?ac=detail']
    },
    {
      title: '列表数据格式：',
      pre: {
        cls: 'h500',
        con: `{"code":1,"msg":"数据列表","page":1,"pagecount":1,"limit":"20","total":15,"list":[{"vod_id":21,"vod_name":"情剑","type_id":6,"type_name":"动作片","vod_en":"qingjian","vod_time":"2018-03-29
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
      19:26:54","vod_remarks":"56集全","vod_play_from":"youku,xigua"}],"class":[{"type_id":1,"type_name":"电影"},{"type_id":2,"type_name":"连续剧"},{"type_id":3,"type_name":"综艺"},{"type_id":4,"type_name":"动漫"},{"type_id":5,"type_name":"资讯"},{"type_id":6,"type_name":"动作片"},{"type_id":7,"type_name":"喜剧片"},{"type_id":8,"type_name":"爱情片"},{"type_id":9,"type_name":"科幻片"},{"type_id":10,"type_name":"恐怖片"},{"type_id":11,"type_name":"剧情片"},{"type_id":12,"type_name":"战争片"},{"type_id":13,"type_name":"国产剧"},{"type_id":14,"type_name":"港台剧"},{"type_id":15,"type_name":"日韩剧"},{"type_id":16,"type_name":"欧美剧"},{"type_id":17,"type_name":"公告"},{"type_id":18,"type_name":"头条"}]}`
      }
    },
    {
      title: '列表接收参数：',
      label: [
        'ac=list',
        't=类别ID',
        'pg=页码',
        'wd=搜索关键字',
        'h=几小时内的数据',
        '例如： http://域名/api.php/provide/vod/?ac=list&t=1&pg=5 分类ID为1的列表数据第5页'
      ]
    },
    {
      title: '内容数据格式：',
      pre: {
        cls: 'h500',
        con: ` {"code":1,"msg":"数据列表","page":1,"pagecount":1,"limit":"20","total":1,"list":[{"vod_id":21,"vod_name":"情剑","type_id":6,"type_name":"动作片","vod_en":"qingjian","vod_time":"2018-03-29
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
      <\/p>","vod_play_url":"正片$http:\/\/v.youku.com\/v_show\/id_XMTM0NTczNDExMg==.html"}]}`
      }
    },
    {
      title: '内容接收参数：',
      label: [
        '参数 ids=数据ID，多个ID逗号分割。',
        't=类型ID',
        'pg=页码',
        'h=几小时内的数据',
        '例如: http://域名/api.php/provide/vod/?ac=detail&ids=123,567 获取ID为123和567的数据信息',
        'http://域名/api.php/provide/vod/?ac=detail&h=24 获取24小时内更新数据信息'
      ]
    }
  ],
  api2: [
    {
      title: '',
      label: [
        'api接口仅供提供数据，可以直接在MacCMS后台联盟采集中加入-并提供给他人采集。',
        '联盟资源分配唯一标识ID，用来区别绑定分类，这个ID一般由MacCMS官方提供，不可随意修改设置，否则造成入库分类错乱。'
      ]
    },
    {
      title: '列表数据格式：',
      pre: {
        cls: 'h500',
        con: `<?xml version="1.0" encoding="utf-8"?>
        <rss version="5.0">
          <list page="1" pagecount="23" pagesize="20" recordcount="449">
            <video>
              <last>2012-05-06 13:32:28</last>
              <id>493</id>
              <tid>9</tid>
              <name><![CDATA[野人来袭]]></name>
              <type>恐怖片</type>
              <dt>qvod</dt>
              <note><![CDATA[]]></note>
              <vlink><![CDATA[http://localhost/maccms7_php/vod/?493.html]]></vlink>
              <plink><![CDATA[http://localhost/maccms7_php/vodplay/?493-1-1.html]]></plink>
            </video>
          </list>
          <class><ty id="1">电影</ty><ty id="2">连续剧</ty><ty id="3">综艺</ty><ty id="4">动漫</ty><ty id="5">动作片</ty><ty id="6">喜剧片</ty><ty id="7">爱情片</ty><ty id="8">科幻片</ty><ty id="9">恐怖片</ty><ty id="10">剧情片</ty><ty id="11">战争片</ty><ty id="12">国产剧</ty><ty id="13">港台剧</ty><ty id="14">日韩剧</ty><ty id="15">欧美剧</ty></class>
        </rss>`
      }
    },
    {
      title: '列表接收参数：',
      label: [
        'ac=list',
        't=类别ID',
        'pg=页码',
        'wd=搜索关键字',
        'h=几小时内的数据',
        '例如： api.php?ac=list&t=1&pg=5 分类ID为1的列表数据第5页'
      ]
    },
    {
      title: '内容数据格式：',
      pre: {
        cls: 'h500',
        con: ` '<?xml version="1.0" encoding="utf-8"?>
        <rss version="5.0">
        <list page="1" pagecount="1" pagesize="20" recordcount="1">
          <video>
            <last>2012-05-06 13:32:28</last>
            <id>493</id>
            <tid>9</tid>
            <name><![CDATA[野人来袭]]></name>
            <type>恐怖片</type>
            <pic>http://1img.joykk.com/Uploads/2009/11/30/20091130205750222.JPG</pic>
            <lang>英语</lang>
            <area>欧美</area>
            <year>2012</year>
            <state>0</state>
            <note><![CDATA[]]></note>
            <type>_9</type>
            <actor><![CDATA[]]></actor>
            <director><![CDATA[Ryan Schifrin]]></director>
            <dl><dd from="qvod"><![CDATA[第1集$qvod://206850310|13CB4BC71DD6C3AA5DE0B081E1566992A1BA3F03|野人来袭_01.rmvb|#第2集$qvod://218787599|8E3EA62210F42B9B25EAFA761413587FCC4D8E14|野人来袭_02.rmvb|]]></dd></dl>
            <des><![CDATA[<p>它已经在68个国家被目击了42000次。一个富有传奇色彩的生物，被冠以众多称呼：Yeti(雪人)、Sasquatch(萨斯科奇人)和著名的Bigfoot(大脚怪)！我们已经追捕它了很多年，但是当它决定猎捕我们时，会发生什么？　 <br /><br />　　一个从登山事故中恢复过来的家伙，被困在森林中一个偏僻的小屋里。他看见了传说中的怪物，因此必须在野兽展开血腥袭击前，说服人们相信他并拯救一群大学女生。 <br /></p>]]></des>
            <vlink><![CDATA[http://localhost/maccms7_php/vod/?493.html]]></vlink>
            <plink><![CDATA[http://localhost/maccms7_php/vodplay/?493-1-1.html]]></plink>
          </video>
        </list>
        </rss>'`
      }
    },
    {
      title: '内容接收参数',
      label: [
        'ac=videolist 采集数据',
        '参数 ids=数据ID，多个ID逗号分割。',
        't=类型ID',
        'pg=页码',
        'h=几小时内的数据',
        '例如: api.php?ac=videolist&ids=123,567 获取ID为123和567的数据信息',
        'api.php?ac=videolist&h=24 获取24小时内更新数据信息'
      ]
    }
  ]
};
