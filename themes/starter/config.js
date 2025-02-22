/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/logo.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/logo-white.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '开源且免费的基于 Notion 笔记的网站构建工具', // 英雄区文字
  STARTER_HERO_TITLE_2: '通过笔记无感知地建站、成倍放大您的价值', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://lingdi.beatchat.cn/', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://noteforms.com/forms/mczxb5', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '我们的产品', // 特性
  STARTER_FEATURE_TEXT_1: '智启未来，全域赋能', // 特性
  STARTER_FEATURE_TEXT_2:
    '企业级AI全场景解决方案矩阵，打通智能应用从构建到商业化的全价值链。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '▍灵谛AI', // 特性1
  STARTER_FEATURE_1_TITLE_2: '企业级AI智能体中枢平台', // 特性1副标题
  STARTER_FEATURE_1_TEXT_1: '「5分钟构建多模态AI工作流，让企业拥有专属AI大脑」', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://lingdi.beatchat.cn/', // 特性1
  STARTER_FEATURE_1_ICON: '/images/starter/logo/logo.svg', // 特性1图标

  STARTER_FEATURE_2_TITLE_1: '▍视智星', // 特性2
  STARTER_FEATURE_2_TITLE_2: '内容工业化智能引擎', // 特性2副标题
  STARTER_FEATURE_2_TEXT_1: '「从创意到爆款，AI驱动的内容生产力革命」', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '/', // 特性2
  STARTER_FEATURE_2_ICON: '/images/starter/features/shizhixing.png', // 特性2图标

  STARTER_FEATURE_3_TITLE_1: '▍灵聚AI', // 特性3
  STARTER_FEATURE_3_TITLE_2: '大模型智能调度中枢', // 特性3副标题
  STARTER_FEATURE_3_TEXT_1: '「一键接入全球30+顶尖模型，打造企业级AI算力网络」', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/', // 特性3
  STARTER_FEATURE_3_ICON: '/images/starter/features/lingju.svg', // 特性3图标

  STARTER_FEATURE_4_TITLE_1: '▍AI球策', // 特性4
  STARTER_FEATURE_4_TITLE_2: '赛事决策科学专家系统', // 特性4副标题
  STARTER_FEATURE_4_TEXT_1: '「千万级数据+专业球探经验，AI重构体育产业决策链」', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://qiuce.beatchat.cn/', // 特性4
  STARTER_FEATURE_4_ICON: '/images/starter/features/qiuce.png', // 特性4图标

  // AI教程区块
  STARTER_AI_TUTORIALS_ENABLE: true, // AI教程区块开关
  STARTER_AI_TUTORIALS_SUBTITLE: 'AI 教程',
  STARTER_AI_TUTORIALS_TITLE: '探索 AI 的无限可能',
  STARTER_AI_TUTORIALS_DESCRIPTION: '从入门到精通，带你掌握AI技术的精髓，释放创新潜能',

  // DeepSeek AI 教程
  STARTER_AI_TUTORIAL_1_IMAGE: '/images/starter/ai/deepseek.png',
  STARTER_AI_TUTORIAL_1_TITLE: 'DeepSeek AI 教程',
  STARTER_AI_TUTORIAL_1_DESCRIPTION: '探索 DeepSeek AI 的强大功能，掌握大模型应用技巧',
  STARTER_AI_TUTORIAL_1_URL: '/tutorial',

  // Cursor IDE 教程
  STARTER_AI_TUTORIAL_2_IMAGE: '/images/starter/ai/cursor.png',
  STARTER_AI_TUTORIAL_2_TITLE: 'Cursor IDE 教程',
  STARTER_AI_TUTORIAL_2_DESCRIPTION: '学习使用 AI 驱动的智能编程工具，提升开发效率',
  STARTER_AI_TUTORIAL_2_URL: '/tutorial',

  // 扣子 AI 教程
  STARTER_AI_TUTORIAL_3_IMAGE: '/images/starter/ai/coze.png',
  STARTER_AI_TUTORIAL_3_TITLE: '扣子 AI 教程',
  STARTER_AI_TUTORIAL_3_DESCRIPTION: '掌握扣子 AI 应用开发，构建智能化解决方案',
  STARTER_AI_TUTORIAL_3_URL: '/tutorial',

  // AI 提示词教程
  STARTER_AI_TUTORIAL_4_IMAGE: '/images/starter/ai/prompt.png',
  STARTER_AI_TUTORIAL_4_TITLE: 'AI 提示词教程',
  STARTER_AI_TUTORIAL_4_DESCRIPTION: '学习 Prompt Engineering，提升 AI 输出质量',
  STARTER_AI_TUTORIAL_4_URL: '/tutorial',

  // AI Agent 教程
  STARTER_AI_TUTORIAL_5_IMAGE: '/images/starter/ai/agent.png',
  STARTER_AI_TUTORIAL_5_TITLE: 'AI Agent 教程',
  STARTER_AI_TUTORIAL_5_DESCRIPTION: '深入了解 AI Agent 开发，构建智能助手',
  STARTER_AI_TUTORIAL_5_URL: '/tutorial',

  // AI 企业落地教程
  STARTER_AI_TUTORIAL_6_IMAGE: '/images/starter/ai/enterprise.png',
  STARTER_AI_TUTORIAL_6_TITLE: 'AI 企业落地教程',
  STARTER_AI_TUTORIAL_6_DESCRIPTION: '企业 AI 转型实践指南，从技术到业务的全方位落地',
  STARTER_AI_TUTORIAL_6_URL: '/tutorial',

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '企业级AI解决方案引领者',
  STARTER_ABOUT_TEXT:
    '我们是专业的企业AI服务提供商，致力于为企业提供从AI模型部署、知识库构建到智能应用开发的一站式解决方案。\n\n依托深厚的AI技术积累和丰富的行业实践经验，我们帮助企业快速实现AI转型升级，构建面向未来的智能化竞争优势。无论是大模型私有部署、AI工作流编排，还是智能客服、智能营销等场景应用，我们都能为您提供专业可靠的技术支持与服务。',
  STARTER_ABOUT_BUTTON_TEXT: '探索AI解决方案',
  STARTER_ABOUT_BUTTON_URL: '/solutions',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: '企业客户',
  STARTER_ABOUT_TIPS_3: '正在使用我们的AI服务',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '客户案例',
  STARTER_TESTIMONIALS_TEXT_1: '企业AI转型之声',
  STARTER_TESTIMONIALS_TEXT_2:
    '数百家企业选择我们的AI解决方案，通过专业的技术支持、完善的培训体系以及持续的优化服务，成功实现数字化智能升级',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灵谛AI平台真的让我们的工作效率提升了好几个档次！只用了5分钟就完成了AI工作流的搭建，现在我们的团队可以专注于更有创造性的工作。平台的界面直观友好，技术支持也非常到位。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Michael Chen',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '科技公司 CTO',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '作为一名内容创作者，视智星彻底改变了我的工作方式。AI驱动的创意生成让我的内容产出速度提升了3倍，而且质量始终保持在高水准。特别喜欢它的一键多渠道分发功能，帮我节省了大量时间。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sarah Zhang',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '资深内容创作者',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'DeepSeek AI的教程非常实用，从基础概念到高级应用都讲解得很清晰。特别是实战案例部分，帮助我快速掌握了大模型的使用技巧。现在我们团队已经成功将AI应用到多个业务场景中。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'David Liu',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI研发主管',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灵聚AI的模型调度功能太强大了！一键接入多个顶级模型，智能分配计算资源，让我们的AI应用性能提升了50%以上。最重要的是，它的定价很合理，性价比超高。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Kevin Wang',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '创业公司创始人',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'AI球策真是体育行业的革命性产品！它的数据分析能力超乎想象，帮助我们在多个重要赛事中做出了准确的决策。感谢团队提供的专业支持和持续优化。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Tom Li',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '体育数据分析师',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Cursor IDE的教程对我们团队帮助很大，完全改变了我们的开发效率。结合AI的智能编程让代码质量显著提升，bug率降低了30%。强烈推荐给所有开发团队！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Emily Wu',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '技术团队负责人',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://example.com/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '了解更多关于我们的AI解决方案',
  STARTER_FAQ_TEXT_2: '为您解答企业AI转型过程中的关键问题',

  STARTER_FAQ_1_QUESTION: '如何开始使用你们的AI解决方案？',
  STARTER_FAQ_1_ANSWER:
    '我们提供完整的企业AI落地方案，从需求评估开始，到方案设计、部署实施、培训支持的全流程服务。您可以<a href="/contact" className="underline">联系我们</a>，我们的顾问团队会为您提供专业咨询和定制化方案。',

  STARTER_FAQ_2_QUESTION: '你们的AI产品是否安全可靠？如何保护数据隐私？',
  STARTER_FAQ_2_ANSWER:
    '数据安全是我们的首要考虑。我们提供企业级私有部署方案，所有数据都存储在您的私有环境中。同时，我们的产品通过了ISO27001安全认证，采用端到端加密技术，确保您的数据安全。详细了解我们的<a className="underline" href="/security">安全保障措施</a>。',

  STARTER_FAQ_3_QUESTION: '使用AI解决方案需要多少技术基础？',
  STARTER_FAQ_3_ANSWER:
    '我们的产品设计秉承"易用性优先"原则。以灵谛AI为例，通过可视化界面即可完成AI工作流搭建，无需编程经验。同时，我们提供完善的<a className="underline" href="/training">培训课程</a>和技术支持，帮助您的团队快速掌握使用方法。',

  STARTER_FAQ_4_QUESTION: '你们的AI解决方案支持哪些语言模型？',
  STARTER_FAQ_4_ANSWER:
    '我们的灵聚AI支持接入30+全球顶尖大语言模型，包括GPT-4、Claude、Gemini等。同时，我们也提供模型定制训练服务，可以根据您的业务场景打造专属模型。查看完整的<a className="underline" href="/models">支持模型列表</a>。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '核心团队',
  STARTER_TEAM_TEXT_1: '行业精英，技术专家',
  STARTER_TEAM_TEXT_2:
    '我们的团队由AI领域的资深专家组成，拥有丰富的企业服务经验和深厚的技术积累，致力于为企业提供一流的AI解决方案',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-ceo.png',
      STARTER_TEAM_ITEM_NICKNAME: '曾意恒',
      STARTER_TEAM_ITEM_DESCRIPTION: '创始人兼CEO | AI研究员'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-cto.png',
      STARTER_TEAM_ITEM_NICKNAME: '李明辉',
      STARTER_TEAM_ITEM_DESCRIPTION: 'CTO | 人工智能专家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-product.png',
      STARTER_TEAM_ITEM_NICKNAME: '陈晓军',
      STARTER_TEAM_ITEM_DESCRIPTION: '产品总监 | 企业AI解决方案专家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-ai-architect.png',
      STARTER_TEAM_ITEM_NICKNAME: '刘路',
      STARTER_TEAM_ITEM_DESCRIPTION: 'AI架构师 | 大模型专家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-solution.png',
      STARTER_TEAM_ITEM_NICKNAME: '王婷',
      STARTER_TEAM_ITEM_DESCRIPTION: '解决方案总监 | 企业数字化转型专家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-customer.png',
      STARTER_TEAM_ITEM_NICKNAME: '林雪',
      STARTER_TEAM_ITEM_DESCRIPTION: '客户成功总监 | 企业服务专家'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的资讯',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于AI的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，广西',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'service@beatchat.cn',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/mczxb5', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '产品与服务',
      LINK_GROUP: [
        { TITLE: '灵谛AI平台', URL: '/products' },
        { TITLE: '视智星', URL: '/products' },
        { TITLE: '灵聚AI', URL: '/products' },
        { TITLE: 'AI球策', URL: '/products' }
      ]
    },
    {
      TITLE: '解决方案',
      LINK_GROUP: [
        { TITLE: '智能客服方案', URL: '/scheme' },
        { TITLE: '智能营销方案', URL: '/scheme' },
        { TITLE: '智能销售方案', URL: '/scheme' },
        { TITLE: '智能招聘方案', URL: '/scheme' }
      ]
    },
    {
      TITLE: 'AI学院',
      LINK_GROUP: [
        { TITLE: 'DeepSeek教程', URL: '/tutorial' },
        { TITLE: 'Cursor IDE教程', URL: '/tutorial' },
        { TITLE: '扣子AI教程', URL: '/tutorial' },
        { TITLE: 'AI提示词教程', URL: '/tutorial' }
      ]
    },
    // {
    //   TITLE: '关于我们',
    //   LINK_GROUP: [
    //     { TITLE: '公司介绍', URL: '/about' },
    //     { TITLE: '核心团队', URL: '/team' },
    //     { TITLE: '加入我们', URL: '/careers' },
    //     { TITLE: '联系我们', URL: '/contact' }
    //   ]
    // }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新动态',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legal-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务条款',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-service',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '准备好开启AI转型之旅了吗？',
  STARTER_CTA_TITLE_2: '让我们从这里开始',
  STARTER_CTA_DESCRIPTION:
    '无论您是想提升客服效率、优化营销策略，还是实现智能化办公，我们都能为您提供专业的AI解决方案。现在就开始您的数字化转型之旅吧！',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL: '/contact',
  STARTER_CTA_BUTTON_TEXT: '免费咨询',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.tiaotech.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false, // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp

  // 服务区块
  STARTER_SERVICES_ENABLE: true, // 服务区块开关
  STARTER_SERVICES_TITLE: '企业AI服务',
  STARTER_SERVICES_TEXT_1: '全方位AI解决方案',
  STARTER_SERVICES_TEXT_2: '为企业提供一站式AI技术服务，助力数字化转型升级',

  // 服务1 - 大模型私有部署
  STARTER_SERVICES_1_ICON: '/images/starter/services/ai-deploy.svg',
  STARTER_SERVICES_1_TITLE: '大模型私有部署',
  STARTER_SERVICES_1_TEXT: '提供企业级AI大模型的本地化部署服务，确保数据安全与隐私保护',
  STARTER_SERVICES_1_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_1_BUTTON_URL: '/services/ai-deploy',

  // 服务2 - AI知识库搭建
  STARTER_SERVICES_2_ICON: '/images/starter/services/ai-knowledge.svg',
  STARTER_SERVICES_2_TITLE: 'AI知识库搭建',
  STARTER_SERVICES_2_TEXT: '构建智能化企业知识管理系统，实现知识的高效存储、检索与应用',
  STARTER_SERVICES_2_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_2_BUTTON_URL: '/services/ai-knowledge',

  // 服务3 - AI提示词工程
  STARTER_SERVICES_3_ICON: '/images/starter/services/ai-prompt.svg',
  STARTER_SERVICES_3_TITLE: 'AI提示词工程',
  STARTER_SERVICES_3_TEXT: '专业的prompt优化与设计服务，提升AI模型输出质量与效率',
  STARTER_SERVICES_3_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_3_BUTTON_URL: '/services/ai-prompt',

  // 服务4 - AI企业咨询
  STARTER_SERVICES_4_ICON: '/images/starter/services/ai-consulting.svg',
  STARTER_SERVICES_4_TITLE: 'AI企业咨询',
  STARTER_SERVICES_4_TEXT: '提供AI战略规划、技术选型、落地实施等全方位咨询服务',
  STARTER_SERVICES_4_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_4_BUTTON_URL: '/services/ai-consulting',

  // 服务5 - AI插件定制
  STARTER_SERVICES_5_ICON: '/images/starter/services/ai-plugin.svg',
  STARTER_SERVICES_5_TITLE: 'AI插件定制',
  STARTER_SERVICES_5_TEXT: '根据企业需求开发定制化AI插件和工具，提升业务效率',
  STARTER_SERVICES_5_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_5_BUTTON_URL: '/services/ai-plugin',

  // 服务6 - AI工作流编排
  STARTER_SERVICES_6_ICON: '/images/starter/services/ai-workflow.svg',
  STARTER_SERVICES_6_TITLE: 'AI工作流编排',
  STARTER_SERVICES_6_TEXT: '设计与实现智能化业务流程，打造企业级AI自动化解决方案',
  STARTER_SERVICES_6_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_6_BUTTON_URL: '/services/ai-workflow',

  // 服务7 - AI培训赋能
  STARTER_SERVICES_7_ICON: '/images/starter/services/ai-training.svg',
  STARTER_SERVICES_7_TITLE: 'AI培训赋能',
  STARTER_SERVICES_7_TEXT: '提供AI技术培训与能力建设服务，助力企业打造AI人才梯队',
  STARTER_SERVICES_7_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_7_BUTTON_URL: '/services/ai-training',

  // 服务8 - AI模型微调训练
  STARTER_SERVICES_8_ICON: '/images/starter/services/ai-finetune.svg',
  STARTER_SERVICES_8_TITLE: 'AI模型微调训练',
  STARTER_SERVICES_8_TEXT: '基于企业数据对大模型进行定制化训练，打造符合行业特点的专属模型',
  STARTER_SERVICES_8_BUTTON_TEXT: '了解更多',
  STARTER_SERVICES_8_BUTTON_URL: '/services/ai-finetune',

  STARTER_SOLUTIONS_ENABLE: true, // 场景解决方案开关
  STARTER_SOLUTIONS_TITLE: 'AI智能场景化解决方案',
  STARTER_SOLUTIONS_TEXT_1: '为您的业务注入AI智能新动力',
  STARTER_SOLUTIONS_TEXT_2: '基于先进的AI大语言模型，我们打造专业的智能体解决方案，全方位提升您的业务效率',

  // 解决方案1 - 超级客服智能体
  STARTER_SOLUTIONS_1_IMAGE: '/images/starter/solutions/customer-service-ai.jpg',
  STARTER_SOLUTIONS_1_TITLE: '超级客服智能体',
  STARTER_SOLUTIONS_1_TEXT: '7×24小时在线客服支持，精准理解客户需求，快速解决问题，提供专业、贴心的服务体验',
  STARTER_SOLUTIONS_1_BUTTON_TEXT: '了解更多',
  STARTER_SOLUTIONS_1_BUTTON_URL: '/scheme',

  // 解决方案2 - 超级销售智能体
  STARTER_SOLUTIONS_2_IMAGE: '/images/starter/solutions/sales-ai.jpg',
  STARTER_SOLUTIONS_2_TITLE: '超级销售智能体',
  STARTER_SOLUTIONS_2_TEXT: '智能销售助手，精准把握客户意向，个性化推荐产品，提升成交率，实现销售业绩倍增',
  STARTER_SOLUTIONS_2_BUTTON_TEXT: '了解更多',
  STARTER_SOLUTIONS_2_BUTTON_URL: '/scheme',

  // 解决方案3 - 智能营销内容智能体
  STARTER_SOLUTIONS_3_IMAGE: '/images/starter/solutions/marketing-ai.jpg',
  STARTER_SOLUTIONS_3_TITLE: '智能营销内容智能体',
  STARTER_SOLUTIONS_3_TEXT: '自动生成营销文案、图片和视频，打造吸引力爆棚的内容，提升品牌影响力和用户转化',
  STARTER_SOLUTIONS_3_BUTTON_TEXT: '了解更多',
  STARTER_SOLUTIONS_3_BUTTON_URL: '/scheme',

  // 解决方案4 - 超级招聘智能体
  STARTER_SOLUTIONS_4_IMAGE: '/images/starter/solutions/recruitment-ai.jpg',
  STARTER_SOLUTIONS_4_TITLE: '超级招聘智能体',
  STARTER_SOLUTIONS_4_TEXT: '智能简历筛选、候选人评估、面试辅助，让招聘更高效，帮助企业找到最合适的人才',
  STARTER_SOLUTIONS_4_BUTTON_TEXT: '了解更多',
  STARTER_SOLUTIONS_4_BUTTON_URL: '/scheme',
}
export default CONFIG
