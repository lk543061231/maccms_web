<template>
  <div class="">
    <div v-if="activeVer == 0">
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in list" :key="index">
        <p class="c-t">{{ item.title }}</p>
        <p class="c-pt" v-for="(conItem, conIndex) in item.con" :key="conIndex">
          <codemirror v-if="conItem.pre" ref="cmEditor" :value="conItem.pre" />
          <span v-else> {{ conItem }}</span>
        </p>
        <p class="c-p" v-for="(conItem, conIndex) in item.label" :key="conIndex">
          {{ conItem }}
        </p>
        <codemirror v-if="item.pre" ref="cmEditor" :value="item.pre.con" :class="[item.pre.cls]" />
      </div>
    </div>
    <div v-if="activeVer == 1">
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in list2" :key="index">
        <p class="c-t">{{ item.title }}</p>
        <p class="c-pt" v-for="(conItem, conIndex) in item.con" :key="conIndex">
          {{ conItem }}
        </p>
        <p class="c-p" v-for="(conItem, conIndex) in item.label" :key="conIndex">
          {{ conItem }}
        </p>
        <codemirror v-if="item.pre" ref="cmEditor" :value="item.pre.con" :class="[item.pre.cls]" />
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
    return {
      list: [
        {
          title: '快速安装',
          label: [
            '获得 苹果CMS 后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。',
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
          pre: {
            cls: 'h600',
            con: `
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
          }
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
      list2: [
        {
          title: '常见问题',
          label: [
            '本篇将主要讲解使用过程中普遍遇到的“问题”，这些问题并非是BUG，通常是需要我们自己去注意的一些点。（会结合用户反馈持续补充）'
          ]
        },
        {
          title: '快速安装',
          label: [
            '获得 苹果CMS后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。',
            '输入事先准备好的mysql数据库账户密码，即可一键安装。'
          ]
        },
        {
          title: '常用sql语句',
          pre: {
            cls: 'h600',
            con: `
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
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
