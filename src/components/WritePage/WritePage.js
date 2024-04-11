import React, { useState } from 'react';
import './WritePage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function WritePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('price', price);
        formData.append('image', image);

        // 카테고리 배열을 쉼표로 구분된 문자열로 변환하여 FormData에 추가
        formData.append('categories', categories.join(','));

        try {
            const response = await axios.post('http://localhost:8080/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            // 성공 시 추가 작업 수행
            console.log(response.data);
            // 성공 시 추가 작업 수행
        } catch (error) {
            if (error.response) {
                // 서버에서 반환한 에러 메시지 출력
                console.error(error.response.data);
            } else if (error.request) {
                // 요청이 발생했으나 응답을 받지 못한 경우
                console.error('네트워크 에러가 발생했습니다.');
            } else {
                // 그 외의 에러
                console.error('에러가 발생했습니다.', error.message);
            }
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        if (e.target.checked) {
            setCategories([...categories, category]);
        } else {
            setCategories(categories.filter((c) => c !== category));
        }
    };

    return (
        <div className="main-container">
            <header className="main-header">
                <h1>노베이스</h1>
            </header>

            <main>
                <div className="write-page">
                    <form className="write-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">제목</label>
                            <input
                                type="text"
                                placeholder="제목을 입력해 주세요"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">내용</label>
                            <textarea
                                id="content"
                                placeholder="내용을 입력해 주세요"
                                name="content"
                                rows="5"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="form-control"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">가격</label>
                            <input
                                type="text"
                                placeholder="가격을 입력해 주세요"
                                id="price"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">이미지</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="form-control-file"
                            />
                        </div>
                        <div className="form-group">
                            <label>카테고리</label>
                            <div>
                                <input
                                    type="checkbox"
                                    id="textbook"
                                    name="category"
                                    value="textbook"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="textbook">교재</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="household"
                                    name="category"
                                    value="household"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="household">생활용품</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="gift"
                                    name="category"
                                    value="gift"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="gift">기프티콘</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="electronics"
                                    name="category"
                                    value="electronics"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="electronics">전자기기</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="clothing"
                                    name="category"
                                    value="clothing"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="clothing">의류</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="shoes"
                                    name="category"
                                    value="shoes"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="shoes">신발</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="others"
                                    name="category"
                                    value="others"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="others">기타</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            글쓰기
                        </button>
                    </form>
                </div>
            </main>

            <div>
                <nav className="navigation">
                    <ul>
                        <li>
                            <div className="icon-container">
                                <Link to="/home">
                                    <img src={"img/home.png"} alt="홈" />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container">
                                <Link to="/category">
                                    <img src={"img/category.png"} alt="카테고리" />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container">
                                <Link to="/message">
                                    <img src={"img/message.png"} alt="메세지" />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container">
                                <Link to="/user">
                                    <img src={"img/user.png"} alt="사용자 페이지" />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default WritePage;