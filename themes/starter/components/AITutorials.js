/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { useEffect, useRef } from 'react'
import { loadExternalResource } from '@/lib/utils'
import Head from 'next/head'

export const AITutorials = () => {
  const swiperRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    let swiper = null
    
    const initSwiper = async () => {
      try {
        // 先加载 CSS
        await loadExternalResource(
          'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css',
          'css'
        )
        // 再加载 JS
        await loadExternalResource(
          'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js',
          'js'
        )

        // 等待一下确保资源加载完成
        await new Promise(resolve => setTimeout(resolve, 100))

        const Swiper = window.Swiper
        if (!Swiper) {
          console.error('Swiper not loaded')
          return
        }

        // 确保 DOM 已经准备好
        if (!containerRef.current) {
          return
        }

        // 初始化轮播
        swiper = new Swiper(containerRef.current, {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          // 导航按钮
          navigation: {
            nextEl: '.tutorial-next-btn',
            prevEl: '.tutorial-prev-btn'
          },
          // 响应式布局
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
        })

        swiperRef.current = swiper
      } catch (error) {
        console.error('Error initializing Swiper:', error)
      }
    }

    initSwiper()

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true)
      }
    }
  }, [])

  // 获取所有教程数据
  const tutorials = [
    {
      level: '基础',
      delay: '.1s',
      image: siteConfig('STARTER_AI_TUTORIAL_1_IMAGE', '/images/starter/ai/tutorial-1.jpg', CONFIG),
      title: siteConfig('STARTER_AI_TUTORIAL_1_TITLE', 'DeepSeek AI 教程', CONFIG),
      description: siteConfig('STARTER_AI_TUTORIAL_1_DESCRIPTION', '探索 DeepSeek AI 的强大功能，掌握大模型应用技巧', CONFIG),
      url: siteConfig('STARTER_AI_TUTORIAL_1_URL', '/ai/deepseek', CONFIG)
    },
    {
      level: '工具',
      delay: '.15s',
      image: siteConfig('STARTER_AI_TUTORIAL_2_IMAGE', '/images/starter/ai/tutorial-2.jpg', CONFIG),
      title: siteConfig('STARTER_AI_TUTORIAL_2_TITLE', 'Cursor IDE 教程', CONFIG),
      description: siteConfig('STARTER_AI_TUTORIAL_2_DESCRIPTION', '学习使用 AI 驱动的智能编程工具，提升开发效率', CONFIG),
      url: siteConfig('STARTER_AI_TUTORIAL_2_URL', '/ai/cursor', CONFIG)
    },
    {
      level: '应用',
      delay: '.2s',
      image: siteConfig('STARTER_AI_TUTORIAL_3_IMAGE', '/images/starter/ai/tutorial-3.jpg', CONFIG),
      title: siteConfig('STARTER_AI_TUTORIAL_3_TITLE', '扣子 AI 教程', CONFIG),
      description: siteConfig('STARTER_AI_TUTORIAL_3_DESCRIPTION', '掌握扣子 AI 应用开发，构建智能化解决方案', CONFIG),
      url: siteConfig('STARTER_AI_TUTORIAL_3_URL', '/ai/kouzi', CONFIG)
    },
    {
      level: '进阶',
      delay: '.25s',
      image: siteConfig('STARTER_AI_TUTORIAL_4_IMAGE', '/images/starter/ai/tutorial-4.jpg', CONFIG),
      title: siteConfig('STARTER_AI_TUTORIAL_4_TITLE', 'AI 提示词教程', CONFIG),
      description: siteConfig('STARTER_AI_TUTORIAL_4_DESCRIPTION', '学习 Prompt Engineering，提升 AI 输出质量', CONFIG),
      url: siteConfig('STARTER_AI_TUTORIAL_4_URL', '/ai/prompt', CONFIG)
    },
    {
      level: '高级',
      delay: '.3s',
      image: siteConfig('STARTER_AI_TUTORIAL_5_IMAGE', '/images/starter/ai/tutorial-5.jpg', CONFIG),
      title: siteConfig('STARTER_AI_TUTORIAL_5_TITLE', 'AI Agent 教程', CONFIG),
      description: siteConfig('STARTER_AI_TUTORIAL_5_DESCRIPTION', '深入了解 AI Agent 开发，构建智能助手', CONFIG),
      url: siteConfig('STARTER_AI_TUTORIAL_5_URL', '/ai/agent', CONFIG)
    },
    {
      level: '企业',
      delay: '.35s',
      image: siteConfig('STARTER_AI_TUTORIAL_6_IMAGE', '/images/starter/ai/tutorial-6.jpg', CONFIG),
      title: siteConfig('STARTER_AI_TUTORIAL_6_TITLE', 'AI 企业落地教程', CONFIG),
      description: siteConfig('STARTER_AI_TUTORIAL_6_DESCRIPTION', '企业 AI 转型实践指南，从技术到业务的全方位落地', CONFIG),
      url: siteConfig('STARTER_AI_TUTORIAL_6_URL', '/ai/enterprise', CONFIG)
    }
  ]

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css"
        />
      </Head>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  {siteConfig('STARTER_AI_TUTORIALS_SUBTITLE', 'AI 教程', CONFIG)}
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  {siteConfig('STARTER_AI_TUTORIALS_TITLE', '探索 AI 的无限可能', CONFIG)}
                </h2>
                <p className="text-lg leading-relaxed text-body-color dark:text-dark-6">
                  {siteConfig('STARTER_AI_TUTORIALS_DESCRIPTION', '从入门到精通，带你掌握AI技术的精髓，释放创新潜能', CONFIG)}
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4">
            <div ref={containerRef} className="swiper tutorial-carousel !overflow-hidden">
              <div className="swiper-wrapper">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="swiper-slide !h-auto">
                    <div className="wow fadeInUp group mx-4" data-wow-delay={tutorial.delay}>
                      <div className="relative z-1 mb-8 overflow-hidden rounded-xl aspect-[4/3]">
                        <img
                          src={tutorial.image}
                          alt="AI教程"
                          className="w-full h-full object-cover transition group-hover:rotate-6 group-hover:scale-125"
                        />
                        <span className="absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 text-sm font-semibold capitalize text-white">
                          {tutorial.level}
                        </span>
                      </div>
                      <div className="p-6 sm:p-8">
                        <h3 className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                          {tutorial.title}
                        </h3>
                        <p className="mb-6 text-base text-body-color dark:text-dark-6">
                          {tutorial.description}
                        </p>
                        <Link
                          href={tutorial.url}
                          className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                        >
                          了解更多
                          <span className="ml-2">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="currentColor"/>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[40px] flex items-center justify-center gap-4">
                <button className="tutorial-prev-btn swiper-button-prev !static !w-10 !h-10 !m-0 !bg-white dark:!bg-gray-800 !rounded-full !shadow-md hover:!bg-gray-50 dark:hover:!bg-gray-700">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="tutorial-next-btn swiper-button-next !static !w-10 !h-10 !m-0 !bg-white dark:!bg-gray-800 !rounded-full !shadow-md hover:!bg-gray-50 dark:hover:!bg-gray-700">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          /* Tutorial specific styles */
          .tutorial-carousel.swiper {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
            display: block;
          }

          .tutorial-carousel .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
            box-sizing: content-box;
          }

          .tutorial-carousel .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            transition-property: transform;
            display: block;
          }

          .tutorial-carousel .swiper-button-next,
          .tutorial-carousel .swiper-button-prev {
            position: static;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--swiper-navigation-color, var(--swiper-theme-color));
          }

          .tutorial-carousel .swiper-button-next:after,
          .tutorial-carousel .swiper-button-prev:after {
            display: none;
          }

          .tutorial-carousel .swiper-button-disabled {
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
          }

          @media (max-width: 640px) {
            .tutorial-carousel {
              padding: 0;
            }
          }
        `}</style>
      </section>
    </>
  )
} 