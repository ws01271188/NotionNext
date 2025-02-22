/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import Head from 'next/head'

export const Testimonials = () => {
  const swiperRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
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
        if (!Swiper || !containerRef.current) {
          return
        }

        // 初始化轮播
        const swiper = new Swiper(containerRef.current, {
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: '.testimonial-next-btn',
            prevEl: '.testimonial-prev-btn'
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
        })

        swiperRef.current = swiper
      } catch (error) {
        console.error('Error initializing testimonial swiper:', error)
      }
    }

    initSwiper()

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true)
      }
    }
  }, [])

  // 用户评分
  const ratings = [1, 2, 3, 4, 5]
  const STARTER_TESTIMONIALS_ITEMS = siteConfig('STARTER_TESTIMONIALS_ITEMS')

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css"
        />
      </Head>
      <section
        id='testimonials'
        className='overflow-hidden bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_TESTIMONIALS_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                  {siteConfig('STARTER_TESTIMONIALS_TEXT_1')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_TESTIMONIALS_TEXT_2')}
                </p>
              </div>
            </div>
          </div>

          <div className='-m-5'>
            <div ref={containerRef} className='swiper testimonial-carousel !overflow-hidden p-5'>
              <div className='swiper-wrapper'>
                {STARTER_TESTIMONIALS_ITEMS?.map((item, index) => {
                  return (
                    <div key={index} className='swiper-slide !h-auto'>
                      <div className='rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]'>
                        <div className='mb-[18px] flex items-center gap-[2px]'>
                          {ratings.map((rating, index) => (
                            <img
                              key={index}
                              alt='star icon'
                              src={siteConfig('STARTER_TESTIMONIALS_STAR_ICON')}
                            />
                          ))}
                        </div>

                        <p className='mb-6 text-base text-body-color dark:text-dark-6'>
                          "{item.STARTER_TESTIMONIALS_ITEM_TEXT}"
                        </p>

                        <a
                          href={item.STARTER_TESTIMONIALS_ITEM_URL}
                          className='flex items-center gap-4'>
                          <div className='h-[50px] w-[50px] overflow-hidden rounded-full'>
                            <img
                              src={item.STARTER_TESTIMONIALS_ITEM_AVATAR}
                              alt='author'
                              className='h-[50px] w-[50px] overflow-hidden rounded-full object-cover'
                            />
                          </div>

                          <div>
                            <h3 className='text-sm font-semibold text-dark dark:text-white'>
                              {item.STARTER_TESTIMONIALS_ITEM_NICKNAME}
                            </h3>
                            <p className='text-xs text-body-secondary'>
                              {item.STARTER_TESTIMONIALS_ITEM_DESCRIPTION}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className='mt-[60px] flex items-center justify-center gap-4'>
                <button className='testimonial-prev-btn swiper-button-prev !static !w-10 !h-10 !m-0 !bg-white dark:!bg-gray-800 !rounded-full !shadow-md hover:!bg-gray-50 dark:hover:!bg-gray-700'>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className='testimonial-next-btn swiper-button-next !static !w-10 !h-10 !m-0 !bg-white dark:!bg-gray-800 !rounded-full !shadow-md hover:!bg-gray-50 dark:hover:!bg-gray-700'>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          /* Testimonial specific styles */
          .testimonial-carousel.swiper {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
            display: block;
          }

          .testimonial-carousel .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
            box-sizing: content-box;
          }

          .testimonial-carousel .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            transition-property: transform;
            display: block;
          }

          .testimonial-carousel .swiper-button-next,
          .testimonial-carousel .swiper-button-prev {
            position: static;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--swiper-navigation-color, var(--swiper-theme-color));
          }

          .testimonial-carousel .swiper-button-next:after,
          .testimonial-carousel .swiper-button-prev:after {
            display: none;
          }

          .testimonial-carousel .swiper-button-disabled {
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
          }

          @media (max-width: 640px) {
            .testimonial-carousel {
              padding: 0;
            }
          }
        `}</style>
      </section>
    </>
  )
}
