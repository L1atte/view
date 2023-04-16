import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false,
  },
  profile: {
    name: '黄俊杰',
    email: '邮箱：l4atte@gmail.com',
    mobile: '电话：13250477305',
    github: 'Github：https://github.com/L1atte',
    zhihu: '个人博客：https://www.latte.space/',
    workExpYear: '2年',
    workPlace: '24岁',
  },
  educationList: [
    {
      edu_time: ['2017.09', '2021.06'],
      school: '华南师范大学',
      major: '软件工程',
      academic_degree: '本科',
    },
  ],
  // awardList: [
  //   {
  //     award_info: '英语 CET6',
  //     award_time: '2015',
  //   },
  //   {
  //     award_info: '蚂蚁近卫军 卓越个人奖',
  //     award_time: '2018.09',
  //   },
  //   {
  //     award_info: '前端练习生 可视化讲师',
  //     award_time: '2020.10',
  //   },
  //   {
  //     award_info:
  //       '前端早早聊 分享 “如何构思和开发开箱即用的可视化图表库 G2Plot”',
  //     award_time: '2021.07',
  //   },
  // ],
  workExpList: [
    {
      company_name: 'BinTools',
      department_name: 'UED 开发部',
      work_time: ['2022.11', null],
      work_desc: ``,
    },
    {
      company_name: 'Garena',
      department_name: 'Free Fire',
      work_time: ['2022.03', '2022.09'],
      work_desc: '',
    },
    {
      company_name: '汕头超声研究所',
      department_name: '前端开发部',
      work_time: ['2021.06', '2017.02'],
      work_desc: '',
    },
  ],
  skillList: [
    {
      skill_name: 'HTML 和 CSS',
      // '熟练掌握 html, css 等前端基础技术，不借助框架编写响应式/移动端网页',
      skill_desc:
        '熟悉 JavaScript 和 TypeScript，能完成常见的类型体操并掌握 TS 的高级概念',
    },
    {
      skill_name: 'TypeScript / JavaScript',
      skill_desc: 'React 技术栈，熟悉 Concurrent Mode、渲染行为及 diff 算法',
    },
    {
      skill_name: '数据可视化',
      skill_desc:
        'Vue 技术栈，阅读过部分 Vue 源码，了解 diff 算法、基本渲染流程、依赖收集原理等',
    },
    {
      skill_name: '数据可视化1',
      skill_desc:
        '熟悉常用前端数据管理的解决方案（如 Redux、Mobx、Jotai 等），并清楚它们的优劣和应用场景',
    },
    {
      skill_name: 'React / 前端工程化',
      skill_desc:
        '熟悉 Vite、Rollup 和 Webpack 构建工具，有 plugin 的开发经验，了解构建流程',
    },
    {
      skill_name: 'React / 前端工程化',
      skill_desc:
        '了解编译原理，有基于 Antlr 开发代码补全、语法检错功能和 Web IDE（Monaco）的开发经验',
    },
    {
      skill_name: 'React / 前端工程化',
      skill_desc: '了解网络协议、浏览器渲染流程，有一定的性能优化经验',
    },
  ],
  projectList: [
    {
      project_name: '离线环境的 Web IDE 语言服务',
      project_role: '',
      project_time: '',
      project_desc: [
        'Monaco editor 基于LSP 的语言服务需要通过JSON-RPC 协议与后端通信，目前采用接入 WebSocket 的方式，导致网络不稳定的环境下用户无法获得语言服务能力(代码补全等)',
      ],
      project_content: [
        '我负责开发代码补全和语法检错模块，基于 Antlr4 编译工具，通过 AST 语法树计算用户当前输入位置的代码建议(不限于keyword，可以返回表名等) 和语法报错信息',
        'AST 的计算过程运行在 Web Worker 环境，尽可能地不阻塞主线程，从而避免影响性能',
      ],
    },
    {
      project_name: '兼容 Webpack、Vite 的 tiny-image-plugin',
      project_role: '',
      project_time: '',
      project_desc: [
        '团队内部并行的多个项目需要对图片资源进行压缩优化，并且各个项目的构建工具不同 (Webpack、Vite)',
        '希望对开发流程尽可能小的影响和接入成本',
      ],
      project_content: [
        '基于以上痛点，我通过 unplugin 开发可以兼容 Webpack、Vite 的 tiny-image-plugin 工具，被团队内部多个项目接入。图片的压缩率达到60%，让线上的 bundle 包体积减少20%',
      ],
    },
    {
      project_name: '混合架构的 JS Bridge 事件模型优化',
      project_role: '',
      project_time: '',
      project_desc: [
        '混合架构的老项目经常需要接入 JxBrowser，但是通信流程不清晰。导致 Web 端无法确定 Native 端是否成功注入 AP，产生大量胶水代码进行注入判断处理，影响开发和用户体验',
      ],
      project_content: [
        '我梳理了通信流程，开发支持同步和异步的订阅发布事件模型，在成功注入时全局通知 Web 端',
        '添加兜底处理，提供注入失败重试能力',
      ],
    },
    {
      project_name: '虚拟列表公用组件开发',
      project_role: '',
      project_time: '',
      project_desc: [
        // '针对需要加载大量数据的列表组件，通过虚拟列表和 RAF 进行优化，在面对千条数据时渲染时间减少 20%',
        // '默认回收和复用 DOM 节点，让滚动行为更加流畅',
      ],
      project_content: [
        '针对需要加载大量数据的列表组件，通过虚拟列表和 RAF 进行优化，在面对千条数据时渲染时间减少 20%',
        '默认回收和复用 DOM 节点，让滚动行为更加流畅',
      ],
    },
  ],
  workList: [
    // {
    //   work_name: '个人简历生成器',
    //   visit_link: 'https://visiky.github.io/resume',
    // },
    // {
    //   work_name: 'AntV 主题生成器',
    //   visit_link: 'https://theme-set.antv.vision',
    // },
    // {
    //   work_name: 'AntV 可视化精选',
    //   visit_link: 'https://vis-dashboard.antv.vision',
    // },
  ],
  aboutme: {
    aboutme_desc: [
      '喜欢接受新挑战，记录学习和生活，有自己的一套学习论',
      '热爱技术，从各方渠道了解新技术(Dev Community, Reddit, 开发者博客等)',
    ],
  },
  // 国际化
  locales: {
    'en-US': {
      profile: {
        name: 'Xiaojuan Liao',
        email: '736****86@qq.com',
        mobile: '156********',
        github: 'https://github.com/visiky',
        zhihu: 'https://zhihu.com/people/visiky',
        workExpYear: '',
      },
      skillList: [
        { skill_name: 'HTML 和 CSS', skill_desc: '', skill_level: 89 },
        { skill_name: 'TypeScript / JavaScript', skill_level: 90 },
        {
          skill_name: 'Data Visualization',
          skill_desc: '丰富的可视化工程实践以及开源经验',
          skill_level: 90,
        },
        {
          skill_name: 'React / 前端工程化',
          skill_desc: '大型前端项目经验以及组件库开发经验',
          skill_level: 80,
        },
      ],
      avatar: { hidden: false },
      educationList: [
        {
          edu_time: ['2014.09.01', '2018.06.30'],
          school: 'SCUT',
          major: 'Compute Science',
          academic_degree: '本科',
        },
      ],
      awardList: [
        { award_info: '英语 CET6', award_time: '2015' },
        { award_info: '蚂蚁近卫军 卓越个人奖', award_time: '2018.09' },
        { award_info: '前端练习生 可视化讲师', award_time: '2020.10' },
        {
          award_info:
            '前端早早聊 分享 “如何构思和开发开箱即用的可视化图表库 G2Plot”',
          award_time: '2021.07',
        },
      ],
      workExpList: [
        {
          company_name: 'Ant Group',
          department_name: 'AFX',
          work_time: ['2018.06', null],
          work_desc:
            '1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人\r\n2. 负责蚂蚁敏捷 BI 产品 “DeepInsight” 的可视分析模块产品能力建设\n3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot 开源技术的建设',
        },
        {
          company_name: 'Ant Group',
          department_name: '大数据部',
          work_time: ['2017.06', '2017.12'],
          work_desc:
            '前端实习生。使用 React 参与开发多类产品：数据研发平台、数据决策平台、数据分析平台的研发工作，同时也参与大型 BI 产品的重构工作，有良好的编码习惯。',
        },
      ],
      projectList: [
        {
          project_name: '数据作战室',
          project_role: '前端负责人',
          project_time: '2019.04 - 2020.06',
          project_desc: [
            '面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。',
          ],
          project_content: [
            '1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率',
          ],
        },
        {
          project_name: 'DeepInsight',
          project_role: '可视分析负责人',
          project_time: '2018.07 - 2019.04 / 2020.07 - 至今',
          project_desc: [
            'DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，面向企业分析人员、业务人员和开发人员，帮助蚂蚁集团实现精细化运营。',
          ],
          project_content: [
            'BI 平台工具核心部分是报表制作，也就是通过数据连接、可视化配置形成图表物料之后，通过拖拽方式进行页面编排，最终形成报表页面进行发布的过程。\n1. 主导开放能力建设，拉通产品、设计建设和扩展可视化图形，提升丰富度\n2. 产品体验优化，尤其是对 ECharts 的体验顽疾进行攻克\n3. 主导可视化能力建设：业务标准化图表库建设(通用组件设计和开发经验丰富)、促进数据分析能力增强等可视化一体化建设',
          ],
        },
        {
          project_name: 'G2、G2Plot',
          project_role: '核心开发者',
          project_time: '2019 - 至今',
          project_desc: [
            'G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库',
          ],
          project_content: [
            'AntV 可视化建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。负责 AntV 系列: AntV 官网、G 渲染引擎、 G2、G2Plot、ThemeSet 主题构建器等开源项目的研发工作。',
          ],
        },
      ],
      workList: [],
      aboutme: {
        aboutme_desc:
          '🌱 Focus on data visualization and analysis 😈 能力项：沟通协调能力、执行力\n    自驱型前端工程师，三年多大型复杂产品开发经验，负责蚂蚁集团 BI 产品 DeepInsight 的可视化建设，参与了从图表库到 BI 产品力的一体化建设，对商业智能领域的数据可视化建设有较为丰富的经验。\n    参与 AntV 团队开源项目 G2、G2Plot 的研发，目前是 G2Plot 的主要负责人。\n    ',
      },
    },
  },
};
