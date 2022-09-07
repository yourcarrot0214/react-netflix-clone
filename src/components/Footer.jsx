import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="footer-link-container">
          <h1 className="footer-link-title">넷플릭스 대한민국</h1>
          <div className="footer-link-content">
            <a
              className="footer-link"
              href="https://help.netflix.com/ko/node/412"
            >
              넷플릭스 소개
            </a>
            <a className="footer-link" href="https://help.netflix.com/ko">
              고객 센터
            </a>
            <a className="footer-link" href="https://help.netflix.com/ko/">
              미디어 센터
            </a>
            <a className="footer-link" href="https://help.netflix.com/ko/">
              이용 약관
            </a>
          </div>
          <div className="footer-desc-container">
            <h2 className="footer-desc-rights">© Netflix Rights Reserved.</h2>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }

  .footer-link-container {
    width: 500px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .footer-link-title {
    color: gray;
    font-size: 17px;
  }

  .footer-link-content {
    display: flex;
    justify-content: space-bewteen;
    flex-wrap: wrap;
    margin-top: 35px;

    @media (max-width: 768px) {
      margin-top: 26px;
    }
  }

  .footer-link {
    color: gray;
    font-size: 14px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  .footer-desc-container {
    margin-top: 30px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .footer-desc-rights {
    color: white;
    font-size: 14px;
    text-align: center;
  }
`;
