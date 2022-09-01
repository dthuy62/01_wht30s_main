import React from "react";
import iconFacebook from "../../assets/images/snsicon-02.png";
import iconShape from "../../assets/images/snsicon-01.png";
import iconBlog from "../../assets/images/snsicon-03.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="footer__title">what happened</p>
            <p className="footer__desc">
              [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
              영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
              이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
            </p>
          </div>
          <div className="col-lg-6 row">
            <div className="col-md-3">
              <p className="footer__title">about us</p>
              <p className="footer__desc">회사 소개 인재 채용 상시 할인 혜택</p>
            </div>
            <div className="col-md-3">
              <p className="footer__title">my order</p>
              <p className="footer__desc">
                내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙
                서류 발급
              </p>
            </div>
            <div className="col-md-3">
              <p className="footer__title">my account</p>
              <p className="footer__desc">
                회원 정보 수정 회원 등급 마일리지 현황 쿠폰
              </p>
            </div>
            <div className="col-md-3">
              <p className="footer__title">help</p>
              <p className="footer__desc">
                1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의
                소리
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="me-auto footer__contact">
            <p className="contact-info">
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </div>
          <div className="w-75 text-end footer__contact-icon">
            <img className="me-3 mb-sm-3" src={iconShape} alt="iconShape" />
            <img className="me-3 mb-sm-3" src={iconFacebook} alt="iconFacebook" />
            <img className="me-3 mb-sm-3" src={iconBlog} alt="iconBlog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
