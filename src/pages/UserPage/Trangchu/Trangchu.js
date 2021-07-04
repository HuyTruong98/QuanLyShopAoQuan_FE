import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import { Button, Card, Col, Row, Space, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as  actKhoQuanAO from "../../../actions/quanlyKho_quan_ao/actQuanlyQuanAo";
import * as actGetAllSize from "../../../actions/quanly_size/actQuanLySize";
import * as actGetAllLoaiSanPham from "../../../actions/loai_sanpham/loaiSanPham";
import * as actGetAllSanPhamDuoc from "../../../actions/sanphamDuoc/sanPhamDuoc";
import { renderTien } from "../../../notification/renderConvert";
import { ShoppingCartOutlined } from "@ant-design/icons";
import NewArrivalTshirt from './NewArrival-Tshirt';
import HoodieNewArrival from './HoodieNewArrival';
import PhuKienNewArrival from './PhuKienNewArrival';


function Trangchu(props) {
  const listKho = useSelector(state => state.quanlyKhoAoQuan.list);
  const listSize = useSelector(state => state.quanlySize.list);
  const listLoaiSanPham = useSelector(state => state.loaiSanPham.list);
  const listSanPhamDuoc = useSelector(state => state.sanPhamDuoc.list);
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const dispatch = useDispatch()

  let interval = useRef();

  const { TabPane } = Tabs;

  const starTimer = () => {
    const countdownDate = new Date('July 30, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date(); // cái ni là lấy ngày h hiện tại theo local máy tính
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  }



  const hotDeal = listKho.filter((item) => item.sanphamduocId === 4);
  function renderSanPhamHotDeal() {
    return hotDeal.map((hotDealItem) => (
      <>
        <div className="card-hot-deal">
          <div className="card-hot-deal-card">
            <div className="card-hot-deal-title">
              <h5>{hotDealItem.tenSanPham}</h5>
              <div>
                <strong>{renderTien(hotDealItem.priceSale)}</strong> &emsp;
                <strike>{renderTien(hotDealItem.price)}</strike>
              </div>
              <div>
                <section className="timer-container">
                  <section className="timer">
                    <div>
                      <span className="mdi mdi-calnedar-clock timer-icon"></span>
                      <h6>Thời gian còn lại</h6>
                    </div>
                    <div>
                      <section>
                        <strong>{timerDays}</strong>
                        <p><smal>Ngày</smal></p>
                      </section>
                      <span></span>
                      <section>
                        <strong>{timerHours}</strong>
                        <p><smal>Giờ</smal></p>
                      </section>
                      <span></span>
                      <section>
                        <strong>{timerMinutes}</strong>
                        <p><smal>Phút</smal></p>
                      </section>
                      <span></span>
                      <section>
                        <strong>{timerSeconds}</strong>
                        <p><smal>Giây</smal></p>
                      </section>
                    </div>
                  </section>
                </section>
              </div>
              <div className="card-hot-deal-giohang">
                <Button style={{ height: '50px' }}>
                  <i style={{ fontSize: '30px' }} class="fa fa-shopping-cart" aria-hidden="true"></i> <strong style={{ paddingLeft: '20px', fontSize: '18px' }}>MUA NGAY</strong>
                </Button>
              </div>
            </div>
            <div className="card-hot-deal-img">
              <div className="card-hot-deal-img-1">
                {Array.isArray(hotDealItem && hotDealItem.img) && hotDealItem.img.length > 0 && hotDealItem.img.map((item, index) => {
                  if (index === 0) {
                    return (
                      <img src={item} width="100%" height="100%" />
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    ))
  }

  const newArrival = listKho.filter((item) => item.sanphamduocId === 1);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  };

  // useEffect(() => {
  //   starTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // }, [])

  useEffect(() => {
    dispatch(actKhoQuanAO.getAllKhoRequest());
    dispatch(actGetAllSize.getAllSizeRequest());
    dispatch(actGetAllLoaiSanPham.getAllLoaiSanPhamRequest());
    dispatch(actGetAllSanPhamDuoc.getAllSanPhamDuocRequest());
  }, [])

  return (
    <>
      <div className="carousel-home" style={{ height: '1000px' }}>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://bizweb.dktcdn.net/100/331/067/themes/823156/assets/slider_1.jpg?1624817220708" class="d-block w-100" alt="photo" />
            </div>
            <div class="carousel-item">
              <img src="https://bizweb.dktcdn.net/100/331/067/themes/823156/assets/slider_2.jpg?1624817220708" class="d-block w-100" alt="photo" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12 mt-5">
              <Slider {...settings}>
                <div className="slick">
                  <div className="caption-title">
                    <a>T-SHIRT</a>
                  </div>
                  <div className="caption-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/4.png" width="100%" />
                  </div>
                </div>
                <div className="slick">
                  <div className="caption-title">
                    <a>HOODIE</a>
                  </div>
                  <div className="caption-img">
                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/collections/3.png" width="100%" />
                  </div>
                </div>
                <div className="slick">
                  <div className="caption-title">
                    <a>JACKET</a>
                  </div>
                  <div className="caption-img">
                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png" width="100%" />
                  </div>
                </div>
                <div className="slick">
                  <div className="caption-title">
                    <a>PATNS</a>
                  </div>
                  <div className="caption-img">
                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/collections/1.png" width="100%" />
                  </div>
                </div>
                <div className="slick">
                  <div className="caption-title">
                    <a>SƠ MI</a>
                  </div>
                  <div className="caption-img">
                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/collections/32132.png" width="100%" />
                  </div>
                </div>
                <div className="slick">
                  <div className="caption-title">
                    <a>ACCESSORIES</a>
                  </div>
                  <div className="caption-img">
                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/collections/2-40865d8d-17e2-47a7-876b-f50e430b2b70.png" width="100%" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="hot-deal">
          <div className="hot-deal-title-1">
            <img src="//bizweb.dktcdn.net/100/331/067/themes/823156/assets/i_title_flash.png?1624817220708" />  &ensp;
            <strong>HOT DEAL</strong> <br />
          </div>
          <div className="hot-deal-title-2">
            <p>Sản phẩm đang được khuyến mãi cực hot</p>
          </div>
          <div className="hot-deal-img-1">
            <div className="container ">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                  <div className="site-card-wrapper" >
                    {renderSanPhamHotDeal()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-arrival">
          <div className="new-arrival-title">
            <strong>NEW ARRIVAL</strong>
          </div>
          <div className="tab-new-arrival">
            <div className="container ">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                  <div className="tab-new-arrival-wrapper" >
                    <Tabs defaultActiveKey="1" centered>
                      <TabPane tab="T-SHIRT" key="1">
                        <NewArrivalTshirt
                          newArrival={newArrival}
                        />
                      </TabPane>
                      <TabPane tab="HOODIE" key="2">
                        <HoodieNewArrival />
                      </TabPane>
                      <TabPane tab="PHỤ KIỆN" key="3">
                        <PhuKienNewArrival />
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trangchu;