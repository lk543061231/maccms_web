<template>
  <div class="">
    <div v-if="activeVer === 0">
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in list" :key="index">
        <p class="c-t">{{ item.title }}</p>
        <p class="c-p" v-for="(conItem, conIndex) in item.label" :key="conIndex">
          {{ conItem }}
        </p>
        <codemirror v-if="item.pre" ref="cmEditor" :value="item.pre.con" :class="[item.pre.cls]" />
      </div>
    </div>
    <div v-if="activeVer === 1">
      <div class="c-d" :class="{ mt40: index !== 0 }" v-for="(item, index) in list2" :key="index">
        <p class="c-t">{{ item.title }}</p>
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
          title: '开始使用-入门指南',
          label: [
            'MacCMS程序是一套采用PHP+MYSQL环境下运行的完善而强大的快速建站系统。经过近多年的开发经验和技术积累，MacCMS程序已逐步走向成熟，在易用性和功能上已经成为同行中的佼佼者。程序体积小->优化程序代码，运行速度快->高效的缓存处理，只要普通的虚拟主机就可以完美搭建起来，建站成本非常低。仿MVC模板分离，内置标签，自定义函数标签接口，强大的自定义采集功能，只要你会HTML就可以轻松做出个性化的网站。程序易用性和功能上一直以来都积极采纳广大站长提出的各种好的建议，迅速响应各种紧急问题，我们的服务理念贯穿其中，保证每一位站长每一个环节都可以从容应对。',
            ' v10采用tp5.x内核进行开发，扩展了模板处理引擎，将后台程序与html模板简单的分离出来，让设计人员与程序人员最大限度的发挥自己的优势而互不干扰，大大加快了项目有序、快速的完成。即使您是第一次接触，也会在最短的时间内熟练掌握它的使用方法。后台管理模块，一目了然，操作简单，绝对不会让您眼花缭乱。'
          ]
        },
        // {
        //   title: '著作权登记',
        //   label: [
        //     ' MacCMS官方已经申请了软件著作权，受国家计算机软件著作权保护，请勿非法盗版篡改，否则将承担相应的法律制裁！',
        //     '著作权登记号码：2018SR947830'
        //   ]
        // },
        {
          title: '兼容性和面向场景',
          label: [
            '1、Windows 平台： IIS/Apache + PHP(5.6 +) + MySQL(5.5 +)',
            '2、Linux/Unix 平台： Apache + PHP (5.6 +) + MySQL(5.5 +) (PHP必须在非安全模式下运行)'
          ]
        },
        {
          title: '获得 MacCMS v10',
          label: ['你可以在我们的 官网首页 下载到 MacCMS的最新版，它经过了自动化构建，更适合用于生产环境。目录结构如下：'],
          pre: {
            cls: 'h400',
            con: `│─application //应用目录
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
└─index.php //入口文件`
          }
        }
      ],
      list2: [
        {
          title: '开始使用-入门指南',
          label: [
            'MacCMS程序是一套采用PHP+MYSQL环境下运行的完善而强大的快速建站系统。 经过近多年的开发经验和技术积累，MacCMS程序已逐步走向成熟，在易用性和功能上已经成为同行中的佼佼者。 程序体积小->优化程序代码，运行速度快->高效的缓存处理，只要普通的虚拟主机就可以完美搭建起来，建站成本非常低。仿MVC模板分离，内置标签，自定义函数标签接口，强大的自定义采集功能，只要你会HTML就可以轻松做出个性化的网站。 程序易用性和功能上一直以来都积极采纳广大站长提出的各种好的建议，迅速响应各种紧急问题，我们的服务理念贯穿其中，保证每一位站长每一个环节都可以从容应对。',
            'v8采用自行开发的模板处理引擎，将后台程序与html模板简单的分离出来，让设计人员与程序人员最大限度的发挥自己的优势而互不干扰，大大加快了项目有序、快速的完成。 即使您是第一次接触，也会在最短的时间内熟练掌握它的使用方法。后台管理模块，一目了然，操作简单，绝对不会让您眼花缭乱'
          ]
        },
        // {
        //   title: '著作权登记',
        //   label: [
        //     'MacCMS官方已经申请了软件著作权，受国家计算机软件著作权保护，请勿非法盗版篡改，否则将承担相应的法律制裁！',
        //     '著作权登记号码：2018SR947830'
        //   ]
        // },
        {
          title: '兼容性和面向场景',
          label: [
            '1、Windows 平台： IIS/Apache + PHP(5.0 +) + MySQL(5.0 +)',
            '2、Linux/Unix 平台： Apache + PHP (5.0 +) + MySQL(5.0 +) (PHP必须在非安全模式下运行)'
          ]
        },
        {
          title: '获得 MacCMS v8',
          label: ['你可以在我们的 官网首页 下载到 MacCMS 的最新版，它经过了自动化构建，更适合用于生产环境。目录结构如下：'],
          pre: {
            cls: 'h300',
            con: `│─admin //后台管理目录
│─cache  //缓存文件目录
│─images //图片资源目录（MacCMS系统自带）
│─inc //模块核心目录
│─js //js模块目录
│─player //播放器文件目录
│─template //前台模板目录
│─upload //附件目录
└─index.php //入口文件`
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
