'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface DetailPageProps {
  pageNumber: number;
}

export default function DetailPage({ pageNumber }: DetailPageProps) {
  // Add state for tracking the text and image order
  const [cityText, setCityText] = useState("伦敦");
  const [imageOrder, setImageOrder] = useState([2, 3, 4]); // Represents img2, img3, img4

  // Handler for image click
  const handleImageClick = (imgNumber: number) => {
    // Update text based on which image was clicked
    if (imgNumber === 3) {
      setCityText("上海");
    } else if (imgNumber === 2) {
      setCityText("深圳");
    } else {
      setCityText("伦敦");
    }
    
    // Reorder images to bring clicked image to top
    setImageOrder(prev => {
      const newOrder = prev.filter(num => num !== imgNumber);
      return [...newOrder, imgNumber];
    });
  };

  // Calculate days between dates
  const calculateDays = () => {
    const startDate = new Date('2023-08-29');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-screen w-screen flex flex-col bg-[#F4F4F4] px-8"
    >
      <motion.div 
        className="flex items-start justify-between pt-2"
        layout
      >
        <motion.div layout className="flex items-center mt-1">
          <motion.span layout className="text-[48px] font-bold leading-none">2024</motion.span>
          <motion.div layout className="w-[16px] h-[16px] ml-1 mb-5 relative">
            <Image
              src="/heart.svg"
              alt="Heart icon"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>
        <div className="text-[#D6D6D6] leading-none mt-3 text-right text-[18px]">
          <div>GIGI</div>
          <div>KIWI</div>
        </div>
      </motion.div>

      {/* Dynamic content section based on page number */}
      {pageNumber === 1 ? (
        <div className="flex-grow flex flex-col">
          {/* Title and text content with softer, slower animations */}
          <motion.div 
            className="mt-20 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.h2 
              className="text-[24px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              亲爱的小咪
            </motion.h2>
            <div>
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                今天是我们在一起的
              </motion.p>
              <motion.p 
                className="text-[24px] font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.0,
                  ease: "easeOut"
                }}
              >
                第 {calculateDays()} 天
              </motion.p>
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.2,
                  ease: "easeOut"
                }}
              >
                很开心又和你一起度过了完整的一年
              </motion.p>
            </div>
          </motion.div>

          {/* Illustration */}
          <div className="flex-grow flex items-end justify-center">
            <motion.div
              className="relative w-[300px] h-[320px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                delay: 1.4,
                ease: "easeOut"
              }}
            >
              <Image
                src="/gk.png"
                alt="Couple illustration"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      ) : pageNumber === 2 ? (
        <div className="flex-grow flex flex-col">
          {/* Content with staggered animations */}
          <motion.div 
            className="mt-20 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <div>
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.6,
                  ease: "easeOut"
                }}
              >
                今年我们见面的时长是
              </motion.p>
              <motion.p 
                className="text-[24px] font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                39 天
              </motion.p>
              
              <div className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2,
                    delay: 1.0,
                    ease: "easeOut"
                  }}
                >
                  <span className="text-[24px] font-bold">宝安机场</span>
                  <span className="text-[24px] text-[#999999]"> 还有 </span>
                  <span className="text-[24px] font-bold">希</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2,
                    delay: 1.2,
                    ease: "easeOut"
                  }}
                >
                  <span className="text-[24px] font-bold">思罗机场</span>
                  <span className="text-[24px] text-[#999999]"> 见证了</span>
                </motion.div>
                <motion.p 
                  className="text-[24px] text-[#999999]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2,
                    delay: 1.4,
                    ease: "easeOut"
                  }}
                >
                  我们最多的期待<br/>
                   不舍，甜蜜 分离
                </motion.p>
              </div>

              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.6,
                  ease: "easeOut"
                }}
              >
                <p className="text-[24px] text-[#999999]">
                  每一次去机场接你<br/>的路上我都会觉得<span className="text-black font-bold">好幸福好幸福</span>，像一只尾巴快要摇断的小狗
                </p>
              </motion.div>

              <motion.p 
                className="text-[24px] text-[#999999] mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.8,
                  ease: "easeOut"
                }}
              >
                和你分别后回家的路上，会觉得伤心，又暗自下定决心，我会让这些分开的日子越来越少
              </motion.p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="absolute right-0 top-[180px] w-[170px] h-[240px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1.2,
              delay: 1.0,
              ease: "easeOut"
            }}
          >
            <Image
              src="/img1.png"
              alt="Airport photo"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      ) : pageNumber === 3 ? (
        <div className="flex-grow flex flex-col">
          {/* Title text with animation - absolute positioned */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.h2 
              className="absolute top-[20px] text-[24px] text-[#999999]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              不过
            </motion.h2>
            <motion.h1 
              className="absolute left-[50px] top-[10px] text-[128px] text-[#D9D9D9] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                delay: 0.8,
                ease: "easeOut"
              }}
            >
              {cityText}
            </motion.h1>
          </motion.div>

          {/* Stacked photos */}
          <div className="relative flex-grow">
            {imageOrder.map((imgNum, index) => (
              <motion.div 
                key={imgNum}
                style={{
                  width: '281px',
                  height: '363px',
                  bottom: `${10 + (index * 20)}px`,
                  right: `${-20 + (index * 40)}px`,
                  position: 'absolute',
                  transform: 'translateX(-50%)'
                }}
                className="cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.0 + (0.2 * index),
                  ease: "easeOut"
                }}
                onClick={() => handleImageClick(imgNum)}
              >
                <Image
                  src={`/img${imgNum}.png`}
                  alt={`Memory photo ${imgNum}`}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1.2,
              delay: 1.6,
              ease: "easeOut"
            }}
          >
            <h2 className="text-[24px] font-bold">
              都有我们牵着手走过的痕迹哟
            </h2>
          </motion.div>
        </div>
      ) : pageNumber === 4 ? (
        <div className="flex-grow flex flex-col">
          <motion.div 
            className="flex-grow flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <p className="text-[24px] text-[#999999]">嗯，悄悄告诉你哦</p>
              <div>
                <p className="text-[24px] text-[#999999]">
                  今年我最喜欢的餐厅是 <span className="text-black font-bold">Dorian</span>
                </p>
                <p className="text-[24px] text-[#999999]">
                  <span className="text-black font-bold">甬府小鲜</span> 还有 <span className="text-black font-bold">福餐厅</span>
                </p>
                <p className="text-[24px] text-[#999999]">那你呢？</p>
              </div>
            </motion.div>

            {/* Photos Grid */}
            <motion.div 
              
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: "easeOut"
              }}
            >
              <div className="relative w-[324px] h-[330px] mt-10">
                <Image
                  src="/dish.png"
                  alt="Restaurant dish"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
             
            </motion.div>
          </motion.div>
        </div>
      ) : pageNumber === 5 ? (
        <div className="flex-grow flex flex-col">
          <motion.div 
            className="flex-grow flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                在剩下的，分隔两地的时间里
              </motion.p>
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.0,
                  ease: "easeOut"
                }}
              >
                我们几乎每天都会通话
              </motion.p>
            </motion.div>

            {/* Chat Duration Cards */}
            <motion.div 
              className="mt-20 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: "easeOut"
              }}
            >
            <Image
              src="/chat.png"
              width={338}
              height={136}
              alt="Chat duration statistics"
            />
            </motion.div>

            {/* Bottom Text */}
            <motion.div
              className="mt-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.0,
                ease: "easeOut"
              }}
            >
              <p className="text-[24px] text-[#999999]">
                谢谢你的陪伴和分享，让我觉得自己好像就在你的身边
              </p>
            </motion.div>
          </motion.div>
        </div>
      ) : pageNumber === 6 ? (
        <div className="flex-grow flex flex-col">
          <motion.div 
            className="flex-grow flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Movies Section */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                今年我们还一起看了
              </motion.p>
              <motion.p 
                className="text-[24px] font-bold mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.0,
                  ease: "easeOut"
                }}
              >
                5 部电影
              </motion.p>
              
              <motion.div
                className="relative w-full h-[180px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: "easeOut"
                }}
              >
                <Image
                  src="/movie.png"
                  alt="Movies we watched together"
                  fill
                  className="object-contain object-left"
                />
              </motion.div>
            </motion.div>

            {/* Books Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.4,
                ease: "easeOut"
              }}
            >
              <motion.p 
                className="text-[24px] font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.6,
                  ease: "easeOut"
                }}
              >
                6 本小书
              </motion.p>
              
              <motion.div
                className="relative w-full h-[180px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.8,
                  ease: "easeOut"
                }}
              >
                <Image
                  src="/book.png"
                  alt="Books we read"
                  fill
                  className="object-contain object-left"
                />
              </motion.div>
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              className="text-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 2.0,
                ease: "easeOut"
              }}
            >
              <span className="text-[#999999]">和好多好多本 </span>
              <span className="font-bold">大侦探波洛</span>
            </motion.p>
          </motion.div>
        </div>
      ) : pageNumber === 7 ? (
        <div className="flex-grow flex flex-col">
          <motion.div 
            className="flex-grow flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Title Section */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
              在周末约会的时间里<br/>
我们还一起做了很多小项目<br/>
被好多好多人羡慕
              </motion.p>
              
            </motion.div>

            {/* Horizontal Scrolling Image */}
            <div className="mt-8 w-full overflow-x-scroll touch-pan-x no-scrollbar">
              <motion.div 
                className="min-w-[800px] pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                <Image
                  src="/projects.png"
                  width={1420}
                  height={190}
                  alt="Our projects"
                  priority
                  className="object-contain object-left"
                />
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.p
              className="mt-8 text-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.0,
                ease: "easeOut"
              }}
            >
              <span className="text-[#999999]">希望明年我们可以继续把它们做完＾＾</span>

            </motion.p>
          </motion.div>
        </div>
      ) : pageNumber === 8 ? (
        <div className="flex-grow flex flex-col">
          <motion.div 
            className="flex-grow flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Text Content */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <p className="text-[24px] text-[#999999]">
                不过我们也偶尔吵架斗气...
              </p>
              <p className="text-[24px] text-[#999999]">
                这些我不想记录了哼
              </p>
              <p className="text-[24px] text-[#999999]">
                但是我保证会对你有更多的爱和包容
              </p>
            </motion.div>
          </motion.div>

        </div>
      ) : pageNumber === 9 ? (
        <div className="flex-grow flex flex-col">
          <motion.div 
            className="flex-grow flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Text Content with staggered animations */}
            <motion.div
              className="mt-20 space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.p 
                className="text-[24px] text-[#999999]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                丰富的一年<br/>
                因为和你一起而显得格外充实<br/>
                的一年<br/>
                即使短暂的分隔两地也依然感<br/>
                到幸福的一年
              </motion.p>

              <motion.p 
                className="text-[24px] text-[#999999] mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.0,
                  ease: "easeOut"
                }}
              >
                我会更加珍惜你 爱护你 尽情享<br/>
                受所有和你在一起的时间 为了<br/>
                你更任性的勇敢
              </motion.p>

              <motion.p 
                className="text-[24px] text-[#999999] mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.2,
                  ease: "easeOut"
                }}
              >
                还有偷偷许下我的愿望
              </motion.p>

              <motion.p 
                className="text-[24px] text-[#999999] mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: 1.4,
                  ease: "easeOut"
                }}
              >
                最后...我爱你<br/>
                见到我的时候记得抱抱我
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      ) : null}

      {/* Fixed bottom arrow - Only show if not page 9 */}
      {pageNumber !== 9 && (
        <div className="pb-[60px] flex justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce">
            <path d="M12 20L4 12L6 10L12 16L18 10L20 12L12 20Z" fill="black" fillOpacity="0.3"/>
          </svg>
        </div>
      )}
    </motion.div>
  );
}