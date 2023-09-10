function Footer() {
  return (
    <div>
        <div className="w-full h-[100px] border-b border-gray-300">
            <div className="overflow-hidden grid grid-cols-3 justify-items-center items-center h-full" >
                <div className="flex items-center">
                   <img className="w-[50px] h-[50px] mr-[10px]"
                   src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/6c502a2641457578b0d5f5153b53dd5d.png"/>
                    <div className="text-gray-500 leading-[20px]">
                        <p className="text-[15px]">7 ngày miễn phí trả hàng</p>
                        <p className="text-[15px]">Trả hàng miễn phí trong 7 ngày</p>
                    </div>
                </div>
                <div className="flex items-center">
                   <img className="w-[50px] h-[50px] mr-[10px]"
                   src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/511aca04cc3ba9234ab0e4fcf20768a2.png"/>
                    <div className="text-gray-500 leading-[20px]">
                        <p className="text-[15px]">Hàng chính hãng 100%</p>
                        <p className="text-[15px]">Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi</p>
                    </div>
                </div>
                <div className="flex items-center">
                   <img className="w-[50px] h-[50px] mr-[10px]"
                   src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/16ead7e0a68c3cff9f32910e4be08122.png"/>
                    <div className="text-gray-500 leading-[20px]">
                        <p className="text-[15px]">Miễn phí vận chuyển</p>
                        <p className="text-[15px]">Giao hàng miễn phí toàn quốc</p>
                    </div>
                </div>

            </div>

        </div>
      <div className="bg-[#F5F5F5] flex flex-col  w-full py-[50px] ">
        <div className="flex justify-center text-gray-500  text-xs">
          <p>CHÍNH SÁCH BẢO MẬT </p>
          <span className="mx-[15px]">|</span>
          <p>QUY CHẾ HOẠT ĐỘNG</p>
          <span className="mx-[15px]">|</span>

          <p>CHÍNH SÁCH VẬN CHUYỂN</p>
          <span className="mx-[15px]">|</span>

          <p>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</p>
        </div>

        <div className="flex justify-center mt-[20px]">
          <img
            className="w-[122px] h-[45px] mr-[30px] "
            src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png"
            alt=""
          />{" "}
          <img
            className="w-[122px] h-[45px]"
            src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png"
            alt=""
          />
        </div>
        <div className="flex justify-center mt-[5px] text-gray-500 text-xs">
          CÔNG TY TNHH
        </div>
        <div className="flex justify-center mt-[5px]  text-gray-500 text-xs">
          Địa Chỉ: Thôn Phú Xuân , Xã Tiên MỸ , Huyện TIên Phước, Tỉnh Quảng
          nam. Tổng Đài Hỗ Trợ: 19001221 - Email: cskh@hotro.shop.vn
        </div>
        <div className="flex justify-center mt-[5px]  text-gray-500 text-xs">
          Chịu Trách Nhiệm Quản Lý Nội Dung: Phan Thanh Lộc - Điện thoại liên
          hệ: 0353376671 (ext 4678)
        </div>
        <div className="flex justify-center mt-[5px]  text-gray-500 text-xs">
          Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
          lần đầu ngày 10/02/2015
        </div>
        <div className="flex justify-center mt-[5px]  text-gray-500 text-xs">
          © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
        </div>
      </div>
    </div>
  );
}

export default Footer;
