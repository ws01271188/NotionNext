import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * 服务相关，将显示企业提供的服务内容
 * @returns
 */
export const Services = () => {
  return (
    <>
      {/* <!-- ====== Services Section Start --> */}
      <section className='pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_SERVICES_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_SERVICES_TEXT_1')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_SERVICES_TEXT_2')}
                </p>
              </div>
            </div>
          </div>
          
          <div className='-mx-4 flex flex-wrap'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/4'>
                <div className='wow fadeInUp group mb-12 md:mb-24' data-wow-delay={`.${index}s`}>
                  <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary'>
                    <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
                    <img 
                      src={siteConfig(`STARTER_SERVICES_${index}_ICON`)} 
                      alt="service icon" 
                      className='h-8 w-8'
                    />
                  </div>
                  <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>
                    {siteConfig(`STARTER_SERVICES_${index}_TITLE`)}
                  </h4>
                  <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>
                    {siteConfig(`STARTER_SERVICES_${index}_TEXT`)}
                  </p>
                  <Link
                    href={siteConfig(`STARTER_SERVICES_${index}_BUTTON_URL`, '')}
                    className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary'>
                    {siteConfig(`STARTER_SERVICES_${index}_BUTTON_TEXT`)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== Services Section End --> */}
    </>
  )
} 