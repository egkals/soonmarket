import './MainPage.css';
import { Link } from 'react-router-dom';

import React, { useState } from 'react'; // useState를 추가

const MainPage = () => {
    const [showCategory, setShowCategory] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };
    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    }

    // 카테고리 슬라이드 창이 왼쪽에서 오른쪽으로 나타나도록 스타일 설정
    const categoryStyle = {
        left: showCategory ? '0' : '-250px', // showCategory가 true면 왼쪽으로 0px만큼 이동하여 보이게 함, false면 왼쪽으로 -300px만큼 이동하여 숨김
    };

    return (
        <div className="main-container">
            <header className="main-header">
                <h1>앱 로고</h1>
                    {showSearchBar && (
                    <form className="search-form">
                    <div>
                        <input type="text" placeholder="검색어 입력" />
                    </div>
                    </form>
                    )}
            </header>

            <div className="sidebar" style={categoryStyle}>
                <ul>
                    <li><button>의류</button></li>
                    <li><button>신발</button></li>
                    <li><button>기프트카드</button></li>
                    <li><button>전자제품</button></li>
                    <li><button>책</button></li>
                    <li><button>생활용품</button></li>
                    <li><button>기타</button></li>
                    <li><button>기타1</button></li>
                </ul>
            </div>

            <main>
                <div className="product-list">
                    <div className="product-item">
                        {/* 중고 물품 1 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 2 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 3 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 4 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 4 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 4 */}
                    </div>
                </div>
            </main>

            <nav className="navigation">
                <ul>
                    <li>
                        <div className="icon-container">
                             <Link to="/home"><img src={"img/home.png"} alt="홈" /></Link>
                        </div>
                    </li>
                    <li>
                        <button className="icon-button" onClick={toggleCategory}>
                            <img src={"img/category.png"} alt="카테고리" /> 
                        </button>
                    </li>
                    <li>
                        <button className="icon-button" onClick={toggleSearchBar}>
                            <img src={"img/find.png"} alt="검색" />
                        </button>
                    </li>
                    <li>
                        <div className="icon-container">
                            <Link to="/message"><img src={"img/message.png"} alt="채팅" /></Link>
                        </div>
                    </li>
                    <li>
                        <div className="icon-container">
                            <Link to="/user"><img src={"img/user.png"} alt="사용자 페이지" /></Link>
                        </div>
                        <Link to ="/write" className="write-button">+</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainPage;
