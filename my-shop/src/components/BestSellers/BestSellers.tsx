import { Swiper, SwiperSlide } from "swiper/react"
import './BestSellers.css'
const BestSellers = () => {
  return (
    <div className="w-[80%] flex justify-center flex-col">
        <h1>Best Sellers</h1>
        <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
      >
        
          <SwiperSlide key={1}>
            <div className="product-item">
              <div className="product">
                <div className="product_image">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2UYjIh_mqRAWnKFUUyuHASqEEZzFbR2CMw&s' alt='' />
                </div>
                <div className="product_info">
                  <h6 className="product_name">
                    <a href="single.html">Title</a>
                  </h6>
                  <div className="product_price">
                    $price
                   
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default BestSellers