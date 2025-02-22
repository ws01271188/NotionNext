import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * AI智能场景化解决方案，展示不同场景下的AI智能体应用
 * @returns
 */
export const Solutions = () => {
  return (
    <>
      {/* <!-- ====== Solutions Section Start --> */}
      <section className='pb-8 pt-20 bg-gray-1 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_SOLUTIONS_TITLE', 'AI智能场景化解决方案')}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_SOLUTIONS_TEXT_1', '为您的业务注入AI智能新动力')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_SOLUTIONS_TEXT_2', '基于先进的AI大语言模型，我们打造专业的智能体解决方案，全方位提升您的业务效率')}
                </p>
              </div>
            </div>
          </div>
          
          <div className='-mx-4 flex flex-wrap'>
            {[1, 2, 3, 4].map((index) => {
              const solutions = {
                1: {
                  title: '超级客服智能体',
                  text: '7×24小时在线客服支持，精准理解客户需求，快速解决问题，提供专业、贴心的服务体验',
                  image: '/images/solutions/customer-service-ai.jpg'
                },
                2: {
                  title: '超级销售智能体',
                  text: '智能销售助手，精准把握客户意向，个性化推荐产品，提升成交率，实现销售业绩倍增',
                  image: '/images/solutions/sales-ai.jpg'
                },
                3: {
                  title: '智能营销内容智能体',
                  text: '自动生成营销文案、图片和视频，打造吸引力爆棚的内容，提升品牌影响力和用户转化',
                  image: '/images/solutions/marketing-ai.jpg'
                },
                4: {
                  title: '超级招聘智能体',
                  text: '智能简历筛选、候选人评估、面试辅助，让招聘更高效，帮助企业找到最合适的人才',
                  image: '/images/solutions/recruitment-ai.jpg'
                }
              }
              
              return (
                <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/2'>
                  <div className='wow fadeInUp group mb-12' data-wow-delay={`.${index}s`}>
                    <div className='relative mb-8 overflow-hidden rounded-[10px]'>
                      <img 
                        src={siteConfig(`STARTER_SOLUTIONS_${index}_IMAGE`, solutions[index].image)}
                        alt={solutions[index].title}
                        className='w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-dark bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300'></div>
                      <div className='absolute bottom-0 left-0 p-8'>
                        <h4 className='mb-3 text-2xl font-bold text-white'>
                          {siteConfig(`STARTER_SOLUTIONS_${index}_TITLE`, solutions[index].title)}
                        </h4>
                        <p className='mb-5 text-base text-white text-opacity-80'>
                          {siteConfig(`STARTER_SOLUTIONS_${index}_TEXT`, solutions[index].text)}
                        </p>
                        <Link
                          href={siteConfig(`STARTER_SOLUTIONS_${index}_BUTTON_URL`, `/solutions/${index}`)}
                          className='inline-flex items-center text-base font-medium text-white hover:text-primary'>
                          {siteConfig(`STARTER_SOLUTIONS_${index}_BUTTON_TEXT`, '了解更多')}
                          <span className='ml-2'>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Solutions Section End --> */}
    </>
  )
} 