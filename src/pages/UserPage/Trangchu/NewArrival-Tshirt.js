import React from 'react';
import { renderTien } from "../../../notification/renderConvert";
import { EyeFilled, SettingFilled } from '@ant-design/icons';
import { Button } from 'antd';


function NewArrivalTshirt({ newArrival }) {

  const newArrivalTshirt = newArrival.filter((itemTshirt) => itemTshirt.loaisanphamId === 1);

  function renderTshirtAll() {
    newArrivalTshirt.filter((itemMaSanPham) => itemMaSanPham.maSanPham !== "YGS2-FTO-T").splice(0, 1)
    return newArrivalTshirt.filter((itemMaSanPham) => itemMaSanPham.maSanPham !== "YGS2-FTO-T").length > 0
      ? newArrivalTshirt.filter((itemMaSanPham) => itemMaSanPham.maSanPham !== "YGS2-FTO-T").map((item, index) => {
        return (
          <p>{item.tenSanPham}</p>
        )
      })
      : ""
  }

  function renderTshirtFirst() {
    return newArrivalTshirt.filter((itemMaSanPham) => itemMaSanPham.maSanPham === "YGS2-FTO-T").length > 0
      ? newArrivalTshirt.filter((itemMaSanPham) => itemMaSanPham.maSanPham === "YGS2-FTO-T").map((item, index) => {
        return (
          <>

            {/* // <p>{item.tenSanPham}</p> */}
            {/* {Array.isArray(item && item.img) && item.img.length > 0 && item.img.map((itemImg, index) => {
                if (index === 0) {
                  return (
                    <img src={itemImg} width="100%" height="100%" />
                  )
                }
              })} */}

            <div className="card-item-1">
              <div class="wrapper">
                <div class="card">
                  {Array.isArray(item && item.img) && item.img.length > 0 && item.img.map((itemImg, index) => {
                    if (index === 0) {
                      return (
                        <img src={itemImg} width="100%" height="100%" />
                      )
                    }
                  })}
                  <div class="info">
                    <Button>

                      <EyeFilled />
                    </Button>
                    <Button>

                      <SettingFilled />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="card-price-name">
                <a>{item.tenSanPham}</a> <br /><br />
                <strong>{renderTien(item.price)}</strong>
              </div>
            </div>

          </>
        )
      })
      : ""
    // return newArrivalTshirt.filter((itemId) => itemId.id === 2)
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-12">
          {renderTshirtFirst()}
        </div>
        <div className="col-lg-6 col-12">
          {renderTshirtAll()}
        </div>
      </div>
    </>
  );
}

export default NewArrivalTshirt;